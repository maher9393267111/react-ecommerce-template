import React from 'react';
import {useState, useEffect} from 'react';
const ProductCard = ({product}) => {

const [productImage, setProductImage] = useState(product.mainimage);
console.log(productImage + 'beforeeeeeeee ');
// when mouse enter on the product card change the image to the second image


const handleMouseEnter = () => {



    setProductImage(product.image2);

    console.log(productImage + 'afterrrrrrrrr ');
    console.log('mouse enter');
    console.log(productImage);

}


// when mouse leave on the product card change the image to the first image


const handleMouseLeave = () => {

    setProductImage(product.mainimage);
    console.log('mouse leave');

    console.log(productImage);

}



    // console.log(product + 'product in card');

    return (
        <div className='card-wrapper mb-[100px]'>

      
<div className='card-container  '>
    
{/* ----image section start---- */}

<div onMouseEnter={ handleMouseEnter } onMouseLeave={handleMouseLeave } className='image-div h-[360px] object-cover  w-[88%]'>
    
<img  className='h-[100%] w-[100%] transition-all duration-200' src={productImage} alt=""/>
{product.id}



</div>



{/* ---image section end--- */}







</div>




        </div>
    );
}

export default ProductCard;
