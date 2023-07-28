import { useInView } from "framer-motion";
import React, { useRef } from "react";

const BoxComponent = ({ heading, desc }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`my-[20px] min-h-[190px] md:min-h-[230px] lg:min-h-[180px] xl:min-h-[190px] md:min-w-[50vw] md:max-w-[50vw] min-w-[80vw] max-w-[80vw] lg:min-w-[46%] py-[5px] xl:py-[5px] lg:py-[3px]  lg:mx-[10px] flex flex-col justify-evenly text-black  text-center px-[19px] lg:px-[10px] xl:px-[20px] border-dashed border-white border-[6px] odd:bg-[yellow] even:bg-[#A06CFF] cursor-pointer hover:opacity-90 transition ease-out duration-500 ${
        inView
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-20 opacity-0 blur-sm"
      }
      `}
    >
      <h1 className="font-extrabold mont text-[17px] lg:py-[4px] xl:py-[5px] lg:text-[17px] xl:text-[1.3vw]  underline textshadow">
        {heading}
      </h1>
      <p className="px-5 italic text-blue bg-red xl:text-[0.91vw] lg:text-[13px] text-[14px] font-semibold p-3 transition-all">
        {desc}
      </p>
    </div>
  );
};

export default BoxComponent;
