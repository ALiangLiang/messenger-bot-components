/**
 * @module HomeUrl
 */
import { Abstract } from './Abstract'

export enum WebviewShareButton {
  SHOW = 'show',
  HIDE = 'hide'
}

export interface HomeUrlOption {
  webviewShareButton?: WebviewShareButton | 'show' | 'hide'
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/get-started-button}
 */
export class HomeUrl extends Abstract {
  constructor (url: String, inTest: Boolean, option: HomeUrlOption = {}) {
    const constructure = {
      home_url: {
        url,
        webview_height_ratio: 'tall',
        webview_share_button: option.webviewShareButton,
        in_test: inTest
      }
    }

    super(constructure)
  }

  static get WebviewShareButton () {
    return WebviewShareButton
  }

  get WebviewShareButton () {
    return WebviewShareButton
  }
}
