import { Menu } from "@headlessui/react"
import { Link } from "react-router-dom"

const dropdownsCategories = [
    {categoryName: 'Fresh Fruits', urls:'#'},
    {categoryName: 'Premium Fruits', urls:'#'},
    {categoryName: 'Fresh Vegetable', urls:'#'},
    {categoryName: 'Dairy & Bakery', urls:'#'},
    {categoryName: 'Staples', urls:'#'},
    {categoryName: 'Snacks & Branded Foods', urls:'#'},
    {categoryName: 'Beverages', urls:'#'},
    {categoryName: 'Mom & Baby Care', urls:'#'},
    {categoryName: 'Home & Kitchen', urls:'#'},
]


const Dropdowns = () => {
  return (
    <>
        {/* All Categories Toggle Dropdown List */}
        <div className="shadow-lg border border-gray-100 border-t-2">
            <div className="my-4 p-2">
                <p className="text-xl font-semibold">Categories</p>
            </div>
                {dropdownsCategories.map((item)=>{
                    return(
                        <Menu as="div" className="relative text-left">
                            <div className="flex items-center text-gray-600 hover:bg-gray-800 hover:text-slate-50 gap-x-2 border border-gray-100">
                                <Link to={item.urls}><p className="text-md p-2 font-medium tracking-wider">{item.categoryName}</p></Link>
                            </div>
                        </Menu>
                    )
                })}
        </div>
    </>
  )
}

export default Dropdowns
