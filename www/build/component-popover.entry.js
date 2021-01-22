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
import { c as popoverController } from './overlays-3b327421.js';

const popoverCss = "";

const Popover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showPopover = async (event) => {
            const popover = await popoverController.create({
                component: 'popover-example-page',
                event,
                translucent: true
            });
            return popover.present();
        };
    }
    render() {
        const description = `The <b>Popover</b> is a dialog that appears on top of the current
      page. It can be used for anything, but generally it is used for overflow actions that don't
      fit in the navigation bar.`;
        const url = 'popover';
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Popover"), h("ion-buttons", { slot: "end" }, h("ion-button", { slot: "end", onClick: this.showPopover }, h("ion-icon", { slot: "icon-only", ios: "ellipsis-horizontal", md: "ellipsis-vertical" }))))),
            h("ion-content", { fullscreen: true, class: "component-content" }, h("component-details", { description: description, url: url }), h("div", { class: "ion-padding-start ion-padding-end" }, h("ion-button", { expand: "block", onClick: this.showPopover }, "Open Popover")))
        ];
    }
    get el() { return getElement(this); }
};
Popover.style = popoverCss;

export { Popover as component_popover };
