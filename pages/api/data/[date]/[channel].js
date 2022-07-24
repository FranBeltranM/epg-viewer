import moment from 'moment'

let API_URL = 'https://www.movistarplus.es/programacion-tv/$$DATE$$?v=json'

export default function handler(req, res) {
  console.log(req.query)
  const { date, channel } = req.query
  console.log({
    date,
    channel,
  })

  API_URL = channel ? API_URL + `&canal=${channel}` : API_URL

  fetch(API_URL.replace('$$DATE$$', moment(date).format('YYYY-MM-DD')))
    .then(r => r.json())
    .then(r => res.status(200).send(r))
}
