import { r as registerInstance, h } from './index-39ec39b1.js';

const noteCss = "";

const Note = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Note"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "List Notes")), h("ion-item", null, h("ion-label", null, "Default"), h("ion-note", { slot: "end" }, "11")), h("ion-item", null, h("ion-label", null, "Primary"), h("ion-note", { slot: "end", color: "primary" }, "22")), h("ion-item", null, h("ion-label", null, "Secondary"), h("ion-note", { slot: "end", color: "secondary" }, "33")), h("ion-item", null, h("ion-label", null, "Tertiary"), h("ion-note", { slot: "end", color: "tertiary" }, "44")), h("ion-item", null, h("ion-label", null, "Success"), h("ion-note", { slot: "end", color: "success" }, "55")), h("ion-item", null, h("ion-label", null, "Warning"), h("ion-note", { slot: "end", color: "warning" }, "66")), h("ion-item", null, h("ion-label", null, "Danger"), h("ion-note", { slot: "end", color: "danger" }, "77")), h("ion-item", null, h("ion-label", null, "Dark"), h("ion-note", { slot: "end", color: "dark" }, "88"))))
        ];
    }
};
Note.style = noteCss;

export { Note as component_note };
