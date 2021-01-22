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

const segmentCss = ".ios component-segment ion-header ion-segment{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}component-segment ion-content ion-segment{margin:10px auto}";

const Segment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // In iOS the segment is in the first toolbar,
    // in Android it is in the last toolbar
    renderToolbars() {
        const mode = getMode();
        if (mode === 'ios') {
            return [
                h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-segment", { value: "all" }, h("ion-segment-button", { value: "all" }, "All"), h("ion-segment-button", { value: "favorites" }, "Favorites"))),
                h("ion-toolbar", null, h("ion-title", null, "Segment"))
            ];
        }
        return [
            h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Segment")),
            h("ion-toolbar", null, h("ion-segment", { value: "all" }, h("ion-segment-button", { value: "all" }, "All"), h("ion-segment-button", { value: "favorites" }, "Favorites")))
        ];
    }
    render() {
        return [
            h("ion-header", { translucent: true }, this.renderToolbars()),
            h("ion-content", { fullscreen: true }, h("ion-list-header", null, h("ion-label", null, "Colors")), h("div", { class: "ion-padding-horizontal" }, h("ion-segment", { value: "call" }, h("ion-segment-button", { value: "call" }, h("ion-label", null, "Call")), h("ion-segment-button", { value: "favorite" }, h("ion-label", null, "Favorite")), h("ion-segment-button", { value: "map" }, h("ion-label", null, "Map"))), h("ion-segment", { value: "favorite", color: "secondary" }, h("ion-segment-button", { value: "call" }, h("ion-icon", { name: "call" })), h("ion-segment-button", { value: "favorite" }, h("ion-icon", { name: "heart" })), h("ion-segment-button", { value: "map" }, h("ion-icon", { name: "pin" }))), h("ion-segment", { value: "map", color: "tertiary" }, h("ion-segment-button", { value: "call" }, h("ion-label", null, "Call"), h("ion-icon", { name: "call" })), h("ion-segment-button", { value: "favorite" }, h("ion-label", null, "Favorite"), h("ion-icon", { name: "heart" })), h("ion-segment-button", { value: "map" }, h("ion-label", null, "Map"), h("ion-icon", { name: "pin" }))), h("ion-segment", { value: "call", color: "success" }, h("ion-segment-button", { value: "call", layout: "icon-bottom" }, h("ion-icon", { name: "call" }), h("ion-label", null, "Call")), h("ion-segment-button", { value: "favorite", layout: "icon-bottom" }, h("ion-icon", { name: "heart" }), h("ion-label", null, "Favorite")), h("ion-segment-button", { value: "map", layout: "icon-bottom" }, h("ion-icon", { name: "pin" }), h("ion-label", null, "Map"))), h("ion-segment", { value: "favorite", color: "warning" }, h("ion-segment-button", { value: "call", layout: "icon-start" }, h("ion-icon", { name: "call" }), h("ion-label", null, "Call")), h("ion-segment-button", { value: "favorite", layout: "icon-start" }, h("ion-icon", { name: "heart" }), h("ion-label", null, "Favorite")), h("ion-segment-button", { value: "map", layout: "icon-start" }, h("ion-icon", { name: "pin" }), h("ion-label", null, "Map"))), h("ion-segment", { value: "map", color: "danger" }, h("ion-segment-button", { value: "call", layout: "icon-end" }, h("ion-icon", { name: "call" }), h("ion-label", null, "Call")), h("ion-segment-button", { value: "favorite", layout: "icon-end" }, h("ion-icon", { name: "heart" }), h("ion-label", null, "Favorite")), h("ion-segment-button", { value: "map", layout: "icon-end" }, h("ion-icon", { name: "pin" }), h("ion-label", null, "Map")))), h("ion-list-header", null, h("ion-label", null, "Scrollable")), h("div", { class: "ion-padding-horizontal" }, h("ion-segment", { value: "call", scrollable: true }, h("ion-segment-button", { value: "call" }, h("ion-label", null, "Call")), h("ion-segment-button", { value: "favorite" }, h("ion-label", null, "Favorite")), h("ion-segment-button", { value: "map" }, h("ion-label", null, "Map")), h("ion-segment-button", { value: "watch" }, h("ion-label", null, "Watch")), h("ion-segment-button", { value: "account" }, h("ion-label", null, "Account")), h("ion-segment-button", { value: "settings" }, h("ion-label", null, "Settings")), h("ion-segment-button", { value: "profile" }, h("ion-label", null, "Profile"))), h("ion-segment", { value: "favorite", color: "tertiary", scrollable: true }, h("ion-segment-button", { value: "call" }, h("ion-icon", { name: "call" })), h("ion-segment-button", { value: "favorite" }, h("ion-icon", { name: "heart" })), h("ion-segment-button", { value: "map" }, h("ion-icon", { name: "pin" })), h("ion-segment-button", { value: "watch" }, h("ion-icon", { name: "play-circle-outline" })), h("ion-segment-button", { value: "account" }, h("ion-icon", { name: "people" })), h("ion-segment-button", { value: "settings" }, h("ion-icon", { name: "cog" })), h("ion-segment-button", { value: "profile" }, h("ion-icon", { name: "person" })))))
        ];
    }
};
Segment.style = segmentCss;

export { Segment as component_segment };
