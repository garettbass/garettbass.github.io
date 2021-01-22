import { r as registerInstance, h } from './index-39ec39b1.js';

const radioCss = "";

const Radio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Radio"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-radio-group", { value: "grape" }, h("ion-list-header", null, h("ion-label", null, "Fruit")), h("ion-item", null, h("ion-label", null, "Apple"), h("ion-radio", { slot: "start", color: "success", value: "apple" })), h("ion-item", null, h("ion-label", null, "Grape"), h("ion-radio", { slot: "start", color: "tertiary", value: "grape" })), h("ion-item", null, h("ion-label", null, "Cherry"), h("ion-radio", { slot: "start", color: "danger", value: "cherry" }))), h("ion-radio-group", { value: "anchovies", "allow-empty-selection": true }, h("ion-list-header", null, h("ion-label", null, "Pizza Topping")), h("ion-item", null, h("ion-label", null, "Beef"), h("ion-radio", { slot: "end", color: "primary", value: "beef" })), h("ion-item", null, h("ion-label", null, "Anchovies"), h("ion-radio", { slot: "end", color: "secondary", value: "anchovies" })), h("ion-item", null, h("ion-label", null, "Sausage"), h("ion-radio", { slot: "end", color: "tertiary", value: "sausage" })), h("ion-item", null, h("ion-label", null, "Bellpepper"), h("ion-radio", { slot: "end", color: "success", value: "tomato" })), h("ion-item", null, h("ion-label", null, "Tomato"), h("ion-radio", { slot: "end", color: "warning", value: "carrot" })), h("ion-item", null, h("ion-label", null, "Pepperoni"), h("ion-radio", { slot: "end", color: "danger", value: "pepperoni" })))))
        ];
    }
};
Radio.style = radioCss;

export { Radio as component_radio };
