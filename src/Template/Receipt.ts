/**
 * @module TemplateReceipt
 */
import { Abstract } from '../Abstract'

export interface TemplateElementReceiptOption {
  subtitle?: String
  quantity?: Number
  currency?: String
  imageUrl?: String
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/template/receipt#elements}
 */
export class TemplateElementReceipt extends Abstract {
  constructor (title: String, price: Number, option: TemplateElementReceiptOption) {
    const constructure = {
      title,
      price,
      subtitle: option.subtitle,
      quantity: option.quantity,
      currency: option.currency,
      image_url: option.imageUrl
    }

    super(constructure)
  }
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/template/receipt#address}
 */
export interface Address {
  street1: String
  street2?: String
  city: String
  postalCode: String
  state: String
  country: String
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/template/receipt#summary}
 */
export interface Summary {
  subtotal?: String
  shippingCost?: Number
  totalTax?: Number
  totalCost: Number
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/template/receipt#adjustment}
 */
export interface Adjustments {
  name: String
  amount: Number
}

export interface TemplateReceiptOption {
  sharable?: Boolean
  timestamp?: String
  elements?: TemplateElementReceipt[]
  address?: Address
  adjustments?: Adjustments[]
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/template/receipt}
 */
export class TemplateReceipt extends Abstract {
  constructor (
    recipientName: String,
    orderNumber: String,
    currency: String,
    paymentMethod: String,
    summary: Summary,
    option: TemplateReceiptOption = {}) {
    const constructure = {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'receipt',
          recipient_name: recipientName,
          order_number: orderNumber,
          currency: currency,
          payment_method: paymentMethod,
          summary: summary,
          sharable: option.sharable,
          timestamp: option.timestamp,
          elements: option.elements,
          address: option.address,
          adjustments: option.adjustments
        }
      }
    }

    super(constructure)
  }

  static get Element () {
    return TemplateElementReceipt
  }

  get Element () {
    return TemplateElementReceipt
  }
}
