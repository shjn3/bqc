import PlayerAPI from '../api.js'
import BaseComponent from './BaseComponent.js'
export const LOGIN_FORM_EVENTS = {
    PRE: 'PRE',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
    FINALLY: 'FINALLY'
}

export default class LoginForm extends BaseComponent {
    input
    button
    constructor() {
        super(document.getElementById('login-form'))

        this.input = document.querySelector('#login_token')
        this.button = document.querySelector('.btn.btn-sign-in')
        this.initEvents()
    }

    initEvents() {
        this.instanceElement?.addEventListener('submit', this.handleSubmitForm)

    }

    handleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            this.dispatchEvent(LOGIN_FORM_EVENTS.PRE)
            const token = this.input?.value
            if (!token) {
                this.dispatchEvent(LOGIN_FORM_EVENTS.FAIL, { error: { message: 'Token is empty' } })
                return
            }
            // const json = await PlayerAPI.getPlayerData(token)
            this.dispatchEvent(LOGIN_FORM_EVENTS.SUCCESS, {
                token
            })
        }
        catch (e) {

            this.dispatchEvent(LOGIN_FORM_EVENTS.FAIL, { error: { message: e.message } })
        }
        finally {
            this.dispatchEvent(LOGIN_FORM_EVENTS.FINALLY)
        }
    }
}
