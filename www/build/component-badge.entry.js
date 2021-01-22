import { r as registerInstance, h } from './index-39ec39b1.js';

const badgeCss = "ion-tab-bar{position:fixed;right:0;bottom:0;left:0}";

const Badge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Badge"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Badges")), h("ion-item", null, h("ion-label", null, "Followers"), h("ion-badge", { slot: "end" }, "22k")), h("ion-item", null, h("ion-label", null, "Likes"), h("ion-badge", { color: "secondary", slot: "end" }, "118k")), h("ion-item", null, h("ion-label", null, "Stars"), h("ion-badge", { color: "tertiary", slot: "end" }, "34k")), h("ion-item", null, h("ion-label", null, "Completed"), h("ion-badge", { color: "success", slot: "end" }, "80")), h("ion-item", null, h("ion-label", null, "Warnings"), h("ion-badge", { color: "warning", slot: "end" }, "70")), h("ion-item", null, h("ion-label", null, "Notifications"), h("ion-badge", { color: "danger", slot: "end" }, "1000")), h("ion-item", null, h("ion-label", null, "Unread"), h("ion-badge", { color: "light", slot: "end" }, "24")), h("ion-item", null, h("ion-label", null, "Drafts"), h("ion-badge", { color: "medium", slot: "end" }, "14")), h("ion-item", { lines: "full" }, h("ion-label", null, "Deleted"), h("ion-badge", { color: "dark", slot: "end" }, "4"))), h("ion-tab-bar", null, h("ion-tab-button", { selected: true }, h("ion-icon", { name: "globe" }), h("ion-badge", { color: "tertiary" }, "44")), h("ion-tab-button", null, h("ion-icon", { name: "people" }), h("ion-badge", { color: "success" }, "1")), h("ion-tab-button", null, h("ion-icon", { name: "mail" }), h("ion-badge", null, "2.3k"))))
        ];
    }
};
Badge.style = badgeCss;

export { Badge as component_badge };
