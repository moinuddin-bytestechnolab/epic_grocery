import { Routes, Route } from "react-router-dom"
import ForgotPassword from "../components/header/Authentication/ForgotPassword"
import Login from "../components/header/Authentication/Login"
import Register from "../components/header/Authentication/Register"
import ResetPassword from "../components/header/Authentication/ResetPassword"
import Home from "../pages/home"
import NewProducts from "../pages/newProducts"
import Offers from "../pages/offers"
import Shop from "../pages/shop"
import StoreLocation from "../pages/storeLocation"
import OtpVerification from "../components/header/Authentication/OtpVerification"
import Private from "../routes/private/index"
import Public from "../routes/public/index"
import Search from '../pages/search'
import Error from '../pages/error'
import ProductDetails from '../pages/productDetails'

const index = () => { 
    return (
      <div>
        <Routes>
          <Route path="/" element={<Private/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/search/:product?" element={<Search/>}/>
            <Route path="/new-products" element={<NewProducts/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/store-location" element={<StoreLocation/>}/>
            <Route path="/product-details" element={<ProductDetails/>}/>
          </Route>
          <Route path="/" element={<Public/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/create" element={<Register/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/email-verification" element={<OtpVerification/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
          </Route>
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
    )
  }
  
  export default index