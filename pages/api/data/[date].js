import moment from 'moment'

const API_URL = 'https://www.movistarplus.es/programacion-tv/$$DATE$$?v=json'

export default function handler(req, res) {
  console.log(req.query)
  const { date } = req.query

  fetch(API_URL.replace('$$DATE$$', moment(date).format('YYYY-MM-DD')))
    .then(r => r.json())
    .then(r => res.status(200).send(r))
}
