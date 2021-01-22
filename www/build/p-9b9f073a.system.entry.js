System.register(["./p-596cb4f6.system.js","./p-f3667d5f.system.js","./p-7ce3fa8b.system.js","./p-6a0a7df0.system.js","./p-2fd5b1c1.system.js","./p-a1ea6a7e.system.js","./p-06eef041.system.js","./p-a4dc9e32.system.js","./p-f272721c.system.js","./p-0e5e3372.system.js","./p-20812a74.system.js","./p-f1468a54.system.js","./p-443f0870.system.js","./p-5f205b28.system.js","./p-745b0776.system.js"],(function(t){"use strict";var n,e,o,s;return{setters:[function(t){n=t.r;e=t.h;o=t.d},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(t){s=t.p}],execute:function(){const i="";const c=t("component_picker",class{constructor(t){n(this,t);this.defaultColumnOptions=[["Dog","Cat","Bird","Lizard","Chinchilla"]];this.multiColumnOptions=[["Minified","Responsive","Full Stack","Mobile First","Serverless"],["Tomato","Avocado","Onion","Potato","Artichoke"]]}async openPicker(t=1,n=5,e=this.defaultColumnOptions){const o=await s.create({columns:this.getColumns(t,n,e),buttons:[{text:"Cancel",role:"cancel"},{text:"Confirm",handler:t=>{console.log(`Got Value ${t}`)}}]});await o.present()}getColumns(t,n,e){const o=[];for(let s=0;s<t;s++){o.push({name:`col-${s}`,options:this.getColumnOptions(s,n,e)})}return o}getColumnOptions(t,n,e){const o=[];for(let s=0;s<n;s++){o.push({text:e[t][s%n],value:s})}return o}render(){const t=`The <b>Picker</b> is a dialog that displays a row of buttons\n      and columns underneath. It appears on top of the app's content, and at the bottom\n      of the viewport.`;const n="picker";return[e("ion-header",{translucent:true},e("ion-toolbar",null,e("ion-buttons",{slot:"start"},e("ion-back-button",{defaultHref:"/"})),e("ion-title",null,"Picker"))),e("ion-content",{fullscreen:true,class:"component-content"},e("component-details",{description:t,url:n}),e("div",{class:"ion-padding-start ion-padding-end"},e("ion-button",{expand:"block",onClick:t=>this.openPicker()},"Open Single Column Picker"),e("ion-button",{expand:"block",onClick:t=>this.openPicker(2,5,this.multiColumnOptions)},"Open Multiple Column Picker")))]}get el(){return o(this)}});c.style=i}}}));