import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import decorImage from '../assets/images/moroccan-interior-design.jpg';
import womenImage from '../assets/images/women-clothes.jpg';
import menImage from '../assets/images/men-clothes.jpg';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await axios
      .get('http://localhost:3000/products')
      .then(res => {
        setProducts(res.data);
        console.log(res.data);
      });
  };


  // const ProductsList = (products.length === 0) ? (
  //   'There is no products yet'
  // ) : (
  //   products.map((product, key) => <PostCard post={product} key={key} />)
  // )

  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img src={decorImage} alt={"moroccan"} className='w-full h-full' />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The best offer
              <br className="hidden md:block" />
              on the moroccan
              <br />
              <span className="inline-block text-deep-purple-accent-400">
                market
              </span>
            </h2>
            <div className="flex items-center">
              <Link to='/' className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Shop now</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
        <div className='pt-10'>
          <div className='flex justify-between container'>
            <h1 className='uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl'>Newest products</h1>
            <Link to="/all-products">View all</Link>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 p-5">
          {(products.length === 0) ? (
            'There is no products yet'
          ) : products.map((product, key) => (
            <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
              <div className="overflow-x-hidden rounded-2xl relative">
                <img src={decorImage} alt={"moroccan"} />
                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </p>
              </div>
              <div className="mt-4 pl-2 mb-2 flex justify-between ">
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-0">{product.name}</p>
                  <p className="text-md text-gray-800 mt-0">{product.price} DH</p>
                </div>
                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home