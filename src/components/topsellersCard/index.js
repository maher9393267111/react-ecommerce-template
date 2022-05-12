import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const TopSellers = ({ product }) => {
  const [isHover, setHover] = useState(false);
  const [showMore, setShowMore] = useState(false);
  // console.log("33333", showMore);


  const dispatch = useDispatch();
  const {  } = useSelector(
    (state) => state.global
  );


  return (
    <div className="pt-[22px] mt-[55px] pb-[33px] h-auto">
      <div className="product-card">
        <motion.div
          // whileInView={{ x:  page === 0 ? [-200, 0] : [-210,0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          <div className="img-div mx-auto w-[90%] h-[288px]">
            <img src={product.mainimage} alt="product-image" />
          </div>
        </motion.div>

        {/* -hover-section */}

        <motion.div
          animate={{
            opacity: isHover ? 1 : 0,
            translateY: isHover ? 0 : 122, // come from bottom 122px to his place 0px
            transition: { duration: 0.5, ease: "easeInOut" },

            // rotate: isHover ? 90 : 0,
          }}
        >
          <div
            className="hover-me
relative top-[-2px]

border-2 border-[#bbb]

"
          >
            <div className="relative p-[17px]">
              <div className="pr-[22px] absolute   right-[12px] top-[-2px]">
                icon
              </div>
            </div>
          </div>
        </motion.div>

        {/* -info div--- */}

        <div className="info text-center">
          <div className="name">
            <h1>{product.name}</h1>
          </div>

          <div className=" text-orange-300 font-bold">
            <h1>{product.price}</h1>
          </div>

<div className=" text-2xl font-bold hover:text-green-200">
  {product.category}
</div>


          <motion.div
            animate={{
              opacity: showMore ? 1 : 0,

              translateY: showMore ? 110 : 77, // come from bottom 122px to his place 0px

              transition: { duration: 0.5, ease: "easeInOut" },

              // rotate: isHover ? 90 : 0,
            }}
          >
            <div className="desc group">
              {!showMore ? product.desc.slice(0, 66) : product.desc}

              {/* {product?.desc.slice(showMore? (0,product.desc.length) : (0,55) )} */}
            </div>
          </motion.div>

          <div
            onClick={() => setShowMore(!showMore)}
            className="read-more pt-[20px] text-3xl text-center     "
          >
            <FiMoreHorizontal className=" w-[100%]  block" />
          </div>

{/* -add to cart-- */}
<div className="add text-center">
    
    <button type="submit  " className="  bg-orange-200 font-bold  p-[7px] rounded-xl hover:text-white transition-all duration-300"> ADD TO CART</button>
</div>


        </div>
      </div>
    </div>
  );
};

export default TopSellers;
