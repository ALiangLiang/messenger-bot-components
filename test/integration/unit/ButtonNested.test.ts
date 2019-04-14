import { expect } from 'chai'

import { ButtonNested, ButtonUrl } from '../../../src'

describe('ButtonNested', function () {
  it('should work', function () {
    const json = (new ButtonNested('next level', [
      new ButtonNested('goto level 3', [
        new ButtonUrl('foo2', 'https://foo.bar/index2')
      ])
    ])).toJSON()

    expect(json).to.eql({
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
    })
  })
})
