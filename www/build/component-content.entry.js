import { r as registerInstance, h, e as getElement } from './index-39ec39b1.js';

const contentCss = "";

const Content = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scrollToBottom = () => {
            this.getContent().scrollToBottom(500);
        };
        this.scrollToTop = () => {
            this.getContent().scrollToTop(500);
        };
    }
    getContent() {
        return this.el.querySelector('ion-content');
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Content"))),
            h("ion-content", { fullscreen: true }, h("p", { class: "ion-padding-start ion-padding-end" }, h("ion-button", { onClick: this.scrollToBottom, expand: "block", fill: "outline" }, "Scroll To Bottom")), new Array(30).fill(0).map((_, i) => {
                return (h("ion-item", null, h("ion-label", null, "Item ", i)));
            }), h("p", { class: "ion-padding-start ion-padding-end" }, h("ion-button", { onClick: this.scrollToTop, expand: "block", fill: "outline" }, "Scroll To Top")))
        ];
    }
    get el() { return getElement(this); }
};
Content.style = contentCss;

export { Content as component_content };
