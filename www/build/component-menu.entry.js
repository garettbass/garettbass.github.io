import { r as registerInstance, h, e as getElement } from './index-39ec39b1.js';
import './ionic-global-95f99679.js';
import './utils-39861029.js';
import './index-966ebc8e.js';
import './helpers-2774d300.js';
import './animation-b7b16b67.js';
import './index-052f212b.js';
import './ios.transition-b18de522.js';
import './md.transition-a24a0e4d.js';
import './cubic-bezier-89113939.js';
import './index-66808674.js';
import './hardware-back-button-24485eb0.js';
import { m as menuController } from './index-6e57bdde.js';
import './overlays-3b327421.js';

const menuCss = "";

const Menu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openMenu = async () => {
            menuController.open();
        };
    }
    render() {
        return [
            h("ion-menu", { side: "start", contentId: "main" }, h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-title", null, "Menu"))), h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-item", null, h("ion-icon", { name: "home", slot: "start" }), h("ion-label", null, "Home")), h("ion-item", null, h("ion-icon", { name: "person", slot: "start" }), h("ion-label", null, "Profile")), h("ion-item", null, h("ion-icon", { name: "chatbubbles", slot: "start" }), h("ion-label", null, "Messages")), h("ion-item", null, h("ion-icon", { name: "settings", slot: "start" }), h("ion-label", null, "Settings"))))),
            h("div", { class: "ion-page", id: "main" }, h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Home"))), h("ion-content", { class: "ion-padding" }, h("ion-button", { expand: "block", onClick: this.openMenu }, "Open Menu")))
        ];
    }
    get el() { return getElement(this); }
};
Menu.style = menuCss;

export { Menu as component_menu };
