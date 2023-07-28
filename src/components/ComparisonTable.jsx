import React from "react";
import { withCrater, withoutCrater } from "../Data/data";
import TableComponent from "../subComponents/TableComponent";

const ComparisonTable = () => {
  return (
    <div className=" mt-[10px] mb-[30px] lg:mt-[20px] lg:mb-[50px] bg-[#25302B] mx-auto lg:w-[65vw] w-[95vw] md:w-[80vw] flex rounded-lg overflow-hidden ">
      <div
        className="w-[50%]  textshadow flex flex-col  
      [&>*:nth-child(2)]:delay-0
      [&>*:nth-child(3)]:delay-[200ms]
      [&>*:nth-child(4)]:delay-[400ms]
      [&>*:nth-child(5)]:delay-[600ms]
      [&>*:nth-child(6)]:delay-[800ms]
      "
      >
        <h1 className="mx-auto md:my-[12px] font-extrabold mont text-[13px] md:text-[17px] py-[5px] lg:text-[20px]">
          Without Crater
        </h1>
        {withoutCrater.map((elem, index) => (
          <TableComponent
            key={index}
            head={elem.head}
            desc={elem.desc}
            isPositive={false}
          />
        ))}
      </div>

      <div
        className="w-[50%]  textshadow flex flex-col  bg-[#28402D]             
      [&>*:nth-child(2)]:delay-0
      [&>*:nth-child(3)]:delay-[200ms]
      [&>*:nth-child(4)]:delay-[400ms]
      [&>*:nth-child(5)]:delay-[600ms]
      [&>*:nth-child(6)]:delay-[800ms]"
      >
        <h1 className="mx-auto md:my-[12px] font-extrabold mont text-[13px] md:text-[17px] py-[5px] lg:text-[20px]">
          With Crater
        </h1>
        {withCrater.map((elem, index) => (
          <TableComponent
            key={index}
            head={elem.head}
            desc={elem.desc}
            isPositive={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
