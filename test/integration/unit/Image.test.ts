import { expect } from 'chai'

import { Image } from '../../../src'

describe('Image', function () {
  it('should work', function () {
    const json = new Image('https://image.com').toJSON()

    expect(json).to.eql({
      attachment: {
        type: 'image',
        payload: { url: 'https://image.com' }
      }
    })
  })
})
