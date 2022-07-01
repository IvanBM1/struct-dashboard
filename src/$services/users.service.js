import API from './$api'

export default {
    userLogin,
    getUsers,
    updateUser
}

async function userLogin(data) {
    return API({
        method: 'post',
        route: '/users/login',
        data
    })
}

async function getUsers(query) {
    return API({
        method: 'get',
        route: '/users',
        query
    })
}

async function updateUser(userId, data) {
    return API({
        method: 'put',
        route: `/users/${ userId }`,
        data
    })    
}