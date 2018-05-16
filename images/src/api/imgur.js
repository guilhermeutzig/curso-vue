import qs from 'qs'

const CLIENT_ID = 'a410407620a521b'
const API_URL = 'https://api.imgur.com'

export default {
  login () {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }

    window.location = `${API_URL}/oauth2/authorize?${qs.stringify(querystring)}`
  }
}
