import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {
  const url="https://dummyjson.com/products";
  const [products,setProducts] = useState([]);
  useEffect(()=> {
    axios.get(url).then(({data})=>{
       setProducts(data.products);
    })
  }, [])
  return (
    <>
    <div className="main pt-20">
      <div className="products">
        products
      </div>
    </div>
    </>
  )
}

export default Products;
