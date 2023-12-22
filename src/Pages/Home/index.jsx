import axios from "axios"
import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout"
import { Card } from "../../components/Card"
import { ProductDetail } from "../../components/ProductDetail"


export const Home = () => {
  
  // FIXME, encontrar una buena API
  const options = {
    method: 'GET',
    url: 'https://fakestoreapi.com/products'
  }

  // usestate es como una variable que guarda informacion y la controla para mostrarla cuando se requiera
  const [items, setItems] = useState(null)
  
  useEffect(() => {
    async function petition (){
      try {
        const response = await axios.request(options)
        setItems(response.data)
      } catch (error) {
        console.error(error)
      }
      
    }
    petition()
  }, [])

  return (
        <Layout>
          Home
          <div  
            className="grid gap-4  grid-cols-4 w-full max-w-screen-md mt-8"
            >
            {
              items?.map((item) =>
                  item ? <Card key={item.id} data={item}/> : null
                )
            }
          </div>
          <ProductDetail></ProductDetail>
        </Layout>
    )
  }
  