import { useLocation } from 'react-router-dom';
import Card from '../home/Card';
import { useState } from 'react';


const SearchPage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // const categories = [
    //     {offer: true && '10% off' ,image:'/public/images/Maggi.svg' ,productName: 'Maggi' ,description: 'Madhur Pure & Hygienic Sulphurless Sugar...' ,price:'$0.48'},
    //     {offer: false ,image:'/public/images/Bhindi.svg' ,productName: 'Bhindi' ,description: `Bhindi / Lady's Finger` ,price:'$0.48'},
    //     {offer: true && '20% off' ,image:'/public/images/Maggi.svg' ,productName: 'Maggi' ,description: 'Madhur Pure & Hygienic Sulphurless Sugar...' ,price:'$0.48'},
    //     {offer: false ,image:'/public/images/Bhindi.svg' ,productName: 'Bhindi' ,description: `Bhindi / Lady's Finger` ,price:'$0.48'},
    //     {offer: true && '30% off' ,image:'/public/images/Maggi.svg' ,productName: 'Maggi' ,description: 'Madhur Pure & Hygienic Sulphurless Sugar...' ,price:'$0.48'},
    // ];

    const handleClick = (index: number) => {
        if(index < currentIndex){
          setCurrentIndex(index);
        }else{
            console.log("error");
        }
      };
  

  const location = useLocation();
  const { data, value } = location.state; 
      console.log("Value =>",value.search);
      

  return (
    <>
      <div className='my-10'>
        <div className='my-10 flex justify-center'>
          <p className='text-2xl font-bold'> Search results for “ {value.search} ”</p>
        </div>
        <div className='flex justify-center'>
          <Card categories={data} currentIndex={currentIndex} handleClick={handleClick}/>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
