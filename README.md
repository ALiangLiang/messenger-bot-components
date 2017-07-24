<h1 align="center">
  messenger-bot-components
</h1>
Component kit of Messenger platform. Friendly for developers and help you validate structure of bot message.

## Feature

#### Friendly codes

Sometimes you are tired of complicated codes looks like
##### original codes
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
OMG!! It's sooooooo ugly. But now, you can write it for another way.
##### use this module
```js
const Components = require('messenger-bot-components');
const cp = Components();

const body = {
  recipient: {
    id: 'USER_ID'
  },
  message: cp.template.generic([
    cp.templateElement.generic('Welcome to Peter\'s Hats', {
      imageUrl: 'https://petersfancybrownhats.com/company_image.png',
      subtitle: 'We\'ve got the right hat for everyone.',
      defaultAction: cp.button.url('View Website', 'https://peterssendreceiveapp.ngrok.io/view?item=103', {
        messenger_extensions: true,
        webview_height_ratio: 'tall',
        fallback_url: 'https://peterssendreceiveapp.ngrok.io/'
      }),
      buttons: [
        cp.button.url('View Website', 'https://petersfancybrownhats.com'),
        cp.button.postback('Start Chatting', 'DEVELOPER_DEFINED_PAYLOAD')
      ]
    })
  ]).toJSON()
}
```

#### Validate structure

```js
cp.text('x'.repeat(630));
// correct.

cp.text('x'.repeat(9487));
// error. Longer than 640.
```

## Usage

`npm install messenger-bot-components --save`

```js
const Components = require('messenger-bot-components');
const cp = Components();

const body = {
  recipient: {
    id: 'USER_ID'
  },
  message: cp.text('some words').toJSON()
};
// And then you can pass this body to user.
```

## Notes

All components follow a rule. The required parameters are all placed in foward arguments. Other optional parameters setting in last argument.  
For example:
```js
// The first two arguments are required.
// Last argument with object is used to setting optional parameters.
cp.button.url(
  'View Website', /* required */
  'https://peterssendreceiveapp.ngrok.io/view?item=103', /* required */ 
  {
    messenger_extensions: true,  /* optional */
    webview_height_ratio: 'tall', /* optional */
    fallback_url: 'https://peterssendreceiveapp.ngrok.io/' /* optional */
  }
);
```

## Contributing

Messenger Platform API is still on dev. So we need update the module usually. If you like this package, welcome to help me maintain the tool. :)

## TODO

- [ ] test script
- [ ] update more components
- [ ] perfect english README

## Conduct rule

- tab size: 2 spaces

## License

MIT