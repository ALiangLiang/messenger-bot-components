import Abstract from '../Abstract'

interface ButtonUrlOption {
  webviewHeightRatio?: String
  messengerExtensions?: String
  fallbackUrl?: String
}

export default class ButtonUrl extends Abstract {
  constructor (title: String, url: String, option: ButtonUrlOption) {
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
}
