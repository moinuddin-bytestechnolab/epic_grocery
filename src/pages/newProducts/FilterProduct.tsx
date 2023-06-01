import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'


const Categories = [
        { categoryName: 'Citrus Fruits' },
        { categoryName: 'Melons' },
        { categoryName: 'Apples' },
        { categoryName: 'Banana' },
        { categoryName: 'Berries' },
        { categoryName: 'Others' },
]

const FilterProduct = () => {
  return (
    <>
        <div className='shadow-lg border border-gray-150 p-2 my-7 border-t-2 '>
            <div className="my-5 p-2 flex items-center justify-between">
                <p className="text-xl font-semibold">Filters</p>
                <Link to="#"><p className='text-sm'>Clear All</p></Link>
            </div>
            <h3 className="text-base font-semibold">Availability</h3>
            <Disclosure as="div" className="pt-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <label className="ml-3 text-sm text-gray-600 font-medium">InStock Products</label>
                    <input
                        name="check"
                        defaultValue="check"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                </div>
                <div>
                    <h3 className="text-base font-semibold">Categories</h3>
                    {Categories.map((item)=>(
                        <div className="flex items-center justify-between">
                        <label className="ml-3 text-sm text-gray-600 font-medium">{item.categoryName}</label>
                        <input
                            name="check"
                            defaultValue="check"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    </div>
                    ))}
                </div>
            </div>
            </Disclosure>
        </div>
    </>
  )
}

export default FilterProduct
