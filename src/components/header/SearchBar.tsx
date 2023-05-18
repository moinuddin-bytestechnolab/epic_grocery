import { FiSearch } from "react-icons/fi"

const SearchBar = () => {
  return (
    <div>
      {/* Search Bar */}
      <div className='hidden sm:ml-2 md:block '>
        <label className="block absolute">
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-2xl"><FiSearch/></span>
            <input className="placeholder:italic placeholder:text-slate-500 block 2xl:w-96 xl:w-80 lg:w-72 md:w-64  border-slate-300 rounded-md py-2 pl-2 pr-8 focus:outline-none sm:text-sm bg-slate-200" placeholder="What are you looking for ?" type="text" name="search"/>
          </label>
      </div>
    </div>
  )
}

export default SearchBar
