
import Modal, { MODAL_EVENTS } from './components/Modal.js';
import SearchForm, { SEARCH_EVENTS } from './components/SearchForm.js';
import Notification, { TOAST_TYPE } from './components/Notification.js';
import LoadingScreen from './components/LoadingScreen.js';
import SubPage, { SUB_PAGE_EVENTS } from './components/SubPage.js';

export default class Home {
    modal;
    searchFrom;
    notification;
    loadingScreen;
    subPage;
    rowSelected
    playerData
    _instance

    static get instance() {
        if (!this._instance) {
            this._instance = new Home()
        }

        return this._instance
    }
    constructor() {
        this.createModal()
        this.createSearchForm()
        this.createNotification()
        this.createLoadingScreen()
        this.createSubPage()
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
