/**
 * @module Abstract
 */

function serializer (object: Object) {
  try {
    return JSON.parse(JSON.stringify(object, jsonReplacer))
  } catch (err) {
    console.error(err)
  }
}

function jsonReplacer (key: any, value: any) {
  if (value && value.constructure) {
    return value.constructure
  }
  return value
}

export class Abstract {
  private _object: Object

  constructor (object = {}) {
    this._object = object
  }

  toJSON () {
    return serializer(this._object)
  }
}
