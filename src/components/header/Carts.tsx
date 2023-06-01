
const Carts = () => {
  return (
    <div>
        <button
            type="button"
            className="text-gray-500 hover:text-black focus:outline-none flex items-center md:py-1 ">
            <span className="sr-only">View My Carts With Notification</span>
            <span className='px-2 font-bold'>My Cart(0)</span>
            <img src="/public/icons/my-cart-icon.svg" alt="My Cart Icon"/>
        </button>
    </div>
  )
}

export default Carts
