System.register(["./p-596cb4f6.system.js"],(function(t){"use strict";var o,n,e;return{setters:[function(t){o=t.r;n=t.h;e=t.d}],execute:function(){const l="";const i=t("component_content",class{constructor(t){o(this,t);this.scrollToBottom=()=>{this.getContent().scrollToBottom(500)};this.scrollToTop=()=>{this.getContent().scrollToTop(500)}}getContent(){return this.el.querySelector("ion-content")}render(){return[n("ion-header",{translucent:true},n("ion-toolbar",null,n("ion-buttons",{slot:"start"},n("ion-back-button",{defaultHref:"/"})),n("ion-title",null,"Content"))),n("ion-content",{fullscreen:true},n("p",{class:"ion-padding-start ion-padding-end"},n("ion-button",{onClick:this.scrollToBottom,expand:"block",fill:"outline"},"Scroll To Bottom")),new Array(30).fill(0).map((t,o)=>n("ion-item",null,n("ion-label",null,"Item ",o))),n("p",{class:"ion-padding-start ion-padding-end"},n("ion-button",{onClick:this.scrollToTop,expand:"block",fill:"outline"},"Scroll To Top")))]}get el(){return e(this)}});i.style=l}}}));