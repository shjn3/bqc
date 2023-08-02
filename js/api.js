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
        const response = await fetch(url)
        return handleResponse(response)
    } catch {
        throw new Error(errorData?.error?.message)
    }
}

const postPlayerData = async (data) => {
    try {

        const url = `${app_config.apiHost}/apps/${app_config.appid}/players`
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data)
        }

        const response = await fetch(url, config)
        return handleResponse(response)
    }
    catch (e) {
        throw new Error(errorData?.error?.message)
    }
}

const sendLog = async (data) => {
    const url = app_config.apiLogHost + '/append'
    const rawData = JSON.stringify(data) + '\n'
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: {
            path: "wizq/bubble-queen-cat/edit-data-log/mobage.json",
            data: rawData
        },
        redirect: 'follow'
    }
    const response = await fetch(url, config)
    return handleResponse(response)
}

export default {
    getPlayerData,
    postPlayerData,
    sendLog
}