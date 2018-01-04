String/**
 * Module dependencies.
 * @private
 */
const
    Url = require('url'),
    Joi = require('joi'),
    Basic = require('./components/Basic')

/**
 * Expose `Components`.
 */

module.exports = function(option = {}) {
    Basic.strictMode = option.strict

    const components = {
        /**
         * Serialize get_started structure.
         *
         * @param {String} payload
         * @return {Object}
         * @api public
         */
        getStarted: (...argu) => new (require('./components/GetStarted'))(...argu),

        /**
         * Serialize greeting structure.
         *
         * @param {greetingItem[]} greeting items
         * @return {Object}
         * @api public
         */
        greeting: (...argu) => new (require('./components/Greeting'))(...argu),

        /**
         * Serialize greeting item structure.
         *
         * @param {String} text
         * @param {String} locale
         * @return {Object}
         * @api public
         */
        greetingItem: (...argu) => new (require('./components/GreetingItem'))(...argu),

        /**
         * Serialize quick reply structure.
         *
         * @param {String} text
         * @param {String} locale
         * @return {Object}
         * @api public
         */
        quickReply: (...argu) => new (require('./components/QuickReply'))(...argu),

        /**
         * Serialize quick reply item structure.
         *
         * @param {String} text
         * @param {String} locale
         * @return {Object}
         * @api public
         */
        quickReplyItem: (...argu) => new (require('./components/QuickReplyItem'))(...argu),

        /**
         * Serialize text structure.
         *
         * @param {String} text
         * @return {Object}
         * @api public
         */
        text: (...argu) => new (require('./components/Text'))(...argu),

        /**
         * Serialize image structure.
         *
         * @param {String} url
         * @return {Object}
         * @api public
         */
        image: (...argu) => new (require('./components/Image'))(...argu),

        /**
         * Serialize file structure.
         *
         * @param {String} url
         * @return {Object}
         * @api public
         */
        file: (...argu) => new (require('./components/File'))(...argu),

        /**
         * Serialize audio structure.
         *
         * @param {String} url
         * @return {Object}
         * @api public
         */
        audio: (...argu) => new (require('./components/Audio'))(...argu),

        /**
         * Serialize video structure.
         *
         * @param {String} url
         * @return {Object}
         * @api public
         */
        video: (...argu) => new (require('./components/Video'))(...argu),

        template: {

            /**
             * Serialize text structure.
             *
             * @param {String} title
             * @param {Button[]} buttons
             * @return {Object}
             * @api public
             */
            button: (...argu) => new (require('./components/Template/Button'))(...argu),

            /**
             * Serialize generic template structure.
             *
             * @param {TemplateElement[]} elements
             * @return {Object}
             * @api public
             */
            generic: (...argu) => new (require('./components/Template/Generic'))(...argu),

            /**
             * Serialize list template structure.
             *
             * @param {TemplateElement[]} elements
             * @param {Object} options
             * @return {Object}
             * @api public
             */
            list: (...argu) => new (require('./components/Template/List'))(...argu),

            /**
             * Serialize receipt template structure.
             *
             * @param {String} recipientName
             * @param {String} orderNumber
             * @param {String} currency
             * @param {String} paymentMethod
             * @param {Object} summary
             * @param {Object} options
             * @return {Object}
             * @api public
             */
            receipt: (...argu) => new (require('./components/Template/Receipt'))(...argu)
        },

        templateElement: {

            /**
             * Serialize generic template element structure.
             *
             * @param {String} title
             * @param {Object} options
             * @return {Object}
             * @api public
             */
            generic: (...argu) => new (require('./components/Template/Generic').element)(...argu),

            /**
             * Serialize list template element structure.
             *
             * @param {String} title
             * @param {Object} options
             * @return {Object}
             * @api public
             */
            list: (...argu) => new (require('./components/Template/List').element)(...argu),

            /**
             * Serialize receipt template element structure.
             *
             * @param {String} title
             * @param {Number} price
             * @param {Object} options
             * @return {Object}
             * @api public
             */
            receipt: (...argu) => new (require('./components/Template/Receipt').element)(...argu)
        },

        /**
         * Serialize price structure.
         *
         * @param {String} label
         * @param {String} amount
         * @return {Object}
         * @api public
         */
        price: class Price extends require('./components/Basic') {
            constructor(label, amount) {
                super()

                this._constructure = {
                    label: label,
                    amount: amount
                }
            }
        },

        /**
         * Serialize adjustments structure.
         *
         * @param {Object} options
         * @return {Object}
         * @api public
         */
        adjustments: class Adjustments extends require('./components/Basic') {
            constructor(option) {
                super()

                this._constructure = {
                    name: option.name,
                    amount: option.amount
                }
            }
        },

        button: {

            /**
             * Serialize url button structure.
             *
             * @param {String} title
             * @param {String} url
             * @param {Object} options
             * @return {Object}
             * @api public
             */
            url: (...argu) => new (require('./components/Button/Url'))(...argu),

            /**
             * Serialize postback button structure.
             *
             * @param {String} title
             * @param {String} payload
             * @return {Object}
             * @api public
             */
            postback: (...argu) => new (require('./components/Button/Postback'))(...argu),

            /**
             * Serialize phone number button structure.
             *
             * @param {String} title
             * @param {String} phoneNumber
             * @return {Object}
             * @api public
             */
            phoneNumber: (...argu) => new (require('./components/Button/PhoneNumber'))(...argu),

            /**
             * Serialize element share button structure.
             *
             * @return {Object}
             * @api public
             */
            elementShare: (...argu) => new (require('./components/Button/ElementShare'))(...argu),

            /**
             * Serialize payment button structure.
             *
             * @param {String} payload
             * @param {String} currency
             * @param {String} paymentType
             * @param {String} merchantName
             * @param {String} requestedUserInfo
             * @param {Price[]} priceList
             * @param {Object} options
             * @return {Object}
             * @api public
             */
            payment: class Button_Payment extends require('./components/Basic') {
                constructor(payload, currency, paymentType, merchantName, requestedUserInfo, priceList, option = {}) {
                    super()

                    this._constructure = {
                        type: 'payment',
                        title: 'Buy',
                        payload: payload,
                        payment_summary: {
                            currency: currency,
                            payment_type: paymentType,
                            is_test_payment: option.isTestPayment,
                            merchant_name: merchantName,
                            requested_user_info: requestedUserInfo,
                            price_list: priceList,
                        }
                    }
                }
            },

            /**
             * Serialize nested button structure.
             *
             * @param {String} title
             * @param {Button_Url[] | Button_Postback[] | Button_Nested[]} callToActions
             * @param {Object} option
             * @return {Object}
             * @api public
             */
            nested: (...argu) => new (require('./components/Button/Nested'))(...argu),

            /**
             * Serialize account link button structure.
             *
             * @param {String} url
             * @return {Object}
             * @api public
             */
            accountLink: (...argu) => new (require('./components/Button/AccountLink'))(...argu),

            /**
             * Serialize account unlink button structure.
             *
             * @return {Object}
             * @api public
             */
            accountUnlink: (...argu) => new (require('./components/Button/AccountUnlink'))(...argu)
        },

        /**
         * Serialize account unlink button structure.
         *
         * @param {PersistentMenuLocale[]} persitent menu locale array
         * @return {Object}
         * @api public
         */
        persistentMenu: (...argu) => new (require('./components/PersistentMenu'))(...argu),

        /**
         * Serialize account unlink button structure.
         *
         * @param {String} locale
         * @param {Button_Url[] | Button_Postback[] | Button_Nested[]} callToActions
         * @param {Object}  option
         * @return {Object}
         * @api public
         */
        persistentMenuLocale: (...argu) => new (require('./components/PersistentMenuLocale'))(...argu)
    }

    return components
}

function isValidUrl(url) {
    var result = Url.parse(url)
    return Boolean(result.hostname)
}
