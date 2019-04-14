import { Abstract } from '../Abstract'

export enum WebviewHeightRatio {
  COMPACT = 'compact',
  TALL = 'tall',
  FULL = 'full'
}

export interface ButtonUrlOption {
  webviewHeightRatio?: WebviewHeightRatio | 'compact' | 'tall' | 'full'
  messengerExtensions?: Boolean
  fallbackUrl?: String
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/buttons/url}
 */
export class ButtonUrl extends Abstract {
  constructor (title: String | null, url: String, option: ButtonUrlOption = {}) {
    const constructure = {
      type: 'web_url',
      title: title,
      url: url,
      webview_height_ratio: option.webviewHeightRatio,
      messenger_extensions: option.messengerExtensions,
      fallback_url: option.fallbackUrl
    }

    super(constructure)
  }

  static get WebviewHeightRatio () {
    return WebviewHeightRatio
  }

  get WebviewHeightRatio () {
    return WebviewHeightRatio
  }
}
