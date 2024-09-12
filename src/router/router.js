import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Login from '../components/authentication/Login'
import Signup from '../components/authentication/Signup';
import ProductDetails from '../components/product/ProductDetails';
const router=createBrowserRouter([
   
    {path:'/landing',element:<App></App>},
    {path:'/signup',element:<Signup></Signup>},
    {path:'/',element:<Login></Login>},
    {path:'/userproductdetaileview/:id',element:<ProductDetails></ProductDetails>},
    
   
])
export default router;