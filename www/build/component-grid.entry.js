import { r as registerInstance, h } from './index-39ec39b1.js';

const gridCss = "ion-col>div{background-color:#f7f7f7;border:solid 1px #ddd;padding:10px}";

const Grid = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Grid"))),
            h("ion-content", { fullscreen: true }, h("ion-grid", null, h("ion-row", null, h("ion-col", null, h("div", null, "1 of 2")), h("ion-col", null, h("div", null, "2 of 2"))), h("ion-row", null, h("ion-col", null, h("div", null, "1 of 3")), h("ion-col", null, h("div", null, "2 of 3")), h("ion-col", null, h("div", null, "3 of 3"))), h("ion-row", null, h("ion-col", null, h("div", null, "1 of 3")), h("ion-col", { "col-6": true }, h("div", null, "2 of 3")), h("ion-col", null, h("div", null, "3 of 3"))), h("ion-row", null, h("ion-col", { "col-6": true }, h("div", null, "1 of 3")), h("ion-col", null, h("div", null, "2 of 3")), h("ion-col", null, h("div", null, "3 of 3"))), h("ion-row", null, h("ion-col", { "offset-4": true }, h("div", null, "1 of 2")), h("ion-col", null, h("div", null, "2 of 2"))), h("ion-row", null, h("ion-col", null, h("div", null, "1 of 2")), h("ion-col", { "offset-4": true }, h("div", null, "2 of 2"))), h("ion-row", null, h("ion-col", null, h("div", null, "1 of 4")), h("ion-col", null, h("div", null, "2 of 4")), h("ion-col", null, h("div", null, "3 of 4")), h("ion-col", null, h("div", null, "4 of 4")))))
        ];
    }
};
Grid.style = gridCss;

export { Grid as component_grid };
