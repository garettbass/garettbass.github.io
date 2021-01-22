import { r as registerInstance, h, e as getElement } from './index-39ec39b1.js';
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
import { p as pickerController } from './overlays-3b327421.js';

const pickerCss = "";

const Picker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.defaultColumnOptions = [
            [
                'Dog',
                'Cat',
                'Bird',
                'Lizard',
                'Chinchilla'
            ]
        ];
        this.multiColumnOptions = [
            [
                'Minified',
                'Responsive',
                'Full Stack',
                'Mobile First',
                'Serverless'
            ],
            [
                'Tomato',
                'Avocado',
                'Onion',
                'Potato',
                'Artichoke'
            ]
        ];
    }
    async openPicker(numColumns = 1, numOptions = 5, columnOptions = this.defaultColumnOptions) {
        const picker = await pickerController.create({
            columns: this.getColumns(numColumns, numOptions, columnOptions),
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Confirm',
                    handler: (value) => {
                        console.log(`Got Value ${value}`);
                    }
                }
            ]
        });
        await picker.present();
    }
    getColumns(numColumns, numOptions, columnOptions) {
        const columns = [];
        for (let i = 0; i < numColumns; i++) {
            columns.push({
                name: `col-${i}`,
                options: this.getColumnOptions(i, numOptions, columnOptions)
            });
        }
        return columns;
    }
    getColumnOptions(columnIndex, numOptions, columnOptions) {
        const options = [];
        for (let i = 0; i < numOptions; i++) {
            options.push({
                text: columnOptions[columnIndex][i % numOptions],
                value: i
            });
        }
        return options;
    }
    render() {
        const description = `The <b>Picker</b> is a dialog that displays a row of buttons
      and columns underneath. It appears on top of the app's content, and at the bottom
      of the viewport.`;
        const url = 'picker';
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Picker"))),
            h("ion-content", { fullscreen: true, class: "component-content" }, h("component-details", { description: description, url: url }), h("div", { class: "ion-padding-start ion-padding-end" }, h("ion-button", { expand: "block", onClick: _ => this.openPicker() }, "Open Single Column Picker"), h("ion-button", { expand: "block", onClick: _ => this.openPicker(2, 5, this.multiColumnOptions) }, "Open Multiple Column Picker")))
        ];
    }
    get el() { return getElement(this); }
};
Picker.style = pickerCss;

export { Picker as component_picker };
