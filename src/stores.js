import { writable } from 'svelte/store'

export const ModalStore = writable(null)
export const ToastStore = Toast(null)
export const SessionStore = Model('Session')

export const UserStore = Model('User')

export const UsersStore = Collection('Users')

function Model(name) {

    const { subscribe, update, set } = writable(null)

    function modalCreate(data = null) {
        ModalStore.set(`${name}Create`)
        if(data) set(data)
    }
    
    function modalRead(data = null) {
        ModalStore.set(`${name}Read`)
        if(data) set(data)
    }
    
    function modalUpdate(data = null) {
        ModalStore.set(`${name}Update`)
        if(data) set(data)
    }
    
    function modalDelete(data = null) {
        ModalStore.set(`${name}Delete`)
        if(data) set(data)
    }
    
    function modalOpen(modalName = '', data = null) {
        ModalStore.set(`${name}${modalName}`)
        if(data) set(data)
    }

    function modalClose(data = null) {
        ModalStore.set(null)
        data? set(data): set(null)
    }

    return {
        modalCreate,
        modalRead,
        modalUpdate,
        modalDelete,
        modalOpen,
        modalClose,
        subscribe,
        update,
        set
    }
}

function Collection(name) {

    const {subscribe, update, set} = writable([])

    function append(data) {
        return update(items => {

            if(!items.find(item => item._id === data._id))
                items.unshift(data)

            return items
        })
    }

    function replace(data) {
        return update(items => {
            return items.map(item => {
                return item._id === data._id? data : item
            })
        })
    }

    function remove(dataId) {
        return update(items => {
            return items.filter(item => item._id != dataId)
        })
    }

    function modalOpen(modalName, data = null) {
        ModalStore.set(`${name}${modalName}`)
        if(data) set(data)
    }

    return {
        modalOpen,
        append,
        replace,
        remove,
        subscribe,
        update,
        set
    }
}

function Toast() {

    const { subscribe, update, set } = writable(null)

    function error(data) {
        set({
            color: 'danger',
            message: data.message
        })
        close()
    }

    function warning(message) {
        set({
            color: 'warning',
            message
        })
        close()
    }

    function info(message) {
        set({
            color: 'info',
            message
        })
        close()
    }

    function success(message) {
        set({
            color: 'success',
            message
        })
        close()
    }

    function close() {
        setTimeout(() => {
            set(null)
        }, 3000)
    }

    return {
        error,
        warning,
        info,
        success,
        subscribe,
        update,
        set
    }
}