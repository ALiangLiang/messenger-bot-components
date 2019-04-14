<!-- markdownlint-disable MD033 MD041 -->
<h1 align="center">
  Messenger Bot Components
</h1>

![npm type definitions](https://img.shields.io/npm/types/typescript.svg)
[![Build Status](https://travis-ci.org/ALiangLiang/messenger-bot-components.svg?branch=master)](https://travis-ci.org/ALiangLiang/messenger-bot-components)

Component kit of Messenger platform. Friendly for developers and help you validate
structure of bot message. This project is write by TypeScript, so you can use it
with [**Snippets**](https://code.visualstudio.com/docs/languages/typescript#_snippets).

## Example

```js
const body = {
  recipient: {
    id: 'USER_ID'
  },
  message: new TemplateGeneric([
    new TemplateGeneric.Element('Generic template Title', {
      imageUrl: 'A image',
      subtitle: 'It\s useful!!',
      defaultAction: new TemplateGeneric.Element.DefaultAction(
        'https://webview',
        {
          webviewHeightRatio: TemplateGeneric.Element.DefaultAction.WebviewHeightRatio.COMPACT,
          messengerExtensions: true,
          fallbackUrl: 'https://website-not-support-messenger-extensions'
        }
      ),
      buttons: [
        new ButtonUrl('Report Issue', 'https://github.com/ALiangLiang/messenger-bot-components/issues'),
        new ButtonPostback('Start Chatting', 'DEVELOPER_DEFINED_PAYLOAD')
      ]
    })
  ])
}

// Directly send to Messenger and client.
SendToMessenger(body)
```

## Feature

### Friendly codes

Sometimes you are tired of complicated codes looks like

#### original codes

```js
const body = {
  recipient: {
    id: 'USER_ID'
  },
  message: {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'generic',
        elements: [
          {
            title: 'Welcome to Peter\'s Hats',
            image_url: 'https://petersfancybrownhats.com/company_image.png',
            subtitle: 'We\'ve got the right hat for everyone.',
            default_action: {
              type: 'web_url',
              url: 'https://peterssendreceiveapp.ngrok.io/view?item=103',
              messenger_extensions: true,
              webview_height_ratio: 'tall',
              fallback_url: 'https://peterssendreceiveapp.ngrok.io/'
            },
            buttons: [
              {
                type: 'web_url',
                url: 'https://petersfancybrownhats.com',
                title: 'View Website'
              }, {
                type: 'postback',
                title: 'Start Chatting',
                payload: 'DEVELOPER_DEFINED_PAYLOAD'
              }
            ]
          }
        ]
      }
    }
  }
}
```

OMG!! It's sooooooo ugly. But now, you can write it in another way.

#### use this module

```js
import { TemplateGeneric, ButtonUrl, ButtonPostback } from 'messenger-bot-components'

const body = {
  recipient: {
    id: 'USER_ID'
  },
  message: new TemplateGeneric([
    TemplateGeneric.Element('Welcome to Peter\'s Hats', {
      imageUrl: 'https://petersfancybrownhats.com/company_image.png',
      subtitle: 'We\'ve got the right hat for everyone.',
      defaultAction: new TemplateGeneric.Element.DefaultAction(
        'https://webview',
        {
          webviewHeightRatio: TemplateGeneric.Element.DefaultAction.WebviewHeightRatio.COMPACT,
          messengerExtensions: true,
          fallbackUrl: 'https://website-not-support-messenger-extensions'
        }
      ),
      buttons: [
        new ButtonUrl('View Website', 'https://petersfancybrownhats.com'),
        new ButtonPostback('Start Chatting', 'DEVELOPER_DEFINED_PAYLOAD')
      ]
    })
  ]).toJSON()
}
```

## Usage

`npm install messenger-bot-components --save`

```js
import { Text } from 'messenger-bot-components'

const body = {
  recipient: {
    id: 'USER_ID'
  },
  message: new Text('some words')
};
// And then you can pass this body to user.
```

## Notes

All components follow a rule. The required parameters are all placed in foward
arguments. Other optional parameters setting in last argument.  
For example:

```js
// The first two arguments are required.
// Last argument with object is used to setting optional parameters.
new ButtonUrl(
  'View Website', /* required */
  'https://peterssendreceiveapp.ngrok.io/view?item=103', /* required */
  {
    messengerExtensions: true,  /* optional */
    webviewHeightRatio: 'tall', /* optional */
    fallbackUrl: 'https://peterssendreceiveapp.ngrok.io/' /* optional */
  }
);
```

## Contributing

Messenger Platform API is still on dev. So we need update the module usually.
If you like this package, welcome to help me maintain the tool. :)

## TODO

- [ ] test script
- [ ] more validate rule on components structure
- [ ] update more components
- [ ] a cute logo
- [ ] perfect english README
- [ ] schedule ci

## License

MIT