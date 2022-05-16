import http from '@/server/http'

export const getLang = () => {
    return http.get('/getUser')
}