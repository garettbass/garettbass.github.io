import { r as registerInstance, h } from './index-39ec39b1.js';

const PopoverExamplePage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("ion-list", null, h("ion-list-header", null, h("ion-label", null, "Ionic")), h("ion-item", { button: true }, "Learn Ionic"), h("ion-item", { button: true }, "Documentation"), h("ion-item", { button: true }, "Showcase"), h("ion-item", { button: true }, "GitHub Repo")));
    }
};

export { PopoverExamplePage as popover_example_page };
