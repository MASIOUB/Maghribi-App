import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 w-64 py-4 px-6 flex-shrink-0">
            <nav>
                <a className="block py-2.5 px-4 rounded-lg hover:bg-gray-700 transition duration-200 text-white" href="/">Dashboard</a>
                <Link className="block py-2.5 px-4 rounded-lg hover:bg-gray-700 transition duration-200 text-white" to="/products">Products</Link>
                <a className="block py-2.5 px-4 rounded-lg hover:bg-gray-700 transition duration-200 text-white" href="/">Orders</a>
                <Link className="block py-2.5 px-4 rounded-lg hover:bg-gray-700 transition duration-200 text-white" to="/users">Customers</Link>
                <a className="block py-2.5 px-4 rounded-lg hover:bg-gray-700 transition duration-200 text-white" href="/">Settings</a>
            </nav>
        </div>
    )
}

export default Sidebar