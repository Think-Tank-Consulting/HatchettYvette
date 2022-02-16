// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,                   // default: false
    theme_css: 'data/cookieconsent.css',  // 🚨 replace with a valid path
    page_scripts: true,                        // default: false
    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    cookie_name: 'ThinkTankConsulting_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'Consent Settings 🍪',
              //  class: 'theme_turquoise',
                description: 'This website uses essential cookies as well as optional cookies and mining. The latter will only be set with consent. <button type="button" data-cc="c-settings" class="cc-link">Settings</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Consent Settings',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie Usage 📢',
                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance and Analytics cookies',
                        description: 'These cookies allow the website to remember the choices you have made in the past',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'Advertisement and Targeting cookies',
                        description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    },
                    {
                        title: 'Cryptomining / Ads 📢',
                        description: 'In order to continue providing innovative free services to the general public, we have kindly enabled options to support the developers running this website (pssss thats us) <a href="#" class="cc-link">privacy policy</a>.'
                    }, {
                        title: 'Cryptomining',
                        description: 'Allow us to borrow a hint of your sweet sweet computing resources. If enabled, a small script from webminepool.com will be loaded in your browser via javascript that starts mining the WMC currency. This is secure and safe for your device. Please reload the page after changing this setting for it to take effect.',
                        toggle: {
                            value: 'crypto',
                            enabled: false,
                            readonly: false          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Google Ads',
                        description: 'Beautiful ads from google to browse more products you dont need while visiting our site.',
                        toggle: {
                            value: 'google_ads',     // your cookie category
                            enabled: false,
                            readonly: false
                        },

                    }, {
                        title: 'InfoLinks Ads',
                        description: 'Ads from InfoLinks in case you have something against Google.',
                        toggle: {
                            value: 'infolinks_ads',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to these settings, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                    }

                ]
            }
        }
    }
});
