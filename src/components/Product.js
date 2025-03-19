import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // destructure product
  const { id, image, category, title, price } = product;
  return (
    // <div>
    //   <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
    //     <div className="w-full h-full flex justify-center items-center">
    //       {/* image */}
    //       <div className="w-[200px] mx-auto flex justify-center items-center">
    //         <img
    //           className="max-h-[160px] group-hover:scale-110 transition duration-300"
    //           src={image}
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //     {/* buttons */}
    //     <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
    //       <button onClick={() => addToCart(product, id)}>
    //         <div className="flex justify-center items-center text-white w-12 h-12 bg-teal-500">
    //           <BsPlus className="text-3xl" />
    //         </div>
    //       </button>
    //       <Link
    //         to={`/product/${id}`}
    //         className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
    //       >
    //         <BsEyeFill />
    //       </Link>
    //     </div>
    //   </div>
    //   {/* category, title & price */}
    //   <div>
    //     <div className="tex-sm capitalize text-gray-500 mb-1">{category}</div>
    //     <Link to={`/product/${id}`}>
    //       <h2 className="font-semibold mb-1">{title}</h2>
    //     </Link>

    //     <h2 className="font-semibbold">$ {price}</h2>
    //   </div>
    // </div>

    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 transition duration-300 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative border border-[#e4e4e4] h-[300px] overflow-hidden group">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-teal-500 rounded-full shadow-lg">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl rounded-full"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 text-center">
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold text-lg mb-1 hover:text-teal-600 transition">
            {title}
          </h2>
        </Link>
        <h2 className="font-semibold text-xl text-gray-800">${price}</h2>
      </div>
    </div>

  );
};

export default Product;
