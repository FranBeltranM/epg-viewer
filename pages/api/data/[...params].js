import moment from 'moment'

const API_URL = 'https://www.movistarplus.es/programacion-tv/$$DATE$$?v=json'

export default function handler(req, res) {
  fetch(API_URL.replace('$$DATE$$', moment(req.query.params[0]).format('YYYY-MM-DD')))
    .then(r => r.json())
    .then(r => {
      if( req.query.params.length > 1 ) {
        Object.entries(r.data).forEach(r => {
          if( (r[1].DATOS_CADENA.CODIGO) === req.query.params[1] ) {
            res.status(200).send(r[1])
          }
        })
      } else {
        res.status(200).send(r)
      }
    })
}
