import { expect } from 'chai'

import { Greeting } from '../../../src'

describe('Greeting', function () {
  it('should work', function () {
    const json = (new Greeting([
      new Greeting.Item('Welcome', 'default'),
      new Greeting.Item('歡迎光臨', 'zh_TW')
    ])).toJSON()

    expect(json).to.eql({
      greeting: [{
        text: 'Welcome',
        locale: 'default'
      }, {
        text: '歡迎光臨',
        locale: 'zh_TW'
      }]
    })
  })
})
