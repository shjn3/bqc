import Home from "../Home"
import BaseComponent from "./BaseComponent"
import logo from '../../src/logo.webp'

export const SUB_PAGE_EVENTS = {
    EDIT_ACTION: 'EDIT_ACTION'
}

export default class SubPage extends BaseComponent {

    rowSelected
    constructor() {
        super(document.querySelector('.sub-page'))
        this.initCopyEvent()
    }

    initCopyEvent() {
        const copyIcon = document.querySelector('.sub-page--profile .id .copy-icon')
        copyIcon?.addEventListener('click', () => {
            const playerId = Home.instance.getPlayerId()
            navigator.clipboard.writeText(playerId)
        })
    }


    update(data) {
        if (!data || data.playerId == '') {
            this.setLoadingContent()
            return
        }
        this.updateContent(data)
    }

    setLoadingContent() {
        if (!this.instanceElement) {
            return
        }
        this.instanceElement.classList = 'sub-page .prevent-select loading'
        const profile = document.querySelector('.sub-page--profile')
        const avatar = profile.querySelector('.avatar')
        avatar.innerHTML = ``
        profile.querySelector('.name').innerHTML = ''
        profile.querySelector('.id p').innerHTML = ''

        const tableBody = document.querySelector('.sub-page--table tbody')
        tableBody.innerHTML = `<tr></tr>`
    }

    updateContent(playerData) {
        const { name, photo, customFields, playerId } = playerData || {}
        const { level = 0, coin = 0, spin = 0, bullets } = customFields || {}
        const RocketBulletItem = bullets?.RocketBulletItem || 0
        const RainbowBulletBallItem = bullets?.RainbowBulletBallItem || 0
        const ElectricBulletBallItem = bullets?.ElectricBulletBallItem || 0
        const BombBulletItem = bullets?.BombBulletItem || 0
        const rowConfigs = [
            { value: level, title: 'Level', key: 'level' },
            { value: coin, title: 'Coin', key: 'coin' },
            { value: spin, title: 'Spin', key: 'spin' },
            { value: RocketBulletItem, title: 'Rocket', key: 'bullets.RocketBulletItem' },
            { value: RainbowBulletBallItem, title: 'Rainbow', key: 'bullets.RainbowBulletBallItem' },
            { value: ElectricBulletBallItem, title: 'Electric', key: 'bullets.ElectricBulletBallItem' },
            { value: BombBulletItem, title: 'Bomb', key: 'bullets.BombBulletItem' }
        ]


        const photoUrl = photo
        const subPage = document.querySelector('.sub-page')
        subPage.classList = 'sub-page .prevent-select'
        const profile = document.querySelector('.sub-page--profile')
        const avatar = profile.querySelector('.avatar')
        avatar.innerHTML = ``

        const img = new Image();
        img.src = photoUrl
        img.setAttribute('crossorigin', 'anonymous')
        img.onerror = () => {
            img.src = logo
        }


        avatar.appendChild(img)
        profile.querySelector('.name').innerHTML = name
        profile.querySelector('.id p').innerHTML = playerId
        const tableBody = document.querySelector('.sub-page--table tbody')
        tableBody.innerHTML = ''
        for (let config of rowConfigs) {
            const row = this.createRow(config)
            tableBody.appendChild(row)
        }


    }

    createRow(config) {
        const { value, title, key } = config
        const row = document.createElement('tr')
        row.innerHTML = `<td data-control="${key}">${title}</td>
            <td>${value}</td>
            <td>
                <div class="action-icon">
                    <a class="action--edit">Edit</a>
                </div>
            </td>`
        const editButton = row.querySelector('.action--edit')
        editButton.addEventListener('click', this.onEditButton.bind(editButton, row))
        return row
    }

    onEditButton = (row) => {
        this.rowSelected = row
        const key = row.children[0].dataset['control']
        const title = row.children[0].innerHTML
        const value = row.children[1].innerHTML

        this.dispatchEvent(SUB_PAGE_EVENTS.EDIT_ACTION, {
            title,
            key,
            value
        })
    }

    updateNewValue(value) {
        this.rowSelected.children[1].innerHTML = modal.input.value
    }
}