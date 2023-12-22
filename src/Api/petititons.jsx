// const axios = require('axios')
// import { useState, useEffect } from "react"
// // import { apiOptions } from "./myModule"

// export const ApiFetch = () => {
//     // usestate es como una variable que guarda informacion y la controla para mostrarla cuando se requiera
//     const [items, setItems] = useState(null)

//     useEffect(() => {
//     async function petition (){
//         // const { data } = await apiOptions()

//         // console.log(data)
//         // // const data = await request.json()
//         // setItems(data)
//         const options = {
//             method: 'GET',
//             url: 'https://mercado-libre4.p.rapidapi.com/product/MLU22434519',
//             params: {country: 'cl'},
//             headers: {
//               'X-RapidAPI-Key': '13027d4291msh42e3bff07c37a57p1f439djsnb4cd23f66ba9',
//               'X-RapidAPI-Host': 'mercado-libre4.p.rapidapi.com'
//             }
//           };

//         try {
//             const response = await axios.request(options)
//             console.log(response.data)
//             setItems(response)
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     petition()
//     }, [])

//     console.log(items)
//     // return data
// }