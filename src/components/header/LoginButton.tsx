import { useNavigate } from "react-router-dom";

const LoginButton = () => {

  const navigate = useNavigate()
  
  const handleLoginPageOpen = () => {
    navigate('/login')
  }

  
  return (
    <div>
        <button
            onClick={handleLoginPageOpen}
            type="button"
            className="text-gray-500 hover:text-black focus:outline-none flex items-center">
            <span className="sr-only">View My Login page with Signup</span>
            <img src="/public/icons/User-login-icon.svg" alt="My Login Icon" />
            <span className='px-1 font-bold'>Login</span>
        </button>
    </div>
  )
}

export default LoginButton;
