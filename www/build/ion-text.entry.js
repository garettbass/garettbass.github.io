import { r as registerInstance, h, H as Host } from './index-39ec39b1.js';
import { g as getIonMode } from './ionic-global-95f99679.js';
import { c as createColorClasses } from './theme-74c22054.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: Object.assign(Object.assign({}, createColorClasses(this.color)), { [mode]: true }) }, h("slot", null)));
    }
};
Text.style = textCss;

export { Text as ion_text };
