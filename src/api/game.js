import axios from 'axios'

export const getGameInfo = (params, others) => {
  console.log(`others`, others)
  return axios.get(`https://stg-api.unilo.net/api/game-campaign/info`, {
    params,
    ...others,
  })
}
