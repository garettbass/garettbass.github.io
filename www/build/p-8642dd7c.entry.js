import{r as t,c as i,h as e,H as n,a as r}from"./p-67a9eaf6.js";import{g as o}from"./p-27001a90.js";import{b as a,h as s,i as d,f as h}from"./p-7738931f.js";import"./p-f2660943.js";import{b as l}from"./p-064cdd59.js";import{h as p}from"./p-7840618d.js";const m=(t,i,e,n)=>{if(t!==O&&t!==A){if(t===Z)return void 0!==e&&void 0!==e.hour?e.hour<12?"AM":"PM":i?i.toUpperCase():"";if(t===E)return void 0!==e&&void 0!==e.hour?e.hour<12?"am":"pm":i||"";if(null==i)return"";if(t===C||t===I||t===F||t===T||t===H||t===V)return k(i);if(t===Y)return S(i);if(t===$)return(n.monthNames?n.monthNames:U)[i-1];if(t===j)return(n.monthShortNames?n.monthShortNames:L)[i-1];if(t===z||t===J){if(0===i)return"12";if(i>12&&(i-=12),t===z&&i<10)return"0"+i}return i.toString()}try{return i=new Date(e.year,e.month-1,e.day).getDay(),t===O?(n.dayNames?n.dayNames:W)[i]:(n.dayShortNames?n.dayShortNames:B)[i]}catch(t){}},u=(t,i,e,n=0,r=0)=>parseInt(`1${S(t)}${k(i)}${k(e)}${k(n)}${k(r)}`,10),f=t=>u(t.year,t.month,t.day,t.hour,t.minute),c=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,g=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,v=t=>{let i=null;if(null!=t&&""!==t&&(i=g.exec(t),i?(i.unshift(void 0,void 0),i[2]=i[3]=void 0):i=c.exec(t)),null===i)return;for(let t=1;t<8;t++)i[t]=void 0!==i[t]?parseInt(i[t],10):void 0;let e=0;return i[9]&&i[10]&&(e=60*parseInt(i[10],10),i[11]&&(e+=parseInt(i[11],10)),"-"===i[9]&&(e*=-1)),{year:i[1],month:i[2],day:i[3],hour:i[4],minute:i[5],second:i[6],millisecond:i[7],tzOffset:e}},y=(t,i)=>{const e=new Date(t.toLocaleString("en-US",{timeZone:"utc"})),n=new Date(t.toLocaleString("en-US",{timeZone:i}));return e.getTime()-n.getTime()},b=(t,i)=>i===Z||i===E?t.hour<12?"am":"pm":i===z||i===J?t.hour>12?t.hour-12:0===t.hour?12:t.hour:t[x(i)],x=t=>{for(const i in P)if(P[i].f===t)return P[i].k},w=t=>{let i="";return void 0!==t.year?(i=S(t.year),void 0!==t.month&&(i+="-"+k(t.month),void 0!==t.day&&(i+="-"+k(t.day),void 0!==t.hour&&(i+=`T${k(t.hour)}:${k(t.minute)}:${k(t.second)}`,t.millisecond>0&&(i+="."+N(t.millisecond)),i+=void 0===t.tzOffset?"Z":(t.tzOffset>0?"+":"-")+k(Math.floor(Math.abs(t.tzOffset/60)))+":"+k(t.tzOffset%60))))):void 0!==t.hour&&(i=k(t.hour)+":"+k(t.minute),void 0!==t.second&&(i+=":"+k(t.second),void 0!==t.millisecond&&(i+="."+N(t.millisecond)))),i},M=(t,i)=>{if(null==t)return;let e;return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(e=t.map((t=>t.toString().trim()))),void 0!==e&&0!==e.length||console.warn(`Invalid "${i}Names". Must be an array of strings, or a comma separated string.`),e},D=(t,i)=>{let e;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),e=Array.isArray(t)?t.map((t=>parseInt(t,10))).filter(isFinite):[t],0===e.length&&console.warn(`Invalid "${i}Values". Must be an array of numbers, or a comma separated string of numbers.`),e},k=t=>("0"+(void 0!==t?Math.abs(t):"0")).slice(-2),N=t=>("00"+(void 0!==t?Math.abs(t):"0")).slice(-3),S=t=>("000"+(void 0!==t?Math.abs(t):"0")).slice(-4),Y="YYYY",C="YY",$="MMMM",j="MMM",I="MM",O="DDDD",A="DDD",F="DD",T="HH",z="hh",J="h",H="mm",V="ss",Z="A",E="a",P=[{f:Y,k:"year"},{f:$,k:"month"},{f:O,k:"day"},{f:j,k:"month"},{f:A,k:"day"},{f:C,k:"year"},{f:I,k:"month"},{f:F,k:"day"},{f:T,k:"hour"},{f:z,k:"hour"},{f:H,k:"minute"},{f:V,k:"second"},{f:"M",k:"month"},{f:"D",k:"day"},{f:"H",k:"hour"},{f:J,k:"hour"},{f:"m",k:"minute"},{f:"s",k:"second"},{f:Z,k:"ampm"},{f:E,k:"ampm"}],W=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],B=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],U=["January","February","March","April","May","June","July","August","September","October","November","December"],L=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],R=[z,J,H,"m",V,"s"],_=class{constructor(e){t(this,e),this.ionCancel=i(this,"ionCancel",7),this.ionChange=i(this,"ionChange",7),this.ionFocus=i(this,"ionFocus",7),this.ionBlur=i(this,"ionBlur",7),this.ionStyle=i(this,"ionStyle",7),this.inputId="ion-dt-"+K++,this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.isExpanded=!1,this.name=this.inputId,this.disabled=!1,this.readonly=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done",this.onClick=()=>{this.setFocus(),this.open()},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.updateDatetimeValue(this.value),this.emitStyle(),this.ionChange.emit({value:this.value})}componentWillLoad(){this.locale={monthNames:M(this.monthNames,"monthNames"),monthShortNames:M(this.monthShortNames,"monthShortNames"),dayNames:M(this.dayNames,"dayNames"),dayShortNames:M(this.dayShortNames,"dayShortNames")},this.updateDatetimeValue(this.value),this.emitStyle()}async open(){if(this.disabled||this.isExpanded)return;const t=this.generatePickerOptions(),i=await l.create(t);this.isExpanded=!0,i.onDidDismiss().then((()=>{this.isExpanded=!1,this.setFocus()})),a(i,"ionPickerColChange",(async t=>{const e=t.detail,n={};n[e.name]={value:e.options[e.selectedIndex].value},"ampm"!==e.name&&void 0!==this.datetimeValue.ampm&&(n.ampm={value:this.datetimeValue.ampm}),this.updateDatetimeValue(n),i.columns=this.generateColumns()})),await i.present()}emitStyle(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled})}updateDatetimeValue(t){((t,i,e)=>{if(!i||"string"==typeof i){const t=((t="",i="")=>{null==t&&(t=""),10!==t.length&&7!==t.length&&4!==t.length||(t+=" ");const e="string"==typeof t&&t.length>0?new Date(t):new Date,n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return i&&i.length>0?new Date(e.getTime()-y(n,i)):n})(i,e);Number.isNaN(t.getTime())||(i=t.toISOString())}if(i&&""!==i){if("string"==typeof i){if(i=v(i))return Object.assign(t,i),!0}else{if(i.year||i.hour||i.month||i.day||i.minute||i.second){void 0!==i.ampm&&void 0!==i.hour&&(i.hour.value="pm"===i.ampm.value?12===i.hour.value?12:i.hour.value+12:12===i.hour.value?0:i.hour.value);for(const e of Object.keys(i))t[e]=i[e].value;return!0}if(i.ampm)return i.hour={value:i.hour?i.hour.value:"pm"===i.ampm.value?t.hour<12?t.hour+12:t.hour:t.hour>=12?t.hour-12:t.hour},t.hour=i.hour.value,t.ampm=i.ampm.value,!0}console.warn(`Error parsing date: "${i}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`)}else for(const i in t)t.hasOwnProperty(i)&&delete t[i]})(this.datetimeValue,t,this.displayTimezone)}generatePickerOptions(){const t=o(this);this.locale={monthNames:M(this.monthNames,"monthNames"),monthShortNames:M(this.monthShortNames,"monthShortNames"),dayNames:M(this.dayNames,"dayNames"),dayShortNames:M(this.dayShortNames,"dayShortNames")};const i=Object.assign(Object.assign({mode:t},this.pickerOptions),{columns:this.generateColumns()}),e=i.buttons;return e&&0!==e.length||(i.buttons=[{text:this.cancelText,role:"cancel",handler:()=>{this.updateDatetimeValue(this.value),this.ionCancel.emit()}},{text:this.doneText,handler:t=>{this.updateDatetimeValue(t);const i=new Date(w(this.datetimeValue));this.datetimeValue.tzOffset=void 0!==this.displayTimezone&&this.displayTimezone.length>0?y(i,this.displayTimezone)/1e3/60*-1:-1*i.getTimezoneOffset(),this.value=w(this.datetimeValue)}}]),i}generateColumns(){let t=this.pickerFormat||this.displayFormat||G;if(0===t.length)return[];this.calcMinMax(),t=t.replace("DDDD","{~}").replace("DDD","{~}"),-1===t.indexOf("D")&&(t=t.replace("{~}","D")),t=t.replace(/{~}/g,"");const i=(t=>{const i=[];t=t.replace(/[^\w\s]/gi," "),P.forEach((i=>{i.f.length>1&&t.indexOf(i.f)>-1&&t.indexOf(i.f+i.f.charAt(0))<0&&(t=t.replace(i.f," "+i.f+" "))}));const e=t.split(" ").filter((t=>t.length>0));return e.forEach(((t,n)=>{P.forEach((r=>{if(t===r.f){if((t===Z||t===E)&&(i.indexOf(J)<0&&i.indexOf(z)<0||-1===R.indexOf(e[n-1])))return;i.push(t)}}))})),i})(t).map((t=>{const i=x(t);let e;e=this[i+"Values"]?D(this[i+"Values"],i):((t,i,e)=>{const n=[];if(t===Y||t===C){if(void 0===e.year||void 0===i.year)throw new Error("min and max year is undefined");for(let t=e.year;t>=i.year;t--)n.push(t)}else if(t===$||t===j||t===I||"M"===t||t===z||t===J)for(let t=1;t<13;t++)n.push(t);else if(t===O||t===A||t===F||"D"===t)for(let t=1;t<32;t++)n.push(t);else if(t===T||"H"===t)for(let t=0;t<24;t++)n.push(t);else if(t===H||"m"===t)for(let t=0;t<60;t++)n.push(t);else if(t===V||"s"===t)for(let t=0;t<60;t++)n.push(t);else t!==Z&&t!==E||n.push("am","pm");return n})(t,this.datetimeMin,this.datetimeMax);const n=e.map((i=>({value:i,text:m(t,i,void 0,this.locale)}))),r=((t,i)=>{const e=b(t,i);if(void 0!==e)return i!==Z&&i!==E||(t.ampm=e),e;const n=v((new Date).toISOString());return b(n,i)})(this.datetimeValue,t),o=n.findIndex((t=>t.value===r));return{name:i,selectedIndex:o>=0?o:0,options:n}})),e=this.datetimeMin,n=this.datetimeMax;return["month","day","hour","minute"].filter((t=>!i.find((i=>i.name===t)))).forEach((t=>{e[t]=0,n[t]=0})),this.validateColumns(q(i))}validateColumns(t){const i=new Date,e=f(this.datetimeMin),n=f(this.datetimeMax),r=t.find((t=>"year"===t.name));let o=i.getFullYear();if(r){r.options.find((t=>t.value===i.getFullYear()))||(o=r.options[0].value);const t=r.selectedIndex;if(void 0!==t){const i=r.options[t];i&&(o=i.value)}}const a=this.validateColumn(t,"month",1,e,n,[o,0,0,0,0],[o,12,31,23,59]),s=4===(d=a)||6===d||9===d||11===d?30:2===d?(t=>t%4==0&&t%100!=0||t%400==0)(o)?29:28:31;var d;const h=this.validateColumn(t,"day",2,e,n,[o,a,0,0,0],[o,a,s,23,59]),l=this.validateColumn(t,"hour",3,e,n,[o,a,h,0,0],[o,a,h,23,59]);return this.validateColumn(t,"minute",4,e,n,[o,a,h,l,0],[o,a,h,l,59]),t}calcMinMax(){const t=(new Date).getFullYear();if(void 0!==this.yearValues){const t=D(this.yearValues,"year");void 0===this.min&&(this.min=Math.min(...t).toString()),void 0===this.max&&(this.max=Math.max(...t).toString())}else void 0===this.min&&(this.min=(t-100).toString()),void 0===this.max&&(this.max=t.toString());const i=this.datetimeMin=v(this.min),e=this.datetimeMax=v(this.max);i.year=i.year||t,e.year=e.year||t,i.month=i.month||1,e.month=e.month||12,i.day=i.day||1,e.day=e.day||31,i.hour=i.hour||0,e.hour=void 0===e.hour?23:e.hour,i.minute=i.minute||0,e.minute=void 0===e.minute?59:e.minute,i.second=i.second||0,e.second=void 0===e.second?59:e.second,i.year>e.year&&(console.error("min.year > max.year"),i.year=e.year-100),i.year===e.year&&(i.month>e.month?(console.error("min.month > max.month"),i.month=1):i.month===e.month&&i.day>e.day&&(console.error("min.day > max.day"),i.day=1))}validateColumn(t,i,e,n,r,o,a){const d=t.find((t=>t.name===i));if(!d)return 0;const h=o.slice(),l=a.slice(),p=d.options;let m=p.length-1,f=0;for(let t=0;t<p.length;t++){const i=p[t],s=i.value;h[e]=i.value,l[e]=i.value,(i.disabled=s<o[e]||s>a[e]||u(l[0],l[1],l[2],l[3],l[4])<n||u(h[0],h[1],h[2],h[3],h[4])>r)||(m=Math.min(m,t),f=Math.max(f,t))}const c=d.selectedIndex=s(m,d.selectedIndex,f),g=d.options[c];return g?g.value:0}get text(){if(null!=this.value&&0!==this.value.length)return((t,i,e)=>{if(void 0===i)return;const n=[];let r=!1;if(P.forEach(((o,a)=>{if(t.indexOf(o.f)>-1){const s="{"+a+"}",d=m(o.f,i[o.k],i,e);r||void 0===d||null==i[o.k]||(r=!0),n.push(s,d||""),t=t.replace(o.f,s)}})),r){for(let i=0;i<n.length;i+=2)t=t.replace(n[i],n[i+1]);return t}})(this.displayFormat||this.pickerFormat||G,this.datetimeValue,this.locale)}hasValue(){return void 0!==this.text}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:t,text:i,disabled:r,readonly:a,isExpanded:s,el:l,placeholder:m}=this,u=o(this),f=t+"-lbl",c=d(l),g=void 0===i&&null!=m,v=void 0===i?null!=m?m:"":i,y=void 0===i?null!=m?"placeholder":void 0:"text";return c&&(c.id=f),h(!0,l,this.name,this.value,this.disabled),e(n,{onClick:this.onClick,"aria-disabled":r?"true":null,"aria-expanded":""+s,"aria-haspopup":"true","aria-labelledby":f,class:{[u]:!0,"datetime-disabled":r,"datetime-readonly":a,"datetime-placeholder":g,"in-item":p("ion-item",l)}},e("div",{class:"datetime-text",part:y},v),e("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:t=>this.buttonEl=t}))}get el(){return r(this)}static get watchers(){return{disabled:["disabledChanged"],value:["valueChanged"]}}},q=t=>{const i=[];let e,n;for(let r=0;r<t.length;r++){e=t[r],i.push(0);for(const t of e.options)n=t.text.length,n>i[r]&&(i[r]=n)}return 2===i.length?(n=Math.max(i[0],i[1]),t[0].align="right",t[1].align="left",t[0].optionsWidth=t[1].optionsWidth=17*n+"px"):3===i.length&&(n=Math.max(i[0],i[2]),t[0].align="right",t[1].columnWidth=17*i[1]+"px",t[0].optionsWidth=t[2].optionsWidth=17*n+"px",t[2].align="left"),t},G="MMM D, YYYY";let K=0;_.style={ios:":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-color-step-400, #999999);--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}",md:":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"};export{_ as ion_datetime}