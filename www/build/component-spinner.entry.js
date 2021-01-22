import { r as registerInstance, h } from './index-39ec39b1.js';

const spinnerCss = "";

const Spinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Spinner"))),
            h("ion-content", { fullscreen: true }, h("ion-item", null, h("ion-spinner", { slot: "start" }), h("ion-label", null, "Default Spinner")), h("ion-item", null, h("ion-spinner", { slot: "start", name: "lines" }), h("ion-label", null, "Lines")), h("ion-item", null, h("ion-spinner", { slot: "start", name: "lines-small" }), h("ion-label", null, "Lines Small")), h("ion-item", null, h("ion-spinner", { slot: "start", name: "dots" }), h("ion-label", null, "Dots")), h("ion-item", null, h("ion-spinner", { slot: "start", name: "bubbles" }), h("ion-label", null, "Bubbles")), h("ion-item", null, h("ion-spinner", { slot: "start", name: "circles" }), h("ion-label", null, "Circles")), h("ion-item", null, h("ion-spinner", { slot: "start", name: "crescent" }), h("ion-label", null, "Crescent")), h("ion-item", null, h("ion-spinner", { slot: "start", paused: true }), h("ion-label", null, "Paused Spinner")))
        ];
    }
};
Spinner.style = spinnerCss;

export { Spinner as component_spinner };
