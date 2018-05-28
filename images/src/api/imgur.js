import qs from 'qs'
import axios from 'axios'

const CLIENT_ID = 'a410407620a521b'
const API_URL = 'https://api.imgur.com'

export default {
  login () {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }

    window.location = `${API_URL}/oauth2/authorize?${qs.stringify(querystring)}`
  },
  fetchImages (token) {
    return axios.get(`${API_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  uploadImages (images, token) {
    const promises = Array.from(images).map(image => {
      const formData = new FormData()
      formData.append('image', image)
      return axios.post(`${API_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })

    return Promise.all(promises)
  }
}
