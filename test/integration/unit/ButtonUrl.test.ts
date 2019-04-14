import { expect } from 'chai'

import { ButtonUrl } from '../../../src'

describe('ButtonUrl', function () {
  it('should work', function () {
    const json = (new ButtonUrl('link', 'https://foo.bar', {
      webviewHeightRatio: ButtonUrl.WebviewHeightRatio.COMPACT,
      messengerExtensions: true,
      fallbackUrl: 'https://website-not-support-messenger-extensions.com'
    })).toJSON()

    expect(json).to.eql({
      type: 'web_url',
      title: 'link',
      url: 'https://foo.bar',
      webview_height_ratio: 'compact',
      messenger_extensions: true,
      fallback_url: 'https://website-not-support-messenger-extensions.com'
    })
  })
})
