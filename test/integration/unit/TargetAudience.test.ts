import { expect } from 'chai'

import { TargetAudience } from '../../../src'

describe('TargetAudience', function () {
  it('should work', function () {
    const json = (new TargetAudience(TargetAudience.AudienceType.CUSTOM, {
      countries: {
        blacklist: ['CN'],
        whitelist: ['TW', 'US', 'JP']
      }
    })).toJSON()

    expect(json).to.eql({
      target_audience: {
        audience_type: 'custom',
        countries: {
          blacklist: ['CN'],
          whitelist: ['TW', 'US', 'JP']
        }
      }
    })
  })
})
