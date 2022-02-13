import moment from 'moment'

const API_URL = 'https://www.movistarplus.es/programacion-tv/$$DATE$$?v=json'

export default function handler(req, res) {
  fetch(API_URL.replace('$$DATE$$', moment().format('YYYY-MM-DD')))
    .then(r => r.json())
    .then(r => {res.status(200).send(Object.keys(r.data))})
}
