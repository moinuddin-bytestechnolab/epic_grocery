import { Outlet, useNavigate } from 'react-router-dom'
import TopBar from '../../components/header/TopBar'
import Navbar from '../../components/header/Navbar'
import { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'

const Index = () => {
  const [checkLogin, setCheckLogin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const login:any = localStorage.getItem('user')
    setCheckLogin(login)
  }, [])


  return (
    <>
    {
      checkLogin
      ?
      <div>
      <TopBar/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
    :
    navigate("/login")
    } 
    </>
  )
}

export default Index
