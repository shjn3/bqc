import Home from '../Home.js'
import PlayerAPI from '../api.js'
import BaseComponent from './BaseComponent.js'
import config from '../../configs/api.json' assert{type: 'json'}
import localStorage from '../localStorage.js'
import { merge } from 'merge-anything'


export const MODAL_EVENTS = {
    PRE_UPDATE: 'PRE_UPDATE',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS',
    UPDATE_FAIL: 'UPDATE_FAIL',
    UPDATE_FINALLY: 'UPDATE_FINALLY'
}
export default class Modal extends BaseComponent {
    closeBtn
    footerCloseBtn
    updateBtn
    input
    constructor() {
        super(document.getElementById('modal-update'))
        this.closeBtn = document.querySelector('#modal-update .modal--header .btn.btn-close')
        this.footerCloseBtn = document.querySelector('#modal-update .modal--footer .btn-close')
        this.updateBtn = document.querySelector('#modal-update .modal--footer .btn-update')
        this.input = document.querySelector('#new-value-input')
        this.initEvents()
    }

    show = (titleText, key, value) => {
        if (!this.instanceElement.classList.contains('active')) {
            const title = this.instanceElement.querySelector('.modal--header--title')
            const input = this.instanceElement.querySelector('#new-value-input')
            input.setAttribute('data-control', key)
            title.innerHTML = titleText
            input.value = value
            this.instanceElement.classList.add('active')
        }
    }

    hide = () => {

        if (this.instanceElement.classList.contains('active')) {
            this.instanceElement.classList.remove('active')
        }
    }

    isAllowUpdate = true;

    async sendLog(data) {
        try {
            this.isAllowUpdate = false;
            await PlayerAPI.sendLog(data)
        }
        finally {
            this.isAllowUpdate = true
        }
    }

    initEvents() {
        const modal = this.instanceElement
        if (!modal) {
            return
        }
        const background = modal.querySelector('.modal--background')
        background?.addEventListener('click', this.hide)

        this.closeBtn.addEventListener('click', this.hide)

        this.footerCloseBtn.addEventListener('click', this.hide)

        this.updateBtn.addEventListener('click', async () => {
            try {
                this.dispatchEvent(MODAL_EVENTS.PRE_UPDATE)
                if (!this.isAllowUpdate) {
                    this.dispatchEvent(MODAL_EVENTS.UPDATE_FAIL, {
                        message: `Cann't update right now. Please comeback after 1 minute!`,
                    })
                    return
                }
                const playerId = Home.instance.getPlayerId()
                if (playerId) {
                    const originData = Home.instance.playerData
                    const keys = this.input.dataset['control'].split('.')

                    let currentData = JSON.parse(JSON.stringify(originData))

                    let fromValue = 0
                    const toValue = Math.max(parseInt(this.input.value), 0)
                    if (currentData.hasOwnProperty('customFields')) {
                        let temp = currentData.customFields
                        for (let i = 0; i < keys.length; i++) {
                            const key = keys[i]
                            if (temp.hasOwnProperty(key)) {
                                temp = temp[key]
                            }
                        }
                        if (typeof temp == 'number') {
                            fromValue = temp
                        }
                    }

                    if (fromValue == toValue) {
                        this.dispatchEvent(MODAL_EVENTS.UPDATE_SUCCESS, {
                            message: 'Update Success',
                            newValue: this.input.value,
                            playerData: currentData
                        })

                    }
                    else {
                        let customFields = {}
                        let newValueByKey = customFields
                        for (let i = 0; i < keys.length - 1; i++) {
                            newValueByKey[keys[i]] = {}
                            newValueByKey = newValueByKey[keys[i]]
                        }
                        newValueByKey[keys[keys.length - 1]] = Math.max(parseInt(this.input.value), 0)


                        const token = localStorage.getLocalStorageItem('token')

                        const adminId = `${token}${Intl.DateTimeFormat().resolvedOptions().timeZone}-`

                        const data = merge(currentData, { customFields })
                        const logData = {
                            appid: config.appid,
                            adminId,
                            userId: playerId,
                            property: keys[keys.length - 1],
                            fromValue,
                            toValue,
                            dateTime: new Date().toString(),
                        }


                        const json = await PlayerAPI.postPlayerData(data)
                        this.sendLog(logData)
                        this.dispatchEvent(MODAL_EVENTS.UPDATE_SUCCESS, {
                            message: 'Update Success',
                            newValue: this.input.value,
                            playerData: json.data
                        })
                    }
                }
            }
            catch (e) {
                this.dispatchEvent(MODAL_EVENTS.UPDATE_FAIL, {
                    message: e.message,
                })
            }
            finally {
                this.hide()
                this.dispatchEvent(MODAL_EVENTS.UPDATE_FINALLY, {})
            }
        })

    }
}
