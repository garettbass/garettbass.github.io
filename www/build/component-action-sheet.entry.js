import { r as registerInstance, d as getContext, h } from './index-39ec39b1.js';
import './ionic-global-95f99679.js';
import './utils-39861029.js';
import './index-966ebc8e.js';
import './helpers-2774d300.js';
import './animation-b7b16b67.js';
import './index-052f212b.js';
import './ios.transition-b18de522.js';
import './md.transition-a24a0e4d.js';
import './cubic-bezier-89113939.js';
import './index-66808674.js';
import './hardware-back-button-24485eb0.js';
import './index-6e57bdde.js';
import { a as actionSheetController } from './overlays-3b327421.js';

const actionSheetCss = "";

const ActionSheet = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = async () => {
            const mode = this.config.get('mode');
            const actionSheet = await actionSheetController.create({
                header: 'Albums',
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: mode !== 'ios' ? 'trash-outline' : null,
                        handler: () => {
                            console.log('Delete clicked');
                        }
                    }, {
                        text: 'Share',
                        icon: mode !== 'ios' ? 'share-outline' : null,
                        handler: () => {
                            console.log('Share clicked');
                        }
                    }, {
                        text: 'Play (open modal)',
                        icon: mode !== 'ios' ? 'play-circle-outline' : null,
                        handler: () => {
                            console.log('Play clicked');
                        }
                    }, {
                        text: 'Favorite',
                        icon: mode !== 'ios' ? 'heart-outline' : null,
                        handler: () => {
                            console.log('Favorite clicked');
                        }
                    }, {
                        text: 'Cancel',
                        icon: mode !== 'ios' ? 'close' : null,
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            await actionSheet.present();
        };
        this.config = getContext(this, "config");
    }
    render() {
        const description = `The <b>Action Sheet</b> is a dialog that displays a set of options. It appears on
      top of the app’s content, and must be manually dismissed by the user before they can
      resume interaction with the app. There are multiple ways to dismiss the action sheet,
      including tapping the backdrop or hitting the escape key.`;
        const url = 'action-sheet';
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Action Sheet"))),
            h("ion-content", { fullscreen: true, class: "component-content" }, h("component-details", { description: description, url: url }), h("div", { class: "ion-padding-start ion-padding-end" }, h("ion-button", { expand: "block", onClick: this.open }, "Open Action Sheet")))
        ];
    }
};
ActionSheet.style = actionSheetCss;

export { ActionSheet as component_action_sheet };
