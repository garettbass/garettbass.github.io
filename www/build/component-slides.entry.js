import { r as registerInstance, h } from './index-39ec39b1.js';

const slidesCss = "component-slides ion-toolbar{--background:transparent;--border-color:transparent}component-slides .swiper-slide{display:block}component-slides .swiper-slide img{max-height:50%;max-width:70%;margin:36px 0;pointer-events:none}component-slides b{font-weight:500}component-slides p{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600, #60646b)}component-slides p b{color:var(--ion-text-color, #000000)}component-slides .ios ion-list ion-item:first-child{--border-width:.55px 0 0 0}component-slides .md ion-list ion-item:first-child{--border-width:1px 0 0 0}";

const Slides = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("ion-header", { translucent: true }, h("ion-toolbar", null, h("ion-buttons", { slot: "start" }, h("ion-back-button", { defaultHref: "/" })), h("ion-title", null, "Slides"))),
            h("ion-content", { scrollY: false, fullscreen: true }, h("ion-slides", null, h("ion-slide", null, h("img", { src: "/assets/slide-1.png", class: "slide-image" }), h("h2", null, h("b", null, "Ionic Conference App")), h("p", null, "The ", h("b", null, "ionic conference app"), " is a practical preview of the ionic framework in action, and a demonstration of proper code use.")), h("ion-slide", null, h("img", { src: "/assets/slide-2.png", class: "slide-image" }), h("h2", null, "What is Ionic?"), h("p", null, h("b", null, "Ionic Framework"), " is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.")), h("ion-slide", null, h("img", { src: "/assets/slide-3.png", class: "slide-image" }), h("h2", null, "What is Ionic Pro?"), h("p", null, h("b", null, "Ionic Pro"), " is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.")), h("ion-slide", null, h("img", { src: "/assets/slide-4.png", class: "slide-image" }), h("h2", null, "Ready to Play?"), h("p", null, "Preview the Ionic Conference App by clicking a link below."), h("ion-list", null, h("ion-item", { detail: true, href: "https://github.com/ionic-team/ionic-conference-app", target: "_blank" }, h("ion-label", null, "Ionic ", h("b", null, "Angular"), " Conference App")), h("ion-item", { detail: true, href: "https://github.com/ionic-team/ionic-react-conference-app", target: "_blank" }, h("ion-label", null, "Ionic ", h("b", null, "React"), " Conference App")), h("ion-item", { detail: true, lines: "full", href: "https://github.com/ionic-team/ionic-stencil-conference-app", target: "_blank" }, h("ion-label", null, "Ionic ", h("b", null, "Stencil"), " Conference App"))))))
        ];
    }
};
Slides.style = slidesCss;

export { Slides as component_slides };
