import { Menu } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

const dropdownsCategories = [
    {
        mainItem : "Fruits & Vegetables",
        subItem : [
            {subName : "Fresh Fruits"},
            {subName : "Premium Fruits"},
            {subName : "Fresh Vegetables"}
        ]
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

const Dropdowns = () => {
  return (
    <>
        {/* All Categories Toggle Dropdown List */}
        <div className="z-10">
                {dropdownsCategories.map((item)=>{
                    return(
                        <Menu as="div" className="relative text-left">
                            <div className="flex justify-between">
                                <Menu.Button className="flex items-center text-black gap-x-2 text-md font-semibold">{item.mainItem}  
                                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-black hidden " aria-hidden="true" />
                                </Menu.Button>
                                <Menu.Button>
                                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-black " aria-hidden="true" />
                                </Menu.Button>
                            </div>
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded bg-white shadow-xl focus:outline-none">
                                <div className="py-1">
                                    {item.subItem.map((subItem)=>(
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to = "#"
                                                    className={classNames(
                                                        active ? 'bg-gray-800 text-white' : 'text-black',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    {subItem.subName}
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Menu>
                    )
                })}
        </div>
    </>
  )
}

export default Dropdowns
