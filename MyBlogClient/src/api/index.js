import ajax from './ajax'

const BASE_URL = '/api'

export const fetchAnswer = () => ajax(BASE_URL + '/search', {}, 'POST')
