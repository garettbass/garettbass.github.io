System.register(["./p-596cb4f6.system.js"],(function(e){"use strict";var t,n,a;return{setters:[function(e){t=e.r;n=e.h;a=e.d}],execute:function(){const i="";const o=e("component_searchbar",class{constructor(e){t(this,e);this.cities=["Amsterdam","Bogota","Buenos Aires","Cairo","Dhaka","Edinburgh","Geneva","Genoa","Glasglow","Hanoi","Hong Kong","Islamabad","Istanbul","Jakarta","Kiel","Kyoto","Le Havre","Lebanon","Lhasa","Lima","London","Los Angeles","Madrid","Manila","New York","Olympia","Oslo","Panama City","Peking","Philadelphia","San Francisco","Seoul","Taipeh","Tel Aviv","Tokio","Uelzen","Washington"];this.items=this.cities;this.handleSearch=e=>{const t=e.target.value.toLowerCase();this.items=this.cities.filter(e=>e.toLocaleLowerCase().indexOf(t)>=0)}}render(){return[n("ion-header",{translucent:true},n("ion-toolbar",null,n("ion-buttons",{slot:"start"},n("ion-back-button",{defaultHref:"/"})),n("ion-title",null,"Searchbar")),n("ion-toolbar",null,n("ion-searchbar",{onIonInput:this.handleSearch}))),n("ion-content",{fullscreen:true},n("ion-list",null,this.items.map(e=>n("ion-item",null,n("ion-label",null,e)))))]}get el(){return a(this)}});o.style=i}}}));