import React from "react";
import './index.css'
import { products } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import  ProductCard from "../../components/productCard/index";
import { motion } from "framer-motion";
import { allproductsFetch, filterproducts,changeCategory } from "../../redux/global";
const Home = () => {
  const dispatch = useDispatch();



  
  // redux state

  const { category, allproducts, categoryproducts } = useSelector(
    (state) => state.global
  );

  useEffect(() => {
    dispatch(filterproducts(category));
    console.log("categoryyyyyyyyy");
    console.log(category?.length);
  }, [category]);

  useEffect(() => {
    // console.log("useEffect ",products);

    dispatch(allproductsFetch(products));
  }, [products]);



  const changecat = (catName,ev) => {

    ev.preventDefault();

console.log("e.target.value", catName);

dispatch(changeCategory(catName));



  }






  return (
    <div>
      <h1>home page</h1>

      <span
        className=" 
            rounded-full
            bg-green-300 mr-[33px]"
      >
        {categoryproducts.length} category products
      </span>

      <span className="   rounded-lg   bg-blue-400">
        {allproducts.length} filtered products   // category name {category}
      </span>


{/* ---------header section----- */}

<div className="header-wrapper w-[100%]  xsm:h-[113px]   lg:h-[129px]  bg-black text-white">
    
<div className="container">

<div className="inside-wrapper text-center  sm:pb-[30px] lg:text-2xl font-bold    sm:pt-[30px]  ">
    
<h1> AJAX PRODUCTS TABS</h1>


<h2>  HOME / AJAX PRODUCTS TABS</h2>



</div>



</div>



</div>

{/* ------header section end-----  */}



{/* ---subjeadert section start--- */}


<div className="container sub-header">
    

<div className=" text-center  text-orange-500   font-bold text-xl pt-[34px] pb-[20px]">
    <h2 > ECOMMERCE</h2>
</div>

<div className="title-2 text-center font-bold  text-2xl">
    
<h1> AJAX PRODUCTS TABS DEFAULT  </h1>


</div>




</div>



{/* ---subjeadert section end--- */}


{/* ------categories names section start------ */}


<div className="cat-names mt-[33px]">
    
<div className=" text-center flex justify-center gap-8  font-bold text-xl">
    
<h1 onClick={ (e)=> {changecat('FEATURED',e)}} className="line-hover"> FEATURED</h1>
<h1 onClick={ (e)=>  changecat('ACCESSORIES',e)} className="line-hover"> ACCESSORIES</h1>
<h1 onClick={  (e)=>  changecat('FURNITURE',e)} className="line-hover"> FURNITURE</h1>




</div>



</div>




{/* ------categories names section end------ */}


{/* ---------products  by category start------- */}

<div className="products-wrapper">
    
<motion.div

animate={{
  opacity:    [0, 0.5, 1]  ,
 
//   translateY: isHover ? 0 :-1000,
  translateX: [-200,-100,0] ,  
  transition: { duration: 0.7, ease: "easeInOut" },
  
  
}}
>


   {/* ------grid products-----  */}
<div className="grid-products">
    

{categoryproducts.map((product) => (
    

    <div>
      

        <ProductCard product={product} />
        
        
         </div>



))}





</div>



</motion.div>




</div>





{/* -------products  by category end-------  */}

    </div>
  );
};

export default Home;
