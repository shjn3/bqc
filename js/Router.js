import Home from "./Home"
import Login from "./login"
import localStorage from "./localStorage"
import TOKEN from '../configs/token.json' assert{type: 'json'}

export const PAGE = {
    HOME: 'HOME',
    LOGIN: 'LOGIN',
    EMPTY: 'EMPTY'
}

export default class Router {

    static auth() {
        const users = TOKEN.userToken
        const admins = TOKEN.adminToken
        const token = localStorage.getLocalStorageItem('token')
        return users.indexOf(token) != -1 || admins.indexOf(token) != -1
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
