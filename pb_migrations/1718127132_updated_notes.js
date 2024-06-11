/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b198q9254syc90")

  // remove
  collection.schema.removeField("n7smrz9v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bciey7ck",
    "name": "content",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b198q9254syc90")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n7smrz9v",
    "name": "content",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("bciey7ck")

  return dao.saveCollection(collection)
})
