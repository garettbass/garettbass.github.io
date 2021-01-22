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
import { b as alertController } from './overlays-3b327421.js';

const alertCss = "";

const Alert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = async () => {
            const alert = await alertController.create({
                header: 'Use this lightsaber?',
                message: 'Do you agree to use this lightsaber to do good across the galaxy?',
                buttons: ['Disagree', 'Agree']
            });
            await alert.present();
        };
    }
    render() {
        const description = `The <b>Alert</b> is a dialog that presents users with information
      or collects information from the user via inputs. It appears on top of the app's content,
      and must be manually dismissed by the user before they can resume interaction with the app.`;
        const url = 'alert';
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Alert"))),
            h("ion-content", { fullscreen: true, class: "component-content" }, h("component-details", { description: description, url: url }), h("div", { class: "ion-padding-start ion-padding-end" }, h("ion-button", { expand: "block", onClick: this.open }, "Open Alert")))
        ];
    }
};
Alert.style = alertCss;

export { Alert as component_alert };
