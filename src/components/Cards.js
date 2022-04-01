import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Cards() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://fakestoreapi.com/products')
      console.log(request.data)
      setProducts(request.data)
    }
    fetchData()
  }, [])

  return (
    <div className='grid grid-cols-3'>
      {products.map((product) => (
      <div key={product.id} className="w-max max-w-xs">
        <img className='max-full max-w-xs' src={product.image} alt="" />
        <h1 className=''>{product.title}</h1>
        <p className=''>{product.description}</p>
      </div>
      ))}
    </div>
  )
}

export default Cards