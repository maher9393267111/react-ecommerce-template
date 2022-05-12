import React from "react";
import CardComp from "./card";
import { useEffect, useState } from "react";
import "./index.css";
import { Card, Col, Row } from "antd";
import { motion } from "framer-motion"; 
import { useDispatch, useSelector } from "react-redux";
import {
  tab3fetchAll,
  tab3FilterFunc,
  tabs3CategoryChange,
} from "../../redux/global";
import { data as electronics } from "./data"; // change data name to electronics console.log("electronics",electronics);
const TabSection = () => {
  const [page, setPage] = useState(4);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [sliceto, setSliceto] = useState(4);

  const [animate, setAnimate] = useState(false);

  // when click page slice from 0 to 4 and set to tabs state

  const handlePageChange = () => {
    console.log("clicked----->");
    setToggle(true);
    setAnimate(!animate);

    setPage(page + 4);

    console.log("page", page, page + 4, "-----", electronics.length);

    if (page + 4 < electronics.length) {  // still slice to  electronics.length 

        console.log("slice to condition one work man","-----",page ,    page + 4);
      const sliced = electronics.slice(page, page + 4);
      return setTabs(sliced); // all products after sliced
    } else {   // if page + 4 > electronics.length  restart page to 0 and still slice to electronics.length
      setPage(4);
      console.log("slice to condition two work man","-----",page ,    page + 4);

      setToggle(false);

    //   const sliced = electronics.slice(page, page + 4);

    //   return setTabs(sliced); // all products after sliced
    }
  };

  const { tab3, tabs3Filter, tabs3Category } = useSelector(
    (state) => state.global
  );

  useEffect(() => {
    dispatch(tab3fetchAll(electronics)); // fetch all electronics products

    // execute when the category is changed and change the category products filtered

    dispatch(tab3FilterFunc(tabs3Category)); // category name sent to filter products
  }, [tabs3Category]); // when category changes change filtered products

  return (
    <div>
      <h1
        onClick={handlePageChange}
        className="text-center font-bold text-2xl pt-[20px] h-[66px] hello"
      >
        {" "}
        Tabs {tabs3Category} {tabs3Filter.length}{" "}
        <span className="ml-[20px] bg-green-200">{page} 
        {!toggle &&  page === 4 && "itis must work maher"}
        
        </span>
      </h1>

{/* ---animate slider---- */}


<motion.div
whileInView={
{
    visible: true,
    opacity: 1,
    transition: {
        duration: 0.5,
        ease: "easeInOut",
    },
    x:  animate ? [-200,0] : [-201,0],
}


}

>

      <div className="w-[100%] grid  lg:grid-cols-12 sm:grid-cols-6 gap-3  first:ml-4 last:mr-[50px]">
        {  !toggle &&  page === 4 && tab3.slice(0,4).map((product, index) => {
          return <CardComp product={product} />;
        })} 


{  toggle &&  tabs.map((product, index) => {
          return <CardComp product={product} />;
        })} 
     


      </div>


      </motion.div>
    
      {/* </div> */}
    </div>
  );
};

export default TabSection;
