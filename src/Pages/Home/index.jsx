import { useState, useEffect } from "react"
import { Layout } from "../../components/Layout"
import { Card } from "../../components/Card"
import { ProductDetail } from "../../components/ProductDetail"

export const Home = () => {

  // usestate es como una variable que guarda informacion y la controla para mostrarla cuando se requiera
  const [items, setItems] = useState(null)

  useEffect(() => {
    async function petition (){
      const request = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await request.json()
      setItems(data)
    }
    petition()
  }, [])

  return (
        <Layout>
          Home
          <div  
            className="grid gap-4  grid-cols-4 w-full max-w-screen-lg mt-8"
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
  