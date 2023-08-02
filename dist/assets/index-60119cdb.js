var K=Object.defineProperty;var Q=(i,t,e)=>t in i?K(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var o=(i,t,e)=>(Q(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const W=3e3,X="https://wizq-apps.suncs.io",Z="12027078",ee="https://vietdev.sunstudio.io",S={port:W,apiHost:X,appid:Z,apiLogHost:ee},k=async function(i){var t;debugger;if(!i.ok){const e=await i.json();throw new Error((t=e==null?void 0:e.error)==null?void 0:t.message)}return i.json()},te=async i=>{var e;const t=`${S.apiHost}/apps/${S.appid}/players/${i}`;try{const n=await fetch(t);return k(n)}catch{throw new Error((e=errorData==null?void 0:errorData.error)==null?void 0:e.message)}},ne=async i=>{var t;try{const e=`${S.apiHost}/apps/${S.appid}/players`,n={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(i)},s=await fetch(e,n);return k(s)}catch{throw new Error((t=errorData==null?void 0:errorData.error)==null?void 0:t.message)}},se=async()=>{let i="";try{await fetch("https://api.ipify.org?format=json").then(t=>t.json()).then(t=>i=t.ip)}catch{i=""}return i},ie=async i=>{var c;const t=await se();i.hasOwnProperty("adminId")&&(i.adminId+=t);const e=S.apiLogHost+"/append",n=JSON.stringify({path:"wizq/bubble-queen-cat/edit-data-log/mobage.json",data:JSON.stringify(i)+`
`}),a=await fetch(e,{headers:{"Content-Type":"application/json"},method:"POST",body:n,redirect:"follow"});debugger;if(!a.ok){const l=await a.text();throw new Error((c=l==null?void 0:l.error)==null?void 0:c.message)}return a.text()},D={getPlayerData:te,postPlayerData:ne,sendLog:ie};class A{constructor(t){o(this,"instanceElement");this.instanceElement=t}addEventListener(t,e){var n;(n=this.instanceElement)==null||n.addEventListener(t,e)}dispatchEvent(t,e={}){const n=new CustomEvent(t,{detail:e});this.instanceElement.dispatchEvent(n)}}const oe=i=>localStorage.getItem(i),ae=(i,t)=>{localStorage.setItem(i,t)},ce=i=>{localStorage.clear(i)},B={getLocalStorageItem:oe,writeLocalStorageItem:ae,removeLocalStorageItem:ce};function j(i){return Object.prototype.toString.call(i).slice(8,-1)}function T(i){if(j(i)!=="Object")return!1;const t=Object.getPrototypeOf(i);return!!t&&t.constructor===Object&&t===Object.prototype}function q(i){return j(i)==="Symbol"}function H(i,t,e,n){const s={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";s==="enumerable"&&(i[t]=e),s==="nonenumerable"&&Object.defineProperty(i,t,{value:e,enumerable:!1,writable:!0,configurable:!0})}function $(i,t,e){if(!T(t))return t;let n={};if(T(i)){const l=Object.getOwnPropertyNames(i),p=Object.getOwnPropertySymbols(i);n=[...l,...p].reduce((d,r)=>{const f=i[r];return(!q(r)&&!Object.getOwnPropertyNames(t).includes(r)||q(r)&&!Object.getOwnPropertySymbols(t).includes(r))&&H(d,r,f,i),d},{})}const s=Object.getOwnPropertyNames(t),a=Object.getOwnPropertySymbols(t);return[...s,...a].reduce((l,p)=>{let d=t[p];const r=T(i)?i[p]:void 0;r!==void 0&&T(d)&&(d=$(r,d,e));const f=e?e(r,d,p):d;return H(l,p,f,t),l},n)}function re(i,...t){return t.reduce((e,n)=>$(e,n),i)}const g={PRE_UPDATE:"PRE_UPDATE",UPDATE_SUCCESS:"UPDATE_SUCCESS",UPDATE_FAIL:"UPDATE_FAIL",UPDATE_FINALLY:"UPDATE_FINALLY"};class le extends A{constructor(){super(document.getElementById("modal-update"));o(this,"closeBtn");o(this,"footerCloseBtn");o(this,"updateBtn");o(this,"input");o(this,"show",(e,n,s)=>{if(!this.instanceElement.classList.contains("active")){const a=this.instanceElement.querySelector(".modal--header--title"),c=this.instanceElement.querySelector("#new-value-input");c.setAttribute("data-control",n),a.innerHTML=e,c.value=s,this.instanceElement.classList.add("active")}});o(this,"hide",()=>{this.instanceElement.classList.contains("active")&&this.instanceElement.classList.remove("active")});this.closeBtn=document.querySelector("#modal-update .modal--header .btn.btn-close"),this.footerCloseBtn=document.querySelector("#modal-update .modal--footer .btn-close"),this.updateBtn=document.querySelector("#modal-update .modal--footer .btn-update"),this.input=document.querySelector("#new-value-input"),this.initEvents()}initEvents(){const e=this.instanceElement;if(!e)return;const n=e.querySelector(".modal--background");n==null||n.addEventListener("click",this.hide),this.closeBtn.addEventListener("click",this.hide),this.footerCloseBtn.addEventListener("click",this.hide),this.updateBtn.addEventListener("click",async()=>{try{this.dispatchEvent(g.PRE_UPDATE);const s=v.instance.getPlayerId();if(s){const a=v.instance.playerData,c=this.input.dataset.control.split(".");let l=JSON.parse(JSON.stringify(a)),p=0;if(l.hasOwnProperty("customFields")){let u=l.customFields;for(let b=0;b<c.length;b++){const E=c[b];u.hasOwnProperty(E)&&(u=u[E])}typeof u=="number"&&(p=u)}let d={},r=d;for(let u=0;u<c.length-1;u++)r[c[u]]={},r=r[c[u]];r[c[c.length-1]]=Math.max(parseInt(this.input.value),0);const C=`${B.getLocalStorageItem("token")}${Intl.DateTimeFormat().resolvedOptions().timeZone}-`,F=re(l,{customFields:d}),R={appid:S.appid,adminId:C,userId:s,property:c[c.length-1],fromValue:p,toValue:Math.max(parseInt(this.input.value),0),dateTime:new Date().toString()},N=await D.postPlayerData(F);await D.sendLog(R),this.dispatchEvent(g.UPDATE_SUCCESS,{message:"Update Success",newValue:this.input.value,playerData:N.data})}}catch(s){this.dispatchEvent(g.UPDATE_FAIL,{message:s.message})}finally{this.hide(),this.dispatchEvent(g.UPDATE_FINALLY,{})}})}}const h={PRE:"PRE",SUCCESS:"SUCCESS",FAIL:"FAIL",FINALLY:"FINALLY"};class de extends A{constructor(){var e;super(document.getElementById("search-form"));o(this,"input");o(this,"button");o(this,"handleSubmitForm",async e=>{var n;try{e.preventDefault(),this.dispatchEvent(h.PRE);const s=(n=this.input)==null?void 0:n.value;if(!s){this.dispatchEvent(h.FAIL,{error:{message:"PlayerID is empty!"}});return}const a=await D.getPlayerData(s);this.dispatchEvent(h.SUCCESS,{json:a})}catch(s){this.dispatchEvent(h.FAIL,{error:{message:s.message}})}finally{this.dispatchEvent(h.FINALLY)}});this.input=document.querySelector(".search-box--input input"),this.button=document.querySelector(".search-button button"),this.initEvents(),(e=this.input)==null||e.focus()}initEvents(){var e;(e=this.instanceElement)==null||e.addEventListener("submit",this.handleSubmitForm)}}const ue=""+new URL("check-e4a86f6b.png",import.meta.url).href,pe=""+new URL("close-572223d0.png",import.meta.url).href,L={SUCCESS:"SUCCESS",ERROR:"ERROR"};class x{constructor(){o(this,"notificationElement");this.notificationElement=document.querySelector(".notification")}removeToast(t){t&&(t.countdownTimer&&(clearTimeout(t.countdownTimer),t.countdownTimer=void 0),t.style.animation="slide-out-toast 0.7s ease forwards",setTimeout(()=>{t.remove()},1500))}createToast(t,e){if(!this.notificationElement)return;let n=["toast--container"],s="";switch(e){case"SUCCESS":n.push("success"),s=ue;break;case"ERROR":n.push("error"),s=pe;break}let a=`
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
                </div> `;const c=document.createElement("div");return c.classList.add(...n),c.innerHTML=a,this.notificationElement.insertBefore(c,this.notificationElement.firstChild),c.countdownTimer=setTimeout(()=>{this.removeToast(c)},4e3),c}}class Y{constructor(){o(this,"screen");o(this,"showLoadingScreen",()=>{this.screen.classList.remove("loading-hide"),this.screen.classList.contains("loading-show")||this.screen.classList.add("loading-show")});o(this,"hideLoadingScreen",()=>{this.screen.classList.remove("loading-show"),this.screen.classList.contains("loading-hide")||this.screen.classList.add("loading-hide")});this.screen=document.querySelector("#loading-screen")}}const V=""+new URL("logo-d26a4653.webp",import.meta.url).href,U={EDIT_ACTION:"EDIT_ACTION"};class J extends A{constructor(){super(document.querySelector(".sub-page"));o(this,"rowSelected");o(this,"onEditButton",e=>{this.rowSelected=e;const n=e.children[0].dataset.control,s=e.children[0].innerHTML,a=e.children[1].innerHTML;this.dispatchEvent(U.EDIT_ACTION,{title:s,key:n,value:a})});this.initCopyEvent()}initCopyEvent(){const e=document.querySelector(".sub-page--profile .id .copy-icon");e==null||e.addEventListener("click",()=>{const n=v.instance.getPlayerId();navigator.clipboard.writeText(n)})}update(e){if(!e||e.playerId==""){this.setLoadingContent();return}this.updateContent(e)}setLoadingContent(){if(!this.instanceElement)return;this.instanceElement.classList="sub-page .prevent-select loading";const e=document.querySelector(".sub-page--profile"),n=e.querySelector(".avatar");n.innerHTML="",e.querySelector(".name").innerHTML="",e.querySelector(".id p").innerHTML="";const s=document.querySelector(".sub-page--table tbody");s.innerHTML="<tr></tr>"}updateContent(e){const{name:n,photo:s,customFields:a,playerId:c}=e||{},{level:l=0,coin:p=0,spin:d=0,bullets:r}=a||{},f=(r==null?void 0:r.RocketBulletItem)||0,C=(r==null?void 0:r.RainbowBulletBallItem)||0,F=(r==null?void 0:r.ElectricBulletBallItem)||0,R=(r==null?void 0:r.BombBulletItem)||0,N=[{value:l,title:"Level",key:"level"},{value:p,title:"Coin",key:"coin"},{value:d,title:"Spin",key:"spin"},{value:f,title:"Rocket",key:"bullets.RocketBulletItem"},{value:C,title:"Rainbow",key:"bullets.RainbowBulletBallItem"},{value:F,title:"Electric",key:"bullets.ElectricBulletBallItem"},{value:R,title:"Bomb",key:"bullets.BombBulletItem"}],u=s,b=document.querySelector(".sub-page");b.classList="sub-page .prevent-select";const E=document.querySelector(".sub-page--profile"),M=E.querySelector(".avatar");M.innerHTML="";const y=new Image;y.src=u,y.setAttribute("crossorigin","anonymous"),y.onerror=()=>{y.src=V},M.appendChild(y),E.querySelector(".name").innerHTML=n,E.querySelector(".id p").innerHTML=c;const _=document.querySelector(".sub-page--table tbody");_.innerHTML="";for(let G of N){const z=this.createRow(G);_.appendChild(z)}}createRow(e){const{value:n,title:s,key:a}=e,c=document.createElement("tr");c.innerHTML=`<td data-control="${a}">${s}</td>
            <td>${n}</td>
            <td>
                <div class="action-icon">
                    <a class="action--edit">Edit</a>
                </div>
            </td>`;const l=c.querySelector(".action--edit");return l.addEventListener("click",this.onEditButton.bind(l,c)),c}updateNewValue(e){this.rowSelected.children[1].innerHTML=modal.input.value}}const he=""+new URL("magnifying-glass-94b662e4.png",import.meta.url).href,me=""+new URL("copy-593cbcfe.png",import.meta.url).href;class v{constructor(){o(this,"modal");o(this,"searchFrom");o(this,"notification");o(this,"loadingScreen");o(this,"subPage");o(this,"rowSelected");o(this,"playerData");o(this,"_instance");o(this,"getPlayerId",()=>{var t;return((t=this.playerData)==null?void 0:t.playerId)||""});this.renderHTML(),this.createModal(),this.createSearchForm(),this.createNotification(),this.createLoadingScreen(),this.createSubPage()}static init(){this._instance||(this._instance=new v)}static get instance(){return this._instance||(this._instance=new v),this._instance}renderHTML(){const t=`
    <nav class="container nav--header">
    <div class="logo prevent-select">
      <div class="logo--icon"><img src="${V}" alt=""/></div>
      <div class="logo--text">BQC</div>
    </div>
    <form id="search-form">
      <div class="search-box--container"> 
        <div class="search-box--icon prevent-select"><img src="${he}" alt=""/></div>
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
                            <img src="${me}" alt=""/>
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
</div>`,e=document.querySelector("#app");e.innerHTML=t}createSubPage(){this.subPage=new J,this.subPage.addEventListener(U.EDIT_ACTION,t=>{const{title:e,key:n,value:s}=t.detail;this.modal.show(e,n,s)})}createLoadingScreen(){this.loadingScreen=new Y}createNotification(){this.notification=new x}createModal(){this.modal=new le,this.modal.addEventListener(g.PRE_UPDATE,()=>{this.loadingScreen.showLoadingScreen()}),this.modal.addEventListener(g.UPDATE_SUCCESS,t=>{const{message:e,newValue:n,playerData:s}=t.detail;this.notification.createToast(e,L.SUCCESS),this.playerData=s,this.subPage.update(s)}),this.modal.addEventListener(g.UPDATE_FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.message)||"";this.notification.createToast(e,L.ERROR)}),this.modal.addEventListener(g.UPDATE_FINALLY,()=>{this.loadingScreen.hideLoadingScreen(),this.subPage.rowSelected=null})}createSearchForm(){this.searchFrom=new de,this.searchFrom.addEventListener(h.PRE,()=>{this.loadingScreen.showLoadingScreen()}),this.searchFrom.addEventListener(h.SUCCESS,t=>{const e=t.detail.json,n={name:"",photo:"",customFields:{level:0,coin:0,spin:0,bullets:{}},playerId:""};this.notification.createToast("Successfully",L.SUCCESS),Object.keys(n).forEach(s=>{const a=e.data[s];a&&(n[s]=a)}),this.playerData=JSON.parse(JSON.stringify(n)),this.subPage.update(n)}),this.searchFrom.addEventListener(h.FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.error.message)||"";this.notification.createToast(e,L.ERROR)}),this.searchFrom.addEventListener(h.FINALLY,()=>{this.loadingScreen.hideLoadingScreen()})}}const m={PRE:"PRE",SUCCESS:"SUCCESS",FAIL:"FAIL",FINALLY:"FINALLY"};class ge extends A{constructor(){super(document.getElementById("login-form"));o(this,"input");o(this,"button");o(this,"handleSubmitForm",async e=>{var n;try{e.preventDefault(),this.dispatchEvent(m.PRE);const s=(n=this.input)==null?void 0:n.value;if(!s){this.dispatchEvent(m.FAIL,{error:{message:"Token is empty"}});return}this.dispatchEvent(m.SUCCESS,{token:s})}catch(s){this.dispatchEvent(m.FAIL,{error:{message:s.message}})}finally{this.dispatchEvent(m.FINALLY)}});this.input=document.querySelector("#login_token"),this.button=document.querySelector(".btn.btn-sign-in"),this.initEvents()}initEvents(){var e;(e=this.instanceElement)==null||e.addEventListener("submit",this.handleSubmitForm)}}class I{constructor(){o(this,"notification");o(this,"loadingScreen");o(this,"loginForm");o(this,"_instance");o(this,"promiseSuccess");this.renderHTML(),this.createNotification(),this.createLoadingScreen(),this.createLoginForm()}static init(){this._instance||(this._instance=new I)}static get instance(){return this._instance||(this._instance=new I),this._instance}renderHTML(){const t=` 
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
          </div>`,e=document.querySelector("#app");e.innerHTML=t}createSubPage(){this.subPage=new J,this.subPage.addEventListener(U.EDIT_ACTION,t=>{const{title:e,key:n,value:s}=t.detail;this.modal.show(e,n,s)})}createLoadingScreen(){this.loadingScreen=new Y}createNotification(){this.notification=new x}createLoginForm(){this.loginForm=new ge,this.loginForm.addEventListener(m.PRE,()=>{this.loadingScreen.showLoadingScreen(),this.promiseSuccess=!1}),this.loginForm.addEventListener(m.SUCCESS,t=>{const e=`${t.detail.token}-${Date.now()}-`;B.writeLocalStorageItem("token",e),this.isSuccess=!0,this.promiseSuccess=new Promise(n=>{setTimeout(()=>{P.renderPage(w.HOME),n()},1e3)})}),this.loginForm.addEventListener(m.FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.error.message)||"";this.notification.createToast(e,L.ERROR)}),this.loginForm.addEventListener(m.FINALLY,()=>{if(this.promiseSuccess){this.promiseSuccess.then(()=>{this.loadingScreen.hideLoadingScreen()});return}this.loadingScreen.hideLoadingScreen()})}}const w={HOME:"HOME",LOGIN:"LOGIN",EMPTY:"EMPTY"},O=class O{static auth(){return B.getLocalStorageItem("token")}};o(O,"renderPage",t=>{if(!O.auth(t)){I.init();return}switch(t){case w.HOME:v.init();break;case w.LOGIN:I.init();break;case w.EMPTY:default:document.querySelector("#app").innerHTML=""}});let P=O;window.onload=()=>{P.renderPage(w.HOME)};
