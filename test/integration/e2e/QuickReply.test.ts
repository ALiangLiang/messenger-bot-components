import { send } from '../../fixtures/api'

import { QuickReply } from '../../../src'

describe('QuickReply', function () {
  it('should work', function () {
    const json = new QuickReply('foo', [
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
    ])

    return send(json)
  })
})
