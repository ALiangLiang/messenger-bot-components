import { Abstract } from './Abstract'

import { ButtonUrl } from './Button/Url'
import { ButtonPostback } from './Button/Postback'
import { ButtonNested } from './Button/Nested'

interface PersistentMenuLocaleOption {
  composerInputDisabled?: Boolean
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/persistent-menu#properties}
 */
export class PersistentMenuLocale extends Abstract {
  constructor (locale: String, callToActions: ButtonUrl[] | ButtonPostback[] | ButtonNested[], option: PersistentMenuLocaleOption = {}) {
    const constructure = {
      locale: locale,
      composer_input_disabled: option.composerInputDisabled,
      call_to_actions: callToActions
    }

    super(constructure)
  }
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/persistent-menu}
 */
export class PersistentMenu extends Abstract {
  constructor (persistentMenuLocales: PersistentMenuLocale[]) {
    const constructure = { persistent_menu: persistentMenuLocales }

    super(constructure)
  }

  static get Locale () {
    return PersistentMenuLocale
  }

  get Locale () {
    return PersistentMenuLocale
  }
}
