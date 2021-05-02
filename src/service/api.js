import axios from 'axios'
import { API_KEY, BASE_URL } from '../config/api_config'


export const getMovie = async (option, page) => {
  
  const url = `${BASE_URL}movie/${option}?api_key=${API_KEY}&language=en-US&page=${page}`

  try {
    const response = await axios.get(url)
    const movies = response.data
    return movies   
  } catch (error) {
    throw error
  }
}

export const getSearch = async (searchOpt, query, page) => {
  
  const url = `${BASE_URL}search/${searchOpt}?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`

  try {
    const response = await axios.get(url)
    const searchResults = response.data
    return searchResults 
  } catch (error) {
    throw error
  }
}

export const getTV = async (option, page) => {
  
  const url = `${BASE_URL}tv/${option}?api_key=${API_KEY}&language=en-US&page=${page}`

  try {
    const response = await axios.get(url)
    const tvs = response.data
    return tvs
    
  } catch (error) {
    throw error
  }
}
  
  