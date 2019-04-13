import { set } from '../../fixtures/api'

import { GetStarted } from '../../../src'

describe('GetStarted', function () {
  it('should work', function () {
    const json = new GetStarted('foo')

    return set(json)
  })
})
