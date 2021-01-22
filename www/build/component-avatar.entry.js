import { r as registerInstance, h } from './index-39ec39b1.js';

const avatarCss = "";

const Avatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Avatar"))),
            h("ion-content", { fullscreen: true }, h("ion-list-header", null, h("ion-label", null, "Default")), h("ion-avatar", { class: "ion-margin-start" }, h("img", { src: "/assets/avatar.svg" })), h("ion-list-header", null, h("ion-label", null, "Chip Avatar")), h("ion-chip", { class: "ion-margin-start" }, h("ion-avatar", null, h("img", { src: "/assets/avatar.svg" })), h("ion-label", null, "Kit Bishop")), h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Item Avatars")), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar.svg" })), h("ion-label", null, "Lorem ipsum")), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar.svg" })), h("ion-label", null, h("h3", null, "Lorem ipsum"), h("p", null, "dolor sit amet"))), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar.svg" })), h("ion-label", null, h("h3", null, "Lorem ipsum"), h("p", null, "dolor sit amet"), h("p", null, "consectetur adipiscing elit. Duis ut urna neque."))), h("ion-item", null, h("ion-avatar", { slot: "end" }, h("img", { src: "/assets/avatar.svg" })), h("ion-label", null, "Lorem ipsum")), h("ion-item", null, h("ion-avatar", { slot: "end" }, h("img", { src: "/assets/avatar.svg" })), h("ion-label", null, h("h3", null, "Lorem ipsum"), h("p", null, "dolor sit amet"))), h("ion-item", null, h("ion-avatar", { slot: "end" }, h("img", { src: "/assets/avatar.svg" })), h("ion-label", null, h("h3", null, "Lorem ipsum"), h("p", null, "dolor sit amet"), h("p", null, "consectetur adipiscing elit. Duis ut urna neque.")))))
        ];
    }
};
Avatar.style = avatarCss;

export { Avatar as component_avatar };
