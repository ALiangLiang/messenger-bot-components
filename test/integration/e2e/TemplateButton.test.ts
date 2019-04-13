import { send } from '../../fixtures/api'

import { TemplateButton, ButtonUrl, ButtonPostback } from '../../../src'

describe('TemplateButton', function () {
  it('should work', function () {
    const json = new TemplateButton('foo', [
      new ButtonUrl('bar', 'https://test.top'),
      new ButtonPostback('bar', 'PAYLOAD')
    ])

    return send(json)
  })
})
