
import Modal, { MODAL_EVENTS } from './components/Modal.js';
import SearchForm, { SEARCH_EVENTS } from './components/SearchForm.js';
import Notification, { TOAST_TYPE } from './components/Notification.js';
import LoadingScreen from './components/LoadingScreen.js';
import SubPage, { SUB_PAGE_EVENTS } from './components/SubPage.js';
import logo from '../src/logo.webp'
import glassIcon from '../src/magnifying-glass.png'
import copyIcon from '../src/copy.png'

export default class Home {
  modal;
  searchFrom;
  notification;
  loadingScreen;
  subPage;
  rowSelected
  playerData
  _instance

  static init() {
    if (!this._instance) {
      this._instance = new Home()
    }
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new Home()
    }

    return this._instance
  }
  constructor() {

    this.renderHTML()
    this.createModal()
    this.createSearchForm()
    this.createNotification()
    this.createLoadingScreen()
    this.createSubPage()
  }

  renderHTML() {
    const template =
      `
    <nav class="container nav--header">
    <div class="logo prevent-select">
      <div class="logo--icon"><img src="${logo}" alt=""/></div>
      <div class="logo--text">BQC</div>
    </div>
    <form id="search-form">
      <div class="search-box--container"> 
        <div class="search-box--icon prevent-select"><img src="${glassIcon}" alt=""/></div>
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
                            <img src="${copyIcon}" alt=""/>
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

  createModal() {
    this.modal = new Modal()
    this.modal.addEventListener(MODAL_EVENTS.PRE_UPDATE, () => {
      this.loadingScreen.showLoadingScreen()
    })
    this.modal.addEventListener(MODAL_EVENTS.UPDATE_SUCCESS, (e) => {
      const { message, newValue, playerData } = e.detail
      this.notification.createToast(message, TOAST_TYPE.SUCCESS)
      this.playerData = playerData
      this.subPage.update(playerData)
    })

    this.modal.addEventListener(MODAL_EVENTS.UPDATE_FAIL, (e) => {
      const message = e.detail?.message || ''
      this.notification.createToast(message, TOAST_TYPE.ERROR)
    })
    this.modal.addEventListener(MODAL_EVENTS.UPDATE_FINALLY, () => {
      this.loadingScreen.hideLoadingScreen()
      this.subPage.rowSelected = null
    })

  }

  createSearchForm() {
    this.searchFrom = new SearchForm()
    this.searchFrom.addEventListener(SEARCH_EVENTS.PRE, () => {
      this.loadingScreen.showLoadingScreen()
    })

    this.searchFrom.addEventListener(SEARCH_EVENTS.SUCCESS, (e) => {
      const json = e.detail.json
      const playerData = {
        name: "",
        photo: "",
        customFields: {
          level: 0,
          coin: 0,
          spin: 0,
          bullets: {}
        },
        playerId: ''
      }
      this.notification.createToast('Successfully', TOAST_TYPE.SUCCESS)
      Object.keys(playerData).forEach(key => {
        const value = json.data[key]
        if (value) {
          playerData[key] = value
        }
      })
      this.playerData = JSON.parse(JSON.stringify(playerData))
      this.subPage.update(playerData)

    })

    this.searchFrom.addEventListener(SEARCH_EVENTS.FAIL, (e) => {
      const message = e.detail?.error.message || ''
      this.notification.createToast(message, TOAST_TYPE.ERROR)
    })
    this.searchFrom.addEventListener(SEARCH_EVENTS.FINALLY, () => {
      this.loadingScreen.hideLoadingScreen()
    })
  }

  getPlayerId = () => {
    return this.playerData?.playerId || ''
  }
}
