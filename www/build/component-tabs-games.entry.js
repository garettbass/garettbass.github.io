import { r as registerInstance, h } from './index-39ec39b1.js';

const tabsCss = "";

const TabsGames = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Games"))),
            h("ion-content", { fullscreen: true, class: "ion-padding" }, h("h1", null, "Games"))
        ];
    }
};
TabsGames.style = tabsCss;

export { TabsGames as component_tabs_games };
