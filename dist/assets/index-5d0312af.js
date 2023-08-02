var K=Object.defineProperty;var Q=(i,t,e)=>t in i?K(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var a=(i,t,e)=>(Q(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=e(s);fetch(s.href,c)}})();const W=3e3,X="https://wizq-apps.suncs.io",Z="12027078",ee="https://vietdev.sunstudio.io",E={port:W,apiHost:X,appid:Z,apiLogHost:ee},k=async function(i){var t;if(!i.ok){const e=await i.json();throw new Error((t=e==null?void 0:e.error)==null?void 0:t.message)}return i.json()},te=async i=>{var e;const t=`${E.apiHost}/apps/${E.appid}/players/${i}`;try{const n=await fetch(t);return k(n)}catch{throw new Error((e=errorData==null?void 0:errorData.error)==null?void 0:e.message)}},ne=async i=>{var t;try{const e=`${E.apiHost}/apps/${E.appid}/players`,n={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(i)},s=await fetch(e,n);return k(s)}catch{throw new Error((t=errorData==null?void 0:errorData.error)==null?void 0:t.message)}},se=async i=>{var c;const t=E.apiLogHost+"/append",e=JSON.stringify({path:"wizq/bubble-queen-cat/edit-data-log/mobage.json",data:JSON.stringify(i)+`
`}),s=await fetch(t,{headers:{"Content-Type":"application/json"},method:"POST",body:e,redirect:"follow"});if(!s.ok){const o=await s.text();throw new Error((c=o==null?void 0:o.error)==null?void 0:c.message)}return s.text()},N={getPlayerData:te,postPlayerData:ne,sendLog:se};class A{constructor(t){a(this,"instanceElement");this.instanceElement=t}addEventListener(t,e){var n;(n=this.instanceElement)==null||n.addEventListener(t,e)}dispatchEvent(t,e={}){const n=new CustomEvent(t,{detail:e});this.instanceElement.dispatchEvent(n)}}function j(i){return Object.prototype.toString.call(i).slice(8,-1)}function T(i){if(j(i)!=="Object")return!1;const t=Object.getPrototypeOf(i);return!!t&&t.constructor===Object&&t===Object.prototype}function q(i){return j(i)==="Symbol"}function H(i,t,e,n){const s={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";s==="enumerable"&&(i[t]=e),s==="nonenumerable"&&Object.defineProperty(i,t,{value:e,enumerable:!1,writable:!0,configurable:!0})}function $(i,t,e){if(!T(t))return t;let n={};if(T(i)){const l=Object.getOwnPropertyNames(i),p=Object.getOwnPropertySymbols(i);n=[...l,...p].reduce((d,r)=>{const g=i[r];return(!q(r)&&!Object.getOwnPropertyNames(t).includes(r)||q(r)&&!Object.getOwnPropertySymbols(t).includes(r))&&H(d,r,g,i),d},{})}const s=Object.getOwnPropertyNames(t),c=Object.getOwnPropertySymbols(t);return[...s,...c].reduce((l,p)=>{let d=t[p];const r=T(i)?i[p]:void 0;r!==void 0&&T(d)&&(d=$(r,d,e));const g=e?e(r,d,p):d;return H(l,p,g,t),l},n)}function ie(i,...t){return t.reduce((e,n)=>$(e,n),i)}const v={PRE_UPDATE:"PRE_UPDATE",UPDATE_SUCCESS:"UPDATE_SUCCESS",UPDATE_FAIL:"UPDATE_FAIL",UPDATE_FINALLY:"UPDATE_FINALLY"};class oe extends A{constructor(){super(document.getElementById("modal-update"));a(this,"closeBtn");a(this,"footerCloseBtn");a(this,"updateBtn");a(this,"input");a(this,"show",(e,n,s)=>{if(!this.instanceElement.classList.contains("active")){const c=this.instanceElement.querySelector(".modal--header--title"),o=this.instanceElement.querySelector("#new-value-input");o.setAttribute("data-control",n),c.innerHTML=e,o.value=s,this.instanceElement.classList.add("active")}});a(this,"hide",()=>{this.instanceElement.classList.contains("active")&&this.instanceElement.classList.remove("active")});this.closeBtn=document.querySelector("#modal-update .modal--header .btn.btn-close"),this.footerCloseBtn=document.querySelector("#modal-update .modal--footer .btn-close"),this.updateBtn=document.querySelector("#modal-update .modal--footer .btn-update"),this.input=document.querySelector("#new-value-input"),this.initEvents()}initEvents(){const e=this.instanceElement;if(!e)return;const n=e.querySelector(".modal--background");n==null||n.addEventListener("click",this.hide),this.closeBtn.addEventListener("click",this.hide),this.footerCloseBtn.addEventListener("click",this.hide),this.updateBtn.addEventListener("click",async()=>{try{this.dispatchEvent(v.PRE_UPDATE);const s=f.instance.getPlayerId();if(s){const c=f.instance.playerData,o=this.input.dataset.control.split(".");let l=JSON.parse(JSON.stringify(c)),p=0;if(l.hasOwnProperty("customFields")){let u=l.customFields;for(let S=0;S<o.length;S++){const I=o[S];u.hasOwnProperty(I)&&(u=u[I])}typeof u=="number"&&(p=u)}let d={},r=d;for(let u=0;u<o.length-1;u++)r[o[u]]={},r=r[o[u]];r[o[o.length-1]]=Math.max(parseInt(this.input.value),0);const g=ie(l,{customFields:d}),C={appid:E.appid,adminId:"2",userId:s,property:o[o.length-1],fromValue:p,toValue:Math.max(parseInt(this.input.value),0),dateTime:new Date().toString()},F=await N.postPlayerData(g),D=N.sendLog(C);this.dispatchEvent(v.UPDATE_SUCCESS,{message:"Update Success",newValue:this.input.value,playerData:F.data})}}catch(s){this.dispatchEvent(v.UPDATE_FAIL,{message:s.message})}finally{this.hide(),this.dispatchEvent(v.UPDATE_FINALLY,{})}})}}const h={PRE:"PRE",SUCCESS:"SUCCESS",FAIL:"FAIL",FINALLY:"FINALLY"};class ae extends A{constructor(){var e;super(document.getElementById("search-form"));a(this,"input");a(this,"button");a(this,"handleSubmitForm",async e=>{var n;try{e.preventDefault(),this.dispatchEvent(h.PRE);const s=(n=this.input)==null?void 0:n.value;if(!s){this.dispatchEvent(h.FAIL,{error:{message:"PlayerID is empty!"}});return}const c=await N.getPlayerData(s);this.dispatchEvent(h.SUCCESS,{json:c})}catch(s){this.dispatchEvent(h.FAIL,{error:{message:s.message}})}finally{this.dispatchEvent(h.FINALLY)}});this.input=document.querySelector(".search-box--input input"),this.button=document.querySelector(".search-button button"),this.initEvents(),(e=this.input)==null||e.focus()}initEvents(){var e;(e=this.instanceElement)==null||e.addEventListener("submit",this.handleSubmitForm)}}const ce=""+new URL("check-e4a86f6b.png",import.meta.url).href,re=""+new URL("close-572223d0.png",import.meta.url).href,y={SUCCESS:"SUCCESS",ERROR:"ERROR"};class x{constructor(){a(this,"notificationElement");this.notificationElement=document.querySelector(".notification")}removeToast(t){t&&(t.countdownTimer&&(clearTimeout(t.countdownTimer),t.countdownTimer=void 0),t.style.animation="slide-out-toast 0.7s ease forwards",setTimeout(()=>{t.remove()},1500))}createToast(t,e){if(!this.notificationElement)return;let n=["toast--container"],s="";switch(e){case"SUCCESS":n.push("success"),s=ce;break;case"ERROR":n.push("error"),s=re;break}let c=`
                <div class ="toast--header">
                    <div class="icon-status"> 
                        <img src="${s}" alt=""/>
                    </div>
                    <div class="title">Action Executed!</div>
                </div>
                <div class="toast--body">
                     <div class="message">
                        <p>${t}</p>
                    </div>
                </div>  
                <div class="toast--footer">
                    <div class="wrap--countdown"><span class="countdown"></span></div>
                </div> `;const o=document.createElement("div");return o.classList.add(...n),o.innerHTML=c,this.notificationElement.insertBefore(o,this.notificationElement.firstChild),o.countdownTimer=setTimeout(()=>{this.removeToast(o)},4e3),o}}class Y{constructor(){a(this,"screen");a(this,"showLoadingScreen",()=>{this.screen.classList.remove("loading-hide"),this.screen.classList.contains("loading-show")||this.screen.classList.add("loading-show")});a(this,"hideLoadingScreen",()=>{this.screen.classList.remove("loading-show"),this.screen.classList.contains("loading-hide")||this.screen.classList.add("loading-hide")});this.screen=document.querySelector("#loading-screen")}}const V=""+new URL("logo-d26a4653.webp",import.meta.url).href,B={EDIT_ACTION:"EDIT_ACTION"};class J extends A{constructor(){super(document.querySelector(".sub-page"));a(this,"rowSelected");a(this,"onEditButton",e=>{this.rowSelected=e;const n=e.children[0].dataset.control,s=e.children[0].innerHTML,c=e.children[1].innerHTML;this.dispatchEvent(B.EDIT_ACTION,{title:s,key:n,value:c})});this.initCopyEvent()}initCopyEvent(){const e=document.querySelector(".sub-page--profile .id .copy-icon");e==null||e.addEventListener("click",()=>{const n=f.instance.getPlayerId();navigator.clipboard.writeText(n)})}update(e){if(!e||e.playerId==""){this.setLoadingContent();return}this.updateContent(e)}setLoadingContent(){if(!this.instanceElement)return;this.instanceElement.classList="sub-page .prevent-select loading";const e=document.querySelector(".sub-page--profile"),n=e.querySelector(".avatar");n.innerHTML="",e.querySelector(".name").innerHTML="",e.querySelector(".id p").innerHTML="";const s=document.querySelector(".sub-page--table tbody");s.innerHTML="<tr></tr>"}updateContent(e){const{name:n,photo:s,customFields:c,playerId:o}=e||{},{level:l=0,coin:p=0,spin:d=0,bullets:r}=c||{},g=(r==null?void 0:r.RocketBulletItem)||0,C=(r==null?void 0:r.RainbowBulletBallItem)||0,F=(r==null?void 0:r.ElectricBulletBallItem)||0,D=(r==null?void 0:r.BombBulletItem)||0,u=[{value:l,title:"Level",key:"level"},{value:p,title:"Coin",key:"coin"},{value:d,title:"Spin",key:"spin"},{value:g,title:"Rocket",key:"bullets.RocketBulletItem"},{value:C,title:"Rainbow",key:"bullets.RainbowBulletBallItem"},{value:F,title:"Electric",key:"bullets.ElectricBulletBallItem"},{value:D,title:"Bomb",key:"bullets.BombBulletItem"}],S=s,I=document.querySelector(".sub-page");I.classList="sub-page .prevent-select";const R=document.querySelector(".sub-page--profile"),M=R.querySelector(".avatar");M.innerHTML="";const b=new Image;b.src=S,b.setAttribute("crossorigin","anonymous"),b.onerror=()=>{b.src=V},M.appendChild(b),R.querySelector(".name").innerHTML=n,R.querySelector(".id p").innerHTML=o;const _=document.querySelector(".sub-page--table tbody");_.innerHTML="";for(let G of u){const z=this.createRow(G);_.appendChild(z)}}createRow(e){const{value:n,title:s,key:c}=e,o=document.createElement("tr");o.innerHTML=`<td data-control="${c}">${s}</td>
            <td>${n}</td>
            <td>
                <div class="action-icon">
                    <a class="action--edit">Edit</a>
                </div>
            </td>`;const l=o.querySelector(".action--edit");return l.addEventListener("click",this.onEditButton.bind(l,o)),o}updateNewValue(e){this.rowSelected.children[1].innerHTML=modal.input.value}}const le=""+new URL("magnifying-glass-94b662e4.png",import.meta.url).href,de=""+new URL("copy-593cbcfe.png",import.meta.url).href;class f{constructor(){a(this,"modal");a(this,"searchFrom");a(this,"notification");a(this,"loadingScreen");a(this,"subPage");a(this,"rowSelected");a(this,"playerData");a(this,"_instance");a(this,"getPlayerId",()=>{var t;return((t=this.playerData)==null?void 0:t.playerId)||""});this.renderHTML(),this.createModal(),this.createSearchForm(),this.createNotification(),this.createLoadingScreen(),this.createSubPage()}static init(){this._instance||(this._instance=new f)}static get instance(){return this._instance||(this._instance=new f),this._instance}renderHTML(){const t=`
    <nav class="container nav--header">
    <div class="logo prevent-select">
      <div class="logo--icon"><img src="${V}" alt=""/></div>
      <div class="logo--text">BQC</div>
    </div>
    <form id="search-form">
      <div class="search-box--container"> 
        <div class="search-box--icon prevent-select"><img src="${le}" alt=""/></div>
        <div class="search-box--input">
          <input placeholder="Player id..." autocomplete="off" value=""/>
        </div>
      </div>
      <div class="search-button"> 
        <button type="submit">FIND</button>
      </div>
    </form>
  </nav>

  <div class="container content--container">
    <nav class="nav--content"> 
      <ul> 
        <li> <a>Dashboard</a></li>
        <li class="active"><a>User</a></li>
        <li><a>Report</a></li>
        <li><a>About</a></li>
      </ul>
    </nav>
    <div class="sub-page prevent-select loading">
      <div class="sub-page--wrap">
        <div class="sub-page--title">
          <p>User</p>
          <div class="sub-page--profile">
                <div class="avatar">
                 
                  </div>
                <div class="info">
                    <p class="name"></p>
                    <div class="id">
                        <p></p>
                        <button class="copy-icon">
                            <img src="${de}" alt=""/>
                        </button>
                    </div>
                </div>
          </div>

        </div>
        <div class="table-container">
          <table class="sub-page--table">
            <thead> 
              <tr> 
                <th>Title</th>
                <th>Value</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>

                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="modal" id="modal-update">
    <div class="modal--background"></div>
    <div class="modal--content-wrap">
      <div class="modal--header">
        <div class="modal--header--title">Level </div>
        <button class="btn btn-close">X</button>
      </div>
      <div class="modal--body"> 
        <form class="modal--body--form" onsubmit="return false;">
          <div class="input-group">
            <label class="label" for="new-value-input">New value</label>
            <input class="input" id="new-value-input" autocompleted="false" type="number"/>
          </div>
        </form>
      </div>
      <div class="modal--footer">
        <button class="btn btn-close">Close</button>
        <button class="btn btn-update">Update</button>
      </div>
    </div>
  </div>
  <div class="notification"></div>
  <div id="loading-screen" class="">
    <div class="container">
      <span class="ring"></span>
      <span class="ring"></span>
      <span class="ring"></span>
    </div>
</div>`,e=document.querySelector("#app");e.innerHTML=t}createSubPage(){this.subPage=new J,this.subPage.addEventListener(B.EDIT_ACTION,t=>{const{title:e,key:n,value:s}=t.detail;this.modal.show(e,n,s)})}createLoadingScreen(){this.loadingScreen=new Y}createNotification(){this.notification=new x}createModal(){this.modal=new oe,this.modal.addEventListener(v.PRE_UPDATE,()=>{this.loadingScreen.showLoadingScreen()}),this.modal.addEventListener(v.UPDATE_SUCCESS,t=>{const{message:e,newValue:n,playerData:s}=t.detail;this.notification.createToast(e,y.SUCCESS),this.playerData=s,this.subPage.update(s)}),this.modal.addEventListener(v.UPDATE_FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.message)||"";this.notification.createToast(e,y.ERROR)}),this.modal.addEventListener(v.UPDATE_FINALLY,()=>{this.loadingScreen.hideLoadingScreen(),this.subPage.rowSelected=null})}createSearchForm(){this.searchFrom=new ae,this.searchFrom.addEventListener(h.PRE,()=>{this.loadingScreen.showLoadingScreen()}),this.searchFrom.addEventListener(h.SUCCESS,t=>{const e=t.detail.json,n={name:"",photo:"",customFields:{level:0,coin:0,spin:0,bullets:{}},playerId:""};this.notification.createToast("Successfully",y.SUCCESS),Object.keys(n).forEach(s=>{const c=e.data[s];c&&(n[s]=c)}),this.playerData=JSON.parse(JSON.stringify(n)),this.subPage.update(n)}),this.searchFrom.addEventListener(h.FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.error.message)||"";this.notification.createToast(e,y.ERROR)}),this.searchFrom.addEventListener(h.FINALLY,()=>{this.loadingScreen.hideLoadingScreen()})}}const m={PRE:"PRE",SUCCESS:"SUCCESS",FAIL:"FAIL",FINALLY:"FINALLY"};class ue extends A{constructor(){super(document.getElementById("login-form"));a(this,"input");a(this,"button");a(this,"handleSubmitForm",async e=>{var n;try{e.preventDefault(),this.dispatchEvent(m.PRE);const s=(n=this.input)==null?void 0:n.value;if(!s){this.dispatchEvent(m.FAIL,{error:{message:"Token is empty"}});return}this.dispatchEvent(m.SUCCESS,{token:s})}catch(s){this.dispatchEvent(m.FAIL,{error:{message:s.message}})}finally{this.dispatchEvent(m.FINALLY)}});this.input=document.querySelector("#login_token"),this.button=document.querySelector(".btn.btn-sign-in"),this.initEvents()}initEvents(){var e;(e=this.instanceElement)==null||e.addEventListener("submit",this.handleSubmitForm)}}const pe=i=>localStorage.getItem(i),he=(i,t)=>{localStorage.setItem(i,t)},me=i=>{localStorage.clear(i)},U={getLocalStorageItem:pe,writeLocalStorageItem:he,removeLocalStorageItem:me};class w{constructor(){a(this,"notification");a(this,"loadingScreen");a(this,"loginForm");a(this,"_instance");a(this,"promiseSuccess");this.renderHTML(),this.createNotification(),this.createLoadingScreen(),this.createLoginForm()}static init(){this._instance||(this._instance=new w)}static get instance(){return this._instance||(this._instance=new w),this._instance}renderHTML(){const t=` 
            <div class="login prevent-select">
            <div class="login-box">
              <form id="login-form">
                <div class="login-form--title">
                  <h2>Welcome back</h2>
                  <p>Enter your credentials to access your account.</p>
                </div>
                <div class="login-form--control">
                  <input placeholder="Token..." id="login_token" autocomplete="off"/>
                </div>
                <button class="btn btn-sign-in">Sign in</button>
              </form>
            </div>
          </div>
          <div class="notification"></div>
          <div id="loading-screen" class="">
            <div class="container">
              <span class="ring"></span>
              <span class="ring"></span>
              <span class="ring"></span>
            </div>
          </div>`,e=document.querySelector("#app");e.innerHTML=t}createSubPage(){this.subPage=new J,this.subPage.addEventListener(B.EDIT_ACTION,t=>{const{title:e,key:n,value:s}=t.detail;this.modal.show(e,n,s)})}createLoadingScreen(){this.loadingScreen=new Y}createNotification(){this.notification=new x}createLoginForm(){this.loginForm=new ue,this.loginForm.addEventListener(m.PRE,()=>{this.loadingScreen.showLoadingScreen(),this.promiseSuccess=!1}),this.loginForm.addEventListener(m.SUCCESS,t=>{const e=t.detail.token;U.writeLocalStorageItem("token",e),this.isSuccess=!0,this.promiseSuccess=new Promise(n=>{setTimeout(()=>{P.renderPage(L.HOME),n()},1e3)})}),this.loginForm.addEventListener(m.FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.error.message)||"";this.notification.createToast(e,y.ERROR)}),this.loginForm.addEventListener(m.FINALLY,()=>{if(this.promiseSuccess){this.promiseSuccess.then(()=>{this.loadingScreen.hideLoadingScreen()});return}this.loadingScreen.hideLoadingScreen()})}}const L={HOME:"HOME",LOGIN:"LOGIN",EMPTY:"EMPTY"},O=class O{static auth(){return U.getLocalStorageItem("token")}};a(O,"renderPage",t=>{if(!O.auth(t)){w.init();return}switch(t){case L.HOME:f.init();break;case L.LOGIN:w.init();break;case L.EMPTY:default:document.querySelector("#app").innerHTML=""}});let P=O;window.onload=()=>{U.removeLocalStorageItem("token"),P.renderPage(L.HOME)};
