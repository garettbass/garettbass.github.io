System.register(["./p-596cb4f6.system.js","./p-f3667d5f.system.js","./p-7ce3fa8b.system.js","./p-6a0a7df0.system.js","./p-2fd5b1c1.system.js","./p-a1ea6a7e.system.js","./p-06eef041.system.js","./p-a4dc9e32.system.js","./p-f272721c.system.js","./p-0e5e3372.system.js","./p-20812a74.system.js","./p-f1468a54.system.js","./p-443f0870.system.js","./p-5f205b28.system.js","./p-745b0776.system.js"],(function(t){"use strict";var n,e,s,o;return{setters:[function(t){n=t.r;e=t.h;s=t.d},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(t){o=t.m}],execute:function(){const c="";const i=t("component_modal",class{constructor(t){n(this,t);this.openModal=async()=>{const t=await o.create({component:"component-modal-content",swipeToClose:true,presentingElement:this.el});t.present();this.currentModal=t}}render(){const t=`The <b>Modal</b> is a dialog that appears on top of the app's\n      content, and must be dismissed by the user before interaction can resume. It is\n      useful as a select component when there are a lot of options to choose from, or when\n      filtering items in a list, as well as many other use cases.`;const n="modal";return[e("ion-header",{translucent:true},e("ion-toolbar",null,e("ion-buttons",{slot:"start"},e("ion-back-button",{defaultHref:"/"})),e("ion-title",null,"Modal"))),e("ion-content",{fullscreen:true,class:"component-content"},e("component-details",{description:t,url:n}),e("div",{class:"ion-padding-start ion-padding-end"},e("ion-button",{expand:"block",onClick:this.openModal},"Open Modal")))]}get el(){return s(this)}});i.style=c}}}));