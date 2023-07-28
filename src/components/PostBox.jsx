import React, { useRef } from "react";
import { BsSend } from "react-icons/bs";
import { FaRegBookmark, FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { TfiMoreAlt } from "react-icons/tfi";
import fallbackImg from "../Image/fallback.jpeg";
import { useInView } from "framer-motion";

const PostBox = ({ elem }) => {
  const ref = useRef();
  const inView = useInView(ref);
  const { imgUrl, name, prof, msg } = elem;
  return (
    <div
      ref={ref}
      className={`flex flex-col sm:flex-row  lg:w-[39vw]   items-center sm:justify-around group-hover:hover:scale-105 cursor-pointer transition ease-out duration-1000 group-hover:hover:opacity-100 group-hover:opacity-50 group hover:duration-150 group-hover:transition group-hover:delay-0 hover:delay-0 
       ${
         inView
           ? "translate-x-0 opacity-100 blur-0 animate-div"
           : "-translate-x-full opacity-0 blur-sm not-animate-div"
       }
        `}
    >
      <div className="bg-white rounded-lg lg:p-[0.8vw] p-[11px] w-[235px] lg:w-[15.7vw] mx-[10px] my-[15px] md:my-[30px]  ">
        <div className="flex items-center  justify-between  mb-[12px] lg:mb-[0.83vw] opacity-95">
          <div className="flex items-center space-x-[9px]   ">
            <img
              src={imgUrl}
              onError={(e) => (e.target.src = fallbackImg)}
              alt=""
              className=" min-w-[30px] rounded-full h-[30px]  lg:h-[2.2vw]  "
            />{" "}
            <div className=" ">
              <h1 className="text-[black] mont text-[14px] lg:text-[0.91vw] font-extrabold ">
                {name}
              </h1>
              <p className="text-[#000000] text-[9.6px] lg:text-[0.7vw] ">
                {prof}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <TfiMoreAlt className="text-[#000000c9] text-[23px] lg:text-[1.6vw] " />{" "}
        </div>
        <div className="bg-[#050e09e9] lg:text-[0.91vw] text-[14px]  letterspace  font-bold lg:p-[13px] p-[13px] text-center h-[235px] lg:h-[15.6vw] flex items-center ">
          {msg}
        </div>
        <div className="flex text-[#000000be] text-[19px]  lg:text-[1.24vw] items-center justify-between mt-[13px]  lg:mt-[0.91vw] ">
          {" "}
          <div className="flex space-x-[10px] items-center">
            <FcLike className="lg:text-[1.35vw] text-[21px] " />
            <FaRegComment />
            <BsSend />
          </div>
          <FaRegBookmark />
        </div>
      </div>
    </div>
  );
};

export default PostBox;
