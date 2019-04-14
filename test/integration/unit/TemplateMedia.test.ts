import { expect } from 'chai'

import { TemplateMedia, ButtonUrl } from '../../../src'

describe('TemplateMedia', function () {
  it('should work', function () {
    const json = (new TemplateMedia([
      new TemplateMedia.Element({
        mediaType: TemplateMedia.Element.MediaType.IMAGE,
        url: 'https://foo.bar',
        buttons: [
          new ButtonUrl('foo', 'https://foo.bar/index')
        ]
      })
    ])).toJSON()

    expect(json).to.eql({
      attachment: {
        type: 'template',
        payload: {
          template_type: 'media',
          elements: [{
            media_type: 'image',
            url: 'https://foo.bar',
            buttons: [{
              type: 'web_url',
              title: 'foo',
              url: 'https://foo.bar/index'
            }]
          }]
        }
      }
    })
  })
})
