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
import { t as toastController } from './overlays-3b327421.js';

const toastCss = "";

const Toast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openToast = async () => {
            const toast = await toastController.create({
                color: 'dark',
                duration: 2000,
                message: 'Paired successfully',
                buttons: [{
                        text: 'Close',
                        role: 'cancel'
                    }]
            });
            toast.present();
        };
    }
    render() {
        const description = `The <b>Toast</b> is a subtle notification commonly used in modern
      applications. It can be used to provide feedback about an operation or to display a
      system message. It appears on top of the app's content, and can be dismissed by the
      app to resume user interaction with the app.`;
        const url = 'toast';
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Toast"))),
            h("ion-content", { fullscreen: true, class: "component-content" }, h("component-details", { description: description, url: url }), h("div", { class: "ion-padding-start ion-padding-end" }, h("ion-button", { expand: "block", onClick: this.openToast }, "Open Toast")))
        ];
    }
};
Toast.style = toastCss;

export { Toast as component_toast };
