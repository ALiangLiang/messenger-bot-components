import { send } from '../../fixtures/api'

import { TemplateGeneric } from '../../../src'

describe('TemplateGeneric', function () {
  it('should work', function () {
    let json = (new TemplateGeneric([
      new TemplateGeneric.Element('foo', {
        imageUrl: 'https://dummyimage.com/600x400/000/fff',
        subtitle: 'asd',
        defaultAction: new TemplateGeneric.Element.DefaultAction('https://foo.bar', {
          webviewHeightRatio: TemplateGeneric.Element.DefaultAction.WebviewHeightRatio.COMPACT,
          messengerExtensions: true,
          fallbackUrl: 'https://website-not-support-messenger-extensions.com'
        })
      })
    ]))

    return send(json)
  })
})
