import { r as registerInstance, f as createEvent, h, H as Host } from './index-39ec39b1.js';
import { g as getIonMode } from './ionic-global-95f99679.js';
import { n as now } from './helpers-2774d300.js';
import { GESTURE_CONTROLLER } from './index-66808674.js';

const backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";

const backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";

const Backdrop = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.lastClick = -10000;
        this.blocker = GESTURE_CONTROLLER.createBlocker({
            disableScroll: true
        });
        /**
         * If `true`, the backdrop will be visible.
         */
        this.visible = true;
        /**
         * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
         */
        this.tappable = true;
        /**
         * If `true`, the backdrop will stop propagation on tap.
         */
        this.stopPropagation = true;
        this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
    }
    connectedCallback() {
        if (this.stopPropagation) {
            this.blocker.block();
        }
    }
    disconnectedCallback() {
        this.blocker.unblock();
    }
    onTouchStart(ev) {
        this.lastClick = now(ev);
        this.emitTap(ev);
    }
    onMouseDown(ev) {
        if (this.lastClick < now(ev) - 2500) {
            this.emitTap(ev);
        }
    }
    emitTap(ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { tabindex: "-1", class: {
                [mode]: true,
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable,
            } }));
    }
};
Backdrop.style = {
    /*STENCIL:MODE:ios*/ ios: backdropIosCss,
    /*STENCIL:MODE:md*/ md: backdropMdCss
};

export { Backdrop as ion_backdrop };
