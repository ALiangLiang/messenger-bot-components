'use strict'

/**
 * Shameless copy from
 * https://raw.githubusercontent.com/sequelize/sequelize/258d8aa0196434e096d4654c567284e5eb3d0011/lib/utils/classToInvokable.js
 */

/**
 * Wraps a constructor to not need the `new` keyword using a proxy.
 * Only used for data types.
 *
 * @param {Function} Class The class instance to wrap as invocable.
 * @returns {Proxy} Wrapped class instance.
 * @private
 */
export default function classToInvokable (Class: any) {
  return new Proxy(Class, {
    apply (Target, _thisArg, args) {
      return new Target(...args)
    },

    construct (Target, args) {
      return new Target(...args)
    },

    get (target, p) {
      return target[p]
    }
  })
}
