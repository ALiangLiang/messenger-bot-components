import { expect } from 'chai'

import { File } from '../../../src'

describe('File', function () {
  it('should work', function () {
    const json = new File('https://file.com').toJSON()

    expect(json).to.eql({
      attachment: {
        type: 'file',
        payload: { url: 'https://file.com' }
      }
    })
  })
})
