import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        await axios.get('/products')
            .then((response) => {
                setProducts(response.data);
            })
    };

    return (
        <div className="container mx-auto p-4">
            <div className='flex justify-between'>
                <h1 className="text-3xl font-bold mb-6">Products List</h1>
                <Link to='/new-product' className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>Add new products</Link>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">name</th>
                                        <th scope="col" class="px-6 py-4">price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 py-4">{product.name}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{product.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products