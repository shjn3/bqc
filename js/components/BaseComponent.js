import PlayerAPI from '../api.js'
export const SEARCH_EVENTS = {
    PRE: 'PRE',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
    FINALLY: 'FINALLY'
}

export default class BaseComponent {
    instanceElement
    constructor(element) {
        this.instanceElement = element
    }
    addEventListener(eventName, callback) {
        this.instanceElement?.addEventListener(eventName, callback)
    }

    dispatchEvent(eventName, data = {}) {
        const customEvent = new CustomEvent(eventName, { detail: data })
        this.instanceElement.dispatchEvent(customEvent)
    }
}
