System.register(["./p-596cb4f6.system.js"],(function(e){"use strict";var n,l;return{setters:[function(e){n=e.r;l=e.h}],execute:function(){const o="";const t=e("component_reorder",class{constructor(e){n(this,e);this.handleReorder=({detail:e})=>{e.complete()};this.toggleReorder=()=>{const e=document.getElementById("reorder");e.disabled=!e.disabled}}render(){return[l("ion-header",{translucent:true},l("ion-toolbar",null,l("ion-buttons",{slot:"start"},l("ion-back-button",{defaultHref:"/"})),l("ion-title",null,"Reorder"),l("ion-buttons",{slot:"end"},l("ion-button",{onClick:this.toggleReorder},"Toggle")))),l("ion-content",{fullscreen:true},l("ion-list",null,l("ion-list-header",null,l("ion-label",null,"Reorder Icon")),l("ion-reorder-group",{id:"reorder",onIonItemReorder:this.handleReorder},l("ion-item",null,l("ion-label",null,"Item 1"),l("ion-reorder",{slot:"end"})),l("ion-item",null,l("ion-label",null,"Item 2"),l("ion-reorder",{slot:"end"})),l("ion-item",null,l("ion-label",null,"Item 3"),l("ion-reorder",{slot:"end"})),l("ion-item",null,l("ion-label",null,"Item 4"),l("ion-reorder",{slot:"end"})),l("ion-list-header",null,l("ion-label",null,"Custom Reorder Icon")),l("ion-item",null,l("ion-label",null,"Item 5"),l("ion-reorder",{slot:"end"},l("ion-icon",{name:"swap-vertical"}))),l("ion-item",null,l("ion-label",null,"Item 6"),l("ion-reorder",{slot:"end"},l("ion-icon",{name:"swap-vertical"}))),l("ion-item",null,l("ion-label",null,"Item 7"),l("ion-reorder",{slot:"end"},l("ion-icon",{name:"swap-vertical"}))),l("ion-list-header",null,l("ion-label",null,"Reorder Item")),l("ion-reorder",null,l("ion-item",null,l("ion-label",null,"Item 8"))),l("ion-reorder",null,l("ion-item",null,l("ion-label",null,"Item 9"))),l("ion-reorder",null,l("ion-item",null,l("ion-label",null,"Item 10"))))))]}});t.style=o}}}));