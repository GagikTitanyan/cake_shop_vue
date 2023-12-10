import axios from 'axios'

export default defineNuxtPlugin(() => {
    const defaultUrl = 'http://localhost:5000'

    const api = axios.create({
        baseURL: defaultUrl,
        headers: {
            common: {
                Accept: 'text/plain, application/json, */*'
            }
        }
    })
    return {
        provide: {
            api
        }
    }
})