import { r as registerInstance, h } from './index-39ec39b1.js';

const toggleCss = "";

const Toggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Toggle"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-item", null, h("ion-label", null, "Blueberry"), h("ion-toggle", { slot: "end", name: "blueberry", checked: true })), h("ion-item", null, h("ion-label", null, "Apple"), h("ion-toggle", { slot: "end", name: "apple", color: "secondary", checked: true })), h("ion-item", null, h("ion-label", null, "Grape"), h("ion-toggle", { slot: "end", name: "grape", color: "tertiary", checked: true })), h("ion-item", null, h("ion-label", null, "Kiwi"), h("ion-toggle", { slot: "end", name: "kiwi", color: "success", checked: true })), h("ion-item", null, h("ion-label", null, "Orange"), h("ion-toggle", { slot: "end", name: "banana", color: "warning", checked: true })), h("ion-item", null, h("ion-label", null, "Cherry"), h("ion-toggle", { slot: "end", name: "cherry", color: "danger", checked: true })), h("ion-item", null, h("ion-label", null, "Banana"), h("ion-toggle", { slot: "end", name: "banana", color: "light", checked: true })), h("ion-item", null, h("ion-label", null, "Cantaloupe"), h("ion-toggle", { slot: "end", name: "cantaloupe", color: "medium", checked: true })), h("ion-item", null, h("ion-label", null, "Blackberry"), h("ion-toggle", { slot: "end", name: "blackberry", color: "dark", checked: true }))))
        ];
    }
};
Toggle.style = toggleCss;

export { Toggle as component_toggle };
