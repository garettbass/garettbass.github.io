import { r as registerInstance, h } from './index-39ec39b1.js';

const buttonCss = "component-button ion-list-header{padding-left:4px}component-button section{margin-bottom:1em;padding:0 10px}";

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Button"))),
            h("ion-content", { fullscreen: true }, h("section", null, h("ion-list-header", null, h("ion-label", null, "Small Size")), h("ion-button", { size: "small" }, "Default"), h("ion-button", { size: "small", color: "secondary" }, "Secondary"), h("ion-button", { size: "small", color: "tertiary" }, "Tertiary")), h("section", null, h("ion-list-header", null, h("ion-label", null, "Default Size")), h("ion-button", { color: "success" }, "Success"), h("ion-button", { color: "warning" }, "Warning"), h("ion-button", { color: "danger" }, "Danger")), h("section", null, h("ion-list-header", null, h("ion-label", null, "Large Size")), h("ion-button", { size: "large", color: "light" }, "Light"), h("ion-button", { size: "large", color: "medium" }, "Medium"), h("ion-button", { size: "large", color: "dark" }, "Dark")), h("section", null, h("ion-list-header", null, h("ion-label", null, "Block Width")), h("ion-button", { expand: "block" }, "A block button")), h("section", null, h("ion-list-header", null, h("ion-label", null, "Full Width")), h("ion-button", { expand: "full", color: "secondary" }, "A full-width button")))
        ];
    }
};
Button.style = buttonCss;

export { Button as component_button };
