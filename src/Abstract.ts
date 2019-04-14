/**
 * @module Abstract
 */

export class Abstract {
  private _object: Object

  constructor (object = {}) {
    this._object = object
  }

  toJSON () {
    return JSON.parse(JSON.stringify(this._object))
  }

  toString () {
    return JSON.stringify(this._object)
  }
}
