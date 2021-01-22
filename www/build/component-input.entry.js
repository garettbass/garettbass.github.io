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
import { b as alertController } from './overlays-3b327421.js';

const inputCss = "";

const Input = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.processForm = async (event) => {
            event.preventDefault();
            const alert = await alertController.create({
                header: 'Account Created',
                message: `Created account for: <b>${this.firstName} ${this.lastName}</b>`,
                buttons: [{
                        text: 'OK'
                    }]
            });
            alert.present();
        };
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Input"))),
            h("ion-content", { fullscreen: true }, h("form", { onSubmit: this.processForm }, h("ion-list", { lines: "full", class: "ion-no-margin ion-no-padding" }, h("ion-item", null, h("ion-label", { position: "stacked" }, "First Name ", h("ion-text", { color: "danger" }, "*")), h("ion-input", { required: true, type: "text", onInput: (e) => { this.firstName = e.target.value; }, value: this.firstName })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Last Name ", h("ion-text", { color: "danger" }, "*")), h("ion-input", { required: true, type: "text", onInput: (e) => { this.lastName = e.target.value; }, value: this.lastName })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Address"), h("ion-input", { placeholder: "Address Line 1" }), h("ion-input", { placeholder: "Address Line 2" }), h("ion-input", { placeholder: "City" }), h("ion-input", { placeholder: "State" }), h("ion-input", { placeholder: "Zip Code" })), h("ion-item", null, h("ion-label", { position: "stacked" }, "Notes"), h("ion-textarea", null))), h("div", { class: "ion-padding" }, h("ion-button", { expand: "block", type: "submit", class: "ion-no-margin" }, "Create account")))),
        ];
    }
    get el() { return getElement(this); }
};
Input.style = inputCss;

export { Input as component_input };
