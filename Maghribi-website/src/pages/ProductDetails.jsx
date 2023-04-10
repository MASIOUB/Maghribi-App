import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = async () => {
    await axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex flex-col md:flex-row p-5">
    <div className="w-full md:w-1/2">
      <img
        src={`http://localhost:3000/images/${product.image}`}
        alt="Product"
        className="w-full h-auto"
      />
    </div>
    <div className="w-full md:w-1/2 px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 text-lg mb-4">{product.description}</p>
      <p className="text-gray-700 text-lg mb-4">Price: {product.price} DH</p>
      <button className="bg-blue-500 hover:bg-blue-...">Add to Cart</button>
    </div>
  </div>
  );
}

export default ProductDetails;
