import axios from '../../node_modules/axios'

export default {
  fetchTest: function (url) {
    return new Promise(
      (resolve, reject) => {
        axios.get(
          `https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=https://${url}&strategy=mobile&key=AIzaSyCA4imf5kEa-4TD46yWotgsxI7XhRX_wLM`)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            reject(error)
          })
      }
    )
  }
}
