
export default class LoadingScreen {
    screen
    constructor() {
        this.screen = document.querySelector('#loading-screen')
    }


    showLoadingScreen = () => {
        this.screen.classList.remove('loading-hide')
        if (!this.screen.classList.contains('loading-show')) {
            this.screen.classList.add('loading-show')
        }
    }

    hideLoadingScreen = () => {
        this.screen.classList.remove('loading-show')
        if (!this.screen.classList.contains('loading-hide')) {
            this.screen.classList.add('loading-hide')
        }
    }

}
