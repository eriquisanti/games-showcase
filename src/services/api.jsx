import axios from "axios";

export  function Api (params) {
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: params ? params : {},
    headers: {
      'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    }
  };

  return axios.request(options)
 
}

export  function apiGame (id) {
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
    params: {id: id},
    headers: {
      'x-rapidapi-host':  process.env.REACT_APP_RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
    }
  };

  return axios.request(options)
 
}
