import axios from 'axios'
import { API_KEY, BASE_URL } from '../config/api_config'



export const getSearch = async (searchOpt, query) => {
  
  const url = `${BASE_URL}search/${searchOpt}`

  try {
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
        query: query
      }
    })
    const searchResults = response.data.results
    console.log(searchResults)
    return searchResults
    
  } catch (error) {
    throw error
  }
}
  