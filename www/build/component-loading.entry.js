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
import { l as loadingController } from './overlays-3b327421.js';

const loadingCss = "";

const Loading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleButtonClick = async () => {
            const loading = await loadingController.create({
                message: 'Please wait...',
                duration: 3000
            });
            loading.present();
        };
    }
    render() {
        const description = `The <b>Loading</b> overlay can be used to indicate activity
      while blocking user interaction. It appears on top of the app's content, and can be
      dismissed by the app to resume user interaction with the app.`;
        const url = 'loading';
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Loading"))),
            h("ion-content", { fullscreen: true, class: "component-content" }, h("component-details", { description: description, url: url }), h("div", { class: "ion-padding-start ion-padding-end" }, h("ion-button", { expand: "block", onClick: this.handleButtonClick }, "Open Loading")))
        ];
    }
    get el() { return getElement(this); }
};
Loading.style = loadingCss;

export { Loading as component_loading };
