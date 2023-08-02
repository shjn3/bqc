const getLocalStorageItem = (name) => {
    return localStorage.getItem(name);
}

const writeLocalStorageItem = (name, value) => {
    localStorage.setItem(name, value);
}

const removeLocalStorageItem = (name) => {
    localStorage.clear(name)
}

export default {
    getLocalStorageItem,
    writeLocalStorageItem,
    removeLocalStorageItem
}