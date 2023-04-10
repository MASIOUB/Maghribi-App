
import { useDispatch } from 'react-redux';
import { logout } from '../reducers/authReducer';

const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-white text-2xl font-semibold">Admin Dashboard</h1>
                    </div>
                    <div className="ml-4 flex items-center">
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => dispatch(logout())}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar