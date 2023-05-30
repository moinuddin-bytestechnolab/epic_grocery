import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

interface ICategory {
    offer: any;
    image: string;
    productName: string;
    description: string;
    price: string;
  }

  interface ICardProps {
    categories: ICategory[];
    currentIndex: number;
    handleClick: (index:number) => void;
  }

const Card = (props:ICardProps) => {
    const { categories, currentIndex, handleClick} = props

    const [likedCategories, setLikedCategories] = useState<any>([]);

        const handleLike = (index:number) => {
            if(likedCategories.includes(index)){
                setLikedCategories(likedCategories.filter((item:any)=> item != index))
            }else{
                setLikedCategories([...likedCategories, index])
            }
        }


  return (
    <div>
        <div className="container grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {categories.map((item,index)=>(
                <div
                    key={`Card_${index}`}
                    className={`w-[239px] h-[346px] border-2 rounded-lg relative p-4 ${currentIndex === index ? 'border-blue-500': ''}`}
                    onClick={() => handleClick(index)}>
                    
                    {item.offer &&
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                            <div className="bg-green-900 text-slate-100 font-medium rounded-full p-1 text-xs w-10 text-center">{item.offer}</div>
                        </div>
                    }
                    <div className='flex justify-around'>
                        <img
                            src={item.image}
                            alt={item.productName}
                            className="w-[135.43px] h-[170px]"
                        />
                    </div>
                    <div className='flex justify-between my-2'>
                        <span className="text-sm font-medium text-gray-400 w-44">{item.productName}</span>
                        <div><button className='text-2xl cursor-pointer' onClick={() => handleLike(index)}>
                            {likedCategories.includes(index) ? (<AiFillHeart/>) : (<AiOutlineHeart/>)}
                            </button>
                        </div>
                    </div>
                    <div className='flex my-2 justify-between'>
                        <span className="text-sm font-medium w-[162px] h-10">{item.description}</span>
                        <span className="text-sm font-medium">{item.price}</span>
                    </div>
                    <div className='mt-4'><button className='border h-10 w-full border-black hover:bg-[#5A9C17] hover:text-slate-100 hover:border-none text-sm font-bold'>Add to cart</button></div>
                </div>
            ))}
      </div>
    </div>
  );
};

export default Card;

