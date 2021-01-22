import { r as registerInstance, h } from './index-39ec39b1.js';

const textCss = "h1{margin-top:0}";

const Text = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Text"))),
            h("ion-content", { fullscreen: true, class: "ion-padding-start ion-padding-end" }, h("ion-text", { color: "primary" }, h("h1", null, " Lorem ipsum dolor sit amet, consectetur adipiscing elit.")), h("ion-text", { color: "secondary" }, h("h2", null, "Nam rutrum justo massa, maximus elementum leo dignissim ac.")), h("ion-text", { color: "tertiary" }, h("h3", null, "Vestibulum eleifend lorem nec neque interdum varius.")), h("ion-text", { color: "success" }, h("h4", null, "Sed in neque at nibh congue tincidunt.")), h("ion-text", { color: "warning" }, h("h5", null, "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;")), h("ion-text", { color: "danger" }, h("h6", null, "Suspendisse potenti.")), h("p", null, "Donec magna odio, ", h("ion-text", { color: "primary" }, "semper"), " ac nibh et, vestibulum eleifend felis. Donec ", h("ion-text", { color: "secondary" }, "pulvinar"), " ex non quam vulputate malesuada in a magna. Praesent massa arcu, ", h("ion-text", { color: "tertiary" }, "vehicula"), " id pharetra et, cursus at lectus."))
        ];
    }
};
Text.style = textCss;

export { Text as component_text };
