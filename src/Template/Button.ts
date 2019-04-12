import Abstract from '../Abstract'

import ButtonUrl from '../Button/Url'
import ButtonPostback from '../Button/Postback'
import ButtonPhoneNumber from '../Button/PhoneNumber'
import ButtonElementShare from '../Button/ElementShare'
import ButtonAccountLink from '../Button/AccountLink'
import ButtonAccountUnlink from '../Button/AccountUnlink'

export default class TemplateButton extends Abstract {
  constructor (title: String, buttons: ButtonUrl[] | ButtonPostback[] | ButtonPhoneNumber[] | ButtonElementShare[] | ButtonAccountLink[] | ButtonAccountUnlink[]) {
    const constructure = {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: title,
          buttons: buttons
        }
      }
    }

    super(constructure)
  }
}
