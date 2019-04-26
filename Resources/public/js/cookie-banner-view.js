define(function(require) {
    'use strict';

    var CookieBannerView;
    var BaseView = require('oroui/js/app/views/base/view');
    var _ = require('underscore');

    CookieBannerView = BaseView.extend({
        template: require('tpl!orocommercecookiebanner/templates/cookie-banner-view.html'),

        storageKey: 'cookieBannerHide',

        events: {
            'click [data-action="accept"]': 'onAccept',
            'click [data-action="close"]': 'onClose'
        },

        /**
         * @inheritDoc
         */
        constructor: function CookieBannerView() {
            CookieBannerView.__super__.constructor.apply(this, arguments);
        },

        /**
         * @inheritDoc
         */
        initialize: function() {
            CookieBannerView.__super__.initialize.apply(this, arguments);

            if (
                JSON.parse(localStorage.getItem(this.storageKey)) ||
                JSON.parse(sessionStorage.getItem(this.storageKey)) ||
                /admin/.test(location.pathname)
            ) {
                this.dispose();
                return;
            }

            this.render();
        },

        /**
         * @inheritDoc
         */
        render: function() {
            this.setElement(this.template({
                bannerText: _.__('oro_cookie_banner.text'),
                bannerButtonLabel: _.__('oro_cookie_banner.button_label')
            }));

            this.$el.appendTo('body');
        },

        /**
         * Remove banner and save state in local storage
         */
        onAccept: function() {
            localStorage.setItem(this.storageKey, true);
            this._removeBanner();
        },

        /**
         * Temporary remove banner and save state in session storage
         */
        onClose: function() {
            sessionStorage.setItem(this.storageKey, true);
            this._removeBanner();
        },

        _removeBanner: function() {
            this.$el.remove();
            this.dispose();
        }
    });

    return CookieBannerView;
});
