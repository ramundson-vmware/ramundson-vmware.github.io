

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
  console.log(manualInfo)
  let jsonInput: any;
  try {
    jsonInput = JSON.parse(rawEntityJson);
  } catch (e) {
    throw "Failed to parse JSON";
  }
  // define outputs
  let relationships = {
    [primaryEntityName]: {
      "parent": parentOfPrimaryEntityInfo?.name,
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

    let entity: any = entitiesToParse.shift();

    console.log("processing entity", entity[0]);

    let entityName = entity[0];
    let entityValue = entity[1];
    if (entityValue) {

      let subEntities = Object.entries(entityValue).filter((entry) => isAnEntity(entry[1]));

      let nonEntityProps = Object.entries(entityValue).filter((entry) => !isAnEntity(entry[1]));
      console.log("sub entities", subEntities.map((sE) => sE[0]));
      console.log("non entities", nonEntityProps.map((sE) => sE[0]));

      //add children relationships
      if (!relationships[entityName]) {
        relationships[entityName] = {
          parent: null,
          children: []
        }
      }
      relationships[entityName].children = subEntities.map((subEntity) => subEntity[0]);


      //add parent relationship to each child
      subEntities
        .forEach((subEntity) => relationships[subEntity[0]] = { "parent": entityName, children: new Array() })


      //create schema
      let res = createCollectorSchema(entityName, nonEntityProps, relationships[entityName], manualInfo);
      schemas.push(res[0]);
      manualInfo = res[1];

      // add children entities to be processed
      entitiesToParse = [...entitiesToParse, ...subEntities];
      console.log("entities left: ", entitiesToParse.length)
    }
  }


  return [schemas, relationships, manualInfo];
}

function createCollectorSchema(entityName: string, properties: any[], relationships: any, manualInfo: Map<string, string>): [any, Map<string, string>] {
  let schema = {
    "id": {
      "idType": "Generate"
    },
    "provider": "Host",
    "service": "Software",
    "type": entityName,


    "locationOverride": {
      "locationType": "Extract",
      "extractedInfo": {
        "name": "Location",
        "type": "string"
      }
    },

    "properties": [
      ...properties.map((property) => {
        return {
          "name": property[0],
          "description": manualInfoLookup(`${relationships.parent} -> ${property[0]} description`, manualInfo),
          "type": typeof property[1]
        };

      })
    ],

    "relationships": [
      {
        "type": "IsAssociatedWith",
        "targetEntity": {
          "name": "OS",
          "description": "The ID of the operating system.",
          "type": "string"
        },
        "targetEntityId": {
          "idType": "Extract",
          "extractedInfo": {
            "name": "OSId",
            "type": "string"
          }
        },
        "targetEntityType": "OS",
        "targetEntityProvider": "Host",
        "targetEntityService": "Software"
      },
      ...relationships.children.map((child: any) => {
        return ({
          "type": "Contains",
          "targetEntity": {
            "name": child,
            "description": manualInfoLookup(`${relationships.parent} -> ${entityName} -> ${child} description`, manualInfo),
            "type": "complex",
            "complexAttributes": {
              "schemaFile": "software/swap.json"
            }
          },
          "targetEntityProvider": "Host",
          "targetEntityService": "Software",
          "targetEntityType": "Swap"
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


function needInput() {

}

function manualInfoLookup(key: string, manualInfo: Map<string, string>) {
  if (!manualInfo.has(key)) {
    manualInfo.set(key, "CONVERTER - INCOMPLETE");
  }
  return manualInfo.get(key)
}
