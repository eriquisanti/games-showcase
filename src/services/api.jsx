import axios from "axios";

console.log(process.env.RAPIDAPI_HOST)

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

// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/games",
//   headers: {
//     "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//     "x-rapidapi-key": "92fee0d204msh0b2655815e1aaf8p12adeejsnaa795e0f7308",
//   },
// });

// export default api;
