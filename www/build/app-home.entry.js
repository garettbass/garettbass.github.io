import { r as registerInstance, h } from './index-39ec39b1.js';
import { g as getComponents } from './component-utils-d9a7c721.js';

const appHomeCss = ".theme-list ion-item,.home-list ion-item{--padding-start:14px;--inner-padding-end:14px;--transition:none}.theme-list,.home-list{padding-bottom:40px !important}.theme-list ion-toggle{padding-right:0}.home-list{padding-top:0 !important}.ios .home-list ion-item:first-child{--border-width:0.55px 0 0 0}.md .home-list ion-item:first-child{--border-width:1px 0 0 0}.ios .home-list ion-item:last-child{--border-width:0 0 0.55px 0;--inner-border-width:0}.md .home-list ion-item:last-child{--border-width:0 0 1px 0;--inner-border-width:0}.component-icon{border-radius:50%;padding:7px;height:18px;width:18px;margin-top:5px;margin-bottom:5px}.component-icon-dark{background:var(--ion-color-step-850, #27323e);color:var(--ion-item-background, #fff)}.component-icon-primary{background:var(--ion-color-primary);color:#fff}";

const AppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.components = getComponents();
        this.toggleDarkMode = () => {
            document.body.classList.toggle('dark');
        };
    }
    render() {
        return [
            h("ion-header", { translucent: false }, h("ion-toolbar", null, h("ion-title", null, "Ionic Framework"))),
            h("ion-content", { fullscreen: true }, h("ion-header", { collapse: "condense" }, h("ion-toolbar", null, h("ion-title", { size: "large" }, "Ionic Framework"))), h("ion-list", { class: "theme-list", lines: "full" }, h("ion-item", null, h("ion-icon", { slot: "start", icon: "moon", class: "component-icon component-icon-dark" }), h("ion-label", null, "Dark Mode"), h("ion-toggle", { slot: "end", onIonChange: this.toggleDarkMode }))), h("ion-list", { class: "home-list" }, this.components.map(component => {
                const href = component.id === 'tabs' ? '/component/tabs/music' : `/component/${component.id}`;
                return (h("ion-item", { href: href }, h("ion-icon", { slot: "start", icon: component.icon, class: "component-icon component-icon-primary" }), h("ion-label", null, component.name)));
            })))
        ];
    }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
