import { r as registerInstance, h } from './index-39ec39b1.js';

const itemCss = "component-item ion-list:last-of-type{margin-bottom:var(--ion-margin, 20px)}";

const Item = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Item"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-list-header", { lines: "full" }, h("ion-label", null, "Icon Items")), h("ion-item", null, h("ion-icon", { slot: "start", ios: "star-outline", md: "star-sharp" }), h("ion-label", null, "Label")), h("ion-item", { lines: "full" }, h("ion-icon", { slot: "start", ios: "heart-outline", md: "heart-sharp" }), h("ion-label", null, "Label"))), h("ion-list", null, h("ion-list-header", { lines: "full" }, h("ion-label", null, "Media Items")), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar.svg" })), h("ion-label", null, "Label")), h("ion-item", { lines: "full" }, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar.svg" })), h("ion-label", null, "Label"))), h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Sliding Items")), h("ion-item-sliding", null, h("ion-item", null, h("ion-label", null, "Label")), h("ion-item-options", { side: "start" }, h("ion-item-option", { color: "primary" }, "Archive")), h("ion-item-options", { side: "end" }, h("ion-item-option", { expandable: true, color: "danger" }, "Delete"))), h("ion-item-sliding", null, h("ion-item", null, h("ion-label", null, "Label")), h("ion-item-options", { side: "start" }, h("ion-item-option", { color: "primary" }, h("ion-icon", { slot: "icon-only", ios: "share-outline", md: "share-sharp" }))), h("ion-item-options", { side: "end" }, h("ion-item-option", { expandable: true, color: "danger" }, h("ion-icon", { slot: "icon-only", ios: "trash-outline", md: "trash-sharp" }))))), h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Inputs & Controls")), h("ion-item-sliding", null, h("ion-item", null, h("ion-label", null, "Note"), h("ion-note", { slot: "end" }, "99")), h("ion-item", null, h("ion-label", null, "Checkbox"), h("ion-checkbox", { slot: "end", checked: true })), h("ion-item", null, h("ion-label", null, "Toggle"), h("ion-toggle", { slot: "end", checked: true })), h("ion-item", null, h("ion-label", null, "Input"), h("ion-input", { slot: "end", placeholder: "Placeholder" })))))
        ];
    }
};
Item.style = itemCss;

export { Item as component_item };
