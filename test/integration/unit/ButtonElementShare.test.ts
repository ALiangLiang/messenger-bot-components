import { expect } from 'chai'

import { ButtonElementShare, TemplateGeneric } from '../../../src'

describe('ButtonElementShare', function () {
  it('should work', function () {
    const json = (new ButtonElementShare({
      shareContents: new TemplateGeneric([
        new TemplateGeneric.Element('Shared template', {
          subtitle: 'Shared template title'
        })
      ])
    })).toJSON()

    expect(json).to.eql({
      type: 'element_share',
      share_contents: {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'generic',
            elements: [{
              title: 'Shared template',
              subtitle: 'Shared template title'
            }]
          }
        }
      }
    })
  })
})
