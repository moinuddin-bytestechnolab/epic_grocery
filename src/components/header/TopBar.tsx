import SearchBar from './SearchBar';
import MainLogo from './MainLogo';
import LoginButton from './LoginButton';
import Carts from './Carts';

const TopBar = () => {
  return (
    <>
      <div className="container"> 
        <div className='grid lg:grid-cols-4 md:grid-cols-3 py-5'>
          {/* Main Logo With Name */}
          <MainLogo/>

          {/* Free Delivery Logo With Text */}
          <div className='hidden lg:block py-1'>
            <div className='flex space-x-1 item-center'>
              <img src="/public/icons/Truk-topNavbar.svg" alt="Free Delivery All Over India*" />
              <span className='text-sm'>Free Delivery All Over India*</span>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar/>
        
          {/* Login And MyCarts */}
          <div className='hidden space-x-2 md:flex justify-end sm:ml-6 sm:static sm:inset-auto sm:pr-0 me-3'>
              <div><Carts/></div>
              <div className='flex items-center'><LoginButton/></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar;