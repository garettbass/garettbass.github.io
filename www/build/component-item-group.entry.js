import { r as registerInstance, h } from './index-39ec39b1.js';

const itemGroupCss = "component-item-group ion-list{margin-bottom:var(--ion-margin, 20px)}.ios component-item-group ion-item:last-of-type{--inner-border-width:0}.md component-item-group ion-item:last-of-type{--inner-border-width:0;--border-width:0 0 1px 0}";

const ItemGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Item Group"))),
            h("ion-content", { fullscreen: true }, h("ion-list", null, h("ion-item-group", null, h("ion-item-divider", null, h("ion-label", null, "A")), h("ion-item", null, h("ion-label", null, h("b", null, "Abigail"))), h("ion-item", null, h("ion-label", null, "Jesse ", h("b", null, "Adams"))), h("ion-item", null, h("ion-label", null, h("b", null, "Alan")))), h("ion-item-group", null, h("ion-item-divider", null, h("ion-label", null, "B")), h("ion-item", null, h("ion-label", null, "James ", h("b", null, "Bach"))), h("ion-item", null, h("ion-label", null, "Flora ", h("b", null, "Ball"))), h("ion-item", null, h("ion-label", null, "London ", h("b", null, "Black"))), h("ion-item", null, h("ion-label", null, "Alisha ", h("b", null, "Brady"))), h("ion-item", null, h("ion-label", null, h("b", null, "Brianna"))), h("ion-item", null, h("ion-label", null, "Monica ", h("b", null, "Brown")))), h("ion-item-group", null, h("ion-item-divider", null, h("ion-label", null, "C")), h("ion-item", null, h("ion-label", null, h("b", null, "Carla"))), h("ion-item", null, h("ion-label", null, "Brian ", h("b", null, "Clark"))), h("ion-item", null, h("ion-label", null, "Robert ", h("b", null, "Cline"))))))
        ];
    }
};
ItemGroup.style = itemGroupCss;

export { ItemGroup as component_item_group };
