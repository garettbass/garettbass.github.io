System.register(["./p-596cb4f6.system.js","./p-f3667d5f.system.js","./p-7ce3fa8b.system.js","./p-6a0a7df0.system.js","./p-2fd5b1c1.system.js","./p-a1ea6a7e.system.js","./p-06eef041.system.js","./p-a4dc9e32.system.js","./p-f272721c.system.js","./p-0e5e3372.system.js","./p-20812a74.system.js","./p-f1468a54.system.js","./p-443f0870.system.js","./p-5f205b28.system.js","./p-745b0776.system.js"],(function(t){"use strict";var n,e,o,s;return{setters:[function(t){n=t.r;e=t.h;o=t.d},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(t){s=t.c}],execute:function(){const i="";const c=t("component_popover",class{constructor(t){n(this,t);this.showPopover=async t=>{const n=await s.create({component:"popover-example-page",event:t,translucent:true});return n.present()}}render(){const t=`The <b>Popover</b> is a dialog that appears on top of the current\n      page. It can be used for anything, but generally it is used for overflow actions that don't\n      fit in the navigation bar.`;const n="popover";return[e("ion-header",{translucent:true},e("ion-toolbar",null,e("ion-buttons",{slot:"start"},e("ion-back-button",{defaultHref:"/"})),e("ion-title",null,"Popover"),e("ion-buttons",{slot:"end"},e("ion-button",{slot:"end",onClick:this.showPopover},e("ion-icon",{slot:"icon-only",ios:"ellipsis-horizontal",md:"ellipsis-vertical"}))))),e("ion-content",{fullscreen:true,class:"component-content"},e("component-details",{description:t,url:n}),e("div",{class:"ion-padding-start ion-padding-end"},e("ion-button",{expand:"block",onClick:this.showPopover},"Open Popover")))]}get el(){return o(this)}});c.style=i}}}));