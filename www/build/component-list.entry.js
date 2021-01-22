import { r as registerInstance, h } from './index-39ec39b1.js';

const listCss = "";

const List = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "List"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Recent Conversations")), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar-finn.png" })), h("ion-label", null, h("h2", null, "Finn"), h("h3", null, "I'm a big deal"), h("p", null, "Listen, I've had a pretty messed up day..."))), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar-han.png" })), h("ion-label", null, h("h2", null, "Han"), h("h3", null, "Look, kid..."), h("p", null, "I've got enough on my plate as it is, and I..."))), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar-rey.png" })), h("ion-label", null, h("h2", null, "Rey"), h("h3", null, "I can handle myself"), h("p", null, "You will remove these restraints and leave..."))), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar-luke.png" })), h("ion-label", null, h("h2", null, "Luke"), h("h3", null, "Your thoughts betray you"), h("p", null, "I feel the good in you, the conflict...")))), h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Online")), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar-poe.png" })), h("ion-label", null, h("h2", null, "Poe"), h("h3", null, "New Ride"), h("p", null, "I just upgraded my X-Wing. Next time..."))), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar-ben.png" })), h("ion-label", null, h("h2", null, "Ben"), h("h3", null, "Move Along"), h("p", null, "These aren't the droids you're looking for..."))), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar-leia.png" })), h("ion-label", null, h("h2", null, "Leia"), h("h3", null, "You're My Only Hope"), h("p", null, "I've placed information vital to the survival..."))), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("img", { src: "/assets/avatar-yoda.png" })), h("ion-label", null, h("h2", null, "Yoda"), h("h3", null, "Size matters not"), h("p", null, "Do or do not. There is no try...")))))
        ];
    }
};
List.style = listCss;

export { List as component_list };
