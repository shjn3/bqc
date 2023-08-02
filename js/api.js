import app_config from '../configs/api.json' assert{type: 'json'}
const handleResponse = async function (response) {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error?.message)
    }
    return response.json()
}



const getPlayerData = async (playerId) => {
    const url = `${app_config.apiHost}/apps/${app_config.appid}/players/${playerId}`
    try {
        const controller = new AbortController()
        setTimeout(() => controller.abort(), 5000)
        const response = await fetch(url, {
            signal: controller.signal
        })
        return handleResponse(response)
    } catch {
        throw new Error(errorData?.error?.message)
    }
}

const postPlayerData = async (data) => {
    try {

        const url = `${app_config.apiHost}/apps/${app_config.appid}/players`
        const config = createPostConfig(JSON.stringify(data))
        const response = await fetch(url, config)
        return handleResponse(response)
    }
    catch (e) {
        throw new Error(errorData?.error?.message)
    }
}

const getIP = async () => {
    let ip = ''
    try {
        const controller = new AbortController()
        setTimeout(() => controller.abort(), 5000)
        await fetch('https://api.ipify.org?format=json', { signal: controller.signal })
            .then(response => response.json())
            .then(data => ip = data.ip);
    }
    catch {
        ip = ''
    }
    return ip
}
const createPostConfig = (body) => {

    const controller = new AbortController()
    setTimeout(() => controller.abort(), 5000)
    return {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
        signal: controller.signal
    }

}

const sendLog = async (data) => {
    const ip = await getIP()
    if (data.hasOwnProperty('adminId')) {
        data.adminId += ip
    }
    const url = app_config.apiLogHost + '/append'
    const body = JSON.stringify({
        path: "wizq/bubble-queen-cat/edit-data-log/mobage.json",
        data: JSON.stringify(data) + '\n'
    })
    const config = createPostConfig(body)
    const response = await fetch(url, config)
    if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData?.error?.message)
    }
    return response.text()

}

export default {
    getPlayerData,
    postPlayerData,
    sendLog
}