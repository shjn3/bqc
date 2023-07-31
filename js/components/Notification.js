export const TOAST_TYPE = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}
import check from '../../src/check.png'
import close from '../../src/close.png'
export default class Notification {
    notificationElement

    constructor() {

        this.notificationElement = document.querySelector('.notification')
    }

    removeToast(toast) {
        if (!toast) {
            return
        }
        if (toast.countdownTimer) {
            clearTimeout(toast.countdownTimer)
            toast.countdownTimer = undefined
        }

        toast.style.animation = "slide-out-toast 0.7s ease forwards"
        setTimeout(() => {
            toast.remove()
        }, 1500)
    }

    createToast(message, type) {
        if (!this.notificationElement) {
            return
        }
        let toastClassList = ['toast--container']
        let statusIconSRC = ''
        switch (type) {
            case 'SUCCESS':
                toastClassList.push('success')
                statusIconSRC = check
                break
            case 'ERROR':
                toastClassList.push('error')
                statusIconSRC = close
                break
        }

        let templateInner = `
                <div class ="toast--header">
                    <div class="icon-status"> 
                        <img src="${statusIconSRC}" alt=""/>
                    </div>
                    <div class="title">Action Executed!</div>
                </div>
                <div class="toast--body">
                     <div class="message">
                        <p>${message}</p>
                    </div>
                </div>  
                <div class="toast--footer">
                    <div class="wrap--countdown"><span class="countdown"></span></div>
                </div> `
        const toast = document.createElement('div')
        toast.classList.add(...toastClassList)
        toast.innerHTML = templateInner
        this.notificationElement.insertBefore(toast, this.notificationElement.firstChild)
        toast.countdownTimer = setTimeout(() => {
            this.removeToast(toast)
        }, 4000)

        return toast
    }
}
