import API from './$api'

export default {
    userLogin,
    updateUser
}

async function userLogin(data) {
    return API({
        method: 'post',
        route: '/users/login',
        data
    })
}

async function updateUser(userId, data) {
    return API({
        method: 'put',
        route: `/users/${ userId }`,
        data
    })    
}