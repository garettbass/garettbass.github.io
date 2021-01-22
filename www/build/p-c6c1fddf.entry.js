import{r as t,h as o,H as e,d as n,e as s}from"./p-ed98ce0b.js";import{g as i,c as r,a}from"./p-a19aa8c2.js";import{c,d as h}from"./p-6f155354.js";import{l as u,t as l,s as d,L as p,a as f,b as m}from"./p-7a6d5d8d.js";import{g as w}from"./p-8f72be08.js";import{g as v}from"./p-fe444b60.js";import{a as b}from"./p-a38ea475.js";const g=class{constructor(o){t(this,o),this.components=v()}render(){return o("ion-app",null,o("ion-router",{useHash:!1},o("ion-route",{url:"/",component:"app-home"}),o("ion-route",{url:"/component",component:"app-home"}),this.components.filter(t=>"tabs"!==t.name).map(t=>o("ion-route",{url:`/component/${t.id}`,component:`component-${t.id}`})),o("ion-route",{component:"component-tabs"},o("ion-route",{url:"/component/tabs/music",component:"tabs-music"}),o("ion-route",{url:"/component/tabs/movies",component:"tabs-movies"}),o("ion-route",{url:"/component/tabs/games",component:"tabs-games"}))),o("ion-nav",null))}};g.style="";const y=class{constructor(o){t(this,o)}componentDidLoad(){_(async()=>{const t=a(window,"hybrid");r.getBoolean("_testing")||__sc_import_app("./p-f8d8e9c9.js").then(t=>t.startTapClick(r)),r.getBoolean("statusTap",t)&&__sc_import_app("./p-2be43baa.js").then(t=>t.startStatusTap()),r.getBoolean("inputShims",C())&&__sc_import_app("./p-4868ba72.js").then(t=>t.startInputShims(r));const o=await __sc_import_app("./p-f2660943.js");r.getBoolean("hardwareBackButton",t)?o.startHardwareBackButton():o.blockHardwareBackButton(),"undefined"!=typeof window&&__sc_import_app("./p-2e4e8117.js").then(t=>t.startKeyboardAssist(window)),__sc_import_app("./p-aef0bba0.js").then(t=>t.startFocusVisible())})}render(){const t=i(this);return o(e,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":r.getBoolean("_forceStatusbarPadding")}})}get el(){return n(this)}},C=()=>a(window,"ios")&&a(window,"mobile"),_=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};y.style="html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";class j{constructor(t,o){this.component=t,this.params=o,this.state=1}async init(t){if(this.state=2,!this.element){const o=this.component;this.element=await b(this.delegate,t,o,["ion-page","ion-page-invisible"],this.params)}}_destroy(){c(3!==this.state,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}const P=(t,o,e)=>{if(!t)return!1;if(t.component!==o)return!1;const n=t.params;if(n===e)return!0;if(!n&&!e)return!0;if(!n||!e)return!1;const s=Object.keys(n),i=Object.keys(e);if(s.length!==i.length)return!1;for(const r of s)if(n[r]!==e[r])return!1;return!0},R=(t,o)=>t?t instanceof j?t:new j(t,o):null,k=class{constructor(o){t(this,o),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=s(this,"ionNavWillLoad",7),this.ionNavWillChange=s(this,"ionNavWillChange",3),this.ionNavDidChange=s(this,"ionNavDidChange",3)}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const t=i(this);this.swipeGesture=r.getBoolean("swipeBackEnabled","ios"===t)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await __sc_import_app("./p-04aa40e9.js")).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}disconnectedCallback(){for(const t of this.views)u(t.element,p),t._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(t,o,e,n){return this.queueTrns({insertStart:-1,insertViews:[{component:t,componentProps:o}],opts:e},n)}insert(t,o,e,n,s){return this.queueTrns({insertStart:t,insertViews:[{component:o,componentProps:e}],opts:n},s)}insertPages(t,o,e,n){return this.queueTrns({insertStart:t,insertViews:o,opts:e},n)}pop(t,o){return this.queueTrns({removeStart:-1,removeCount:1,opts:t},o)}popTo(t,o,e){const n={removeStart:-1,removeCount:-1,opts:o};return"object"==typeof t&&t.component?(n.removeView=t,n.removeStart=1):"number"==typeof t&&(n.removeStart=t+1),this.queueTrns(n,e)}popToRoot(t,o){return this.queueTrns({removeStart:1,removeCount:-1,opts:t},o)}removeIndex(t,o=1,e,n){return this.queueTrns({removeStart:t,removeCount:o,opts:e},n)}setRoot(t,o,e,n){return this.setPages([{component:t,componentProps:o}],e,n)}setPages(t,o,e){return null==o&&(o={}),!0!==o.animated&&(o.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:o},e)}setRouteId(t,o,e,n){const s=this.getActiveSync();if(P(s,t,o))return Promise.resolve({changed:!1,element:s.element});let i;const r=new Promise(t=>i=t);let a;const c={updateURL:!1,viewIsReady:t=>{let o;const e=new Promise(t=>o=t);return i({changed:!0,element:t,markVisible:async()=>{o(),await a}}),e}};if("root"===e)a=this.setRoot(t,o,c);else{const s=this.views.find(e=>P(e,t,o));s?a=this.popTo(s,Object.assign(Object.assign({},c),{direction:"back",animationBuilder:n})):"forward"===e?a=this.push(t,o,Object.assign(Object.assign({},c),{animationBuilder:n})):"back"===e&&(a=this.setRoot(t,o,Object.assign(Object.assign({},c),{direction:"back",animated:!0,animationBuilder:n})))}return r}async getRouteId(){const t=this.getActiveSync();return t?{id:t.element.tagName,params:t.params,element:t.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(t){return Promise.resolve(this.views[t])}canGoBack(t){return Promise.resolve(this.canGoBackSync(t))}getPrevious(t){return Promise.resolve(this.getPreviousSync(t))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(t=this.getActiveSync()){return!(!t||!this.getPreviousSync(t))}getPreviousSync(t=this.getActiveSync()){if(!t)return;const o=this.views,e=o.indexOf(t);return e>0?o[e-1]:void 0}async queueTrns(t,o){if(this.isTransitioning&&null!=t.opts&&t.opts.skipIfBusy)return Promise.resolve(!1);const e=new Promise((o,e)=>{t.resolve=o,t.reject=e});if(t.done=o,t.opts&&!1!==t.opts.updateURL&&this.useRouter){const o=document.querySelector("ion-router");if(o){const e=await o.canTransition();if(!1===e)return Promise.resolve(!1);if("string"==typeof e)return o.push(e,t.opts.direction||"back"),Promise.resolve(!1)}}return t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),e}success(t,o){if(this.destroyed)this.fireError("nav controller was destroyed",o);else if(o.done&&o.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),o.resolve(t.hasCompleted),!1!==o.opts.updateURL&&this.useRouter){const o=document.querySelector("ion-router");o&&o.navChanged("back"===t.direction?"back":"forward")}}failed(t,o){this.destroyed?this.fireError("nav controller was destroyed",o):(this.transInstr.length=0,this.fireError(t,o))}fireError(t,o){o.done&&o.done(!1,!1,t),o.reject&&!this.destroyed?o.reject(t):o.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)}async runTransition(t){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);const o=this.getActiveSync(),e=this.getEnteringView(t,o);if(!o&&!e)throw new Error("no views in the stack to be removed");e&&1===e.state&&await e.init(this.el),this.postViewInit(e,o,t);const n=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&e!==o;n&&t.opts&&o&&("back"===t.opts.direction&&(t.opts.animationBuilder=t.opts.animationBuilder||e&&e.animationBuilder),o.animationBuilder=t.opts.animationBuilder);const s=n?await this.transition(e,o,t):{hasCompleted:!0,requiresTransition:!1};this.success(s,t),this.ionNavDidChange.emit()}catch(o){this.failed(o,t)}this.isTransitioning=!1,this.nextTrns()}prepareTI(t){const o=this.views.length;if(t.opts=t.opts||{},void 0===t.opts.delegate&&(t.opts.delegate=this.delegate),void 0!==t.removeView){c(void 0!==t.removeStart,"removeView needs removeStart"),c(void 0!==t.removeCount,"removeView needs removeCount");const o=this.views.indexOf(t.removeView);if(o<0)throw new Error("removeView was not found");t.removeStart+=o}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=o-1),t.removeCount<0&&(t.removeCount=o-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===o),t.insertViews&&((t.insertStart<0||t.insertStart>o)&&(t.insertStart=o),t.enteringRequiresTransition=t.insertStart===o);const e=t.insertViews;if(!e)return;c(e.length>0,"length can not be zero");const n=e.map(t=>t instanceof j?t:"component"in t?R(t.component,null===t.componentProps?void 0:t.componentProps):R(t,void 0)).filter(t=>null!==t);if(0===n.length)throw new Error("invalid views to insert");for(const s of n){s.delegate=t.opts.delegate;const o=s.nav;if(o&&o!==this)throw new Error("inserted view was already inserted");if(3===s.state)throw new Error("inserted view was already destroyed")}t.insertViews=n}getEnteringView(t,o){const e=t.insertViews;if(void 0!==e)return e[e.length-1];const n=t.removeStart;if(void 0!==n){const e=this.views,s=n+t.removeCount;for(let t=e.length-1;t>=0;t--){const i=e[t];if((t<n||t>=s)&&i!==o)return i}}}postViewInit(t,o,e){c(o||t,"Both leavingView and enteringView are null"),c(e.resolve,"resolve must be valid"),c(e.reject,"reject must be valid");const n=e.opts,s=e.insertViews,i=e.removeStart,r=e.removeCount;let a;if(void 0!==i&&void 0!==r){c(i>=0,"removeStart can not be negative"),c(r>=0,"removeCount can not be negative"),a=[];for(let e=0;e<r;e++){const n=this.views[e+i];n&&n!==t&&n!==o&&a.push(n)}n.direction=n.direction||"back"}const h=this.views.length+(void 0!==s?s.length:0)-(void 0!==r?r:0);if(c(h>=0,"final balance can not be negative"),0===h)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(s){let t=e.insertStart;for(const o of s)this.insertViewAt(o,t),t++;e.enteringRequiresTransition&&(n.direction=n.direction||"forward")}if(a&&a.length>0){for(const t of a)u(t.element,f),u(t.element,m),u(t.element,p);for(const t of a)this.destroyView(t)}}async transition(t,o,e){const n=e.opts,s=n.progressAnimation?t=>this.sbAni=t:void 0,a=i(this),c=t.element,h=o&&o.element,u=Object.assign({mode:a,showGoBack:this.canGoBackSync(t),baseEl:this.el,animationBuilder:this.animation||n.animationBuilder||r.get("navAnimation"),progressCallback:s,animated:this.animated&&r.getBoolean("animated",!0),enteringEl:c,leavingEl:h},n),{hasCompleted:d}=await l(u);return this.transitionFinish(d,t,o,n)}transitionFinish(t,o,e,n){const s=t?o:e;return s&&this.cleanup(s),{hasCompleted:t,requiresTransition:!0,enteringView:o,leavingView:e,direction:n.direction}}insertViewAt(t,o){const e=this.views,n=e.indexOf(t);n>-1?(c(t.nav===this,"view is not part of the nav"),e.splice(o,0,e.splice(n,1)[0])):(c(!t.nav,"nav is used"),t.nav=this,e.splice(o,0,t))}removeView(t){c(2===t.state||3===t.state,"view state should be loaded or destroyed");const o=this.views,e=o.indexOf(t);c(e>-1,"view must be part of the stack"),e>=0&&o.splice(e,1)}destroyView(t){t._destroy(),this.removeView(t)}cleanup(t){if(this.destroyed)return;const o=this.views,e=o.indexOf(t);for(let n=o.length-1;n>=0;n--){const t=o[n],s=t.element;s&&(n>e?(u(s,p),this.destroyView(t)):n<e&&d(s,!0))}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(t){this.sbAni&&this.sbAni.progressStep(t)}onEnd(t,o,e){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let n=t?-.001:.001;t?n+=w([0,0],[.32,.72],[0,1],[1,1],o)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),n+=w([0,0],[1,0],[.68,.28],[1,1],o)[0]),this.sbAni.progressEnd(t?1:0,n,e)}}render(){return o("slot",null)}get el(){return n(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};k.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";const E=class{constructor(o){t(this,o),this.url="",this.ionRouteDataChanged=s(this,"ionRouteDataChanged",7)}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,o){if(t===o)return;const e=t?Object.keys(t):[],n=o?Object.keys(o):[];if(e.length===n.length){for(const s of e)if(t[s]!==o[s])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},S=t=>"/"+t.filter(t=>t.length>0).join("/"),T=t=>{if(null==t)return[""];const o=t.split("?")[0].split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===o.length?[""]:o},O=async(t,o,e,n,s=!1,i)=>{try{const r=V(t);if(n>=o.length||!r)return s;await r.componentOnReady();const a=o[n],c=await r.setRouteId(a.id,a.params,e,i);return c.changed&&(e="root",s=!0),s=await O(c.element,o,e,n+1,s,i),c.markVisible&&await c.markVisible(),s}catch(r){return console.error(r),!1}},L=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",V=t=>{if(!t)return;if(t.matches(L))return t;return t.querySelector(L)||void 0},U=(t,o)=>o.find(o=>((t,o)=>{const{from:e,to:n}=o;if(void 0===n)return!1;if(e.length>t.length)return!1;for(let s=0;s<e.length;s++){const o=e[s];if("*"===o)return!0;if(o!==t[s])return!1}return e.length===t.length})(t,o)),B=(t,o)=>{const e=Math.min(t.length,o.length);let n=0;for(;n<e&&t[n].toLowerCase()===o[n].id;n++);return n},I=(t,o)=>{const e=new N(t);let n,s=!1;for(let i=0;i<o.length;i++){const t=o[i].path;if(""===t[0])s=!0;else{for(const o of t){const t=e.next();if(":"===o[0]){if(""===t)return null;n=n||[],(n[i]||(n[i]={}))[o.slice(1)]=t}else if(t!==o)return null}s=!1}}return s&&s!==(""===e.next())?null:n?o.map((t,o)=>({id:t.id,path:t.path,params:x(t.params,n[o]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave})):o},x=(t,o)=>!t&&o?o:t&&!o?t:t&&o?Object.assign(Object.assign({},t),o):void 0,D=(t,o)=>{let e=null,n=0;for(const s of o){const o=I(t,s);if(null!==o){const t=A(o);t>n&&(n=t,e=o)}}return e},A=t=>{let o=1,e=1;for(const n of t)for(const t of n.path)":"===t[0]?o+=Math.pow(1,e):""!==t&&(o+=Math.pow(2,e)),e++;return o};class N{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const $=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const o=z(t,"to");return{from:T(z(t,"from")),to:null==o?void 0:T(o)}}),G=t=>q(W(t)),W=(t,o=t)=>Array.from(o.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(o=>{const e=z(o,"component");if(null==e)throw new Error("component missing in ion-route");return{path:T(z(o,"url")),id:e.toLowerCase(),params:o.componentProps,beforeLeave:o.beforeLeave,beforeEnter:o.beforeEnter,children:W(t,o)}}),z=(t,o)=>o in t?t[o]:t.hasAttribute(o)?t.getAttribute(o):null,q=t=>{const o=[];for(const e of t)H([],o,e);return o},H=(t,o,e)=>{const n=t.slice();if(n.push({id:e.id,path:e.path,params:e.params,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter}),0!==e.children.length)for(const s of e.children)H(n,o,s);else o.push(n)},M=class{constructor(o){t(this,o),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=s(this,"ionRouteWillChange",7),this.ionRouteDidChange=s(this,"ionRouteDidChange",7)}async componentWillLoad(){console.debug("[ion-router] router will load"),await(V(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})})),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",h(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",h(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let o=this.getPath();const e=await this.runGuards(o);return!0!==e?("object"==typeof e&&(o=T(e.redirect)),!1):(console.debug("[ion-router] URL changed -> update nav",o,t),this.writeNavStateRoot(o,t))}onBackButton(t){t.detail.register(0,t=>{this.back(),t()})}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,o="forward",e){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,o);let n=T(t),s=t.split("?")[1];const i=await this.runGuards(n);if(!0!==i){if("object"!=typeof i)return!1;n=T(i.redirect),s=i.redirect.split("?")[1]}return this.setPath(n,o,s),this.writeNavStateRoot(n,o,e)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const o of t){const t=[];o.forEach(o=>t.push(...o.path));const e=o.map(t=>t.id);console.debug(`%c ${S(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${e.join(", ")})`)}console.groupEnd()})(G(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const o of t)o.to&&console.debug("FROM: ",`$c ${S(o.from)}`,"font-weight: bold"," TO: ",`$c ${S(o.to)}`,"font-weight: bold");console.groupEnd()})($(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:o,outlet:e}=await(async()=>{const t=[];let o,e=window.document.body;for(;o=V(e),o;){const n=await o.getRouteId();if(!n)break;e=n.element,n.element=void 0,t.push(n)}return{ids:t,outlet:o}})(),n=((t,o)=>{let e=null,n=0;const s=t.map(t=>t.id);for(const i of o){const t=B(s,i);t>n&&(e=i,n=t)}return e?e.map((o,e)=>({id:o.id,path:o.path,params:x(o.params,t[e]&&t[e].params)})):null})(o,G(this.el));if(!n)return console.warn("[ion-router] no matching URL for ",o.map(t=>t.id)),!1;const s=(t=>{const o=[];for(const e of t)for(const t of e.path)if(":"===t[0]){const n=e.params&&e.params[t.slice(1)];if(!n)return null;o.push(n)}else""!==t&&o.push(t);return o})(n);return s?(console.debug("[ion-router] nav changed -> update URL",o,s),this.setPath(s,t),await this.safeWriteNavState(e,n,"root",s,null,o.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&U(t,$(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const o=t.history.state,e=this.lastState;return this.lastState=o,o>e||o>=e&&e>0?"forward":o<e?"back":"root"}async writeNavStateRoot(t,o,e){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=$(this.el),s=U(t,n);let i=null;s&&(this.setPath(s.to,o),i=s.from,t=s.to);const r=G(this.el),a=D(t,r);return a?this.safeWriteNavState(document.body,a,o,t,i,0,e):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,o,e,n,s,i=0,r){const a=await this.lock();let c=!1;try{c=await this.writeNavState(t,o,e,n,s,i,r)}catch(h){console.error(h)}return a(),c}async lock(){const t=this.waitPromise;let o;return this.waitPromise=new Promise(t=>o=t),void 0!==t&&await t,o}async runGuards(t=this.getPath(),o=T(this.previousPath)){if(!t||!o)return!0;const e=G(this.el),n=D(t,e),s=D(o,e),i=n&&n[n.length-1].beforeEnter,r=s&&s[s.length-1].beforeLeave,a=!r||await r();if(!1===a||"object"==typeof a)return a;const c=!i||await i();return!1!==c&&"object"!=typeof c||c}async writeNavState(t,o,e,n,s,i=0,r){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const a=this.routeChangeEvent(n,s);a&&this.ionRouteWillChange.emit(a);const c=await O(t,o,e,i,!1,r);return this.busy=!1,c&&console.debug("[ion-router] route changed",n),a&&this.ionRouteDidChange.emit(a),c}setPath(t,o,e){this.state++,((t,o,e,n,s,i,r)=>{let a=S([...T(this.root),...n]);e&&(a="#"+a),void 0!==r&&(a=a+"?"+r),"forward"===s?t.pushState(i,"",a):t.replaceState(i,"",a)})(window.history,0,this.useHash,t,o,this.state,e)}getPath(){return((t,o)=>{let e=t.pathname;if(this.useHash){const o=t.hash;e="#"===o[0]?o.slice(1):""}return((t,o)=>{if(t.length>o.length)return null;if(t.length<=1&&""===t[0])return o;for(let e=0;e<t.length;e++)if(t[e].length>0&&t[e]!==o[e])return null;return o.length===t.length?[""]:o.slice(t.length)})(T(o),T(e))})(window.location,this.root)}routeChangeEvent(t,o){const e=this.previousPath,n=S(t);return this.previousPath=n,n===e?null:{from:e,redirectedFrom:o?S(o):null,to:n}}get el(){return n(this)}};export{g as app_root,y as ion_app,k as ion_nav,E as ion_route,M as ion_router}