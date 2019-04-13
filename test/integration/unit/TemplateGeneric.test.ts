import { expect } from 'chai'

import { TemplateGeneric } from '../../../src'

describe('TemplateGeneric', function () {
  it('should work', function () {
    const json = (new TemplateGeneric([
      new TemplateGeneric.Element('foo', {
        imageUrl: 'https://dummyimage.com/600x400/000/fff',
        subtitle: 'asd',
        defaultAction: new TemplateGeneric.Element.DefaultAction('https://webview.com', {
          webviewHeightRatio: TemplateGeneric.Element.DefaultAction.WebviewHeightRatio.COMPACT,
          messengerExtensions: true,
          fallbackUrl: 'https://website-not-support-messenger-extensions.com'
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
              url: 'https://webview.com',
              webview_height_ratio: 'compact',
              messenger_extensions: true,
              fallback_url: 'https://website-not-support-messenger-extensions.com'
            },
            title: 'foo',
            image_url: 'https://dummyimage.com/600x400/000/fff',
            subtitle: 'asd'
          }]
        }
      }
    })
  })
})
