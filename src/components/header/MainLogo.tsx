
const MainLogo = () => {
  return (
    <div>
        {/* Main Logo With Name */}
          <div className="flex items-center md:justify-start space-x-1 ms-3">
                  <a href="/"><img
                  className="hidden md:h-6 w-auto md:block"
                  src="/public/icons/Main-logo.svg"
                  alt="Epic Grocery Laptop View Logo"
                  /></a>
                  <a href="/"><img
                  className="hidden md:h-6 w-auto md:block"
                  src="/public/icons/Logo-name.svg"
                  alt="Epic Grocery Laptop View Logo Name"
                  /></a>
                  
                  <a href="/"><img
                  className="block h-6 w-auto md:hidden"
                  src="/public/icons/Main-logo.svg"
                  alt="Epic Grocery Mobile View Logo"
                  /></a>
                  <a href="/"><img
                  className="block h-6 w-auto md:hidden"
                  src="/public/icons/Logo-name.svg"
                  alt="Epic Grocery Mobile View Logo Name"
                  /></a>
          </div>
    </div>
  )
}

export default MainLogo
