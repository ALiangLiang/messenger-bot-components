<!-- markdownlint-disable MD033 MD041 -->
<h1 align="center">
  Messenger Bot Components
</h1>

[![npm](https://img.shields.io/npm/v/messenger-bot-components.svg)](https://www.npmjs.com/package/messenger-bot-components)
[![Build Status](https://travis-ci.org/ALiangLiang/messenger-bot-components.svg?branch=master)](https://travis-ci.org/ALiangLiang/messenger-bot-components)
[![Coverage Status](https://coveralls.io/repos/github/ALiangLiang/messenger-bot-components/badge.svg?branch=master)](https://coveralls.io/github/ALiangLiang/messenger-bot-components?branch=master)
![npm type definitions](https://img.shields.io/npm/types/typescript.svg)
[![GitHub](https://img.shields.io/github/license/ALiangLiang/messenger-bot-components.svg)](https://github.com/ALiangLiang/messenger-bot-components/blob/master/LICENSE)

Component kit of Messenger platform. Friendly for developers and help you validate
structure of bot message. This project is write by TypeScript, so you can use it
with [**Snippets**](https://code.visualstudio.com/docs/languages/typescript#_snippets).

## Table of Contents

- [Usage](#Usage)
- [Features](#Features)
- [Notes](#Notes)
- [Contributing](#Contributing)
- [TODO](#TODO)

## Usage

```sh
# Install this dependency first
npm install messenger-bot-components --save
```

```js
// index.js
import { TemplateGeneric, ButtonUrl, ButtonPostback } from 'messenger-bot-components'

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

console.dir(JSON.stringify(JSON.parse(body)))
// Output the schema that you can send to Messenger

// Directly send to Messenger and client.
SendToMessenger(body)
```

## Features

- Friendly code
- Snippets (If your IDE support it. e.g. [VS Code](https://code.visualstudio.com/docs/languages/typescript#_snippets))
- Type and parameter checking and restrictions (If you write with TypeScript)

## Notes

All components follow a rule. The required parameters are all placed in foward
arguments. Other optional parameters setting in last argument.  
For example:

```js
// In url button, the first two arguments are required.
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

## License

MIT