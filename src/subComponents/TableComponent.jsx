import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

const TableComponent = ({ head, desc, isPositive }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      className={`flex lg:px-[20px] md:px-[11px] px-[6px] lg:mb-[14px] md:mb-[12px] mb-[8px] transition-opacity duration-500
      ${inView ? "opacity-100 " : "opacity-0"}
      `}
    >
      {isPositive ? (
        <div>
          <FaCheckCircle className="text-[#99B83C] bg-white text-[12px] md:text-[16px] lg:text-[30px] rounded-full " />
        </div>
      ) : (
        <div>
          <RiErrorWarningLine className="text-[red] text-[12px] md:text-[16px] lg:text-[30px] " />
        </div>
      )}
      <div className=" xl:w-[65%] lg:w-[70%] md:mx-[12px] mx-[8px] lg:mx-[15px] ">
        <h1 className="font-bold mont text-[9px] md:text-[12px] lg:text-[14px]">
          {head}
        </h1>
        <p className="text-[8px] md:text-[11px] text-[#ffffffd7] lg:text-[13px]  ">
          {desc}
        </p>
      </div>
    </section>
  );
};

export default TableComponent;
