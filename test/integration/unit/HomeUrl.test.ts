import { expect } from 'chai'

import { HomeUrl } from '../../../src'

describe('HomeUrl', function () {
  it('should work', function () {
    const json = (new HomeUrl('https://foo.bar', true, {
      webviewShareButton: HomeUrl.WebviewShareButton.SHOW
    })).toJSON()

    expect(json).to.eql({
      home_url: {
        url: 'https://foo.bar',
        webview_height_ratio: 'tall',
        webview_share_button: 'show',
        in_test: true
      }
    })
  })
})
