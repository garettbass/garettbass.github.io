import { r as registerInstance, h } from './index-39ec39b1.js';
import './ionic-global-95f99679.js';
import './utils-39861029.js';
import './index-966ebc8e.js';
import './helpers-2774d300.js';
import './animation-b7b16b67.js';
import './index-052f212b.js';
import './ios.transition-b18de522.js';
import './md.transition-a24a0e4d.js';
import './cubic-bezier-89113939.js';
import './index-66808674.js';
import './hardware-back-button-24485eb0.js';
import './index-6e57bdde.js';
import { m as modalController } from './overlays-3b327421.js';

const ModalContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dismiss = () => {
            modalController.dismiss();
        };
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-button", { onClick: this.dismiss }, "Cancel")), h("ion-title", null, "Contacts"), h("ion-buttons", { slot: "end" }, h("ion-button", null, h("ion-icon", { slot: "icon-only", name: "add" }))))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-item", null, h("ion-avatar", { slot: "start" }, h("ion-img", { src: "/assets/avatar-gollum.jpg" })), h("ion-label", null, h("h2", null, "Gollum"), h("p", null, "Sneaky little hobbitses!"))), h("ion-item", null, h("ion-avatar", { slot: "start" }, h("ion-img", { src: "/assets/avatar-frodo.jpg" })), h("ion-label", null, h("h2", null, "Frodo"), h("p", null, "Go back, Sam! I'm going to Mordor alone!"))), h("ion-item", { lines: "full" }, h("ion-avatar", { slot: "start" }, h("ion-img", { src: "/assets/avatar-samwise.jpg" })), h("ion-label", null, h("h2", null, "Samwise"), h("p", null, "What we need is a few good taters.")))))
        ];
    }
};

export { ModalContent as component_modal_content };
