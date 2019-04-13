import { expect } from 'chai'

import { GetStarted } from '../../../src'

describe('GetStarted', function () {
  it('should work', function () {
    const json = (new GetStarted('foo')).toJSON()

    expect(json).to.eql({ get_started: { payload: 'foo' } })
  })
})
