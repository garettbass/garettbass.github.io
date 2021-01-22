import{r as i,e as t,h as r,H as o,d as e}from"./p-ed98ce0b.js";import{g as s}from"./p-a19aa8c2.js";import{a as n,b as a,k as d}from"./p-6f155354.js";import{c as l,h as c}from"./p-7840618d.js";const h=class{constructor(r){i(this,r),this.inputId=`ion-rb-${b++}`,this.radioGroup=null,this.checked=!1,this.buttonTabindex=-1,this.name=this.inputId,this.disabled=!1,this.updateState=()=>{this.radioGroup&&(this.checked=this.radioGroup.value===this.value)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionStyle=t(this,"ionStyle",7),this.ionFocus=t(this,"ionFocus",7),this.ionBlur=t(this,"ionBlur",7)}async setFocus(i){i.stopPropagation(),i.preventDefault(),this.el.focus()}async setButtonTabindex(i){this.buttonTabindex=i}connectedCallback(){void 0===this.value&&(this.value=this.inputId);const i=this.radioGroup=this.el.closest("ion-radio-group");i&&(this.updateState(),n(i,"ionChange",this.updateState))}disconnectedCallback(){const i=this.radioGroup;i&&(a(i,"ionChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}render(){const{inputId:i,disabled:t,checked:e,color:n,el:a,buttonTabindex:h}=this,b=s(this),{label:p,labelId:m,labelText:u}=d(a,i);return r(o,{"aria-checked":`${e}`,"aria-hidden":t?"true":null,"aria-labelledby":p?m:null,role:"radio",tabindex:h,onFocus:this.onFocus,onBlur:this.onBlur,class:l(n,{[b]:!0,"in-item":c("ion-item",a),interactive:!0,"radio-checked":e,"radio-disabled":t})},r("div",{class:"radio-icon",part:"container"},r("div",{class:"radio-inner",part:"mark"}),r("div",{class:"radio-ripple"})),r("label",{htmlFor:i},u),r("input",{type:"radio",checked:e,disabled:t,tabindex:"-1",id:i}))}get el(){return e(this)}static get watchers(){return{color:["emitStyle"],checked:["emitStyle"],disabled:["emitStyle"]}}};let b=0;h.style={md:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}'};const p=class{constructor(r){i(this,r),this.inputId=`ion-rg-${m++}`,this.labelId=`${this.inputId}-lbl`,this.allowEmptySelection=!1,this.name=this.inputId,this.setRadioTabindex=i=>{const t=this.getRadios(),r=t.find(i=>!i.disabled),o=t.find(t=>t.value===i&&!t.disabled);if(!r&&!o)return;const e=o||r;for(const s of t)s.setButtonTabindex(s===e?0:-1)},this.onClick=i=>{i.preventDefault();const t=i.target&&i.target.closest("ion-radio");if(t){const i=t.value;i!==this.value?this.value=i:this.allowEmptySelection&&(this.value=void 0)}},this.ionChange=t(this,"ionChange",7)}valueChanged(i){this.setRadioTabindex(i),this.ionChange.emit({value:i})}componentDidLoad(){this.setRadioTabindex(this.value)}async connectedCallback(){const i=this.el.querySelector("ion-list-header")||this.el.querySelector("ion-item-divider");if(i){const t=this.label=i.querySelector("ion-label");t&&(this.labelId=t.id=this.name+"-lbl")}}getRadios(){return Array.from(this.el.querySelectorAll("ion-radio"))}onKeydown(i){const t=!!this.el.closest("ion-select-popover");if(i.target&&!this.el.contains(i.target))return;const r=Array.from(this.el.querySelectorAll("ion-radio")).filter(i=>!i.disabled);if(i.target&&r.includes(i.target)){const o=r.findIndex(t=>t===i.target),e=r[o];let s;["ArrowDown","ArrowRight"].includes(i.code)&&(s=o===r.length-1?r[0]:r[o+1]),["ArrowUp","ArrowLeft"].includes(i.code)&&(s=0===o?r[r.length-1]:r[o-1]),s&&r.includes(s)&&(s.setFocus(i),t||(this.value=s.value)),["Space"].includes(i.code)&&(this.value=e.value)}}render(){const{label:i,labelId:t}=this,e=s(this);return r(o,{role:"radiogroup","aria-labelledby":i?t:null,onClick:this.onClick,class:e})}get el(){return e(this)}static get watchers(){return{value:["valueChanged"]}}};let m=0;export{h as ion_radio,p as ion_radio_group}