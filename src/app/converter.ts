import * as _ from 'lodash';

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


export function JsonToCollectorSchema(rawEntityJson: string, primaryEntityName: string, parentOfPrimaryEntityInfo: any, manualInfo: Map<string, string>): [any, any, any] {

  let jsonInput: any;

  try {
    jsonInput = JSON.parse(rawEntityJson);
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
        type: parentOfPrimaryEntityInfo.type
      },
      "children": new Array()
    }
  };

  let collectorResp = {
    Primary: {},
    Auxiliary: {}
  }

  let schemas: any[] = [];


  let entitiesToParse = [
    [primaryEntityName, jsonInput]
  ];

  // traverse entities and add children to list
  while (entitiesToParse.length > 0) {

    // grab an entity and remove from list
    let entity: any = entitiesToParse.shift();

    console.log("processing entity", entity[0]);
    console.log("entities left: ", entitiesToParse.length)

    let entityName = entity[0];
    let entityValue = entity[1];

    if (entityValue) {

      let subEntities = Object.entries(entityValue).filter((entry) => isAnEntity(entry[1]));

      let nonEntityProps = Object.entries(entityValue).filter((entry) => !isAnEntity(entry[1]));

      //add relationship entry if none exists
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
      relationships[entityName].children = subEntities.map((subEntity) => (
        {
          id: subEntity[0] + 'Id',
          name: subEntity[0],
          description: manualInfoLookup(`${entityName}.${subEntity[0]}.description`, manualInfo),
          type: subEntity[0]
        }));


      //add parent relationship for each child entity found
      subEntities
        .forEach((subEntity) => relationships[subEntity[0]] = {
          parent: {
            id: entityName + 'Id',
            name: entityName,
            description: manualInfoLookup(`${relationships[entityName].parent.name}.${entityName}.description`, manualInfo),
            type: entityName
          },
          children: new Array()
        })


      //generate the schema
      let res = createCollectorSchema(entityName, nonEntityProps, relationships[entityName], manualInfo);
      schemas.push(res[0]);

      //save items that need manual review
      manualInfo = res[1];

      // add children entities to be processed
      entitiesToParse = [...entitiesToParse, ...subEntities];

    }
  }


  return [schemas, relationships, manualInfo];
}

function createCollectorSchema(entityName: string, properties: any[], relationships: any, manualInfo: Map<string, string>): [any, Map<string, string>] {
  let schema = {
    "service": "Software",
    "provider": "Host",
    "type": entityName,

    "id": ID_EXTRACTION,

    "locationOverride": LOCATION_OVERRIDE,

    "properties": [
      ...properties.map((property) => {
        // convert to TitleCase to match Go Struct syntax
        property[0] = _.startCase(_.lowerCase(property[0]))

        return {
          "name": property[0],
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
    isAMap = false;
  }

  if (typeof firstItem !== "object") {
    isAMap = false;
  }
  if (!firstItem || !secondItem) {
    return false;
  }

  const propsIn1st = Object.keys(firstItem);
  const propsIn2nd = Object.keys(secondItem);

  propsIn1st.forEach((prop) => {
    if (!propsIn2nd.includes(prop)) {
      isAMap = false;
    }
  });
  return isAMap;
}

function isAnEntity(object: any) {
  return typeof object === "object" && object !== "array" && !isAMap(object);
}


function manualInfoLookup(key: string, manualInfo: Map<string, string>) {
  if (!manualInfo.has(key)) {
    manualInfo.set(key, MANUAL_REVIEW_NEEDED_PLACEHOLDER);
  }
  return manualInfo.get(key)
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
