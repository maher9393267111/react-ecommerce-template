import React from 'react';
import { Card, Col, Row } from 'antd';
import { motion } from 'framer-motion';
import {useState,useEffect} from 'react';

const { Meta } = Card;
const Card1 = ({product}) => {


const [toggleImage, setToggleImage] = useState(false);











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
    
<div>
    
    {product.title}
</div>


<div>
    {product.category}
</div>

{/* ----ozelikler map---- */}


<div className='desc'>
    
{Object.entries(product.ozelikler).map(([key, val], i) => (
    <p key={i}>
        {key}: {val}
    </p>
))}




</div>



</div>


  </Card>


        </div>
      </div>
    );
}

export default Card1;
