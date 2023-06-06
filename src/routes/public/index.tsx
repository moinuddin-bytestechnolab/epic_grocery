import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

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
      checkLogin ?
        navigate("/")
      :
      <Outlet/>
    }
    </>
  )
}

export default Index
