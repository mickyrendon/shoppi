import { useContext} from "react"
import { Layout } from "../../components/Layout"
import { Card } from "../../components/Card"
import { ProductDetail } from "../../components/ProductDetail"
import { ShoppingCartContext } from "../../Context"


export const Home = () => {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if(context.searchValue?.length > 0){
      if(context.filteredItems?.length > 0){
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      }else{
        return(
          <p>Nothing found</p>
        )
      }
    }else{
      return (
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
      
  }
  return (
        <Layout>
          <div className="mt-8 mb-16 w-80 flex flex-col justify-center items-center gap-4">
            <h1>Exclusive Products</h1>
            <input 
              className="w-full h-8 px-4 py-2 text-start text-sm font-normal outline outline-1 rounded-sm" placeholder="Find a product"
              onChange={(e) => context.setSearchValue(e.target.value)}
            ></input>
          </div>
          <div  
            className="grid gap-4  grid-cols-4 w-full max-w-screen-md mt-8"
            >
            {renderView()}
          </div>
          <ProductDetail></ProductDetail>
        </Layout>
    )
  }
  