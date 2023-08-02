var W=Object.defineProperty;var X=(i,t,e)=>t in i?W(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var a=(i,t,e)=>(X(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Z=3e3,ee="https://wizq-apps.suncs.io",te="12027078",ne="https://vietdev.sunstudio.io",L={port:Z,apiHost:ee,appid:te,apiLogHost:ne},j=async function(i){var t;if(!i.ok){const e=await i.json();throw new Error((t=e==null?void 0:e.error)==null?void 0:t.message)}return i.json()},se=async i=>{var e;const t=`${L.apiHost}/apps/${L.appid}/players/${i}`;try{const n=new AbortController;setTimeout(()=>n.abort(),5e3);const s=await fetch(t,{signal:n.signal});return j(s)}catch{throw new Error((e=errorData==null?void 0:errorData.error)==null?void 0:e.message)}},ie=async i=>{var t;try{const e=`${L.apiHost}/apps/${L.appid}/players`,n=x(JSON.stringify(i)),s=await fetch(e,n);return j(s)}catch{throw new Error((t=errorData==null?void 0:errorData.error)==null?void 0:t.message)}},x=i=>{const t=new AbortController;return setTimeout(()=>t.abort(),5e3),{headers:{"Content-Type":"application/json"},method:"POST",body:i,signal:t.signal}},ae=async i=>{var r;const t=L.apiLogHost+"/append",e=JSON.stringify({path:"wizq/bubble-queen-cat/edit-data-log/mobage.json",data:JSON.stringify(i)+`
`}),n=x(e),s=await fetch(t,n);if(!s.ok){const o=await s.text();throw new Error((r=o==null?void 0:o.error)==null?void 0:r.message)}return s.text()},D={getPlayerData:se,postPlayerData:ie,sendLog:ae};class F{constructor(t){a(this,"instanceElement");this.instanceElement=t}addEventListener(t,e){var n;(n=this.instanceElement)==null||n.addEventListener(t,e)}dispatchEvent(t,e={}){const n=new CustomEvent(t,{detail:e});this.instanceElement.dispatchEvent(n)}}const oe=i=>localStorage.getItem(i),re=(i,t)=>{localStorage.setItem(i,t)},ce=i=>{localStorage.clear(i)},B={getLocalStorageItem:oe,writeLocalStorageItem:re,removeLocalStorageItem:ce};function $(i){return Object.prototype.toString.call(i).slice(8,-1)}function A(i){if($(i)!=="Object")return!1;const t=Object.getPrototypeOf(i);return!!t&&t.constructor===Object&&t===Object.prototype}function q(i){return $(i)==="Symbol"}function H(i,t,e,n){const s={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";s==="enumerable"&&(i[t]=e),s==="nonenumerable"&&Object.defineProperty(i,t,{value:e,enumerable:!1,writable:!0,configurable:!0})}function Y(i,t,e){if(!A(t))return t;let n={};if(A(i)){const l=Object.getOwnPropertyNames(i),h=Object.getOwnPropertySymbols(i);n=[...l,...h].reduce((u,c)=>{const d=i[c];return(!q(c)&&!Object.getOwnPropertyNames(t).includes(c)||q(c)&&!Object.getOwnPropertySymbols(t).includes(c))&&H(u,c,d,i),u},{})}const s=Object.getOwnPropertyNames(t),r=Object.getOwnPropertySymbols(t);return[...s,...r].reduce((l,h)=>{let u=t[h];const c=A(i)?i[h]:void 0;c!==void 0&&A(u)&&(u=Y(c,u,e));const d=e?e(c,u,h):u;return H(l,h,d,t),l},n)}function le(i,...t){return t.reduce((e,n)=>Y(e,n),i)}const de=["b75705d7e35e7014521a46b532236ec3","8bd108c8a01a892d129c52484ef97a0d"],ue=["45260a0d8d501d0f69481da138d61c67"],O={userToken:de,adminToken:ue},p={PRE_UPDATE:"PRE_UPDATE",UPDATE_SUCCESS:"UPDATE_SUCCESS",UPDATE_FAIL:"UPDATE_FAIL",UPDATE_FINALLY:"UPDATE_FINALLY"};class he extends F{constructor(){super(document.getElementById("modal-update"));a(this,"closeBtn");a(this,"footerCloseBtn");a(this,"updateBtn");a(this,"input");a(this,"show",(e,n,s)=>{if(!this.instanceElement.classList.contains("active")){const r=this.instanceElement.querySelector(".modal--header--title"),o=this.instanceElement.querySelector("#new-value-input");o.setAttribute("data-control",n),r.innerHTML=e,o.value=s,this.instanceElement.classList.add("active")}});a(this,"hide",()=>{this.instanceElement.classList.contains("active")&&this.instanceElement.classList.remove("active")});a(this,"isAllowUpdate",!0);this.closeBtn=document.querySelector("#modal-update .modal--header .btn.btn-close"),this.footerCloseBtn=document.querySelector("#modal-update .modal--footer .btn-close"),this.updateBtn=document.querySelector("#modal-update .modal--footer .btn-update"),this.input=document.querySelector("#new-value-input"),this.initEvents()}async sendLog(e){try{this.isAllowUpdate=!1,await D.sendLog(e)}finally{this.isAllowUpdate=!0}}initEvents(){const e=this.instanceElement;if(!e)return;const n=e.querySelector(".modal--background");n==null||n.addEventListener("click",this.hide),this.closeBtn.addEventListener("click",this.hide),this.footerCloseBtn.addEventListener("click",this.hide),this.updateBtn.addEventListener("click",async()=>{try{if(this.dispatchEvent(p.PRE_UPDATE),!this.isAllowUpdate){this.dispatchEvent(p.UPDATE_FAIL,{message:"Cann't update right now. Please comeback after 1 minute!"});return}const s=b.instance.getPlayerId();if(!E.auth()){E.renderPage(S.LOGIN);return}if(s){const r=b.instance.playerData,o=this.input.dataset.control.split(".");let l=JSON.parse(JSON.stringify(r)),h=0;const u=Math.max(parseInt(this.input.value),0);if(l.hasOwnProperty("customFields")){let c=l.customFields;for(let d=0;d<o.length;d++){const v=o[d];c.hasOwnProperty(v)&&(c=c[v])}typeof c=="number"&&(h=c)}if(h==u)this.dispatchEvent(p.UPDATE_SUCCESS,{message:"Update Success",newValue:this.input.value,playerData:l});else{let c={},d=c;for(let f=0;f<o.length-1;f++)d[o[f]]={},d=d[o[f]];d[o[o.length-1]]=Math.max(parseInt(this.input.value),0);const v=B.getLocalStorageItem("token");let y="User",w=O.userToken.indexOf(v);w==-1&&(y="Admin",w=O.adminToken.indexOf(v)),y+=w,y+=`${v}`;const U=le(l,{customFields:c}),N={appid:L.appid,adminId:y,userId:s,property:o[o.length-1],fromValue:h,toValue:u,dateTime:new Date().toString()},R=await D.postPlayerData(U);this.sendLog(N),this.dispatchEvent(p.UPDATE_SUCCESS,{message:"Update Success",newValue:this.input.value,playerData:R.data})}}}catch(s){this.dispatchEvent(p.UPDATE_FAIL,{message:s.message})}finally{this.hide(),this.dispatchEvent(p.UPDATE_FINALLY,{})}})}}const m={PRE:"PRE",SUCCESS:"SUCCESS",FAIL:"FAIL",FINALLY:"FINALLY"};class pe extends F{constructor(){var e;super(document.getElementById("search-form"));a(this,"input");a(this,"button");a(this,"handleSubmitForm",async e=>{var n;try{if(e.preventDefault(),!E.auth()){E.renderPage(S.LOGIN);return}this.dispatchEvent(m.PRE);const s=(n=this.input)==null?void 0:n.value;if(!s){this.dispatchEvent(m.FAIL,{error:{message:"PlayerID is empty!"}});return}const r=await D.getPlayerData(s);this.dispatchEvent(m.SUCCESS,{json:r})}catch(s){this.dispatchEvent(m.FAIL,{error:{message:s.message}})}finally{this.dispatchEvent(m.FINALLY)}});this.input=document.querySelector(".search-box--input input"),this.button=document.querySelector(".search-button button"),this.initEvents(),(e=this.input)==null||e.focus()}initEvents(){var e;(e=this.instanceElement)==null||e.addEventListener("submit",this.handleSubmitForm)}}const me=""+new URL("check-e4a86f6b.png",import.meta.url).href,ge=""+new URL("close-572223d0.png",import.meta.url).href,I={SUCCESS:"SUCCESS",ERROR:"ERROR"};class V{constructor(){a(this,"notificationElement");this.notificationElement=document.querySelector(".notification")}removeToast(t){t&&(t.countdownTimer&&(clearTimeout(t.countdownTimer),t.countdownTimer=void 0),t.style.animation="slide-out-toast 0.7s ease forwards",setTimeout(()=>{t.remove()},1500))}createToast(t,e){if(!this.notificationElement)return;let n=["toast--container"],s="";switch(e){case"SUCCESS":n.push("success"),s=me;break;case"ERROR":n.push("error"),s=ge;break}let r=`
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
                </div> `;const o=document.createElement("div");return o.classList.add(...n),o.innerHTML=r,this.notificationElement.insertBefore(o,this.notificationElement.firstChild),o.countdownTimer=setTimeout(()=>{this.removeToast(o)},4e3),o}}class G{constructor(){a(this,"screen");a(this,"showLoadingScreen",()=>{this.screen.classList.remove("loading-hide"),this.screen.classList.contains("loading-show")||this.screen.classList.add("loading-show")});a(this,"hideLoadingScreen",()=>{this.screen.classList.remove("loading-show"),this.screen.classList.contains("loading-hide")||this.screen.classList.add("loading-hide")});this.screen=document.querySelector("#loading-screen")}}const J=""+new URL("logo-d26a4653.webp",import.meta.url).href,k={EDIT_ACTION:"EDIT_ACTION"};class K extends F{constructor(){super(document.querySelector(".sub-page"));a(this,"rowSelected");a(this,"onEditButton",e=>{this.rowSelected=e;const n=e.children[0].dataset.control,s=e.children[0].innerHTML,r=e.children[1].innerHTML;this.dispatchEvent(k.EDIT_ACTION,{title:s,key:n,value:r})});this.initCopyEvent()}initCopyEvent(){const e=document.querySelector(".sub-page--profile .id .copy-icon");e==null||e.addEventListener("click",()=>{const n=b.instance.getPlayerId();navigator.clipboard.writeText(n)})}update(e){if(!e||e.playerId==""){this.setLoadingContent();return}this.updateContent(e)}setLoadingContent(){if(!this.instanceElement)return;this.instanceElement.classList="sub-page .prevent-select loading";const e=document.querySelector(".sub-page--profile"),n=e.querySelector(".avatar");n.innerHTML="",e.querySelector(".name").innerHTML="",e.querySelector(".id p").innerHTML="";const s=document.querySelector(".sub-page--table tbody");s.innerHTML="<tr></tr>"}updateContent(e){const{name:n,photo:s,customFields:r,playerId:o}=e||{},{level:l=0,coin:h=0,spin:u=0,bullets:c}=r||{},d=(c==null?void 0:c.RocketBulletItem)||0,v=(c==null?void 0:c.RainbowBulletBallItem)||0,y=(c==null?void 0:c.ElectricBulletBallItem)||0,w=(c==null?void 0:c.BombBulletItem)||0,U=[{value:l,title:"Level",key:"level"},{value:h,title:"Coin",key:"coin"},{value:u,title:"Spin",key:"spin"},{value:d,title:"Rocket",key:"bullets.RocketBulletItem"},{value:v,title:"Rainbow",key:"bullets.RainbowBulletBallItem"},{value:y,title:"Electric",key:"bullets.ElectricBulletBallItem"},{value:w,title:"Bomb",key:"bullets.BombBulletItem"}],N=s,R=document.querySelector(".sub-page");R.classList="sub-page .prevent-select";const f=document.querySelector(".sub-page--profile"),M=f.querySelector(".avatar");M.innerHTML="";const T=new Image;T.src=N,T.setAttribute("crossorigin","anonymous"),T.onerror=()=>{T.src=J},M.appendChild(T),f.querySelector(".name").innerHTML=n,f.querySelector(".id p").innerHTML=o;const _=document.querySelector(".sub-page--table tbody");_.innerHTML="";for(let z of U){const Q=this.createRow(z);_.appendChild(Q)}}createRow(e){const{value:n,title:s,key:r}=e,o=document.createElement("tr");o.innerHTML=`<td data-control="${r}">${s}</td>
            <td>${n}</td>
            <td>
                <div class="action-icon">
                    <a class="action--edit">Edit</a>
                </div>
            </td>`;const l=o.querySelector(".action--edit");return l.addEventListener("click",this.onEditButton.bind(l,o)),o}updateNewValue(e){this.rowSelected.children[1].innerHTML=modal.input.value}}const ve=""+new URL("magnifying-glass-94b662e4.png",import.meta.url).href,fe=""+new URL("copy-593cbcfe.png",import.meta.url).href;class b{constructor(){a(this,"modal");a(this,"searchFrom");a(this,"notification");a(this,"loadingScreen");a(this,"subPage");a(this,"rowSelected");a(this,"playerData");a(this,"_instance");a(this,"getPlayerId",()=>{var t;return((t=this.playerData)==null?void 0:t.playerId)||""});this.renderHTML(),this.createModal(),this.createSearchForm(),this.createNotification(),this.createLoadingScreen(),this.createSubPage()}static init(){this._instance=new b}static get instance(){return this._instance||(this._instance=new b),this._instance}renderHTML(){const t=`
    <nav class="container nav--header">
    <div class="logo prevent-select">
      <div class="logo--icon"><img src="${J}" alt=""/></div>
      <div class="logo--text">BQC</div>
    </div>
    <form id="search-form">
      <div class="search-box--container"> 
        <div class="search-box--icon prevent-select"><img src="${ve}" alt=""/></div>
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
                            <img src="${fe}" alt=""/>
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
</div>`,e=document.querySelector("#app");e.innerHTML=t}createSubPage(){this.subPage=new K,this.subPage.addEventListener(k.EDIT_ACTION,t=>{const{title:e,key:n,value:s}=t.detail;this.modal.show(e,n,s)})}createLoadingScreen(){this.loadingScreen=new G}createNotification(){this.notification=new V}createModal(){this.modal=new he,this.modal.addEventListener(p.PRE_UPDATE,()=>{this.loadingScreen.showLoadingScreen()}),this.modal.addEventListener(p.UPDATE_SUCCESS,t=>{const{message:e,newValue:n,playerData:s}=t.detail;this.notification.createToast(e,I.SUCCESS),this.playerData=s,this.subPage.update(s)}),this.modal.addEventListener(p.UPDATE_FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.message)||"";this.notification.createToast(e,I.ERROR)}),this.modal.addEventListener(p.UPDATE_FINALLY,()=>{this.loadingScreen.hideLoadingScreen(),this.subPage.rowSelected=null})}createSearchForm(){this.searchFrom=new pe,this.searchFrom.addEventListener(m.PRE,()=>{this.loadingScreen.showLoadingScreen()}),this.searchFrom.addEventListener(m.SUCCESS,t=>{const e=t.detail.json,n={name:"",photo:"",customFields:{level:0,coin:0,spin:0,bullets:{}},playerId:""};this.notification.createToast("Successfully",I.SUCCESS),Object.keys(n).forEach(s=>{const r=e.data[s];r&&(n[s]=r)}),this.playerData=JSON.parse(JSON.stringify(n)),this.subPage.update(n)}),this.searchFrom.addEventListener(m.FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.error.message)||"";this.notification.createToast(e,I.ERROR)}),this.searchFrom.addEventListener(m.FINALLY,()=>{this.loadingScreen.hideLoadingScreen()})}}const g={PRE:"PRE",SUCCESS:"SUCCESS",FAIL:"FAIL",FINALLY:"FINALLY"};class Ee extends F{constructor(){super(document.getElementById("login-form"));a(this,"input");a(this,"button");a(this,"handleSubmitForm",async e=>{var n;try{e.preventDefault(),this.dispatchEvent(g.PRE);const s=(n=this.input)==null?void 0:n.value;if(!s){this.dispatchEvent(g.FAIL,{error:{message:"Token is empty"}});return}this.dispatchEvent(g.SUCCESS,{token:s})}catch(s){this.dispatchEvent(g.FAIL,{error:{message:s.message}})}finally{this.dispatchEvent(g.FINALLY)}});this.input=document.querySelector("#login_token"),this.button=document.querySelector(".btn.btn-sign-in"),this.initEvents()}initEvents(){var e;(e=this.instanceElement)==null||e.addEventListener("submit",this.handleSubmitForm)}}class P{constructor(){a(this,"notification");a(this,"loadingScreen");a(this,"loginForm");a(this,"_instance");a(this,"promiseSuccess");this.renderHTML(),this.createNotification(),this.createLoadingScreen(),this.createLoginForm()}static init(){this._instance=new P}static get instance(){return this._instance||(this._instance=new P),this._instance}renderHTML(){const t=` 
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
          </div>`,e=document.querySelector("#app");e.innerHTML=t}createSubPage(){this.subPage=new K,this.subPage.addEventListener(k.EDIT_ACTION,t=>{const{title:e,key:n,value:s}=t.detail;this.modal.show(e,n,s)})}createLoadingScreen(){this.loadingScreen=new G}createNotification(){this.notification=new V}createLoginForm(){this.loginForm=new Ee,this.loginForm.addEventListener(g.PRE,()=>{this.loadingScreen.showLoadingScreen(),this.promiseSuccess=!1}),this.loginForm.addEventListener(g.SUCCESS,t=>{const e=`${t.detail.token}`;B.writeLocalStorageItem("token",e),this.isSuccess=!0,this.promiseSuccess=new Promise(n=>{setTimeout(()=>{E.renderPage(S.HOME),n()},1e3)})}),this.loginForm.addEventListener(g.FAIL,t=>{var n;const e=((n=t.detail)==null?void 0:n.error.message)||"";this.notification.createToast(e,I.ERROR)}),this.loginForm.addEventListener(g.FINALLY,()=>{if(this.promiseSuccess){this.promiseSuccess.then(()=>{this.loadingScreen.hideLoadingScreen()});return}this.loadingScreen.hideLoadingScreen()})}}const S={HOME:"HOME",LOGIN:"LOGIN",EMPTY:"EMPTY"},C=class C{static auth(){const t=O.userToken,e=O.adminToken,n=B.getLocalStorageItem("token");return t.indexOf(n)!=-1||e.indexOf(n)!=-1}};a(C,"renderPage",t=>{if(!C.auth(t)){P.init();return}switch(t){case S.HOME:b.init();break;case S.LOGIN:P.init();break;case S.EMPTY:default:document.querySelector("#app").innerHTML=""}});let E=C;window.onload=()=>{E.renderPage(S.HOME)};
