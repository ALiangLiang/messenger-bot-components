import { expect } from 'chai'

import { Text } from '../../../src'

describe('toString', function () {
  it('should work', function () {
    const text = new Text('foo')
    const string = text.toString()
    const json = text.toJSON()

    expect(string).to.eql(JSON.stringify(json))
  })
})
