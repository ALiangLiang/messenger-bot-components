import { expect } from 'chai'

import { TemplateReceipt, ButtonUrl, ButtonPostback } from '../../../src'

describe('TemplateReceipt', function () {
  it('should work', function () {
    const json = (new TemplateReceipt('foo', '87', 'TWD', 'CASH', {
      subtotal: '94',
      shippingCost: 87,
      totalTax: 3,
      totalCost: 184
    }, {
      sharable: true,
      timestamp: '1555232852000',
      elements: [
        new TemplateReceipt.Element('tea', {
          label: 'bag',
          amount: 1
        }, {
          subtitle: 'Taiwan black tea',
          quantity: 1,
          currency: 'TWD',
          imageUrl: 'https://dummyimage.com/600x400/000/fff'
        }),
        new TemplateReceipt.Element('coke', {}, {
          subtitle: 'coke cola',
          quantity: 2,
          currency: 'TWD',
          imageUrl: 'https://dummyimage.com/600x400/000/fff'
        })
      ],
      address: {
        street1: 'foo',
        street2: 'bar',
        city: 'Taipei',
        postalCode: '100',
        state: 'Taiwan',
        country: 'Taiwan'
      },
      adjustments: [{
        name: 'discount',
        amount: -10
      }]
    })).toJSON()

    expect(json).to.eql({
      attachment: {
        type: 'template',
        payload: {
          template_type: 'receipt',
          recipient_name: 'foo',
          order_number: '87',
          currency: 'TWD',
          payment_method: 'CASH',
          summary: {
            subtotal: '94',
            shippingCost: 87,
            totalTax: 3,
            totalCost: 184
          },
          sharable: true,
          timestamp: '1555232852000',
          elements: [{
            title: 'tea',
            price: {
              label: 'bag',
              amount: 1
            },
            subtitle: 'Taiwan black tea',
            quantity: 1,
            currency: 'TWD',
            image_url: 'https://dummyimage.com/600x400/000/fff'
          }, {
            title: 'coke',
            price: {},
            subtitle: 'coke cola',
            quantity: 2,
            currency: 'TWD',
            image_url: 'https://dummyimage.com/600x400/000/fff'
          }],
          address: {
            street1: 'foo',
            street2: 'bar',
            city: 'Taipei',
            postalCode: '100',
            state: 'Taiwan',
            country: 'Taiwan'
          },
          adjustments: [{
            name: 'discount',
            amount: -10
          }]
        }
      }
    })
  })
})
