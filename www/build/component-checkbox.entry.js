import { r as registerInstance, h } from './index-39ec39b1.js';

const checkboxCss = "";

const Checkbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Checkbox"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Characters")), h("ion-item", null, h("ion-label", null, "Jon Snow"), h("ion-checkbox", { color: "primary", checked: true, slot: "start" })), h("ion-item", null, h("ion-checkbox", { color: "dark", checked: true, slot: "start" }), h("ion-label", null, "Daenerys Targaryen")), h("ion-item", null, h("ion-checkbox", { disabled: true, slot: "start" }), h("ion-label", null, "Arya Stark")), h("ion-item", null, h("ion-checkbox", { color: "secondary", slot: "start" }), h("ion-label", null, "Tyrion Lannister")), h("ion-item", null, h("ion-checkbox", { color: "danger", checked: true, slot: "start" }), h("ion-label", null, "Sansa Stark")), h("ion-item", null, h("ion-checkbox", { color: "primary", slot: "start" }), h("ion-label", null, "Khal Drogo")), h("ion-item", null, h("ion-checkbox", { color: "tertiary", checked: true, slot: "start" }), h("ion-label", null, "Cersei Lannister")), h("ion-item", null, h("ion-checkbox", { color: "medium", checked: true, slot: "start" }), h("ion-label", null, "Stannis Baratheon")), h("ion-item", null, h("ion-checkbox", { color: "primary", disabled: true, slot: "start" }), h("ion-label", null, "Petyr Baelish")), h("ion-item", null, h("ion-checkbox", { color: "dark", checked: true, slot: "start" }), h("ion-label", null, "Hodor")), h("ion-item", null, h("ion-checkbox", { color: "secondary", checked: true, slot: "start" }), h("ion-label", null, "Catelyn Stark")), h("ion-item", null, h("ion-checkbox", { color: "primary", slot: "start" }), h("ion-label", null, "Bronn"))))
        ];
    }
};
Checkbox.style = checkboxCss;

export { Checkbox as component_checkbox };
