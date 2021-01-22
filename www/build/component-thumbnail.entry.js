import { r as registerInstance, h } from './index-39ec39b1.js';

const thumbnailCss = "";

const Thumbnail = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Thumbnail"))),
            h("ion-content", { fullscreen: true }, h("ion-list-header", null, h("ion-label", null, "Default")), h("ion-thumbnail", { class: "ion-margin-start" }, h("img", { src: "/assets/thumbnail.svg" })), h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Item Thumbnails")), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("img", { src: "/assets/thumbnail.svg" })), h("ion-label", null, "Lorem ipsum")), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("img", { src: "/assets/thumbnail.svg" })), h("ion-label", null, h("h3", null, "Lorem ipsum"), h("p", null, "dolor sit amet"))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("img", { src: "/assets/thumbnail.svg" })), h("ion-label", null, h("h3", null, "Lorem ipsum"), h("p", null, "dolor sit amet"), h("p", null, "consectetur adipiscing elit. Duis ut urna neque."))), h("ion-item", null, h("ion-thumbnail", { slot: "end" }, h("img", { src: "/assets/thumbnail.svg" })), h("ion-label", null, "Lorem ipsum")), h("ion-item", null, h("ion-thumbnail", { slot: "end" }, h("img", { src: "/assets/thumbnail.svg" })), h("ion-label", null, h("h3", null, "Lorem ipsum"), h("p", null, "dolor sit amet"))), h("ion-item", null, h("ion-thumbnail", { slot: "end" }, h("img", { src: "/assets/thumbnail.svg" })), h("ion-label", null, h("h3", null, "Lorem ipsum"), h("p", null, "dolor sit amet"), h("p", null, "consectetur adipiscing elit. Duis ut urna neque.")))))
        ];
    }
};
Thumbnail.style = thumbnailCss;

export { Thumbnail as component_thumbnail };
