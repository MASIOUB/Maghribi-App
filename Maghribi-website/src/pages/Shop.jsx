import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import decorImage from '../assets/images/moroccan-interior-design.jpg';

const Shop = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getCategories = async () => {
        await axios.get(`http://localhost:3000/categories`)
            .then((response) => {
                setCategories(response.data);
            })
    }

    const getProducts = async () => {
        (category === '') ? (
            await axios
                .get(`http://localhost:3000/products`)
                .then(res => {
                    setProducts(res.data);
                })
        ) : (
            await axios
                .get(`http://localhost:3000/products?category=${category}`)
                .then(res => {
                    setProducts(res.data);
                    // console.log(res.data);
                })
        )
    };

    const handleClick = async (e) => {
        e.preventDefault();
        (category === '') ? (
            await axios
                .get(`http://localhost:3000/products`)
                .then(res => {
                    setProducts(res.data);
                })
        ) : (
            await axios
                .get(`http://localhost:3000/products?category=${category}`)
                .then(res => {
                    setProducts(res.data);
                    // console.log(res.data);
                })
        )
    }

    console.log(category)

    return (
        <div>
            <div>
                <div className='flex justify-between items-center px-5 py-5'>
                    <form method='GET' className='flex justify-between px-5 py-5 gap-5'>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Category</label>
                            <select onChange={(e) => { setCategory(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-48 h-11">
                                <option value=''>All</option>
                                {
                                    (categories.length === 0) ? (
                                        console.log('first')
                                    ) : (
                                        categories.categoryList.map((category, key) => (
                                            <option value={category._id}>{category.name}</option>
                                        ))
                                    )
                                }
                            </select>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Price:</label>
                            <div className='flex gap-1'>
                                <input type="text" placeholder='price' name='price' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 h-11' />
                                <input type="text" placeholder='price' name='price' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 h-11' />
                            </div>
                        </div>
                        <button type='submit' onClick={(e) => handleClick(e)} className="px-4 text-white bg-blue-600 rounded-full ">
                            Search
                        </button>
                    </form>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900">Sort by:</label>
                        <select id='sort' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 h-11">
                            <option value='-createdAt'>Newest products</option>
                            <option value='createdAt'>Oldest products</option>
                        </select>
                    </div>
                </div>

                <div className="bg-gray-100 flex flex-col justify-center">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 p-5">
                        {(products.length === 0) ? (
                            'There is no products yet'
                        ) : products.map((product, key) => (
                            <Link to={`/product-details/${product._id}`} className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                                <div className="overflow-x-hidden rounded-2xl relative">
                                    <img src={`http://localhost:3000/images/${product.image}`} alt={"moroccan"} />
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
                            </Link>
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;