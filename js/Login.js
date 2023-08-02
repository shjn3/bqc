
import Notification, { TOAST_TYPE } from './components/Notification.js';
import LoadingScreen from './components/LoadingScreen.js';
import SubPage, { SUB_PAGE_EVENTS } from './components/SubPage.js';
import LoginForm, { LOGIN_FORM_EVENTS } from './components/LoginForm.js';
import localStorage from './localStorage.js';
import Router, { PAGE } from './Router.js';

export default class Login {
  notification;
  loadingScreen;
  loginForm;
  _instance

  static init() {
    if (!this._instance) {
      this._instance = new Login()
    }
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new Login()
    }

    return this._instance
  }
  constructor() {
    this.renderHTML()
    this.createNotification()
    this.createLoadingScreen()
    this.createLoginForm()
  }

  renderHTML() {
    const template =
      ` 
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
          </div>`
    const root = document.querySelector('#app')
    root.innerHTML = template
  }

  createSubPage() {
    this.subPage = new SubPage()
    this.subPage.addEventListener(SUB_PAGE_EVENTS.EDIT_ACTION, (e) => {
      const { title, key, value } = e.detail

      this.modal.show(title, key, value)
    })
  }

  createLoadingScreen() {
    this.loadingScreen = new LoadingScreen()
  }

  createNotification() {
    this.notification = new Notification()
  }

  promiseSuccess = undefined
  createLoginForm() {

    this.loginForm = new LoginForm()
    this.loginForm.addEventListener(LOGIN_FORM_EVENTS.PRE, () => {
      this.loadingScreen.showLoadingScreen()
      this.promiseSuccess = false
    })

    this.loginForm.addEventListener(LOGIN_FORM_EVENTS.SUCCESS, (e) => {
      const token = `${e.detail.token}-${Date.now()}-`
      localStorage.writeLocalStorageItem('token', token)
      this.isSuccess = true
      this.promiseSuccess = new Promise(resolve => {
        setTimeout(() => {
          Router.renderPage(PAGE.HOME)
          resolve()
        }, 1000)
      })

    })

    this.loginForm.addEventListener(LOGIN_FORM_EVENTS.FAIL, (e) => {
      const message = e.detail?.error.message || ''
      this.notification.createToast(message, TOAST_TYPE.ERROR)
    })

    this.loginForm.addEventListener(LOGIN_FORM_EVENTS.FINALLY, () => {
      if (this.promiseSuccess) {
        this.promiseSuccess.then(() => {
          this.loadingScreen.hideLoadingScreen()
        })
        return
      }
      this.loadingScreen.hideLoadingScreen()
    })
  }
}
