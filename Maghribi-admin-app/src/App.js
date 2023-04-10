import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';
import Dashboard from "./pages/Dashboard";
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import Users from './pages/Users';
import { addToken} from './reducers/authReducer'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  dispatch(addToken())
  return (
    <div>
      <Router>
        <Routes>
          {(token && token !== 'undefined') ? (
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path='/products' element={<Products />} />
              <Route path='/new-product' element={<NewProduct />} />
              <Route path='/users' element={<Users />} />
            </Route>
          ) : (
            <Route path='/' element={<Login />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
