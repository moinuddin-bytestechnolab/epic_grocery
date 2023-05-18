import { Disclosure, Menu} from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import AllCategories from './AllCategories'
import NavbarLinks from './NavbarLinks'
import DeliveryLocation from './DeliveryLocation'
import { NavLink } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }


const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="container">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

                {/* All Categories Toggle Dropdown List */}
                    <AllCategories/>
                
                {/* Navbar Link With Clickable Pages */}
                    <NavbarLinks/>

                {/* Delivery and Location */}
                    <DeliveryLocation/>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-12 pt-2">
                <div className=''>
                    {/* All Categories Mobile View */}
                    <div className="flex justify-around sm:hidden ps-3">
                        <Menu as="div" className="relative text-left">
                                <Menu.Button className="flex items-center  text-white gap-x-2 text-md font-semibold">All Categories  
                                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-white " aria-hidden="true" />
                                </Menu.Button>
                            <Menu.Items className="absolute -left-12 z-10 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-xl focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-800 text-white' : 'text-black',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Fruits & Vegetables
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-800 text-white' : 'text-black',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Premium Fruits
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-800 text-white' : 'text-black',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Dairy & Bakery
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-800 text-white' : 'text-black',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Staples
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-800 text-white' : 'text-black',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Snacks & Branded Foods
                                            </a>
                                        )}
                                    </Menu.Item>   
                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>

                    {/* Navbar Link Mobile View */}
                    <div className="flex justify-around space-x-3 py-1 sm:hidden">
                        <div className='flex flex-col'>
                            <NavLink to="/" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Home</NavLink>
                            <NavLink to="/new-products" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">New Products</NavLink>
                            <NavLink to="/shop" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Shop</NavLink>
                            <NavLink to="/offers" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Offers</NavLink>
                            <NavLink to="/store-location" className="font-medium px-3 py-2 text-white rounded-lg hover:text-amber-400">Store Location</NavLink>
                        </div>
                    </div>
                    
                    {/* Login And MyCarts */}
                    <div className='flex justify-around sm:hidden sm:ml-6 sm:static sm:inset-auto sm:pr-0 me-3 mb-3'>
                        <div className='space-x-2 flex justify-end lg:flex-row xl:flex-row md:flex'>
                            <button
                            type="button"
                            className="text-gray-400 hover:text-white focus:outline-none flex md:py-1 ">
                            <span className="sr-only">View My Carts With Notification</span>
                            <span className='px-1 font-bold'>My Cart(0)</span>
                            <img src="/public/icons/my-cart-icon-white.svg" alt="My Cart Icon"/>
                            </button>
                            <button
                            type="button"
                            className="text-gray-400 hover:text-white focus:outline-none flex items-center">
                            <span className="sr-only">View My Login page with Signup</span>
                            <img src="/public/icons/User-login-icon-white.svg" alt="My Login Icon" />
                            <span className='px-1 font-bold'>Login</span>
                            </button>
                        </div>
                    </div>

                    {/* Search Bar Mobile View*/}
                    <div className='flex justify-around sm:ml-2 sm:hidden'>
                    <label className="block relative ">
                        <span className="absolute inset-y-0 left-1 text-gray-800 flex items-center pr-2 text-xl"><FiSearch/></span>
                        <input className="placeholder:italic placeholder:text-slate-500 block 2xl:w-96 xl:w-80 lg:w-72 md:w-64  border-slate-300 rounded-md py-2 pl-8 pr-2 focus:outline-none sm:text-sm bg-slate-200" placeholder="What are you looking for?" type="text" name="search"/>
                        </label>
                    </div>

                </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;