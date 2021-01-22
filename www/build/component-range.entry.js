import { r as registerInstance, h } from './index-39ec39b1.js';

const rangeCss = "";

const Range = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Range"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Adjust Display")), h("ion-item", null, h("ion-range", { value: 20 }, h("ion-icon", { slot: "start", size: "small", name: "sunny" }), h("ion-icon", { slot: "end", name: "sunny" }))), h("ion-item", null, h("ion-range", { min: -200, max: 200, pin: true, color: "secondary" }, h("ion-icon", { slot: "start", size: "small", name: "contrast" }), h("ion-icon", { slot: "end", name: "contrast" }))), h("ion-item", null, h("ion-range", { id: "dual-range", "dual-knobs": true, pin: true, color: "dark", value: { lower: 33, upper: 60 } }, h("ion-icon", { slot: "start", size: "small", name: "brush" }), h("ion-icon", { slot: "end", name: "brush" }))), h("ion-item", null, h("ion-range", { min: 1000, max: 2000, step: 100, value: 1400, snaps: true, color: "danger" }, h("ion-icon", { slot: "start", size: "small", color: "danger", name: "thermometer" }), h("ion-icon", { slot: "end", color: "danger", name: "thermometer" })))))
        ];
    }
};
Range.style = rangeCss;

export { Range as component_range };
