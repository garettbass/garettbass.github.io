System.register(["./p-596cb4f6.system.js","./p-f3667d5f.system.js","./p-2fd5b1c1.system.js","./p-a1ea6a7e.system.js","./p-06eef041.system.js","./p-443f0870.system.js","./p-745b0776.system.js","./p-d1031021.system.js","./p-03379b99.system.js"],(function(o){"use strict";var e,t,i,r,n,s,p,a,c,l,d,h,f,v,m,u;return{setters:[function(o){e=o.r;t=o.e;i=o.h;r=o.H;n=o.d},function(o){s=o.g},function(){},function(o){p=o.c},function(o){a=o.d},function(){},function(o){c=o.B;l=o.e;d=o.d;h=o.f;f=o.g},function(o){v=o.a;m=o.d},function(o){u=o.g}],execute:function(){const b=(o,e)=>{let t="top";let i="left";const r=o.querySelector(".popover-content");const n=r.getBoundingClientRect();const s=n.width;const a=n.height;const c=o.ownerDocument.defaultView.innerWidth;const l=o.ownerDocument.defaultView.innerHeight;const d=e&&e.target&&e.target.getBoundingClientRect();const h=d!=null&&"top"in d?d.top:l/2-a/2;const f=d!=null&&"left"in d?d.left:c/2;const v=d&&d.width||0;const m=d&&d.height||0;const u=o.querySelector(".popover-arrow");const b=u.getBoundingClientRect();const g=b.width;const w=b.height;if(d==null){u.style.display="none"}const y={top:h+m,left:f+v/2-g/2};const k={top:h+m+(w-1),left:f+v/2-s/2};let D=false;let E=false;if(k.left<x+25){D=true;k.left=x}else if(s+x+k.left+25>c){E=true;k.left=c-s-x;i="right"}if(h+m+a>l&&h-a>0){y.top=h-(w+1);k.top=h-a-(w-1);o.className=o.className+" popover-bottom";t="bottom"}else if(h+m+a>l){r.style.bottom=x+"%"}u.style.top=y.top+"px";u.style.left=y.left+"px";r.style.top=k.top+"px";r.style.left=k.left+"px";if(D){r.style.left=`calc(${k.left}px + var(--ion-safe-area-left, 0px))`}if(E){r.style.left=`calc(${k.left}px - var(--ion-safe-area-right, 0px))`}r.style.transformOrigin=t+" "+i;const P=p();const S=p();const j=p();S.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);j.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);return P.addElement(o).easing("ease").duration(100).addAnimation([S,j])};const x=5;const g=o=>{const e=p();const t=p();const i=p();t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return e.addElement(o).easing("ease").duration(500).addAnimation([t,i])};const w=(o,e)=>{const t=12;const i=o.ownerDocument;const r=i.dir==="rtl";let n="top";let s=r?"right":"left";const a=o.querySelector(".popover-content");const c=a.getBoundingClientRect();const l=c.width;const d=c.height;const h=i.defaultView.innerWidth;const f=i.defaultView.innerHeight;const v=e&&e.target&&e.target.getBoundingClientRect();const m=v!=null&&"bottom"in v?v.bottom:f/2-d/2;const u=v!=null&&"left"in v?r?v.left-l+v.width:v.left:h/2-l/2;const b=v&&v.height||0;const x={top:m,left:u};if(x.left<t){x.left=t;s="left"}else if(l+t+x.left>h){x.left=h-l-t;s="right"}if(m+b+d>f&&m-d>0){x.top=m-d-b;o.className=o.className+" popover-bottom";n="bottom"}else if(m+b+d>f){a.style.bottom=t+"px"}const g=p();const w=p();const y=p();const k=p();const D=p();w.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);y.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);k.addElement(a).beforeStyles({top:`${x.top}px`,left:`${x.left}px`,"transform-origin":`${n} ${s}`}).fromTo("transform","scale(0.001)","scale(1)");D.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1);return g.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,y,k,D])};const y=o=>{const e=p();const t=p();const i=p();t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return e.addElement(o).easing("ease").duration(500).addAnimation([t,i])};const k='.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}';const D=".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}";const E=o("ion_popover",class{constructor(o){e(this,o);this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.translucent=false;this.animated=true;this.onDismiss=o=>{o.stopPropagation();o.preventDefault();this.dismiss()};this.onBackdropTap=()=>{this.dismiss(undefined,c)};this.onLifecycle=o=>{const e=this.usersElement;const t=P[o.type];if(e&&t){const i=new CustomEvent(t,{bubbles:false,cancelable:false,detail:o.detail});e.dispatchEvent(i)}};this.didPresent=t(this,"ionPopoverDidPresent",7);this.willPresent=t(this,"ionPopoverWillPresent",7);this.willDismiss=t(this,"ionPopoverWillDismiss",7);this.didDismiss=t(this,"ionPopoverDidDismiss",7)}connectedCallback(){l(this.el)}async present(){if(this.presented){return}const o=this.el.querySelector(".popover-content");if(!o){throw new Error("container is undefined")}const e=Object.assign(Object.assign({},this.componentProps),{popover:this.el});this.usersElement=await v(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],e);await a(this.usersElement);return d(this,"popoverEnter",b,w,this.event)}async dismiss(o,e){const t=await h(this,o,e,"popoverLeave",g,y,this.event);if(t){await m(this.delegate,this.usersElement)}return t}onDidDismiss(){return f(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return f(this.el,"ionPopoverWillDismiss")}render(){const o=s(this);const{onLifecycle:e}=this;return i(r,{"aria-modal":"true","no-router":true,tabindex:"-1",style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},u(this.cssClass)),{[o]:true,"popover-translucent":this.translucent}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},i("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),i("div",{tabindex:"0"}),i("div",{class:"popover-wrapper ion-overlay-wrapper"},i("div",{class:"popover-arrow"}),i("div",{class:"popover-content"})),i("div",{tabindex:"0"}))}get el(){return n(this)}});const P={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};E.style={ios:k}}}}));