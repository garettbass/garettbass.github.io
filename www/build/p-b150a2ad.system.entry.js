System.register(["./p-596cb4f6.system.js","./p-f3667d5f.system.js","./p-7ce3fa8b.system.js","./p-6a0a7df0.system.js","./p-2fd5b1c1.system.js","./p-a1ea6a7e.system.js","./p-06eef041.system.js","./p-a4dc9e32.system.js","./p-f272721c.system.js","./p-0e5e3372.system.js","./p-20812a74.system.js","./p-f1468a54.system.js","./p-443f0870.system.js","./p-5f205b28.system.js","./p-745b0776.system.js"],(function(t){"use strict";var s,e,n;return{setters:[function(t){s=t.r;e=t.h},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(t){n=t.b}],execute:function(){const o="";const i=t("component_alert",class{constructor(t){s(this,t);this.open=async()=>{const t=await n.create({header:"Use this lightsaber?",message:"Do you agree to use this lightsaber to do good across the galaxy?",buttons:["Disagree","Agree"]});await t.present()}}render(){const t=`The <b>Alert</b> is a dialog that presents users with information\n      or collects information from the user via inputs. It appears on top of the app's content,\n      and must be manually dismissed by the user before they can resume interaction with the app.`;const s="alert";return[e("ion-header",{translucent:true},e("ion-toolbar",null,e("ion-buttons",{slot:"start"},e("ion-back-button",{defaultHref:"/"})),e("ion-title",null,"Alert"))),e("ion-content",{fullscreen:true,class:"component-content"},e("component-details",{description:t,url:s}),e("div",{class:"ion-padding-start ion-padding-end"},e("ion-button",{expand:"block",onClick:this.open},"Open Alert")))]}});i.style=o}}}));