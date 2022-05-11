import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";
import { FcShare } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { colorhandler } from "../../redux/global";

const ProductCard = ({ product }) => {
  console.log("product", product.category, product.mainimage);

  const [productImage, setProductImage] = useState(product.mainimage);

  const [productinfo, setProductInfo] = useState(product);

  const [isHover, setHover] = useState(false);

  const [imagebyColor, setImageByColor] = useState(null);
  const [color, setColor] = useState(null);

  const [show, setShow] = useState(false);

  // click to handle color change

  const handleColorChange = (color) => {
    // dispatch(colorhandler(color));

    setColor(color);

    // find the image by color from images object

    const image = product.images[color];

    console.log("image------>", image);

    setImageByColor(product.images[color]);
  };

  // redux state

  //   const dispatch = useDispatch();

  //   const {  } = useSelector(
  //     (state) => state.global
  //   );

  const handleMouseEnter = () => {
    setShow(true);
  };

  // when mouse leave on the product card change the image to the first image

  const handleMouseLeave = () => {
    setShow(false);
  };

  // console.log(product + 'product in card');

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      className="app__header-info"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <div className="card-wrapper mb-[100px]">
        <div className="card-container ml-[10px]  ">
          {/* ----image section start---- */}

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="image-div h-[360px] object-cover  w-[88%]"
          >
            {!color && (
              <img
                className="h-[100%] hover:scale-50 w-[100%] transition-all duration-400"
                src={show ? product.image2 : product.mainimage}
                alt=""
              />
            )}

            {color && (
              <img
                className="h-[100%] hover:scale-50 w-[100%] transition-all duration-400"
                src={imagebyColor}
                alt=""
              />
            )}
          </div>

          {/* ---image section end--- */}

          {/* ------hover colors section-- */}

          <div
            className="hover-sec relative text-center



"
          >
            <motion.div
              animate={{
                opacity: isHover ? 1 : 0,

                //   translateY: isHover ? 0 :-1000,
                translateY: isHover ? -10 : 0,
                transition: { duration: 0.7, ease: "easeInOut" },
              }}
            >
              <div
                className="w-[100%] mx-auto  absolute-sec 
p-[9px]

border-2 border-[#bbb]
text-center"
              >
                {/* -flex-- colors and icon-- */}

                <div className="flex  justify-between ">
                  <div
                    className="pro-colors flex
gap-6

"
                  >
                    {product?.colors &&
                      product.colors.map((color) => (
                        <div
                          onClick={() => handleColorChange(color)}
                          style={{
                            backgroundColor: `${color}`,
                            color: `${color === "black" ? "white" : ""}`,
                          }}
                          className="rounded-[50%]
    p-[5px]
    cursor-pointer
    
    
    "
                        >
                          {color}
                        </div>
                      ))}
                  </div>

                  <div
                    className="icon pr-[20px]
w-[30%]
mr-[20px]
pb-[10px]

"
                  >
                    share
                    <span>
                      <FcShare className="  text-2xl" />
                    </span>
                  </div>
                </div>

                {/* -flex-- colors and icon end here-- */}
              </div>
            </motion.div>
          </div>

          {/* ------hover colors section end-- */}

          {/* ----info section start---- */}

          <div className="info-sec">
            <div className="info-container">
              <div className="price text-center relative flex justify-center gap-5">
                <h1 className="relative">
                  <span
                    className={`${
                      product?.oldprice && "old-price"
                    } mr-[40px] text-bold text-[#bbb] hover:text-orange-600 text-xl`}
                  >
                    {product?.oldprice}
                  </span>
                </h1>

                <span className="mr-[40px] text-bold hover:text-orange-600 text-xl">
                  {product.price}
                </span>
              </div>

              {/* -----card name start----- */}

              <div className="cat text-center text-bold text-[#bbb] pt-[15px]">
                <h1>{product.category}</h1>
              </div>
            </div>
          </div>

          {/* ----info section end---- */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
