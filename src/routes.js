import Moment from 'moment'
import Storage from './storage'
import { SessionStore } from './stores'

import _404View from './$views/404.view.svelte'
import LoginView from './$views/login.view.svelte'
import HomeView from './$views/home.view.svelte'
import IndexView from './$views/index.view.svelte'

const routes = [
    {
        name: '/',
        component: IndexView
    },
    {
        name: 'login',
        component: LoginView,
        onlyIf: {guard: () => !isLogin(), redirect: 'home'}
    },
    {
        name: 'home',
        component: HomeView,
        onlyIf: {guard: isLogin, redirect: 'login'}
    },
    {
        name: '404',
        component: _404View
    }
]

function isLogin() {

    const session = Storage.getItem('session')

    if(!session)
        return false

    if(Moment(session.expired).isBefore(Moment())) {
        Storage.deleteItem('session')
        return false
    }

    SessionStore.set(session)
    return true
}

export { routes }