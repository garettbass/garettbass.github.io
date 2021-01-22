import { r as registerInstance, h } from './index-39ec39b1.js';

const navCss = "component-nav p:first-of-type{margin-top:0}component-nav p:last-of-type{margin-bottom:0}component-nav p{color:var(--ion-color-step-800, #3e4a58)}";

const Nav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Navigation"))),
            h("ion-content", { fullscreen: true }, h("div", { class: "ion-padding" }, h("p", null, "Traditional web apps use a linear history, meaning that the user navigates forward to a page and can hit the back button to navigate back."), h("p", null, "In contrast, mobile apps often utilize parallel, \"non-linear\" navigation. For example, a tabbed interface can have separate navigation stacks for each tab, making sure the user never loses their place as they navigate and switch between tabs."), h("p", null, "Ionic Framework embraces the latter approach, supporting parallel navigation histories that can also be nested, all while maintaining the familiar browser-style navigation concepts web developers are familiar with."), h("p", null, "The implementation details for navigating in Ionic Framework varies between the different frameworks. View the navigation guide for each framework below.")), h("ion-list", null, h("ion-item", { href: "https://ionicframework.com/docs/angular/navigation", target: "_blank" }, h("ion-label", null, "Angular Navigation")), h("ion-item", { href: "https://ionicframework.com/docs/react/navigation", target: "_blank" }, h("ion-label", null, "React Navigation")), h("ion-item", { href: "https://ionicframework.com/docs/vue/navigation", target: "_blank" }, h("ion-label", null, "Vue Navigation"))))
        ];
    }
};
Nav.style = navCss;

export { Nav as component_nav };
