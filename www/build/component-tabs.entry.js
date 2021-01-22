import { r as registerInstance, h } from './index-39ec39b1.js';

const tabsCss = "";

const Tabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-tabs", null, h("ion-tab", { tab: "tabs-music", component: "component-tabs-music" }), h("ion-tab", { tab: "tabs-movies", component: "component-tabs-movies" }), h("ion-tab", { tab: "tabs-games", component: "component-tabs-games" }), h("ion-tab-bar", { slot: "bottom" }, h("ion-tab-button", { tab: "tabs-music" }, h("ion-label", null, "Music"), h("ion-icon", { name: "musical-note" })), h("ion-tab-button", { tab: "tabs-movies" }, h("ion-label", null, "Movies"), h("ion-icon", { name: "videocam" })), h("ion-tab-button", { tab: "tabs-games" }, h("ion-label", null, "Games"), h("ion-icon", { name: "game-controller" }))))
        ];
    }
};
Tabs.style = tabsCss;

export { Tabs as component_tabs };
