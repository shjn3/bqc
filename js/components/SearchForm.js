import PlayerAPI from '../api.js'
import BaseComponent from './BaseComponent.js'
export const SEARCH_EVENTS = {
    PRE: 'PRE',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
    FINALLY: 'FINALLY'
}

export default class SearchForm extends BaseComponent {
    input
    button
    constructor() {
        super(document.getElementById('search-form'))
        this.input = document.querySelector('.search-box--input input')
        this.button = document.querySelector('.search-button button')
        this.initEvents()
        this.input?.focus()
    }

    initEvents() {
        this.instanceElement?.addEventListener('submit', this.handleSubmitForm)

    }

    handleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            this.dispatchEvent(SEARCH_EVENTS.PRE)
            const playerId = this.input?.value
            if (!playerId) {
                this.dispatchEvent(SEARCH_EVENTS.FAIL, { error: { message: 'PlayerID is empty!' } })

                return
            }
            const json = await PlayerAPI.getPlayerData(playerId)
            this.dispatchEvent(SEARCH_EVENTS.SUCCESS, { json })
        }
        catch (e) {
            this.dispatchEvent(SEARCH_EVENTS.FAIL, { error: { message: e.message } })
        }
        finally {

            this.dispatchEvent(SEARCH_EVENTS.FINALLY)
        }
    }
}
