import{a as o,b as t,p as n}from"./p-6f155354.js";const i=new WeakMap,r=(o,t,n,r=0)=>{i.has(o)!==n&&(n?a(o,t,r):c(o,t))},e=o=>o===o.getRootNode().activeElement,a=(o,t,n)=>{const r=t.parentNode,e=t.cloneNode(!1);e.classList.add("cloned-input"),e.tabIndex=-1,r.appendChild(e),i.set(o,e);const a="rtl"===o.ownerDocument.dir?9999:-9999;o.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},c=(o,t)=>{const n=i.get(o);n&&(i.delete(o),n.remove()),o.style.pointerEvents="",t.style.transform=""},s="input, textarea, [no-blur]",u=async(o,t,n,i,e)=>{if(!n&&!i)return;const a=((o,t,n)=>((o,t,n,i)=>{const r=o.top,e=o.bottom,a=t.top,c=a+15,s=.75*Math.min(t.bottom,i-n)-e,u=c-r,d=Math.round(s<0?-s:u>0?-u:0),l=Math.min(d,r-a),f=Math.abs(l);return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:n,inputSafeY:4-(r-c)}})((o.closest("ion-item,[ion-item]")||o).getBoundingClientRect(),t.getBoundingClientRect(),n,o.ownerDocument.defaultView.innerHeight))(o,n||i,e);if(n&&Math.abs(a.scrollAmount)<4)t.focus();else if(r(o,t,!0,a.inputSafeY),t.focus(),"undefined"!=typeof window){let i;const e=async()=>{void 0!==i&&clearTimeout(i),window.removeEventListener("ionKeyboardDidShow",c),window.removeEventListener("ionKeyboardDidShow",e),n&&await n.scrollByPoint(0,a.scrollAmount,a.scrollDuration),r(o,t,!1,a.inputSafeY),t.focus()},c=()=>{window.removeEventListener("ionKeyboardDidShow",c),window.addEventListener("ionKeyboardDidShow",e)};if(n){const o=await n.getScrollElement();if(a.scrollAmount>o.scrollHeight-o.clientHeight-o.scrollTop)return"password"===t.type?(a.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",c)):window.addEventListener("ionKeyboardDidShow",e),void(i=setTimeout(e,1e3))}e()}},d=(o,t)=>{if("INPUT"!==o.tagName)return;if(o.parentElement&&"ION-INPUT"===o.parentElement.tagName)return;if(o.parentElement&&o.parentElement.parentElement&&"ION-SEARCHBAR"===o.parentElement.parentElement.tagName)return;const n=o.closest("ion-content");if(null===n)return;const i=n.$ionPaddingTimer;i&&clearTimeout(i),t>0?n.style.setProperty("--keyboard-offset",`${t}px`):n.$ionPaddingTimer=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},l=i=>{const a=document,c=i.getNumber("keyboardHeight",290),l=i.getBoolean("scrollAssist",!0),f=i.getBoolean("hideCaretOnScroll",!0),w=i.getBoolean("inputBlurring",!0),p=i.getBoolean("scrollPadding",!0),h=Array.from(a.querySelectorAll("ion-input, ion-textarea")),S=new WeakMap,y=new WeakMap,m=async i=>{i.componentOnReady&&await i.componentOnReady();const a=i.shadowRoot||i,s=a.querySelector("input")||a.querySelector("textarea"),d=i.closest("ion-content"),w=d?null:i.closest("ion-footer");if(s){if(d&&f&&!S.has(i)){const n=((n,i,a)=>{if(!a||!i)return()=>{};const c=o=>{e(i)&&r(n,i,o)},s=()=>r(n,i,!1),u=()=>c(!0),d=()=>c(!1);return o(a,"ionScrollStart",u),o(a,"ionScrollEnd",d),i.addEventListener("blur",s),()=>{t(a,"ionScrollStart",u),t(a,"ionScrollEnd",d),i.addEventListener("ionBlur",s)}})(i,s,d);S.set(i,n)}if((d||w)&&l&&!y.has(i)){const o=((o,t,i,r,a)=>{let c;const s=o=>{c=n(o)},d=s=>{if(!c)return;const d=n(s);((o,t,n)=>{if(t&&n){const i=t.x-n.x,r=t.y-n.y;return i*i+r*r>o*o}return!1})(6,c,d)||e(t)||(s.preventDefault(),s.stopPropagation(),u(o,t,i,r,a))};return o.addEventListener("touchstart",s,!0),o.addEventListener("touchend",d,!0),()=>{o.removeEventListener("touchstart",s,!0),o.removeEventListener("touchend",d,!0)}})(i,s,d,w,c);y.set(i,o)}}};w&&(()=>{let t=!0,n=!1;const i=document;o(i,"ionScrollStart",()=>{n=!0}),i.addEventListener("focusin",()=>{t=!0},!0),i.addEventListener("touchend",o=>{if(n)return void(n=!1);const r=i.activeElement;if(!r)return;if(r.matches(s))return;const e=o.target;e!==r&&(e.matches(s)||e.closest(s)||(t=!1,setTimeout(()=>{t||r.blur()},50)))},!1)})(),p&&(o=>{const t=document;t.addEventListener("focusin",t=>{d(t.target,o)}),t.addEventListener("focusout",o=>{d(o.target,0)})})(c);for(const o of h)m(o);a.addEventListener("ionInputDidLoad",o=>{m(o.detail)}),a.addEventListener("ionInputDidUnload",o=>{(o=>{if(f){const t=S.get(o);t&&t(),S.delete(o)}if(l){const t=y.get(o);t&&t(),y.delete(o)}})(o.detail)})};export{l as startInputShims}