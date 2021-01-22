import { r as registerInstance, h } from './index-39ec39b1.js';

const reorderCss = "";

const Reorder = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleReorder = ({ detail }) => {
            detail.complete();
        };
        this.toggleReorder = () => {
            const reorderGroup = document.getElementById('reorder');
            reorderGroup.disabled = !reorderGroup.disabled;
        };
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Reorder"), h("ion-buttons", { slot: "end" }, h("ion-button", { onClick: this.toggleReorder }, "Toggle")))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Reorder Icon")), h("ion-reorder-group", { id: "reorder", onIonItemReorder: this.handleReorder }, h("ion-item", null, h("ion-label", null, "Item 1"), h("ion-reorder", { slot: "end" })), h("ion-item", null, h("ion-label", null, "Item 2"), h("ion-reorder", { slot: "end" })), h("ion-item", null, h("ion-label", null, "Item 3"), h("ion-reorder", { slot: "end" })), h("ion-item", null, h("ion-label", null, "Item 4"), h("ion-reorder", { slot: "end" })), h("ion-list-header", null, h("ion-label", null, "Custom Reorder Icon")), h("ion-item", null, h("ion-label", null, "Item 5"), h("ion-reorder", { slot: "end" }, h("ion-icon", { name: "swap-vertical" }))), h("ion-item", null, h("ion-label", null, "Item 6"), h("ion-reorder", { slot: "end" }, h("ion-icon", { name: "swap-vertical" }))), h("ion-item", null, h("ion-label", null, "Item 7"), h("ion-reorder", { slot: "end" }, h("ion-icon", { name: "swap-vertical" }))), h("ion-list-header", null, h("ion-label", null, "Reorder Item")), h("ion-reorder", null, h("ion-item", null, h("ion-label", null, "Item 8"))), h("ion-reorder", null, h("ion-item", null, h("ion-label", null, "Item 9"))), h("ion-reorder", null, h("ion-item", null, h("ion-label", null, "Item 10"))))))
        ];
    }
};
Reorder.style = reorderCss;

export { Reorder as component_reorder };
