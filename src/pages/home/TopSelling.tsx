import { useState } from 'react';
import Card from './Card';

const TopSelling = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
      {offer: true && '10% off' ,image:'/public/images/Maggi.svg' ,productName: 'Maggi' ,description: 'Madhur Pure & Hygienic Sulphurless Sugar...' ,price:'$0.48'},
      {offer: false ,image:'/public/images/Bhindi.svg' ,productName: 'Bhindi' ,description: `Bhindi / Lady's Finger` ,price:'$0.48'},
      {offer: true && '20% off' ,image:'/public/images/Maggi.svg' ,productName: 'Maggi' ,description: 'Madhur Pure & Hygienic Sulphurless Sugar...' ,price:'$0.48'},
      {offer: false ,image:'/public/images/Bhindi.svg' ,productName: 'Bhindi' ,description: `Bhindi / Lady's Finger` ,price:'$0.48'},
      {offer: true && '30% off' ,image:'/public/images/Maggi.svg' ,productName: 'Maggi' ,description: 'Madhur Pure & Hygienic Sulphurless Sugar...' ,price:'$0.48'},
  ];

  const handlePreviousClick = () => {
        setCurrentIndex((prevIndex: number) =>  (prevIndex > 0 ? prevIndex - 1 : 0))
    }

    const handleNextClick = () => {
        setCurrentIndex((prevIndex: number)=> (prevIndex < categories.length - 1  ? prevIndex + 1 : categories.length - 1))
    }

    const handleClick = (index: number) => {
      if(index < currentIndex){
        setCurrentIndex(index);
      }else{
        handleNextClick()
      }
    };

  return (
    <div>
      <div className="container">
        <div className='relative'>
            <div className='my-5 text-center'>
                <h2 className="font-bold text-2xl">Top selling items</h2>
                <span className='text-sm text-gray-500'>Available at best prices</span>
            </div>
            <div className='absolute flex right-0 top-0'>
                <button type="button" className=" z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePreviousClick}>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50 dark:group-hover:bg-gray-300/60 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 hover:text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNextClick}>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-300/60 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 hover:text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </div>
        <div className='flex justify-center'>
          <Card categories={categories} currentIndex={currentIndex} handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;

