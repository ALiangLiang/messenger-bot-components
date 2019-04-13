import { send } from '../../fixtures/api'

import { Text } from '../../../src'

describe('Text', function () {
  it('should work', function () {
    let json = new Text('foo')
    return send(json)
  })
})
