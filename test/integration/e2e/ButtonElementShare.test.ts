import { send } from '../../fixtures/api'

import { ButtonElementShare, TemplateGeneric } from '../../../src'

describe('TemplateButton', function () {
  it('should work', function () {
    const json = new TemplateGeneric([
      new TemplateGeneric.Element('foo', {
        subtitle: 'bar',
        buttons: [
          new ButtonElementShare({
            shareContents: new TemplateGeneric([
              new TemplateGeneric.Element('Shared template', {
                subtitle: 'Shared template title'
              })
            ])
          })
        ]
      })
    ])

    return send(json)
  })
})
