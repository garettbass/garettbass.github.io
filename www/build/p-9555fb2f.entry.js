import{r as o,h as t,d as n}from"./p-ed98ce0b.js";import"./p-a19aa8c2.js";import"./p-f29c1b99.js";import"./p-9c49a2b7.js";import"./p-6f155354.js";import"./p-453eb4ca.js";import"./p-7a6d5d8d.js";import"./p-ac34dca1.js";import"./p-3473468e.js";import"./p-8f72be08.js";import"./p-7c491ee9.js";import"./p-111520a0.js";import"./p-f2660943.js";import"./p-0a34474e.js";import{c as e}from"./p-0e917e13.js";const i=class{constructor(t){o(this,t),this.showPopover=async o=>(await e.create({component:"popover-example-page",event:o,translucent:!0})).present()}render(){return[t("ion-header",{translucent:!0},t("ion-toolbar",null,t("ion-buttons",{slot:"start"},t("ion-back-button",{defaultHref:"/"})),t("ion-title",null,"Popover"),t("ion-buttons",{slot:"end"},t("ion-button",{slot:"end",onClick:this.showPopover},t("ion-icon",{slot:"icon-only",ios:"ellipsis-horizontal",md:"ellipsis-vertical"}))))),t("ion-content",{fullscreen:!0,class:"component-content"},t("component-details",{description:"The <b>Popover</b> is a dialog that appears on top of the current\n      page. It can be used for anything, but generally it is used for overflow actions that don't\n      fit in the navigation bar.",url:"popover"}),t("div",{class:"ion-padding-start ion-padding-end"},t("ion-button",{expand:"block",onClick:this.showPopover},"Open Popover")))]}get el(){return n(this)}};i.style="";export{i as component_popover}