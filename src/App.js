import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://fakestoreapi.com/products')
      console.log(request.data)
    }
    fetchData()
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
