import axios from '../../node_modules/axios'

export default {
  fetchTest: function (url, strategy) {
    return new Promise(
      (resolve, reject) => {
        axios.get(
          `https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=https://${url}&strategy=${strategy}&key=AIzaSyCA4imf5kEa-4TD46yWotgsxI7XhRX_wLM`)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            reject(error)
          })
      }
    )
  },
  fetchNow: function (url, strategy) {
    return new Promise(
      (resolve, reject) => {
        axios.get(
          `https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=https://${url}&strategy=${strategy}&key=AIzaSyCA4imf5kEa-4TD46yWotgsxI7XhRX_wLM&snapshots=true&screenshot=false`)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            reject(error)
          })
      }
    )
  },
  fetchGraphdata: function (url) {
    let data = {
      '01.01.18': [12, 1],
      '02.01.18': [13, 20],
      '03.01.18': [15, 41],
      '04.01.18': [1, 5],
      '05.01.18': [55, 12],
      '06.01.18': [64, 5],
      '07.01.18': [33, 45],
      '08.01.18': [23, 43],
      '09.01.18': [23, 56],
      '10.01.18': [90, 89]
    }
    let result = {
      labels: [],
      series: [[], []]
    }
    Object.keys(data).forEach((item) => {
      result.labels.push(item)
      result.series[0].push(data[item][0])
      result.series[1].push(data[item][1])
    })
    return new Promise(
      (resolve, reject) => {
        resolve(result)
      }
    )
  }
}
