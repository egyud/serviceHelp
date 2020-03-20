const axios = require('axios')

exports.fetchPerson = async () => {
  let response = await axios.get('http://helptemecula.com/api/person')
  console.log(response.data.person)
  return response.data.person[0]
}