import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='py-4 shadow-sm bg-white'>
            <div className='container flex items-center justify-between'>
                {/* Logo */}
                <div>
                    <h1 className='font-bold text-lg'>
                        <Link to="/">Maghribi</Link>
                    </h1>
                </div>

                {/* Search Bar */}
                <div className='w-full max-w-xl relative flex items-center'>
                    <span className='absolute left-4 top-3 text-lg text-gray-400'>
                        <i className='fas fa-search'></i>
                    </span>
                    <input type="input" className='w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none' placeholder='search' />
                    <button className='bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition' style={{ height: '50.5px' }}>Search</button>
                </div>

                {/* Icons */}
                <div className='flex items-center space-x-4'>
                    {/* <a href='!#' className='text-center text-gray-700 hover:text-primary transition relative'>
                        <div className='text-2xl'>
                            <i className='fas fa-search'></i>
                        </div>
                        <div className='text-xs leading-3'>Search</div>
                    </a> */}
                    <div className='text-center text-gray-700 hover:text-primary transition relative'>
                        <Link to='/' className='text-2xl'>
                            <i className='far fa-heart'></i>
                        </Link>
                        <span className='absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>8</span>
                    </div>
                    <div className='text-center text-gray-700 hover:text-primary transition relative'>
                        <Link to="/" className='text-2xl'>
                            <i className='far fa-solid fa-cart-shopping'></i>
                        </Link>
                        <span className='absolute -right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>8</span>
                    </div>
                    <div className='text-center text-gray-700 hover:text-primary transition relative'>
                        <Link to="/login" className='text-2xl'>
                            <i className='far fa-user'></i>
                        </Link >
                    </div>
                    {/* <div className='px-8 py-4 bg-primary flex items-center cursor-pointer relative group'>
                        <span className='text-white'>
                            <i className='fas fa-bars'></i>
                        </span>
                        <span className='capitalize ml-2 text-white'>All categories</span>

                        <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed hidden group-hover:block opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible'>
                            <div className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <Link to="/" className='ml-6 text-gray-600 text-sm'>Home decor</Link>
                            </div>
                            <div className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <Link to="/" className='ml-6 text-gray-600 text-sm'>Women</Link>
                            </div>
                            <div className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <Link to="/" className='ml-6 text-gray-600 text-sm'>Men</Link>
                            </div>
                            <div className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <Link to="/" className='ml-6 text-gray-600 text-sm'>Skincare</Link>
                            </div>
                            <div className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                                <Link to="/" className='ml-6 text-gray-600 text-sm'>Food</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Header