import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        await axios.get(`http://localhost:3000/categories`)
            .then((response) => {
                setCategories(response.data);
            })
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('image', image);

        axios
            .post(`http://localhost:3000/products`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
            <form method="post" onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border border-gray-400 p-2 rounded-lg w-full"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="border border-gray-400 p-2 rounded-lg w-full"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Quantity
                    </label>
                    <input
                        type='number'
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                        className="border border-gray-400 p-2 rounded-lg w-full"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="price"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="border border-gray-400 p-2 rounded-lg w-full"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="price"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Category
                    </label>
                    <select onChange={(e) => setCategory(e.target.value)} className="border border-gray-400 p-2 rounded-lg w-full">
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
                {/* <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Image URL
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        value={image}
                        onChange={handleImage}
                        required
                        className="border border-gray-400 p-2 rounded-lg w-full"
                    />
                </div> */}

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Description</label>
                    <input className="border border-gray-400 p-2 rounded-lg w-full"
                        type="file"
                        name="image"
                        onChange={handleImage} />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default NewProduct