import React from 'react';
import { Card, Col, Row } from 'antd';
import { motion } from 'framer-motion';
import {useState,useEffect} from 'react';

const { Meta } = Card;
const Card1 = ({product}) => {


const [toggleImage, setToggleImage] = useState(false);

const [hchange, setHchange] = useState(false);









// when mouse enter the card then set to toggleImage to true
const handleMouseEnter = () => {

    setToggleImage(true);

    console.log("mouse enter");

}


// when mouse leave the card then set to toggleImage to false

const handleMouseLeave = () => {

    setToggleImage(false);

    console.log("mouse leave");

}



    return (
        <div className=' sm:col-span-3 lg:col-span-3 p-[5px] mb-[33px] transition-all duration-200 ' >
        <div onMouseEnter={ handleMouseEnter}  onMouseLeave={handleMouseLeave} >
         
         <motion.div
         whileInView={
{
    x: toggleImage ? [-100, 0] : [-101, 0],
    transition: {

        type: 'spring',
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0.5,
        duration: 0.5,
        ease: 'easeInOut',
    },
}

         }
         
         >

         </motion.div>
        <Card

    hoverable
    style={{ width: '100%' }}
    cover={<img alt="example" src={ toggleImage ? product.image1 : product.image2} />}
  >


{/* ------info----- */}


<div className='info'>
    
<div  className='text-center bg-green-100  p-[5px]
font-bold
pb-[12px]


'>
    
    {product.title}
</div>


<div className='text-center pt-[10px] font-bold pb-[10px] bg-blue-300'>
    {product.category}
</div>

{/* ----ozelikler map---- */}


<div className='desc '>

<div className='mb-[10px] text-center font-bold bg-orange-200  pt-[10px] pb-[10px]'>
    Ozelikler
</div>

{/* -----wrapp over flow to ozelikler----- */}
    
<div className={ ` over ${ hchange ? "h-auto z-10" : 'h-[90px] overflow-hidden'} `}>
    


{Object.entries(product.ozelikler).map(([key, val], i) => (


<div className='flex justify-between first-letter:
font-bold

'  key={i}>
<div className='pl-[22px]'>
    {key} :
</div>


<div className='  pr-[22px]'>
    {val}
</div>

    
</div>
  
       
    
))}


</div>

{/* -------------- */}

{!hchange && 

<div onClick={()=>setHchange(true)} className='show-more-icon text-center  font-bold '>


   icon 

</div>

}


</div>



</div>


  </Card>


        </div>
      </div>
    );
}

export default Card1;
