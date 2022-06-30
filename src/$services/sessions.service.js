import API from './$api'

export default {
    verifySession
}

function verifySession(token) {
    return API({
        method: 'get',
        route: `/sessions/${ token }`,
    })
}