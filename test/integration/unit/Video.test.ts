import { expect } from 'chai'

import { Video } from '../../../src'

describe('Video', function () {
  it('should work', function () {
    const json = new Video('https://video.com').toJSON()

    expect(json).to.eql({
      attachment: {
        type: 'video',
        payload: { url: 'https://video.com' }
      }
    })
  })
})
