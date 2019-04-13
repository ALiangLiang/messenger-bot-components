import { expect } from 'chai'

import { Text } from '../../../src'

describe('Text', function () {
  it('should work', function () {
    let json = new Text('foo').toJSON()
    expect(json.text).to.eql('foo')
  })
})
