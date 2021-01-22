import { r as registerInstance, h } from './index-39ec39b1.js';

const selectCss = "component-select .list-ios{margin-top:0}";

const Select = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Select"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-list-header", { lines: "full" }, h("ion-label", null, "Select Trip")), h("ion-item", null, h("ion-label", { position: "stacked" }, "Origin"), h("ion-select", { placeholder: "Select Airport" }, h("ion-select-option", { value: "madison" }, "Madison (MSN)"), h("ion-select-option", { value: "chicago" }, "Chicago (ORD)"), h("ion-select-option", { value: "austin" }, "Austin (AUS)"))), h("ion-item", null, h("ion-label", { position: "stacked" }, "Destination"), h("ion-select", { placeholder: "Select Airport" }, h("ion-select-option", { value: "newyork" }, "New York (JFK)"), h("ion-select-option", { value: "honolulu" }, "Honolulu (HNL)"), h("ion-select-option", { value: "baltimore" }, "Baltimore (BWI)"))), h("ion-item", null, h("ion-label", { position: "stacked" }, "Passengers"), h("ion-select", { value: "1" }, h("ion-select-option", { value: "1" }, "1 Adult"), h("ion-select-option", { value: "2" }, "2 Adults"), h("ion-select-option", { value: "3" }, "3 Adults"), h("ion-select-option", { value: "4" }, "4 Adults"))), h("ion-item", { lines: "full" }, h("ion-label", { position: "stacked" }, "Add-ons"), h("ion-select", { placeholder: "Select Multiple Add-ons", multiple: true }, h("ion-select-option", { value: "firstclass" }, "First Class"), h("ion-select-option", { value: "bag" }, "Additional Bag"), h("ion-select-option", { value: "headphones" }, "Headphones"), h("ion-select-option", { value: "wifi" }, "Inflight WiFi")))), h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Select Interfaces")), h("ion-item", null, h("ion-label", { position: "stacked" }, "Gender"), h("ion-select", { placeholder: "Popover Interface", interface: "popover" }, h("ion-select-option", { value: "f" }, "Female"), h("ion-select-option", { value: "m" }, "Male"))), h("ion-item", null, h("ion-label", { position: "stacked" }, "Mute Notifications"), h("ion-select", { placeholder: "Action Sheet Interface", interface: "action-sheet" }, h("ion-select-option", { value: "mute_15" }, "For 15 Minutes"), h("ion-select-option", { value: "mute_1" }, "For 1 Hour"), h("ion-select-option", { value: "mute_23" }, "For 24 Hours"), h("ion-select-option", { value: "mute_inf" }, "Until I turn it back on")))))
        ];
    }
};
Select.style = selectCss;

export { Select as component_select };
