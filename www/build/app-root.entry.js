import { r as registerInstance, h } from './index-39ec39b1.js';
import { g as getComponents } from './component-utils-d9a7c721.js';

const appRootCss = "";

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.components = getComponents();
    }
    render() {
        return (h("ion-app", null, h("ion-router", { useHash: false }, h("ion-route", { url: "/", component: "app-home" }), h("ion-route", { url: "/component", component: "app-home" }), this.components.filter(c => c.name !== 'tabs').map(component => {
            return (h("ion-route", { url: `/component/${component.id}`, component: `component-${component.id}` }));
        }), h("ion-route", { component: "component-tabs" }, h("ion-route", { url: "/component/tabs/music", component: "tabs-music" }), h("ion-route", { url: "/component/tabs/movies", component: "tabs-movies" }), h("ion-route", { url: "/component/tabs/games", component: "tabs-games" }))), h("ion-nav", null)));
    }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
