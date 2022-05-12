import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { electronicsFetch, electronicsFilterFunc,changeElectronicsCategory } from "../../redux/global";
import { electronics } from "../../pages/home/data";
import TopSellers from "../topsellersCard";

const Electronics = () => {
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  const { electronicsproducts,     electronicsCategory,    electronicsFilter } = useSelector(
    (state) => state.global
  );

  useEffect(() => {
    dispatch(electronicsFetch(electronics));
    dispatch(electronicsFilterFunc("ACCESSORIES2"));

    console.log("electronics", electronics);
  }, [electronics]);


  const changecat = (catName, ev) => {
    ev.preventDefault();

    console.log("e.target.value", catName);

  
    dispatch(electronicsFilterFunc(catName));

    setAnimate(!animate);
  };








  return (

<motion.div

whileInView={
{


  opacity: [1, 0.5, 1],
  transition: {

    duration: 1,
    ease: "easeInOut",
    timescale: 1,
    // loop: Infinity,      infinite loop

  },
x: [-200,0],

}


}

>





    <div className="container mx-auto  mb-[100px]">
      {/* ---header--- */}

      <div className=" text-center  ">
        <h1 className=" mx-auto header-text w-[200px]">
          {" "}
          Electronics Products
       
        </h1>
      </div>


{/* ------categories names----- */}

<div className="electric-car">
  
<div className="container p-[12px] mb-[10px] mt-[12px]   flex sm:flex-col  lg:flex-row justify-around" >
  
<div className="relative sm:text-center ">
  <h1 className=" font-bold text-2xl  sm:pb-[33px]">
  Beset Sellers
  </h1>

</div>


<div className="cat-flex sm:mx-auto text-xl lg:relative lg:right-[-288px] fong-bold flex flex-row gap-6">
 
  
<div
className={`  ${    electronicsCategory === "ACCESSORIES2" ? "active  h-[44px] " : ""}`}

  onClick={(e) => {
    changecat("ACCESSORIES2", e);
  }}


>
ACCESSORIES2
</div>

<div

className={` ${    electronicsCategory === "FEATURED2" ? "active  h-[44px] " : ""}`}
  onClick={(e) => {
    changecat("FEATURED2", e);
  }}

>
FEATURED2
</div>
<div

className={` ${    electronicsCategory === "AUDIO" ? "active  h-[44px] " : ""}`}
  onClick={(e) => {
    changecat("AUDIO", e);
  }}


>

AUDIO
  
</div>





</div>


</div>


</div>



      {/* ----products- */}
      <motion.div
      whileInView={

        {

          opacity: [1, 0.5, 1],
          transition: {

            duration: 2,
            ease: "easeInOut",
            // timescale: 1,
            infinite: true,
          },
          x: animate ?  [-200, 0] : [-188, 0],
        }
      }
      
      
      >
      <div className="slider grid-products-topsellers">
        { electronicsFilter?.map((product, index) => {
          return (
            
              <div>
                  
                  
                  <TopSellers product={product} />
              
              
              
              
              </div>
           
          );
        })}
      </div>
      </motion.div>
    </div>
    </motion.div>

  );
};

export default Electronics;
