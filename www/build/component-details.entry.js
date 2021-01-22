import { r as registerInstance, h } from './index-39ec39b1.js';

const componentDetailsCss = "component-details ion-list{padding-bottom:0 !important;margin-bottom:26px !important}component-details .item .component-description{color:var(--ion-color-step-800, #3e4a58);font-size:18px;line-height:1.4;white-space:normal;padding-bottom:16px}component-details .item .component-description b{color:var(--ion-text-color, #000);font-weight:450}component-details .component-link{text-transform:capitalize;font-size:16px}";

const ComponentDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const { url, description } = this;
        const name = url.replace('-', ' ');
        return (h("ion-list", null, h("ion-item", { lines: "full" }, h("ion-label", { class: "component-description" }, h("span", { innerHTML: description }))), h("ion-item", { class: "component-link", href: `https://ionicframework.com/docs/api/${url}`, target: "_blank" }, h("ion-label", { color: "primary" }, name, " API Docs")), h("ion-item", { lines: "full", class: "component-link", href: "https://ionicframework.com/docs/components", target: "_blank" }, h("ion-label", { color: "primary" }, "UI Component Docs"))));
    }
};
ComponentDetails.style = componentDetailsCss;

export { ComponentDetails as component_details };
