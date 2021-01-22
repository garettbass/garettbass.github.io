import { r as registerInstance, h, e as getElement } from './index-39ec39b1.js';

const searchbarCss = "";

const Searchbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cities = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington',
        ];
        this.items = this.cities;
        this.handleSearch = (event) => {
            const query = event.target.value.toLowerCase();
            this.items = this.cities.filter(x => x.toLocaleLowerCase().indexOf(query) >= 0);
        };
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Searchbar")), h("ion-toolbar", null, h("ion-searchbar", { onIonInput: this.handleSearch }))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, this.items.map(item => {
                return (h("ion-item", null, h("ion-label", null, item)));
            })))
        ];
    }
    get el() { return getElement(this); }
};
Searchbar.style = searchbarCss;

export { Searchbar as component_searchbar };
