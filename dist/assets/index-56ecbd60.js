var Q=Object.defineProperty;var W=(i,t,e)=>t in i?Q(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var o=(i,t,e)=>(W(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const X=3e3,Z="https://wizq-apps.suncs.io",ee="12027078",te="https://vietdev.sunstudio.io",E={port:X,apiHost:Z,appid:ee,apiLogHost:te},H=async function(i){var t;if(!i.ok){const e=await i.json();throw new Error((t=e==null?void 0:e.error)==null?void 0:t.message)}return i.json()},ne=async i=>{var e;const t=`${E.apiHost}/apps/${E.appid}/players/${i}`;try{const n=new AbortController;setTimeout(()=>n.abort(),5e3);const s=await fetch(t,{signal:n.signal});return H(s)}catch{throw new Error((e=errorData==null?void 0:errorData.error)==null?void 0:e.message)}},se=async i=>{var t;try{const e=`${E.apiHost}/apps/${E.appid}/players`,n=j(JSON.stringify(i)),s=await fetch(e,n);return H(s)}catch{throw new Error((t=errorData==null?void 0:errorData.error)==null?void 0:t.message)}},ie=async()=>{let i="";try{const t=new AbortController;setTimeout(()=>t.abort(),5e3),await fetch("https://api.ipify.org?format=json",{signal:t.signal}).then(e=>e.json()).then(e=>i=e.ip)}catch{i=""}return i},j=i=>{const t=new AbortController;return setTimeout(()=>t.abort(),5e3),{headers:{"Content-Type":"application/json"},method:"POST",body:i,signal:t.signal}},oe=async i=>{var r;const t=await ie();i.hasOwnProperty("adminId")&&(i.adminId+=t);const e=E.apiLogHost+"/append",n=JSON.stringify({path:"wizq/bubble-queen-cat/edit-data-log/mobage.json",data:JSON.stringify(i)+`
`}),s=j(n),a=await fetch(e,s);if(!a.ok){const l=await a.text();throw new Error((r=l==null?void 0:l.error)==null?void 0:r.message)}return a.text()},R={getPlayerData:ne,postPlayerData:se,sendLog:oe};class A{constructor(t){o(this,"instanceElement");this.instanceElement=t}addEventListener(t,e){var n;(n=this.instanceElement)==null||n.addEventListener(t,e)}dispatchEvent(t,e={}){const n=new CustomEvent(t,{detail:e});this.instanceElement.dispatchEvent(n)}}const ae=i=>localStorage.getItem(i),re=(i,t)=>{localStorage.setItem(i,t)},ce=i=>{localStorage.clear(i)},N={getLocalStorageItem:ae,writeLocalStorageItem:re,removeLocalStorageItem:ce};function $(i){return Object.prototype.toString.call(i).slice(8,-1)}function I(i){if($(i)!=="Object")return!1;const t=Object.getPrototypeOf(i);return!!t&&t.constructor===Object&&t===Object.prototype}function q(i){return $(i)==="Symbol"}function k(i,t,e,n){const s={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";s==="enumerable"&&(i[t]=e),s==="nonenumerable"&&Object.defineProperty(i,t,{value:e,enumerable:!1,writable:!0,configurable:!0})}function x(i,t,e){if(!I(t))return t;let n={};if(I(i)){const l=Object.getOwnPropertyNames(i),p=Object.getOwnPropertySymbols(i);n=[...l,...p].reduce((u,c)=>{const d=i[c];return(!q(c)&&!Object.getOwnPropertyNames(t).includes(c)||q(c)&&!Object.getOwnPropertySymbols(t).includes(c))&&k(u,c,d,i),u},{})}const s=Object.getOwnPropertyNames(t),a=Object.getOwnPropertySymbols(t);return[...s,...a].reduce((l,p)=>{let u=t[p];const c=I(i)?i[p]:void 0;c!==void 0&&I(u)&&(u=x(c,u,e));const d=e?e(c,u,p):u;return k(l,p,d,t),l},n)}function le(i,...t){return t.reduce((e,n)=>x(e,n),i)}const h={PRE_UPDATE:"PRE_UPDATE",UPDATE_SUCCESS:"UPDATE_SUCCESS",UPDATE_FAIL:"UPDATE_FAIL",UPDATE_FINALLY:"UPDATE_FINALLY"};class de extends A{constructor(){super(document.getElementById("modal-update"));o(this,"closeBtn");o(this,"footerCloseBtn");o(this,"updateBtn");o(this,"input");o(this,"show",(e,n,s)=>{if(!this.instanceElement.classList.contains("active")){const a=this.instanceElement.querySelector(".modal--header--title"),r=this.instanceElement.querySelector("#new-value-input");r.setAttribute("data-control",n),a.innerHTML=e,r.value=s,this.instanceElement.classList.add("active")}});o(this,"hide",()=>{this.instanceElement.classList.contains("active")&&this.instanceElement.classList.remove("active")});o(this,"isAllowUpdate",!0);this.closeBtn=document.querySelector("#modal-update .modal--header .btn.btn-close"),this.footerCloseBtn=document.querySelector("#modal-update .modal--footer .btn-close"),this.updateBtn=document.querySelector("#modal-update .modal--footer .btn-update"),this.input=document.querySelector("#new-value-input"),this.initEvents()}async sendLog(e){try{this.isAllowUpdate=!1,await R.sendLog(e)}finally{this.isAllowUpdate=!0}}initEvents(){const e=this.instanceElement;if(!e)return;const n=e.querySelector(".modal--background");n==null||n.addEventListener("click",this.hide),this.closeBtn.addEventListener("click",this.hide),this.footerCloseBtn.addEventListener("click",this.hide),this.updateBtn.addEventListener("click",async()=>{try{if(this.dispatchEvent(h.PRE_UPDATE),!this.isAllowUpdate){this.dispatchEvent(h.UPDATE_FAIL,{message:"Cann't update right now. Please comeback after 1 minute!"});return}const s=v.instance.getPlayerId();if(s){const a=v.instance.playerData,r=this.input.dataset.control.split(".");let l=JSON.parse(JSON.stringify(a)),p=0;const u=Math.max(parseInt(this.input.value),0);if(l.hasOwnProperty("customFields")){let c=l.customFields;for(let d=0;d<r.length;d++){const S=r[d];c.hasOwnProperty(S)&&(c=c[S])}typeof c=="number"&&(p=c)}if(p==u)this.dispatchEvent(h.UPDATE_SUCCESS,{message:"Update Success",newValue:this.input.value,playerData:l});else{let c={},d=c;for(let f=0;f<r.length-1;f++)d[r[f]]={},d=d[r[f]];d[r[r.length-1]]=Math.max(parseInt(this.input.value),0);const O=`${N.getLocalStorageItem("token")}${Intl.DateTimeFormat().resolvedOptions().timeZone}-`,C=le(l,{customFields:c}),F={appid:E.appid,adminId:O,userId:s,property:r[r.length-1],fromValue:p,toValue:u,dateTime:new Date().toString()},U=await R.postPlayerData(C);this.sendLog(F),this.dispatchEvent(h.UPDATE_SUCCESS,{message:"Update Success",newValue:this.input.value,playerData:U.data})}}}catch(s){this.dispatchEvent(h.UPDATE_FAIL,{message:s.message})}finally{this.hide(),this.dispatchEvent(h.UPDATE_FINALLY,{})}})}}const m={PRE:"PRE",SUCCESS:"SUCCESS",FAIL:"FAIL",FINALLY:"FINALLY"};class ue extends A{constructor(){var e;super(document.getElementById("search-form"));o(this,"input");o(this,"button");o(this,"handleSubmitForm",async e=>{var n;try{e.preventDefault(),this.dispatchEvent(m.PRE);const s=(n=this.input)==null?void 0:n.value;if(!s){this.dispatchEvent(m.FAIL,{error:{message:"PlayerID is empty!"}});return}const a=await R.getPlayerData(s);this.dispatchEvent(m.SUCCESS,{json:a})}catch(s){this.dispatchEvent(m.FAIL,{error:{message:s.message}})}finally{this.dispatchEvent(m.FINALLY)}});this.input=document.querySelector(".search-box--input input"),this.button=document.querySelector(".search-button button"),this.initEvents(),(e=this.input)==null||e.focus()}initEvents(){var e;(e=this.instanceElement)==null||e.addEventListener("submit",this.handleSubmitForm)}}const pe=""+new URL("check-e4a86f6b.png",import.meta.url).href,he=""+new URL("close-572223d0.png",import.meta.url).href,y={SUCCESS:"SUCCESS",ERROR:"ERROR"};class Y{constructor(){o(this,"notificationElement");this.notificationElement=document.querySelector(".notification")}removeToast(t){t&&(t.countdownTimer&&(clearTimeout(t.countdownTimer),t.countdownTimer=void 0),t.style.animation="slide-out-toast 0.7s ease forwards",setTimeout(()=>{t.remove()},1500))}createToast(t,e){if(!this.notificationElement)return;let n=["toast--container"],s="";switch(e){case"SUCCESS":n.push("success"),s=pe;break;case"ERROR":n.push("error"),s=he;break}let a=`
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
                </div> `;const r=document.createElement("div");return r.classList.add(...n),r.innerHTML=a,this.notificationElement.insertBefore(r,this.notificationElement.firstChild),r.countdownTimer=setTimeout(()=>{this.removeToast(r)},4e3),r}}class V{constructor(){o(this,"screen");o(this,"showLoadingScreen",()=>{this.screen.classList.remove("loading-hide"),this.screen.classList.contains("loading-show")||this.screen.classList.add("loading-show")});o(this,"hideLoadingScreen",()=>{this.screen.classList.remove("loading-show"),this.screen.classList.contains("loading-hide")||this.screen.classList.add("loading-hide")});this.screen=document.querySelector("#loading-screen")}}const J=""+new URL("logo-d26a4653.webp",import.meta.url).href,B={EDIT_ACTION:"EDIT_ACTION"};class G extends A{constructor(){super(document.querySelector(".sub-page"));o(this,"rowSelected");o(this,"onEditButton",e=>{this.rowSelected=e;const n=e.children[0].dataset.control,s=e.children[0].innerHTML,a=e.children[1].innerHTML;this.dispatchEvent(B.EDIT_ACTION,{title:s,key:n,value:a})});this.initCopyEvent()}initCopyEvent(){const e=document.querySelector(".sub-page--profile .id .copy-icon");e==null||e.addEventListener("click",()=>{const n=v.instance.getPlayerId();navigator.clipboard.writeText(n)})}update(e){if(!e||e.playerId==""){this.setLoadingContent();return}this.updateContent(e)}setLoadingContent(){if(!this.instanceElement)return;this.instanceElement.classList="sub-page .prevent-select loading";const e=document.querySelector(".sub-page--profile"),n=e.querySelector(".avatar");n.innerHTML="",e.querySelector(".name").innerHTML="",e.querySelector(".id p").innerHTML="";const s=document.querySelector(".sub-page--table tbody");s.innerHTML="<tr></tr>"}updateContent(e){const{name:n,photo:s,customFields:a,playerId:r}=e||{},{level:l=0,coin:p=0,spin:u=0,bullets:c}=a||{},d=(c==null?void 0:c.RocketBulletItem)||0,S=(c==null?void 0:c.RainbowBulletBallItem)||0,O=(c==null?void 0:c.ElectricBulletBallItem)||0,C=(c==null?void 0:c.BombBulletItem)||0,F=[{value:l,title:"Level",key:"level"},{value:p,title:"Coin",key:"coin"},{value:u,title:"Spin",key:"spin"},{value:d,title:"Rocket",key:"bullets.RocketBulletItem"},{value:S,title:"Rainbow",key:"bullets.RainbowBulletBallItem"},{value:O,title:"Electric",key:"bullets.ElectricBulletBallItem"},{value:C,title:"Bomb",key:"bullets.BombBulletItem"}],U=s,f=document.querySelector(".sub-page");f.classList="sub-page .prevent-select";const D=document.querySelector(".sub-page--profile"),_=D.querySelector(".avatar");_.innerHTML="";const b=new Image;b.src=U,b.setAttribute("crossorigin","anonymous"),b.onerror=()=>{b.src=J},_.appendChild(b),D.querySelector(".name").innerHTML=n,D.querySelector(".id p").innerHTML=r;const M=document.querySelector(".sub-page--table tbody");M.innerHTML="";for(let z of F){const K=this.createRow(z);M.appendChild(K)}}createRow(e){const{value:n,title:s,key:a}=e,r=document.createElement("tr");r.innerHTML=`<td data-control="${a}">${s}</td>
            <td>${n}</td>
            <td>
                <div class="action-icon">
                    <a class="action--edit">Edit</a>
                </div>
            </td>`;const l=r.querySelector(".action--edit");return l.addEventListener("click",this.onEditButton.bind(l,r)),r}updateNewValue(e){this.rowSelected.children[1].innerHTML=modal.input.value}}const me=""+new URL("magnifying-glass-94b662e4.png",import.meta.url).href,ge=""+new URL("copy-593cbcfe.png",import.meta.url).href;class v{constructor(){o(this,"modal");o(this,"searchFrom");o(this,"notification");o(this,"loadingScreen");o(this,"subPage");o(this,"rowSelected");o(this,"playerData");o(this,"_instance");o(this,"getPlayerId",()=>{var t;return((t=this.playerData)==null?void 0:t.playerId)||""});this.renderHTML(),this.createModal(),this.createSearchForm(),this.createNotification(),this.createLoadingScreen(),this.createSubPage()}static init(){this._instance||(this._instance=new v)}static get instance(){return this._instance||(this._instance=new v),this._instance}renderHTML(){const t=`
    <nav class="container nav--header">
    <div class="logo prevent-select">
      <div class="logo--icon"><img src="${J}" alt=""/></div>
      <div class="logo--text">BQC</div>
    </div>
    <form id="search-form">
      <div class="search-box--container"> 
        <div class="search-box--icon prevent-select"><img src="${me}" alt=""/></div>
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
                            <img src="${ge}" alt=""/>
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
</div>`,e=document.querySelector("#app");e.innerHTML=t}createSubPage(){this.subPage=new G,this.subPage.addEventListener(B.EDIT_ACTION,t=>{const{title:e,key:n,value:s}=t.detail;this.modal.show(e,n,s)})}createLoadingScreen(){this.loadingScreen=new V}createNotification(){this.notification=new Y}createModal(){this.modal=new de,this.modal.addEventListener(h.PRE_UPDATE,()=>{this.loadingScreen.showLoadingScreen()}),this.modal.addEventListener(h.UPDATE_SUCCESS,t=>{const{message:e,newValue:n,playerData:s}=t.detail;this.notification.createToast(e,y.SUCCESS),this.playerData=s,this.subPage.update(s)}),this.modal.addEventListener(h.UPDATE_FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.message)||"";this.notification.createToast(e,y.ERROR)}),this.modal.addEventListener(h.UPDATE_FINALLY,()=>{this.loadingScreen.hideLoadingScreen(),this.subPage.rowSelected=null})}createSearchForm(){this.searchFrom=new ue,this.searchFrom.addEventListener(m.PRE,()=>{this.loadingScreen.showLoadingScreen()}),this.searchFrom.addEventListener(m.SUCCESS,t=>{const e=t.detail.json,n={name:"",photo:"",customFields:{level:0,coin:0,spin:0,bullets:{}},playerId:""};this.notification.createToast("Successfully",y.SUCCESS),Object.keys(n).forEach(s=>{const a=e.data[s];a&&(n[s]=a)}),this.playerData=JSON.parse(JSON.stringify(n)),this.subPage.update(n)}),this.searchFrom.addEventListener(m.FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.error.message)||"";this.notification.createToast(e,y.ERROR)}),this.searchFrom.addEventListener(m.FINALLY,()=>{this.loadingScreen.hideLoadingScreen()})}}const g={PRE:"PRE",SUCCESS:"SUCCESS",FAIL:"FAIL",FINALLY:"FINALLY"};class ve extends A{constructor(){super(document.getElementById("login-form"));o(this,"input");o(this,"button");o(this,"handleSubmitForm",async e=>{var n;try{e.preventDefault(),this.dispatchEvent(g.PRE);const s=(n=this.input)==null?void 0:n.value;if(!s){this.dispatchEvent(g.FAIL,{error:{message:"Token is empty"}});return}this.dispatchEvent(g.SUCCESS,{token:s})}catch(s){this.dispatchEvent(g.FAIL,{error:{message:s.message}})}finally{this.dispatchEvent(g.FINALLY)}});this.input=document.querySelector("#login_token"),this.button=document.querySelector(".btn.btn-sign-in"),this.initEvents()}initEvents(){var e;(e=this.instanceElement)==null||e.addEventListener("submit",this.handleSubmitForm)}}class w{constructor(){o(this,"notification");o(this,"loadingScreen");o(this,"loginForm");o(this,"_instance");o(this,"promiseSuccess");this.renderHTML(),this.createNotification(),this.createLoadingScreen(),this.createLoginForm()}static init(){this._instance||(this._instance=new w)}static get instance(){return this._instance||(this._instance=new w),this._instance}renderHTML(){const t=` 
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
          </div>`,e=document.querySelector("#app");e.innerHTML=t}createSubPage(){this.subPage=new G,this.subPage.addEventListener(B.EDIT_ACTION,t=>{const{title:e,key:n,value:s}=t.detail;this.modal.show(e,n,s)})}createLoadingScreen(){this.loadingScreen=new V}createNotification(){this.notification=new Y}createLoginForm(){this.loginForm=new ve,this.loginForm.addEventListener(g.PRE,()=>{this.loadingScreen.showLoadingScreen(),this.promiseSuccess=!1}),this.loginForm.addEventListener(g.SUCCESS,t=>{const e=`${t.detail.token}-${Date.now()}-`;N.writeLocalStorageItem("token",e),this.isSuccess=!0,this.promiseSuccess=new Promise(n=>{setTimeout(()=>{T.renderPage(L.HOME),n()},1e3)})}),this.loginForm.addEventListener(g.FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.error.message)||"";this.notification.createToast(e,y.ERROR)}),this.loginForm.addEventListener(g.FINALLY,()=>{if(this.promiseSuccess){this.promiseSuccess.then(()=>{this.loadingScreen.hideLoadingScreen()});return}this.loadingScreen.hideLoadingScreen()})}}const L={HOME:"HOME",LOGIN:"LOGIN",EMPTY:"EMPTY"},P=class P{static auth(){return N.getLocalStorageItem("token")}};o(P,"renderPage",t=>{if(!P.auth(t)){w.init();return}switch(t){case L.HOME:v.init();break;case L.LOGIN:w.init();break;case L.EMPTY:default:document.querySelector("#app").innerHTML=""}});let T=P;window.onload=()=>{T.renderPage(L.HOME)};
