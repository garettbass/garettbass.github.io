import { r as registerInstance, h, e as getElement } from './index-39ec39b1.js';

const infiniteScrollCss = "";

const InfiniteScroll = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.users = [{
                'name': 'Aline Grover',
                'created': 'November 28, 2012'
            }, {
                'name': 'Nevada Anders',
                'created': 'January 18, 2014'
            }, {
                'name': 'Nicholas Morissette',
                'created': 'November 11, 2014'
            }, {
                'name': 'Rusty Umland',
                'created': 'January 8, 2019'
            }, {
                'name': 'Amada Cerulli',
                'created': 'July 22, 2009'
            }, {
                'name': 'Harriette Garcia',
                'created': 'July 29, 2018'
            }, {
                'name': 'Erminia Marotz',
                'created': 'September 29, 2016'
            }, {
                'name': 'Shanelle Parodi',
                'created': 'May 26, 2018'
            }, {
                'name': 'Roger Leite',
                'created': 'August 6, 2015'
            }, {
                'name': 'Latina Faulcon',
                'created': 'February 5, 2014'
            }, {
                'name': 'Jerrie Hoekstra',
                'created': 'June 2, 2016'
            }, {
                'name': 'Domonique Byam',
                'created': 'December 30, 2010'
            }, {
                'name': 'Monnie Bonar',
                'created': 'December 20, 2018'
            }, {
                'name': 'Chu Kahle',
                'created': 'November 17, 2017'
            }, {
                'name': 'Allan Passman',
                'created': 'November 12, 2015'
            }, {
                'name': 'Conrad Caliendo',
                'created': 'February 10, 2016'
            }, {
                'name': 'Elma Chenier',
                'created': 'August 13, 2011'
            }, {
                'name': 'Wendi Hirano',
                'created': 'July 27, 2018'
            }, {
                'name': 'Loren Wordlaw',
                'created': 'December 20, 2014'
            }, {
                'name': 'Hubert Frum',
                'created': 'January 21, 2013'
            }, {
                'name': 'Rueben Basil',
                'created': 'December 2, 2013'
            }, {
                'name': 'Krystyna Hardiman',
                'created': 'February 11, 2016'
            }, {
                'name': 'Micki Murch',
                'created': 'December 17, 2009'
            }, {
                'name': 'Allene Knight',
                'created': 'November 3, 2010'
            }, {
                'name': 'Davis Lunsford',
                'created': 'October 17, 2011'
            }, {
                'name': 'Elin Conte',
                'created': 'June 23, 2015'
            }, {
                'name': 'Yasuko Hites',
                'created': 'August 25, 2017'
            }, {
                'name': 'Gerri Pinon',
                'created': 'May 21, 2014'
            }, {
                'name': 'Caryl Hawker',
                'created': 'April 13, 2018'
            }, {
                'name': 'Savannah Hoard',
                'created': 'October 31, 2009'
            }, {
                'name': 'Carolyn Knutsen',
                'created': 'July 16, 2015'
            }, {
                'name': 'Shantay Mckissack',
                'created': 'July 9, 2010'
            }, {
                'name': 'Vertie Pinales',
                'created': 'November 20, 2010'
            }, {
                'name': 'Gidget Stuck',
                'created': 'August 17, 2017'
            }, {
                'name': 'Drew Crownover',
                'created': 'August 30, 2017'
            }, {
                'name': 'Vashti Krajewski',
                'created': 'January 25, 2018'
            }, {
                'name': 'Candice Dike',
                'created': 'November 19, 2018'
            }, {
                'name': 'Dorthey Buhler',
                'created': 'October 22, 2012'
            }, {
                'name': 'Hailey Deluna',
                'created': 'September 13, 2012'
            }, {
                'name': 'Richard Aaron',
                'created': 'April 27, 2016'
            }];
        this.items = this.users.slice(0, 15);
        this.handleInfinite = async () => {
            await this.wait(500);
            const newUsers = [];
            for (let i = 0; i < 5; i++) {
                newUsers.push(this.users[Math.floor(Math.random() * this.users.length)]);
            }
            this.items = [...this.items, ...newUsers];
            this.infiniteScroll.complete();
        };
        this.wait = (time) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, time);
            });
        };
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Infinite Scroll"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, this.items.map((user, i) => {
                return (h("ion-item", { key: i }, h("ion-avatar", { slot: "start" }, h("img", { src: `https://www.gravatar.com/avatar/${i}?d=monsterid&f=y` })), h("ion-label", null, h("h2", null, user.name), h("p", null, "Created ", user.created))));
            })), h("ion-infinite-scroll", { threshold: "100px", id: "infinite-scroll", onIonInfinite: this.handleInfinite, ref: e => { this.infiniteScroll = e; } }, h("ion-infinite-scroll-content", { "loading-spinner": "bubbles", "loading-text": "Loading more data..." })))
        ];
    }
    get el() { return getElement(this); }
};
InfiniteScroll.style = infiniteScrollCss;

export { InfiniteScroll as component_infinite_scroll };
