import Superagent from 'superagent'
import Storage from '../storage'
import Config from '../config'

const conexionError = {
    success: false,
    error: {
        code: 501,
        key: 'conexionError',
        message: 'Error de conexión'
    }
}

export default function(options) {
    return new Promise((resolve, reject) => {
        try {

            const session = Storage.getItem('session')
    
            const request = Superagent(options.method, `${Config.hostApi}${options.route}`)
                .timeout({deadline: 30000, response: 30000})
                .set(options.headers || {})
                .query(options.query || {})
    
            if(session)
                request.set('token', session.token)
    
            if(!options.isForm)
                request.send(options.data)
    
            if(options.isForm) {
    
                (options.files || []).forEach(file => {
                    request.attach(file.name, file.file)
                })
    
                Object.keys(options.data || {}).forEach(key => {
                    request.field(key, options.data[key])
                })
            }
    
            if(options.isBlob)
                request.responseType('blob')
    
            request.end((error, response) => {
                try {
    
                    if(error)
                        return resolve(response? response.body : conexionError)
    
                    resolve(response.body)
    
                } catch(error) {
                    resolve(conexionError)
                }
            })
    

        } catch(error) {
            console.error(error)
        }
    })
}