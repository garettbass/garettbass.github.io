import{r as o,c as i,h as r,H as t,a as e}from"./p-67a9eaf6.js";import{g as p}from"./p-27001a90.js";import"./p-7738931f.js";import{c as n}from"./p-f3a7aff1.js";import{d as s}from"./p-1499dbb2.js";import"./p-f2660943.js";import{B as a,a as c,p as v,d as h,e as d}from"./p-064cdd59.js";import{a as l,d as m}from"./p-a38ea475.js";import{g as x}from"./p-7840618d.js";const b=(o,i)=>{let r="top",t="left";const e=o.querySelector(".popover-content"),p=e.getBoundingClientRect(),s=p.width,a=p.height,c=o.ownerDocument.defaultView.innerWidth,v=o.ownerDocument.defaultView.innerHeight,h=i&&i.target&&i.target.getBoundingClientRect(),d=null!=h&&"top"in h?h.top:v/2-a/2,l=null!=h&&"left"in h?h.left:c/2,m=h&&h.width||0,x=h&&h.height||0,b=o.querySelector(".popover-arrow"),u=b.getBoundingClientRect(),w=u.width,g=u.height;null==h&&(b.style.display="none");const y={top:d+x,left:l+m/2-w/2},k={top:d+x+(g-1),left:l+m/2-s/2};let D=!1,P=!1;k.left<f+25?(D=!0,k.left=f):s+f+k.left+25>c&&(P=!0,k.left=c-s-f,t="right"),d+x+a>v&&d-a>0?(y.top=d-(g+1),k.top=d-a-(g-1),o.className=o.className+" popover-bottom",r="bottom"):d+x+a>v&&(e.style.bottom=f+"%"),b.style.top=y.top+"px",b.style.left=y.left+"px",e.style.top=k.top+"px",e.style.left=k.left+"px",D&&(e.style.left=`calc(${k.left}px + var(--ion-safe-area-left, 0px))`),P&&(e.style.left=`calc(${k.left}px - var(--ion-safe-area-right, 0px))`),e.style.transformOrigin=r+" "+t;const j=n(),W=n(),z=n();return W.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),z.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),j.addElement(o).easing("ease").duration(100).addAnimation([W,z])},f=5,u=o=>{const i=n(),r=n(),t=n();return r.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),t.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.addElement(o).easing("ease").duration(500).addAnimation([r,t])},w=(o,i)=>{const r=o.ownerDocument,t="rtl"===r.dir;let e="top",p=t?"right":"left";const s=o.querySelector(".popover-content"),a=s.getBoundingClientRect(),c=a.width,v=a.height,h=r.defaultView.innerWidth,d=r.defaultView.innerHeight,l=i&&i.target&&i.target.getBoundingClientRect(),m=null!=l&&"bottom"in l?l.bottom:d/2-v/2,x=l&&l.height||0,b={top:m,left:null!=l&&"left"in l?t?l.left-c+l.width:l.left:h/2-c/2};b.left<12?(b.left=12,p="left"):c+12+b.left>h&&(b.left=h-c-12,p="right"),m+x+v>d&&m-v>0?(b.top=m-v-x,o.className=o.className+" popover-bottom",e="bottom"):m+x+v>d&&(s.style.bottom="12px");const f=n(),u=n(),w=n(),g=n(),y=n();return u.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),w.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),g.addElement(s).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":`${e} ${p}`}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),f.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([u,w,g,y])},g=o=>{const i=n(),r=n(),t=n();return r.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),t.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.addElement(o).easing("ease").duration(500).addAnimation([r,t])},y=class{constructor(r){o(this,r),this.didPresent=i(this,"ionPopoverDidPresent",7),this.willPresent=i(this,"ionPopoverWillPresent",7),this.willDismiss=i(this,"ionPopoverWillDismiss",7),this.didDismiss=i(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,a)},this.onLifecycle=o=>{const i=this.usersElement,r=k[o.type];if(i&&r){const t=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:o.detail});i.dispatchEvent(t)}}}connectedCallback(){c(this.el)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const i=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await l(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],i),await s(this.usersElement),v(this,"popoverEnter",b,w,this.event)}async dismiss(o,i){const r=await h(this,o,i,"popoverLeave",u,g,this.event);return r&&await m(this.delegate,this.usersElement),r}onDidDismiss(){return d(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return d(this.el,"ionPopoverWillDismiss")}render(){const o=p(this),{onLifecycle:i}=this;return r(t,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},x(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:i,onIonPopoverWillPresent:i,onIonPopoverWillDismiss:i,onIonPopoverDidDismiss:i,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},r("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),r("div",{tabindex:"0"}),r("div",{class:"popover-wrapper ion-overlay-wrapper"},r("div",{class:"popover-arrow"}),r("div",{class:"popover-content"})),r("div",{tabindex:"0"}))}get el(){return e(this)}},k={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};y.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports (backdrop-filter: blur(0)){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{transform-origin:right top}.popover-viewport.sc-ion-popover-md{transition-delay:100ms}"};export{y as ion_popover}