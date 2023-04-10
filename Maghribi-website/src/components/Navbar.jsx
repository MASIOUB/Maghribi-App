import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToken, logout } from '../reducers/authReducer';

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  dispatch(addToken());

  const getCategories = async () => {
    await axios
      .get('http://localhost:3000/categories')
      .then(res => {
        setCategories(res.data);
      });
  };

  return (
    <div className='bg-primary py-3'>
      <div className='container flex'>
        {/* All Categories */}
        <div className='px-8 py-4 bg-primary flex items-center cursor-pointer relative group z-50'>
          <span className='text-white'>
            <i className='fas fa-bars'></i>
          </span>
          <span className='capitalize ml-2 text-white'>All categories</span>

          <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-solid hidden group-hover:block opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible'>
            {
              (categories.length === 0) ? (
                console.log('there are no categories')
              ) : (categories.categoryList.map((category, key) => (
                <div className='flex flex-col items-center px-6 py-3 hover:bg-gray-100 transition'>
                  <Link to={`/shop`} className='ml-6 text-gray-600 text-sm'>{category.name}</Link>
                  <div>
                    {(category.children.length > 0) ? (
                      category.children?.map((field) => (
                        // console.log(field.name)
                        <div>
                          <Link to={`/shop?category=${field._id}`} >{field.name}</Link>
                        </div>
                      ))
                    ) : (null)
                    }
                  </div>
                </div>
              )))
            }
          </div>
        </div>

        {/* Navbar Links */}
        <div className='flex items-center justify-between flex-grow pl-12'>
          <div className='flex items-center space-x-6 capitalize'>
            <Link to="/" className='text-gray-200 hover:text-white transition'>Home</Link>
            <Link to="/store" className='text-gray-200 hover:text-white transition'>Products</Link>
            <Link to="/" className='text-gray-200 hover:text-white transition'>Contact us</Link>
          </div>
          <div className='flex items-center space-x-6 capitalize'>
            {token ? (
              <p className='text-gray-200 hover:text-white transition cursor-pointer' onClick={() => dispatch(logout())}>Logout</p>
            ) : (
              <Link className='text-gray-200 hover:text-white transition' to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar