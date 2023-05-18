import { Menu } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

const AllCategories = () => {
  return (
    <>
        {/* All Categories Toggle Dropdown List */}
        <div className="hidden sm:block ps-3">
            <Menu as="div" className="relative text-left">
                    <Menu.Button className="flex items-center  text-white gap-x-2 text-md font-semibold">All Categories  
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-white " aria-hidden="true" />
                    </Menu.Button>
                <Menu.Items className="absolute right-30 z-10 mt-2 w-56 origin-top-right rounded bg-white shadow-xl focus:outline-none">
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
    </>
  )
}

export default AllCategories
