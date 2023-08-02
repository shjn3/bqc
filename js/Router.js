import Home from "./Home"
import Login from "./login"
import localStorage from "./localStorage"

export const PAGE = {
    HOME: 'HOME',
    LOGIN: 'LOGIN',
    EMPTY: 'EMPTY'
}

export default class Router {
    static auth() {
        const token = localStorage.getLocalStorageItem('token')
        return token
    }

    static renderPage = (page) => {
        if (!this.auth(page)) {
            Login.init()
            return
        }

        switch (page) {
            case PAGE.HOME:
                Home.init()
                break
            case PAGE.LOGIN:
                Login.init()
                break
            case PAGE.EMPTY:
            default:
                document.querySelector('#app').innerHTML = ''
        }
    }
}
