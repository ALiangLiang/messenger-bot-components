import { expect } from 'chai'

import { Audio } from '../../../src'

describe('Audio', function () {
  it('should work', function () {
    const json = new Audio('https://audio.com').toJSON()

    expect(json).to.eql({
      attachment: {
        type: 'audio',
        payload: { url: 'https://audio.com' }
      }
    })
  })
})
