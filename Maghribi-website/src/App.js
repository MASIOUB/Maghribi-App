import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import { addToken} from './reducers/authReducer'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/store' element={<Shop />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
