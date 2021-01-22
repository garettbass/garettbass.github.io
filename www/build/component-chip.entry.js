import { r as registerInstance, h } from './index-39ec39b1.js';

const chipCss = "component-chip .ios p{margin-left:16px}component-chip .md p{margin-top:0;margin-left:10px}";

const Chip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Chip"))),
            h("ion-content", { fullscreen: true }, h("ion-list-header", null, h("ion-label", null, "Basic")), h("div", { class: "ion-padding-horizontal" }, h("ion-chip", null, h("ion-label", null, "Default")), h("ion-chip", null, h("ion-icon", { name: "checkmark-circle" }), h("ion-label", null, "Icon")), h("ion-chip", null, h("ion-avatar", null, h("img", { src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjYzVkYmZmIiBkPSJNMCAwaDUxMnY1MTJIMHoiLz48cGF0aCBkPSJNMjU2IDMwNGM2MS42IDAgMTEyLTUwLjQgMTEyLTExMlMzMTcuNiA4MCAyNTYgODBzLTExMiA1MC40LTExMiAxMTIgNTAuNCAxMTIgMTEyIDExMnptMCA0MGMtNzQuMiAwLTIyNCAzNy44LTIyNCAxMTJ2NTZoNDQ4di01NmMwLTc0LjItMTQ5LjgtMTEyLTIyNC0xMTJ6IiBmaWxsPSIjODJhZWZmIi8+PC9zdmc+" })), h("ion-label", null, "Avatar"))), h("ion-list-header", null, h("ion-label", null, "Colors")), h("div", { class: "ion-padding-horizontal" }, h("ion-chip", { color: "primary" }, h("ion-label", null, "Primary")), h("ion-chip", { color: "secondary" }, h("ion-label", null, "Secondary")), h("ion-chip", { color: "tertiary" }, h("ion-label", null, "Tertiary")), h("ion-chip", { color: "success" }, h("ion-label", null, "Success")), h("ion-chip", { color: "warning" }, h("ion-label", null, "Warning")), h("ion-chip", { color: "danger" }, h("ion-label", null, "Danger"))), h("ion-list-header", null, h("ion-label", null, "Outline")), h("div", { class: "ion-padding-horizontal" }, h("ion-chip", { outline: true, color: "primary" }, h("ion-label", null, "Primary")), h("ion-chip", { outline: true, color: "secondary" }, h("ion-label", null, "Secondary")), h("ion-chip", { outline: true, color: "tertiary" }, h("ion-label", null, "Tertiary")), h("ion-chip", { outline: true, color: "success" }, h("ion-label", null, "Success")), h("ion-chip", { outline: true, color: "warning" }, h("ion-label", null, "Warning")), h("ion-chip", { outline: true, color: "danger" }, h("ion-label", null, "Danger"))), h("ion-list-header", null, h("ion-label", null, "Icons")), h("div", { class: "ion-padding-horizontal" }, h("ion-chip", { outline: true, color: "primary" }, h("ion-icon", { name: "pin" }), h("ion-label", null, "Madison"), h("ion-icon", { name: "close-circle" })), h("ion-chip", { outline: true, color: "secondary" }, h("ion-icon", { name: "wine" }), h("ion-label", null, "Nightlife"), h("ion-icon", { name: "close-circle" })), h("ion-chip", { outline: true, color: "tertiary" }, h("ion-icon", { name: "restaurant" }), h("ion-label", null, "Dining"), h("ion-icon", { name: "close-circle" })), h("ion-chip", { outline: true, color: "dark" }, h("ion-icon", { name: "videocam" }), h("ion-label", null, "Entertainment"), h("ion-icon", { name: "close-circle" }))))
        ];
    }
};
Chip.style = chipCss;

export { Chip as component_chip };
