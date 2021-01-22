import { r as registerInstance, h } from './index-39ec39b1.js';

const fabCss = "";

const Fab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Floating Action Button"))),
            h("ion-content", { fullscreen: true, class: "ion-padding" }, h("ion-fab", { horizontal: "end", vertical: "top", slot: "fixed", edge: true }, h("ion-fab-button", null, h("ion-icon", { name: "add" })), h("ion-fab-list", null, h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-facebook" })), h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-twitter" })), h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-vimeo" })))), h("ion-fab", { horizontal: "end", vertical: "center", slot: "fixed" }, h("ion-fab-button", { color: "danger" }, h("ion-icon", { name: "add" }))), h("ion-fab", { horizontal: "end", vertical: "bottom", slot: "fixed" }, h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "caret-back" })), h("ion-fab-list", { side: "start" }, h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-facebook" })), h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-twitter" })), h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-vimeo" })))), h("ion-fab", { horizontal: "start", vertical: "bottom", slot: "fixed" }, h("ion-fab-button", { color: "dark" }, h("ion-icon", { name: "caret-up" })), h("ion-fab-list", { side: "top" }, h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-facebook" })), h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-twitter" })), h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-vimeo" })), h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-google" })))), h("ion-fab", { horizontal: "start", vertical: "top", slot: "fixed" }, h("ion-fab-button", { color: "secondary" }, h("ion-icon", { name: "caret-forward" })), h("ion-fab-list", { side: "end" }, h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-facebook" })), h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-twitter" })), h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-vimeo" })), h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-google" })))), h("ion-fab", { horizontal: "center", vertical: "center", slot: "fixed" }, h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "share" })), h("ion-fab-list", { side: "top" }, h("ion-fab-button", { color: "primary" }, h("ion-icon", { name: "logo-vimeo" }))), h("ion-fab-list", { side: "end" }, h("ion-fab-button", { color: "dark" }, h("ion-icon", { name: "logo-twitter" }))), h("ion-fab-list", { side: "bottom" }, h("ion-fab-button", { color: "secondary" }, h("ion-icon", { name: "logo-facebook" }))), h("ion-fab-list", { side: "start" }, h("ion-fab-button", { color: "light" }, h("ion-icon", { name: "logo-google" })))))
        ];
    }
};
Fab.style = fabCss;

export { Fab as component_fab };
