import { r as registerInstance, h, e as getElement } from './index-39ec39b1.js';

const skeletonTextCss = "#data{display:none}#skeleton{display:block}";

const SkeletonText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleSkeleton = () => {
            const skeletonEl = this.el.querySelector('#skeleton'), skeletonStyle = window.getComputedStyle(skeletonEl), skeletonDisplay = skeletonStyle.getPropertyValue('display');
            const dataEl = this.el.querySelector('#data'), dataStyle = window.getComputedStyle(dataEl), dataDisplay = dataStyle.getPropertyValue('display');
            this.el.querySelector('#skeleton').style.display = skeletonDisplay === 'none' ? 'block' : 'none';
            this.el.querySelector('#data').style.display = dataDisplay === 'none' ? 'block' : 'none';
        };
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Skeleton Text"), h("ion-buttons", { slot: "end" }, h("ion-button", { onClick: this.toggleSkeleton }, "Toggle")))),
            h("ion-content", { fullscreen: true }, h("ion-list", { id: "data" }, h("ion-list-header", null, h("ion-label", null, "Albums")), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("img", { src: "/assets/thebeatles.jpeg" })), h("ion-label", null, h("h3", null, "Abbey Road"), h("p", null, "The Beatles"), h("p", null, "1969"))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("img", { src: "/assets/pinkfloyd.jpeg" })), h("ion-label", null, h("h3", null, "The Dark Side of the Moon"), h("p", null, "Pink Floyd"), h("p", null, "1973"))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("img", { src: "/assets/boniver.jpeg" })), h("ion-label", null, h("h3", null, "For Emma, Forever Ago"), h("p", null, "Bon Iver"), h("p", null, "2008"))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("img", { src: "/assets/ironwine.jpeg" })), h("ion-label", null, h("h3", null, "Beast Epic"), h("p", null, "Iron & Wine"), h("p", null, "2017"))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("img", { src: "/assets/porterrobinson.jpeg" })), h("ion-label", null, h("h3", null, "Worlds"), h("p", null, "Porter Robinson"), h("p", null, "2014"))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("img", { src: "/assets/childishgambino.jpeg" })), h("ion-label", null, h("h3", null, "Worlds"), h("p", null, "Awaken, My Love!"), h("p", null, "2016"))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("img", { src: "/assets/chancetherapper.jpeg" })), h("ion-label", null, h("h3", null, "Coloring Book"), h("p", null, "Chance the Rapper"), h("p", null, "2016"))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("img", { src: "/assets/kimbra.jpeg" })), h("ion-label", null, h("h3", null, "Primal Heart"), h("p", null, "Kimbra"), h("p", null, "2018")))), h("ion-list", { id: "skeleton" }, h("ion-list-header", null, h("ion-label", null, h("ion-skeleton-text", { animated: true, style: { width: '80px' } }))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("ion-skeleton-text", null)), h("ion-label", null, h("h3", null, h("ion-skeleton-text", { animated: true, style: { width: '80%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '60%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '30%' } })))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("ion-skeleton-text", null)), h("ion-label", null, h("h3", null, h("ion-skeleton-text", { animated: true, style: { width: '80%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '60%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '30%' } })))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("ion-skeleton-text", null)), h("ion-label", null, h("h3", null, h("ion-skeleton-text", { animated: true, style: { width: '80%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '60%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '30%' } })))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("ion-skeleton-text", null)), h("ion-label", null, h("h3", null, h("ion-skeleton-text", { animated: true, style: { width: '80%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '60%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '30%' } })))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("ion-skeleton-text", null)), h("ion-label", null, h("h3", null, h("ion-skeleton-text", { animated: true, style: { width: '80%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '60%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '30%' } })))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("ion-skeleton-text", null)), h("ion-label", null, h("h3", null, h("ion-skeleton-text", { animated: true, style: { width: '80%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '60%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '30%' } })))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("ion-skeleton-text", null)), h("ion-label", null, h("h3", null, h("ion-skeleton-text", { animated: true, style: { width: '80%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '60%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '30%' } })))), h("ion-item", null, h("ion-thumbnail", { slot: "start" }, h("ion-skeleton-text", null)), h("ion-label", null, h("h3", null, h("ion-skeleton-text", { animated: true, style: { width: '80%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '60%' } })), h("p", null, h("ion-skeleton-text", { animated: true, style: { width: '30%' } }))))))
        ];
    }
    get el() { return getElement(this); }
};
SkeletonText.style = skeletonTextCss;

export { SkeletonText as component_skeleton_text };
