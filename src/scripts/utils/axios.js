import axios from 'axios';

export function make_request(method, url, data, options){
    // Adds content type since we are using json
    const headers = { "content-type" : "application/json" }
    // Checks if theres is a session token stored
    const token = window.localStorage.getItem('authtoken')

    // If token add it in the headers
    if (token){ headers['authtoken'] = token }

    // Create the request (is a promise)
    return axios({ method, url, data, headers, ...options })
        // On promise answer then executes func
        .then(
            res => {
                // If there is a token in the response store it
                const token = res.headers['authtoken']
                if(token){
                    window.localStorage.setItem('authtoken', token)
                }
                return res.data
            }
        )
}

// We can just use make_request function this is only to access
// with "." insteade of doing make_request('get', ...) you do
// make_request.get()
const request = {
    get : (url, data, options) => make_request('get', url, data, options),
    post : (url, data, options) => make_request('post', url, data, options),
    put : (url, data, options) => make_request('put', url, data, options),
    delete : (url, data, options) => make_request('delete', url, data, options),
}

export default request