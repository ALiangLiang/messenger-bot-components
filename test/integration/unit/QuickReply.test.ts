import { expect } from 'chai'

import { QuickReply } from '../../../src'

describe('QuickReply', function () {
  it('should work', function () {
    const json = (new QuickReply('foo', [
      new QuickReply.Item(QuickReply.Item.ContentType.TEXT, {
        title: 'foo1',
        payload: 'bar1',
        imageUrl: 'https://dummyimage.com/600x400/000/fff'
      }),
      new QuickReply.Item(QuickReply.Item.ContentType.LOCATION, {
        title: 'foo2',
        payload: 'bar2',
        imageUrl: 'https://dummyimage.com/600x400/000/fff'
      }),
      new QuickReply.Item(QuickReply.Item.ContentType.USER_EMAIL, {
        title: 'foo3',
        payload: 'bar3',
        imageUrl: 'https://dummyimage.com/600x400/000/fff'
      }),
      new QuickReply.Item(QuickReply.Item.ContentType.USER_PHONE_NUMBER, {
        title: 'foo4',
        payload: 'bar4',
        imageUrl: 'https://dummyimage.com/600x400/000/fff'
      })
    ])).toJSON()

    expect(json).to.eql({
      text: 'foo',
      quick_replies: [{
        title: 'foo1',
        content_type: 'text',
        payload: 'bar1',
        image_url: 'https://dummyimage.com/600x400/000/fff'
      }, {
        title: 'foo2',
        content_type: 'location',
        payload: 'bar2',
        image_url: 'https://dummyimage.com/600x400/000/fff'
      }, {
        title: 'foo3',
        content_type: 'user_email',
        payload: 'bar3',
        image_url: 'https://dummyimage.com/600x400/000/fff'
      }, {
        title: 'foo4',
        content_type: 'user_phone_number',
        payload: 'bar4',
        image_url: 'https://dummyimage.com/600x400/000/fff'
      }]
    })
  })
})
