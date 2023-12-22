import axios from "axios"

export const apiOptions = axios.create({
  method: 'GET',
  url: 'https://mercado-libre4.p.rapidapi.com/product/MLU22434519',
  params: {country: 'cl'},
  headers: {
    'X-RapidAPI-Key': '13027d4291msh42e3bff07c37a57p1f439djsnb4cd23f66ba9',
    'X-RapidAPI-Host': 'mercado-libre4.p.rapidapi.com'
  }
})
