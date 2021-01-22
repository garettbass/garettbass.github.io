import { r as registerInstance, h } from './index-39ec39b1.js';

const refresherCss = "component-refresher ion-content{user-select:none}component-refresher ion-item{--padding-start:8px}component-refresher .dot{display:block;height:10px;width:10px;border-radius:50%;align-self:start;margin:16px 8px 16px 9px}component-refresher .md .dot{margin-top:17px}component-refresher .dot-unread{background:var(--ion-color-primary)}component-refresher .unread{background-color:#3684ff}component-refresher ion-item h2,component-refresher ion-item h3{font-weight:500 !important}";

const authors = [
    'Everyworse',
    'Nextably',
    'Givester',
    'TempleRentr',
    'Spout',
    'Frigital',
    'Batterbus',
    'Ham Pot',
    'Bat+IQ',
    'Throbe'
];
const titles = [
    'Get 50% off your purchase today!',
    'You\'re in luck, here\'s your Friday the 13th deal!',
    'Don\'t miss out! Your exclusive access to FREE shipping is ending soon.',
    'Treat yourself, you deserve these savings.',
    'Get fresh meals delivered right to your door!',
    'Your 25% Coupon Expires At Midnight',
    'BIG SAVINGS Up To 50% Until Friday',
    'Lucky you: Save today',
    'The Event You Don\'t Want to Miss',
    'Last Chance to Unlock Your 25% Code',
    'CLOSEOUT SALE (We mean it!)',
    'Gifting just got easier — enjoy exclusive access to FREE shipping for two days only.',
    'Our Birthday = Your Savings',
    'SPECIAL OFFER. See inside.',
    'Ready to order?',
    'BONUS Coupon Inside!',
    'Today\'s SPECIAL BUY >> Inside >>',
    'Email Exclusive Offer ENDS TONIGHT!'
];
const messages = [
    'The best brands + the best deals',
    'Recommended by your Personal Vacation Planner',
    'Catch them before they\'re gone.',
    'Shop by tonight to save on gifts to share with the entire family.',
    'Over 30% OFF! View in Browser.',
    'Offer expires 11:59 PM ET. View in Browser.',
    'Free delivery will make us the MPV!',
    'Selection √ | Value √ | Service √',
    '⭐️⭐️⭐️⭐️⭐️',
    'Shop now and save big...',
    'Get the Lowest Price Guaranteed',
    'Use code SAVE10 to save 10% on your next purchase.',
    'Unlock your coupon code now...',
    'Free Shipping Tonight!',
    'Free Shipping On All Orders $35+',
    'Better than takeout in every way',
    'Get $100 off when you try now!',
    'All your favorites are heading your way.',
];
const createItems = (count, unread = false) => {
    return new Array(count).fill(0).map(_ => {
        return {
            email: {
                author: authors[Math.floor(Math.random() * authors.length)],
                title: titles[Math.floor(Math.random() * titles.length)],
                message: messages[Math.floor(Math.random() * messages.length)],
            },
            unread
        };
    });
};
const Refresher = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.items = createItems(5);
        this.handleRefresh = (ev) => {
            setTimeout(() => {
                this.items = [...createItems(2, true), ...this.items];
                ev.target.complete();
            }, 1000);
        };
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Refresher"))),
            h("ion-content", { fullscreen: true }, h("ion-refresher", { slot: "fixed", onIonRefresh: ev => this.handleRefresh(ev) }, h("ion-refresher-content", null)), h("ion-list", null, this.items.map(({ unread, email }) => {
                return (h("ion-item", null, h("div", { slot: "start", class: unread ? 'dot dot-unread' : 'dot' }), h("ion-label", null, h("h2", null, email.author), h("h3", null, email.title), h("p", null, email.message))));
            })))
        ];
    }
};
Refresher.style = refresherCss;

export { Refresher as component_refresher };
