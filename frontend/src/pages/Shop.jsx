import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import decorImage from '../assets/images/moroccan-interior-design.jpg';

const Shop = () => {
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

    return (
        <div>
            <div>

                <div className='flex justify-between items-center px-5 py-5'>
                    <div className='flex justify-between px-5 py-5 gap-5'>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Category</label>
                            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-48 h-11">
                                <option>All</option>
                                <option>Home decor</option>
                                <option>Women</option>
                                <option>Men</option>
                                <option>Food</option>
                                <option>Skincare</option>
                            </select>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Color:</label>
                            <input type="text" placeholder='color' name='color' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 blockp-2.5 w-48 h-11' />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Price:</label>
                            <input type="text" placeholder='price' name='price' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 h-11' />
                        </div>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900">Sort by:</label>
                        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 h-11">
                            <option>Newest products</option>
                            <option>Oldest products</option>
                        </select>
                    </div>
                </div>

                <div className="bg-gray-100 flex flex-col justify-center">
                    {/* <div className='pt-10'>
                        <div className='flex justify-between container'>
                            <h1 className='uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl'>Home decor</h1>
                            <Link to="/all-products">View all</Link>
                        </div>
                    </div> */}

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 p-5">

                        {(products.length === 0) ? (
                            'There is no products yet'
                        ) : products.map((product, key) => (
                            <Link to={`/product-details/${product._id}`} className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
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
                            </Link>
                        )

                        )}
                    </div>
                </div>

                {/* <div className="bg-gray-100 flex flex-col justify-center">
                    <div className='pt-10'>
                        <div className='flex justify-between container'>
                            <h1 className='uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl'>Women</h1>
                            <Link to="/all-products">View all</Link>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 p-5">
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
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
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
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
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
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
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
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
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
                                    <p className="text-lg font-semibold text-gray-900 mb-0">Name</p>
                                    <p className="text-md text-gray-800 mt-0">100 DH</p>
                                </div>
                                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white">
                    <div class="bg-gray-100 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                            <div class="group relative bg-white">
                                <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src={decorImage} alt={"moroccan"} class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" class="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>
                            <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                                <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src={decorImage} alt={"moroccan"} class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" class="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>
                            <div class="group relative">
                                <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src={decorImage} alt={"moroccan"} class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" class="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>
                            <div class="group relative">
                                <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src={decorImage} alt={"moroccan"} class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" class="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>
                            <div class="group relative">
                                <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img src={decorImage} alt={"moroccan"} class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" class="absolute inset-0"></span>
                                                Basic Tee
                                            </a>
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-500">Black</p>
                                    </div>
                                    <p class="text-sm font-medium text-gray-900">$35</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Shop;