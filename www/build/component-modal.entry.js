import { r as registerInstance, h, e as getElement } from './index-39ec39b1.js';
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

const modalCss = "";

const Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openModal = async () => {
            const modal = await modalController.create({
                component: 'component-modal-content',
                swipeToClose: true,
                presentingElement: this.el
            });
            modal.present();
            this.currentModal = modal;
        };
    }
    render() {
        const description = `The <b>Modal</b> is a dialog that appears on top of the app's
      content, and must be dismissed by the user before interaction can resume. It is
      useful as a select component when there are a lot of options to choose from, or when
      filtering items in a list, as well as many other use cases.`;
        const url = 'modal';
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Modal"))),
            h("ion-content", { fullscreen: true, class: "component-content" }, h("component-details", { description: description, url: url }), h("div", { class: "ion-padding-start ion-padding-end" }, h("ion-button", { expand: "block", onClick: this.openModal }, "Open Modal")))
        ];
    }
    get el() { return getElement(this); }
};
Modal.style = modalCss;

export { Modal as component_modal };
