import { r as registerInstance, h } from './index-39ec39b1.js';

const progressCss = "component-progress ion-content ion-progress-bar{margin:10px 0}component-progress .progress-margin{margin-bottom:40px}";

const Progress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    increaseValue() {
        const value = this.progressEl.value;
        this.progressEl.value = value + .1;
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Progress"), h("ion-progress-bar", { type: "indeterminate", color: "dark" }))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Determinate")), h("ion-progress-bar", { value: 0.2 })), h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Control Determinate"), h("ion-button", { onClick: () => this.increaseValue() }, h("ion-icon", { slot: "icon-only", ios: "add-outline", md: "add-sharp" }))), h("ion-progress-bar", { ref: el => this.progressEl = el, value: 0.1 })), h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Indeterminate")), h("ion-progress-bar", { type: "indeterminate" }), h("ion-list-header", null, h("ion-label", null, "Indeterminate (reversed)")), h("ion-progress-bar", { type: "indeterminate", reversed: true }), h("ion-list-header", null, h("ion-label", null, "Buffer")), h("ion-progress-bar", { value: 0.25, buffer: 0.5 }), h("ion-list-header", null, h("ion-label", null, "Colors")), h("ion-progress-bar", { type: "indeterminate", color: "secondary", class: "progress-margin" }), h("ion-progress-bar", { type: "indeterminate", reversed: true, color: "tertiary", class: "progress-margin" }), h("ion-progress-bar", { value: 0.25, buffer: 0.5, color: "danger", class: "progress-margin" })))
        ];
    }
};
Progress.style = progressCss;

export { Progress as component_progress };
