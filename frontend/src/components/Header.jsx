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
                </div>
            </div>
        </div>
    )
}

export default Header