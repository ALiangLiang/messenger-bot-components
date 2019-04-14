import { expect } from 'chai'

import { TemplateList, ButtonUrl, ButtonPostback } from '../../../src'

describe('TemplateList', function () {
  it('should work', function () {
    const json = (new TemplateList([
      new TemplateList.Element('foo', {
        imageUrl: 'https://dummyimage.com/600x400/000/fff',
        subtitle: 'bar',
        buttons: [
          new ButtonUrl('title', 'https://foo.bar'),
          new ButtonPostback('title2', 'payload')
        ]
      })
    ])).toJSON()

    expect(json).to.eql({
      attachment: {
        type: 'template',
        payload: {
          template_type: 'list',
          elements: [{
            title: 'foo',
            image_url: 'https://dummyimage.com/600x400/000/fff',
            subtitle: 'bar',
            buttons: [{
              type: 'web_url',
              title: 'title',
              url: 'https://foo.bar'
            }, {
              type: 'postback',
              title: 'title2',
              payload: 'payload'
            }]
          }]
        }
      }
    })
  })
})
