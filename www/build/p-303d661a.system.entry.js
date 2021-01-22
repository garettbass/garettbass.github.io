System.register(["./p-596cb4f6.system.js","./p-f3667d5f.system.js","./p-2fd5b1c1.system.js","./p-03379b99.system.js"],(function(e){"use strict";var t,o,i,r,n,a,c,s,h,l;return{setters:[function(e){t=e.r;o=e.e;i=e.h;r=e.H;n=e.d},function(e){a=e.g},function(e){c=e.k;s=e.h},function(e){h=e.c;l=e.h}],execute:function(){const d=":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--background:var(--ion-item-background, var(--ion-background-color, #fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:20px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:20px;margin-inline-end:20px}}";const b=":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.51);--checkmark-width:3;--background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}";const k=e("ion_checkbox",class{constructor(e){t(this,e);this.inputId=`ion-cb-${m++}`;this.name=this.inputId;this.checked=false;this.indeterminate=false;this.disabled=false;this.value="on";this.onClick=e=>{e.preventDefault();this.setFocus();this.checked=!this.checked;this.indeterminate=false};this.onFocus=()=>{this.ionFocus.emit()};this.onBlur=()=>{this.ionBlur.emit()};this.ionChange=o(this,"ionChange",7);this.ionFocus=o(this,"ionFocus",7);this.ionBlur=o(this,"ionBlur",7);this.ionStyle=o(this,"ionStyle",7)}componentWillLoad(){this.emitStyle()}checkedChanged(e){this.ionChange.emit({checked:e,value:this.value});this.emitStyle()}disabledChanged(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}setFocus(){if(this.focusEl){this.focusEl.focus()}}render(){const{color:e,checked:t,disabled:o,el:n,indeterminate:d,inputId:b,name:k,value:m}=this;const p=a(this);const{label:g,labelId:u,labelText:x}=c(n,b);s(true,n,k,t?m:"",o);let f=d?i("path",{d:"M6 12L18 12",part:"mark"}):i("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8",part:"mark"});if(p==="md"){f=d?i("path",{d:"M2 12H22",part:"mark"}):i("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59",part:"mark"})}return i(r,{onClick:this.onClick,"aria-labelledby":g?u:null,"aria-checked":`${t}`,"aria-hidden":o?"true":null,role:"checkbox",class:h(e,{[p]:true,"in-item":l("ion-item",n),"checkbox-checked":t,"checkbox-disabled":o,"checkbox-indeterminate":d,interactive:true})},i("svg",{class:"checkbox-icon",viewBox:"0 0 24 24",part:"container"},f),i("label",{htmlFor:b},x),i("input",{type:"checkbox","aria-checked":`${t}`,disabled:o,id:b,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:e=>this.focusEl=e}))}get el(){return n(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}});let m=0;k.style={md:b}}}}));