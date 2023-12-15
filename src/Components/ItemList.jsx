import { Item } from "./Item";
import { Loading } from "./Loading";



export const ItemList = ({ products, loading }) => {
    
  return (
    <div className="products-container">
      { loading ? (
        <Loading />
      ) : (
        products.map(product => (
        <Item 
          key={product.id}
          product={product}
        />)
      ))}
    </div>
  )
}