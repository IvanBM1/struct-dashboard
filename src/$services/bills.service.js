import API from './$api'

export default {
    createBill,
    getBills,
    getBill,
    updateBill,
    deleteBill,
}

function createBill(data) {
    return API({
        method: 'post',
        route: '/bills',
        data
    })
}

function getBills(query) {
    return API({
        method: 'get',
        route: '/bills',
        query
    })
}

function getBill(billId) {
    return API({
        method: 'get',
        route: `/bills/${ billId }`,
    })
}

function updateBill(billId, data) {
    return API({
        method: 'put',
        route: `/bills/${ billId }`,
        data
    })
}

function deleteBill(billId) {
    return API({
        method: 'delete',
        route: `/bills/${ billId }`,
    })
}