import axios from 'axios'
import { API_KEY, BASE_URL } from '../config/api_config'


export const getMovie = async (option, page) => {
  
  const url = `${BASE_URL}movie/${option}?api_key=${API_KEY}&language=en-US&page=${page}`

  try {
    const response = await axios.get(url)
    const movies = response.data.results
    console.log(movies)
    return movies
    
  } catch (error) {
    throw error
  }
}

// export const getMovie = async option => {
  
//   const url = `${BASE_URL}movie/${option}`

//   try {
//     const response = await axios.get(url, {
//       params: {
//         api_key: API_KEY,
//         language: 'en-US',
//         page: 1
//       }
//     })
//     const movies = response.data.results
//     console.log(movies)
//     return movies
    
//   } catch (error) {
//     throw error
//   }
// }

export const getSearch = async (searchOpt, query) => {
  
  const url = `${BASE_URL}search/${searchOpt}`

  try {
    const response = await axios.get(url, {
      params: {
        query: query,
        api_key: API_KEY,
        language: 'en-US',
        page: 1
      }
    })
    const searchResults = response.data.results
    console.log(searchResults)
    return searchResults
    
  } catch (error) {
    throw error
  }
}


export const getTV = async option => {
  
  const url = `${BASE_URL}tv/${option}`

  try {
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1
      }
    })
    const tvs = response.data.results
    console.log(tvs)
    return tvs
    
  } catch (error) {
    throw error
  }
}


  
  