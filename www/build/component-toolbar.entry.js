import { r as registerInstance, h } from './index-39ec39b1.js';
import './ionic-global-95f99679.js';
import './utils-39861029.js';
import { g as getMode } from './index-966ebc8e.js';
import './helpers-2774d300.js';
import './animation-b7b16b67.js';
import './index-052f212b.js';
import './ios.transition-b18de522.js';
import './md.transition-a24a0e4d.js';
import './cubic-bezier-89113939.js';
import './index-66808674.js';
import './hardware-back-button-24485eb0.js';
import './index-6e57bdde.js';
import './overlays-3b327421.js';

const toolbarCss = ".ios component-toolbar ion-header ion-segment{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}.ios component-toolbar ion-footer ion-title{padding-left:12px;text-align:left}component-toolbar ion-content ion-header ion-toolbar:first-of-type{padding-top:0}";

const Toolbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showSearchbar = false;
    }
    toggleText() {
        const button = document.getElementById('changeText');
        const hasText = document.getElementById('childText');
        if (hasText) {
            button.removeChild(hasText);
        }
        else {
            const text = document.createElement('span');
            text.innerHTML = 'Toggle';
            text.id = 'childText';
            button.appendChild(text);
        }
    }
    renderMainToolbar() {
        const ios = getMode() === 'ios';
        if (ios) {
            return (h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-segment", { value: "all" }, h("ion-segment-button", { value: "all" }, "All"), h("ion-segment-button", { value: "favorites" }, "Favorites"))));
        }
        else if (this.showSearchbar) {
            return (h("ion-toolbar", null, h("ion-searchbar", { showCancelButton: "always", onIonCancel: () => this.showSearchbar = false })));
        }
        else {
            return (h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", { size: "large" }, "Toolbar"), h("ion-buttons", { slot: "end" }, h("ion-button", { onClick: () => this.showSearchbar = true }, h("ion-icon", { slot: "icon-only", name: "search-sharp" })))));
        }
    }
    render() {
        const ios = getMode() === 'ios';
        return [
            h("ion-header", { translucent: true }, this.renderMainToolbar(), !ios &&
                h("ion-toolbar", null, h("ion-segment", { value: "all" }, h("ion-segment-button", { value: "all" }, "All"), h("ion-segment-button", { value: "favorites" }, "Favorites")))),
            h("ion-content", null, h("ion-header", { collapse: "condense" }, h("ion-toolbar", null, h("ion-title", { size: "large" }, "Toolbar")), h("ion-toolbar", null, h("ion-searchbar", { showCancelButton: "focus" }))), h("ion-header", null, h("ion-toolbar", null, h("ion-title", null, "Page title"), h("ion-buttons", { slot: "primary" }, h("ion-button", null, h("ion-icon", { slot: "icon-only", ios: "ellipsis-horizontal", md: "ellipsis-vertical" }))))), h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "primary" }, h("ion-button", null, "Edit")), h("ion-buttons", { slot: "end" }, h("ion-button", null, h("ion-icon", { slot: "icon-only", ios: "add-outline", md: "add-sharp" }))), h("ion-title", null, "Page title"))), h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "#", text: ios ? 'February' : '' })), h("ion-buttons", { slot: "end" }, h("ion-button", null, h("ion-icon", { slot: "icon-only", ios: "list-outline", md: "list-sharp" })), h("ion-button", null, h("ion-icon", { slot: "icon-only", ios: "search-outline", md: "search-sharp" })), h("ion-button", null, h("ion-icon", { slot: "icon-only", ios: "add-outline", md: "add-sharp" }))))), h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "primary" }, h("ion-button", null, h("ion-icon", { slot: "icon-only", ios: "heart-outline", md: "heart-sharp" }))), h("ion-buttons", { slot: "end" }, h("ion-button", null, h("ion-icon", { slot: "icon-only", ios: "search-outline", md: "search-sharp" }))), h("ion-title", null, "Page title"))), h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "primary" }, h("ion-button", null, "Reset")), h("ion-buttons", { slot: "end" }, h("ion-button", null, "Done")), h("ion-title", null, "Page title"))), h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "#", text: ios ? 'Notes' : '' })), h("ion-buttons", { slot: "end" }, h("ion-button", null, h("ion-icon", { slot: "icon-only", name: "person-circle-outline" })), h("ion-button", null, h("ion-icon", { slot: "icon-only", name: "share-outline" }))))), h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-menu-button", { autoHide: false })), h("ion-title", null, "Page title"))), h("ion-header", null, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "#" })), h("ion-buttons", { slot: "end" }, h("ion-button", null, h("ion-icon", { slot: "icon-only", ios: "star-outline", md: "star-sharp" }))), h("ion-title", null, "Page title"))), h("ion-header", null, h("ion-toolbar", null, h("ion-title", null, "Page title"), h("ion-progress-bar", { value: .4 })))),
            h("ion-footer", null, h("ion-toolbar", null, h("ion-title", null, "Click Button to Toggle Text"), h("ion-buttons", { slot: "end" }, h("ion-button", { id: "changeText", onClick: () => this.toggleText() }, h("ion-icon", { slot: "start", name: "refresh" })))))
        ];
    }
};
Toolbar.style = toolbarCss;

export { Toolbar as component_toolbar };
