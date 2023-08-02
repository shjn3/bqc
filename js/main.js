import '/css/style.css'
import '/css/home.css'
import '/css/login.css'
import Router, { PAGE } from './Router.js'


window.onload = () => {
    Router.renderPage(PAGE.HOME)
}