const axios = require('axios')

exports.fetchPerson = async () => {
  let response = await axios.get('http://localhost:3000/api/person')
  console.log(response.data.person)
  return response.data.person[0]
}