import { r as registerInstance, h } from './index-39ec39b1.js';

const datetimeCss = "";

const Datetime = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Date & Time Picker"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-item", null, h("ion-input", { placeholder: "Title" })), h("ion-item", { lines: "full" }, h("ion-input", { placeholder: "Location" })), h("ion-item-divider", null), h("ion-item", null, h("ion-label", null, "Start Date"), h("ion-datetime", { value: "1990-02-19", placeholder: "Select Date" })), h("ion-item", null, h("ion-label", null, "Start Time"), h("ion-datetime", { "display-format": "h:mm A", "picker-format": "h:mm A", value: "1990-02-19T07:43Z" })), h("ion-item", null, h("ion-label", null, "Ends"), h("ion-datetime", { value: "1990-02-20", placeholder: "Select Date" })), h("ion-item", null, h("ion-label", null, "Repeat"), h("ion-datetime", { placeholder: "Never", disabled: true })), h("ion-item", { lines: "full" }, h("ion-label", null, "Travel Time"), h("ion-datetime", { placeholder: "None", disabled: true })), h("ion-item-divider", null), h("ion-item", { lines: "full" }, h("ion-label", null, "Alert"), h("ion-datetime", { placeholder: "None", disabled: true }))))
        ];
    }
};
Datetime.style = datetimeCss;

export { Datetime as component_datetime };
