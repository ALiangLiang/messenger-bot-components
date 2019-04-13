import { expect } from 'chai'

import { TemplateGeneric } from '../../src'

describe('TemplateGeneric', function () {
  it('should work', function () {
    let json = (new TemplateGeneric([
      new TemplateGeneric.Element('foo', {
        imageUrl: 'https://bar.com/abc.jpg',
        subtitle: 'asd',
        defaultAction: new TemplateGeneric.Element.DefaultAction('https://webview', {
          webviewHeightRatio: TemplateGeneric.Element.DefaultAction.WebviewHeightRatio.COMPACT,
          messengerExtensions: true,
          fallbackUrl: 'https://website-not-support-messenger-extensions'
        })
      })
    ])).toJSON()

    expect(json).to.eql({
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [{
            default_action: {
              type: 'web_url',
              title: null,
              url: 'https://webview',
              webview_height_ratio: 'compact',
              messenger_extensions: true,
              fallback_url: 'https://website-not-support-messenger-extensions'
            },
            title: 'foo',
            image_url: 'https://bar.com/abc.jpg',
            subtitle: 'asd'
          }]
        }
      }
    })
  })
})
