System.register(["./p-596cb4f6.system.js"],(function(e){"use strict";var r,n;return{setters:[function(e){r=e.r;n=e.h}],execute:function(){const o="component-progress ion-content ion-progress-bar{margin:10px 0}component-progress .progress-margin{margin-bottom:40px}";const s=e("component_progress",class{constructor(e){r(this,e)}increaseValue(){const e=this.progressEl.value;this.progressEl.value=e+.1}render(){return[n("ion-header",{translucent:true},n("ion-toolbar",null,n("ion-buttons",{slot:"start"},n("ion-back-button",{defaultHref:"/"})),n("ion-title",null,"Progress"),n("ion-progress-bar",{type:"indeterminate",color:"dark"}))),n("ion-content",{fullscreen:true},n("ion-list",null,n("ion-list-header",null,n("ion-label",null,"Determinate")),n("ion-progress-bar",{value:.2})),n("ion-list",null,n("ion-list-header",null,n("ion-label",null,"Control Determinate"),n("ion-button",{onClick:()=>this.increaseValue()},n("ion-icon",{slot:"icon-only",ios:"add-outline",md:"add-sharp"}))),n("ion-progress-bar",{ref:e=>this.progressEl=e,value:.1})),n("ion-list",null,n("ion-list-header",null,n("ion-label",null,"Indeterminate")),n("ion-progress-bar",{type:"indeterminate"}),n("ion-list-header",null,n("ion-label",null,"Indeterminate (reversed)")),n("ion-progress-bar",{type:"indeterminate",reversed:true}),n("ion-list-header",null,n("ion-label",null,"Buffer")),n("ion-progress-bar",{value:.25,buffer:.5}),n("ion-list-header",null,n("ion-label",null,"Colors")),n("ion-progress-bar",{type:"indeterminate",color:"secondary",class:"progress-margin"}),n("ion-progress-bar",{type:"indeterminate",reversed:true,color:"tertiary",class:"progress-margin"}),n("ion-progress-bar",{value:.25,buffer:.5,color:"danger",class:"progress-margin"})))]}});s.style=o}}}));