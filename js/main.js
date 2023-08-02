import '/css/style.css'
import '/css/home.css'
import '/css/login.css'
import Router, { PAGE } from './Router.js'
import localStorage from './localStorage.js'


window.onload = () => {
    localStorage.removeLocalStorageItem('token')
    Router.renderPage(PAGE.HOME)
}