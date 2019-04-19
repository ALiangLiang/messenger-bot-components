/**
 * @module TargetAudience
 */
import { Abstract } from './Abstract'

export enum AudienceType {
  ALL = 'all',
  CUSTOM = 'custom',
  NONE = 'none'
}

export interface Countries {
  blacklist: String[]
  whitelist: String[]
}

export interface TargetAudienceOption {
  countries?: Countries
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/get-started-button}
 */
export class TargetAudience extends Abstract {
  constructor (audienceType: AudienceType, option: TargetAudienceOption = {}) {
    const constructure = {
      target_audience: {
        audience_type: audienceType,
        countries: option.countries
      }
    }

    super(constructure)
  }

  static get AudienceType () {
    return AudienceType
  }

  get AudienceType () {
    return AudienceType
  }
}
