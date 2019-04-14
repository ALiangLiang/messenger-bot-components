/**
 * @module Abstract
 */

export class Abstract {
  private _object: Object

  constructor (object = {}) {
    this._object = object
  }

  toJSON () {
    try {
      return JSON.parse(JSON.stringify(this._object))
    } catch (err) {
      console.error(err)
    }
  }

  toString () {
    try {
      return JSON.stringify(this._object)
    } catch (err) {
      console.error(err)
    }
  }
}
