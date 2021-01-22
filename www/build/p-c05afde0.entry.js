import{r as t,e,h as i,H as s,d as n}from"./p-ed98ce0b.js";import{g as a}from"./p-a19aa8c2.js";import{f as r,k as o,h as l}from"./p-6f155354.js";import"./p-f2660943.js";import{c as h,a as c,b as d}from"./p-0e917e13.js";import{h as p}from"./p-7840618d.js";const u=(t,e)=>{if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find(e=>e.value===t.value)},b=class{constructor(i){t(this,i),this.inputId=`ion-sel-${w++}`,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=e(this,"ionChange",7),this.ionCancel=e(this,"ionCancel",7),this.ionFocus=e(this,"ionFocus",7),this.ionBlur=e(this,"ionBlur",7),this.ionStyle=e(this,"ionStyle",7)}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}async connectedCallback(){this.updateOverlayOptions(),this.emitStyle(),this.mutationO=((t,e,i)=>{if("undefined"==typeof MutationObserver)return;const s=new MutationObserver(t=>{i(((t,e)=>{let i;t.forEach(t=>{for(let s=0;s<t.addedNodes.length;s++)i=u(t.addedNodes[s],e)||i})})(t,"ion-select-option"))});return s.observe(t,{childList:!0,subtree:!0}),s})(this.el,0,async()=>{this.updateOverlayOptions()})}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}async open(t){if(this.disabled||this.isExpanded)return;const e=this.overlay=await this.createOverlay(t);return this.isExpanded=!0,e.onDidDismiss().then(()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()}),await e.present(),e}createOverlay(t){let e=this.interface;return"action-sheet"!==e&&"popover"!==e||!this.multiple||(console.warn(`Select interface cannot be "${e}" with a multi-value select. Using the "alert" interface instead.`),e="alert"),"popover"!==e||t||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),e="alert"),"popover"===e?this.openPopover(t):"action-sheet"===e?this.openActionSheet():this.openAlert()}updateOverlayOptions(){const t=this.overlay;if(!t)return;const e=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(e,i);break;case"popover":const s=t.querySelector("ion-select-popover");s&&(s.options=this.createPopoverOptions(e,i));break;case"alert":t.inputs=this.createAlertInputs(e,this.multiple?"checkbox":"radio",i)}}createActionSheetButtons(t,e){const i=t.map(t=>{const i=m(t),s=Array.from(t.classList).filter(t=>"hydrated"!==t).join(" "),n=`${C} ${s}`;return{role:g(i,e,this.compareWith)?"selected":"",text:t.textContent,cssClass:n,handler:()=>{this.value=i}}});return i.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),i}createAlertInputs(t,e,i){return t.map(t=>{const s=m(t),n=Array.from(t.classList).filter(t=>"hydrated"!==t).join(" ");return{type:e,cssClass:`${C} ${n}`,label:t.textContent||"",value:s,checked:g(s,i,this.compareWith),disabled:t.disabled}})}createPopoverOptions(t,e){return t.map(t=>{const i=m(t),s=Array.from(t.classList).filter(t=>"hydrated"!==t).join(" ");return{text:t.textContent||"",cssClass:`${C} ${s}`,value:i,checked:g(i,e,this.compareWith),disabled:t.disabled,handler:()=>{this.value=i,this.close()}}})}async openPopover(t){const e=this.interfaceOptions,i=a(this),s=this.value,n=Object.assign(Object.assign({mode:i},e),{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],event:t,componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,value:s,options:this.createPopoverOptions(this.childOpts,s)}});return h.create(n)}async openActionSheet(){const t=a(this),e=this.interfaceOptions,i=Object.assign(Object.assign({mode:t},e),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",e.cssClass]});return c.create(i)}async openAlert(){const t=this.getLabel(),e=t?t.textContent:null,i=this.interfaceOptions,s=this.multiple?"checkbox":"radio",n=a(this),r=Object.assign(Object.assign({mode:n},i),{header:i.header?i.header:e,inputs:this.createAlertInputs(this.childOpts,s,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:t=>{this.value=t}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return d.create(r)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return r(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const t=this.selectedText;return null!=t&&""!==t?t:x(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{disabled:t,el:e,inputId:n,isExpanded:r,name:h,placeholder:c,value:d}=this,u=a(this),{labelText:b,labelId:g}=o(e,n);l(!0,e,h,f(d),t);let m=!1,v=this.getText();""===v&&null!=c&&(v=c,m=!0);const x={"select-text":!0,"select-placeholder":m},y=m?"placeholder":"text",w=void 0!==b?""!==v?`${v}, ${b}`:b:v;return i(s,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":t?"true":null,"aria-label":w,class:{[u]:!0,"in-item":p("ion-item",e),"select-disabled":t}},i("div",{"aria-hidden":"true",class:x,part:y},v),i("div",{class:"select-icon",role:"presentation",part:"icon"},i("div",{class:"select-icon-inner"})),i("label",{id:g},w),i("button",{type:"button",disabled:t,id:n,"aria-labelledby":g,"aria-haspopup":"listbox","aria-expanded":`${r}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:t=>this.focusEl=t}))}get el(){return n(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}},g=(t,e,i)=>void 0!==t&&(Array.isArray(t)?t.some(t=>v(t,e,i)):v(t,e,i)),m=t=>{const e=t.value;return void 0===e?t.textContent||"":e},f=t=>{if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},v=(t,e,i)=>"function"==typeof i?i(t,e):"string"==typeof i?t[i]===e[i]:Array.isArray(e)?e.includes(t):t===e,x=(t,e,i)=>void 0===e?"":Array.isArray(e)?e.map(e=>y(t,e,i)).filter(t=>null!==t).join(", "):y(t,e,i)||"",y=(t,e,i)=>{const s=t.find(t=>v(m(t),e,i));return s?s.textContent:null};let w=0;const C="select-interface-option";b.style={md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}"};const k=class{constructor(e){t(this,e),this.inputId=`ion-selopt-${O++}`,this.disabled=!1}render(){return i(s,{role:"option",id:this.inputId,class:a(this)})}get el(){return n(this)}};let O=0;k.style=":host{display:none}";export{b as ion_select,k as ion_select_option}