import * as _ from 'lodash';
import * as NumToWords from 'number-to-words';

const parentOfPrimaryEntityInfo = {
  "targetEntity": {
    "name": "ComputeResourceId",
    "description": "ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>. Optional.",
    "type": "string"
  },
  "targetEntityId": {
    "idType": "Extract",
    "extractedInfo": {
      "name": "ComputeResourceId",
      "type": "string"
    }
  },
  "targetEntityType": "Instance",
  "targetEntityProvider": "AWS",
  "targetEntityService": "EC2"
}


export function JsonToCollectorSchema(rawEntityJson: string, primaryEntityName: string, parentOfPrimaryEntityInfo: any, manualInfo: Map<string, string>, nameChanges?: Map<string, string>): [any, any, any, any] {

  let jsonInput: any;

  try {
    if (typeof rawEntityJson == 'string') {
      jsonInput = JSON.parse(rawEntityJson);
    } else {
      jsonInput = rawEntityJson;
    }
  } catch (e) {
    throw "Failed to parse JSON";
  }

  // define outputs
  let relationships = {
    [primaryEntityName]: {
      "parent": {
        id: parentOfPrimaryEntityInfo?.name + 'Id',
        name: parentOfPrimaryEntityInfo?.name,
        description: parentOfPrimaryEntityInfo.description,
        type: parentOfPrimaryEntityInfo.name
      },
      "children": new Array()
    }
  };

  let collectorResp = {
    Primary: {},
    Auxiliary: {}
  }

  let schemas: any[] = [];
  let golangStructs: any[] = [];


  let entitiesToParse = [
    [primaryEntityName, jsonInput]
  ];

  while (entitiesToParse.length > 0) {
    console.log(`'${_.startCase("127.0.0.1").replace(/" "/gi, "")}'`)

    let entity: any = entitiesToParse.shift();

    let entityName = properNaming(entity[0], nameChanges);

    let entityValue = entity[1];

    console.log("entities left: ", entitiesToParse.length)
    console.log("processing entity", entityName);

    // skip to next loop if value is null
    if (entityValue === null || entityValue === undefined) {
      continue;
    }

    // split apart properties that are entities and ones that arent
    let subEntities = Object.entries(entityValue).filter((entry) => isAnEntity(entry[1]));
    let nonEntityProps = Object.entries(entityValue).filter((entry) => !isAnEntity(entry[1]) && !isAMap(entry[1]));
    let mapEntities = Object.entries(entityValue).filter((entry) => isAMap(entry[1]));

    // map entities should be just a parent entity and one instance of the mapped entity
    mapEntities = mapEntities.map(([name, value]: [any, any]) => {
      let firstMappedEntity = value[Object.keys(value)[0]];

      return [
        name,
        {
          [name + "Entry"]: firstMappedEntity
        }
      ];
    });

    // add relationship entry if none exists
    if (!relationships[entityName]) {
      relationships[entityName] = {
        parent: {
          id: entityName + 'Id',
          name: entityName,
          description: manualInfoLookup(`${relationships[entityName].parent.name}.${entityName}.description`, manualInfo),
          type: entityName
        },
        children: []
      }
    }

    // add all sub entities to children relationship entry. This doesnt include maps and properties that arent entities themselves.
    relationships[entityName].children = [...subEntities, ...mapEntities].map((subEntity) => {
      let subEntityName = properNaming(subEntity[0]);

      return {
        id: subEntityName + 'Id',
        name: subEntityName,
        description: manualInfoLookup(`${entityName}.${subEntity[0]}.description`, manualInfo),
        type: subEntityName
      }
    });


    // add parent relationship for each child entity found
    [...subEntities, ...mapEntities]
      .forEach((subEntity) => {
        let subEntityName = properNaming(subEntity[0])
        return relationships[subEntityName] = {
          parent: {
            id: entityName + 'Id',
            name: entityName,
            description: manualInfoLookup(`${relationships[entityName].parent.name}.${entityName}.description`, manualInfo),
            type: entityName
          },
          children: new Array()
        }
      })


    // generate the schema
    let res = createCollectorSchema(entityName, nonEntityProps, relationships[entityName], manualInfo);
    schemas.push(res[0]);

    // generate golang structs
    golangStructs.push(createGolangStruct(entityName, subEntities, nonEntityProps, mapEntities));

    // save items that need manual review
    manualInfo = res[1];

    // add children entities to be processed
    entitiesToParse = [
      ...entitiesToParse,
      ...subEntities,
      ...mapEntities
    ]

  }


  return [schemas, relationships, manualInfo, golangStructs];
}

function createGolangStruct(entityName: string, subEntities: any, nonEntityProps: any, mapEntities: any) {
  let structAsString =
    `type ${properNaming(entityName)} struct {\r\n`;

  subEntities.forEach((subEntity: any) => {
    structAsString = structAsString + `     ${properNaming(subEntity[0])} *${properNaming(subEntity[0])} \`json:"${properNaming(subEntity[0])},omitempty"\`\r\n`;
  });
  structAsString = structAsString + '\r\n';
  nonEntityProps.forEach((prop: any) => {
    structAsString = structAsString + `     ${properNaming(prop[0])} *string \`json:"${prop[0]},omitempty"\`\r\n`;
  })

  structAsString = structAsString + '}'
  return structAsString;
}

/**
 *
 * @param entityName Name of entity
 * @param properties Properties that are not other entities
 * @param relationships relationships of entity i.e. parent/children
 * @param manualInfo Map of info that needs manual review or has reveived it. call manualInfoLookup() to fetch unknown properties or set request review
 */
function createCollectorSchema(entityName: string, properties: any[], relationships: any, manualInfo: Map<string, string>): [any, Map<string, string>] {
  let schema = {
    "service": "Software",
    "provider": "Host",
    "type": properNaming(entityName),

    "id": ID_EXTRACTION,

    "locationOverride": LOCATION_OVERRIDE,

    "properties": [
      ...properties.map((property) => {
        return {
          "name": properNaming(property[0]),
          "description": manualInfoLookup(`${relationships.parent}.${property[0]}.description`, manualInfo),
          "type": typeof property[1]
        };
      })
    ],

    "relationships": [
      {
        "type": RelationshipType.Parent,
        "targetEntity": relationships.parent.id,
        "targetEntityId": {
          "idType": "Extract",
          "extractedInfo": {
            "name": relationships.parent.id,
            "type": "string"
          }
        },
        "targetEntityType": relationships.parent.type,
        "targetEntityProvider": "Host",
        "targetEntityService": "Software"
      },
      ...relationships.children.map((child: any) => {
        return ({
          "type": RelationshipType.Child,
          "targetEntity": {
            "name": child.type,
            "description": manualInfoLookup(`${relationships.parent.name}.${entityName}.${child.name}.description`, manualInfo),
            "type": "complex",
            "complexAttributes": {
              "schemaFile": `software/${child.type}.json`
            }
          },
          "targetEntityService": "Software",
          "targetEntityProvider": "Host",
          "targetEntityType": child.type
        })
      })
    ]
  };

  return [schema, manualInfo];
}


// in this simple function a map is an object whose properties are objects with identical sub-properties
function isAMap(object: any) {
  let isAMap = true;

  let keys = Object.keys(object);

  let firstItem = object[keys[0]];
  let secondItem = object[keys[1]];

  if (keys.length < 2) {
    return false;
  }

  if (typeof firstItem !== "object") {
    return false;
  }

  if (!firstItem || !secondItem) {
    return false;
  }

  if (typeof firstItem === "string") {
    return false;
  }

  const propsIn1st = Object.keys(firstItem);
  const propsIn2nd = Object.keys(secondItem);

  propsIn1st.forEach((prop) => {
    if (!propsIn2nd.includes(prop)) {
      isAMap = false;
      return;
    }
  });
  return isAMap;
}

function isAnEntity(object: any) {
  let keys = Object.keys(object);
  let firstItem = object[keys[0]];

  return !Array.isArray(object) && typeof object === "object" && !isAMap(object);
}

function manualInfoLookup(key: string, manualInfo: Map<string, string>) {
  if (!manualInfo.has(key)) {
    manualInfo.set(key, MANUAL_REVIEW_NEEDED_PLACEHOLDER);
  }
  return manualInfo.get(key)
}

function properNaming(name: string, nameChanges?: Map<string, string>): string {
  if (nameChanges?.has(name)) {
    return nameChanges.get(name)!;
  }
  name = _.startCase(name).replace(/\s/g, '');
  if (!isNaN(Number.parseInt(name))) {
    name = NumToWords.toWords(name);
  } else if (!isNaN(Number.parseInt(name[0]))) {
    name = NumToWords.toWords(name[0]) + name.substring(1, name.length);
  }
  return name;
}

export const MANUAL_REVIEW_NEEDED_PLACEHOLDER = "CONVERTER - INCOMPLETE";

export const LOCATION_OVERRIDE = {
  "locationType": "Extract",
  "extractedInfo": {
    "name": "Location",
    "type": "string"
  }
}

export const ID_EXTRACTION = {
  "idType": "Extract",
  "extractedInfo": {
    "name": "Id",
    "type": "string"
  }
}

export enum RelationshipType {
  Parent = "IsAssociatedWith",
  Child = "Contains"
}
