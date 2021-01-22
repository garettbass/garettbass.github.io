import { r as registerInstance, h } from './index-39ec39b1.js';

const templateCss = "";

const _template_ = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "_name_"))),
            h("ion-content", { fullscreen: true })
        ];
    }
};
_template_.style = templateCss;

export { _template_ as component__template_ };
