import { expect } from 'chai'

import { ButtonPostback } from '../../../src'

describe('ButtonPostback', function () {
  it('should work', function () {
    const json = (new ButtonPostback('foo', 'bar')).toJSON()

    expect(json).to.eql({
      type: 'postback',
      title: 'foo',
      payload: 'bar'
    })
  })
})
