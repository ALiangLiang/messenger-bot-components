import { expect } from 'chai'

import { PersistentMenu, ButtonUrl, ButtonPostback, ButtonNested } from '../../../src'

describe('PersistentMenu', function () {
  it('should work', function () {
    const json = (new PersistentMenu([
      new PersistentMenu.Locale('default', [
        new ButtonUrl('foo', 'https://foo.bar/index'),
        new ButtonPostback('foo', 'bar'),
        new ButtonNested('next level', [
          new ButtonNested('goto level 3', [
            new ButtonUrl('foo2', 'https://foo.bar/index2')
          ])
        ])
      ])
    ])).toJSON()

    expect(json).to.eql({
      persistent_menu: [{
        locale: 'default',
        call_to_actions: [{
          type: 'web_url',
          title: 'foo',
          url: 'https://foo.bar/index'
        }, {
          type: 'postback',
          title: 'foo',
          payload: 'bar'
        }, {
          type: 'nested',
          title: 'next level',
          call_to_actions: [{
            type: 'nested',
            title: 'goto level 3',
            call_to_actions: [{
              type: 'web_url',
              title: 'foo2',
              url: 'https://foo.bar/index2'
            }]
          }]
        }]
      }]
    })
  })
})
