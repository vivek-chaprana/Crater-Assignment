import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { boxes, faqs, postData, words } from "../Data/data";
import image1 from "../Image/upperimage.png";
import BoxComponent from "../components/BoxComponent";
import PostBox from "../components/PostBox";
import ComparisonTable from "../components/ComparisonTable";

const LandingPage = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((wordIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [wordIndex]);

  return (
    <div>
      <div className="min-h-[100vh] lg:flex lg:justify-between lg:flex-col">
        <section className="lg:flex w-fit mx-auto ">
          <div className="lg:w-[43vw] w-[90vw] mx-auto lg:mb-[30px]  ">
            <h1
              className=" md:text-[45px] text-[35px] lg:text-[57px]  mt-[20px] lg:mb-0 mb-[10px]  "
              id="brandname"
            >
              Crater
            </h1>
            <div className="relative transition-all ">
              <h2 className="  md:w-[70vw] text-[20px] md:text-[35px] absolute lg:text-[43px] xl:text-[50px] font-extrabold mont  lg:w-[55vw] xl:w-[51vw] ">
                AI-powered Business Manager for{" "}
                <span className="animated-word text-[#53ff53]  ">
                  {words[wordIndex]}
                </span>
              </h2>

              <h2 className=" md:w-[70vw] text-[20px] md:text-[35px] lg:text-[43px] xl:text-[50px] font-extrabold mont lg:w-[55vw] xl:w-[51vw]  text-transparent ">
                AI-powered Business Manager for{" "}
                <span className="animated-word  ">{words[wordIndex]}</span>
              </h2>

              <h2 className=" md:w-[70vw] glitch text-[20px] md:text-[35px] lg:text-[43px] xl:text-[50px] font-extrabold mont text-[red] absolute lg:w-[55vw] xl:w-[51vw] top-0 -z-[10] lg:-translate-x-[2px] -translate-x-[1px] lg:translate-y-[1px] translate-y-[0.7px] ">
                AI-powered Business Manager for{" "}
                <span className="animated-word  ">{words[wordIndex]}</span>
              </h2>
              <p className=" md:text-[17px] text-[15px] lg:text-[18px] w-[90vw] lg:w-[38vw] my-[18px] mt-[30px] ">
                Focus on doing what you love, instead of having to open 10
                different ​social media platforms, negotiate brand deals, chase
                invoices, ​manage payments, or file taxes.
              </p>
              <p className="md:text-[17px] text-[15px] lg:text-[18px] w-[90vw] lg:w-[38vw] mb-[30px] ">
                It's like having your own{" "}
                <span className="text-[#53ff53] font-semibold ">
                  BUSINESS MANAGER !
                </span>
              </p>
              <Link
                to="/EarlyAccess"
                className="
                hover:bg-black/[.9] hover:border-[#2bf02bce] hover:text-[#2bf02b] hover:border duration-100 active:scale-[.99]
                lg:text-[15px] text-[13px]  px-[20px] py-[6px] lg:px-[22px] lg:py-[7px] bg-[#2bf02b] rounded-full font-semibold mt-[30px] "
              >
                Get Early Access
              </Link>
            </div>
          </div>

          <div className="lg:w-[47vw]  flex lg:justify-end justify-center  ">
            <img
              className=" my-[40px] lg:w-[37vw] w-[80vw]  xl:min-h-[360px]  xl:max-h-[360px] lg:min-h-[340px]  lg:max-h-[340px]  mt-[7rem]  "
              src={image1}
              alt="dashboard"
            />
          </div>
        </section>

        <section className="flex flex-col  items-center my-[30px] lg:my-[0px] mt-[30px]">
          <h1 className=" text-[17px] md:text-[20px] text-center lg:text-[22px] font-semibold mont mt-[25px]">
            Get all your Platform Data. All in one place.
          </h1>
          <div className="flex flex-wrap  lg:w-[75vw] mont md:w-[85vw] w-[95vw] justify-center    my-[30px] mb-[50px]">
            <div className="cursor-pointer text-[16px] md:w-fit w-[39%] sm:w-[33%]  md:justify-center mx-4 md:mx-6 md:text-[20px] lg:text-[19px] font-bold flex items-center my-[10px] ">
              {" "}
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/youtube.png"
                alt=""
                className=" mx-[10px] md:w-[35px] md:h-[35px]  w-[40px] h-[40px] rounded-md "
              />{" "}
              Youtube
            </div>
            <div className="cursor-pointer text-[16px] md:w-fit w-[39%] sm:w-[33%]  md:justify-center mx-4 md:mx-6 md:text-[20px] lg:text-[19px] font-bold flex items-center my-[10px] ">
              {" "}
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/insta_color.svg"
                alt=""
                className=" mx-[10px] w-[40px] h-[40x]  md:w-[35px] md:h-[35px] rounded-md "
              />{" "}
              Instagram
            </div>
            <div className="cursor-pointer text-[16px] md:w-fit w-[39%] sm:w-[33%]  md:justify-center mx-4 md:mx-6 md:text-[20px] lg:text-[19px] font-bold flex items-center my-[10px] ">
              {" "}
              <img
                src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/twitch_color.png"
                alt=""
                className=" mx-[10px] w-[40px] h-[40px] md:w-[35px] md:h-[35px]  rounded-md "
              />{" "}
              Twitch
            </div>
            <div className="cursor-pointer text-[16px] md:w-fit w-[39%] sm:w-[33%]  md:justify-center mx-4 md:mx-6 md:text-[20px] lg:text-[19px] font-bold flex items-center my-[10px] ">
              {" "}
              <img
                alt=""
                src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/linkedln_color.png"
                className=" mx-[10px] w-[40px] h-[40px] md:w-[35px] md:h-[35px]  rounded-md "
              />{" "}
              Linkedin
            </div>

            <div className=" text-[16px] md:w-fit w-[100%] justify-center mx-4 md:mx-6 md:text-[20px] lg:text-[19px] font-bold flex items-center my-[10px] ">
              {" "}
              +more
            </div>
          </div>
        </section>
      </div>

      <div className="relative flex justify-center ">
        <div className=" mont md:text-[35px] text-[22px] lg:text-[50px] text-[#53ff53] font-extrabold flex flex-col ">
          <span>All the creator business tools.</span>{" "}
          <span>All with your Crater account.</span>{" "}
        </div>
        <div className=" mont md:text-[35px] text-[22px] lg:text-[50px] font-extrabold text-[red] absolute flex flex-col  top-0 -z-[10] lg:-translate-x-[2px] -translate-x-[1px] lg:translate-y-[1px] translate-y-[0.7px] ">
          <span>All the creator business tools.</span>{" "}
          <span>All with your Crater account.</span>
        </div>
      </div>

      {/* Features Section */}
      <section
        className="lg:grid lg:grid-cols-3 my-[40px] flex-wrap  lg:w-[75vw] lg:mx-auto lg:justify-around flex flex-col items-center lg:flex-row
      [&>*:nth-child(1)]:delay-0
      [&>*:nth-child(2)]:delay-0
      [&>*:nth-child(3)]:delay-0
      [&>*:nth-child(4)]:delay-150
      [&>*:nth-child(5)]:delay-150
      [&>*:nth-child(6)]:delay-150
       "
      >
        {boxes.map((item, index) => (
          <BoxComponent key={index} heading={item.heading} desc={item.desc} />
        ))}
      </section>

      {/* WHY CRATER  */}
      <section>
        <div className="relative flex justify-center ">
          <div className=" lg:text-[50px] md:text-[35px] text-[22px]  font-extrabold flex flex-col text-[#53ff53] mont ">
            Why Crater ?
          </div>
          <div className=" lg:text-[50px] md:text-[35px] text-[22px] font-extrabold text-[red] mont  absolute flex flex-col  top-0 -z-[10] lg:-translate-x-[2px] -translate-x-[1px] lg:translate-y-[1px] translate-y-[0.7px] ">
            Why Crater ?
          </div>
        </div>

        <ComparisonTable />
      </section>

      {/* WHY CRATER  */}

      <div className="relative flex justify-center  ">
        <div className=" lg:text-[50px] md:text-[35px] text-[22px]  font-extrabold flex flex-col  mont ">
          10,000+ Users have signed up!
        </div>
        <div className=" lg:text-[50px] md:text-[35px] text-[22px] font-extrabold text-[red] mont  absolute flex flex-col  top-0 -z-[10] lg:-translate-x-[2px -translate-x-[1px] lg:translate-y-[1px] translate-y-[0.7px] ">
          10,000+ Users have signed up!
        </div>
      </div>

      {/* TESTIMONIALS  */}

      <section className="my-[5px] sm:flex flex-wrap mx-auto lg:w-[93vw]  justify-center ">
        <div
          className="flex flex-col sm:flex-row  lg:w-[39vw]   items-center sm:justify-around group hover:delay-0
          [&>*:nth-child(1)]:delay-0
          [&>*:nth-child(2)]:delay-200
          [&>*:nth-child(3)]:delay-[400ms]
          [&>*:nth-child(4)]:delay-[600ms]
        "
        >
          {postData.map((elem, index) => (
            <PostBox elem={elem} key={index} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS  */}

      <div
        className=" bg-[#2bf02b]  rounded-full my-[35px]  w-fit cursor-pointer mx-auto py-[12px] 
        hover:bg-black/[.9] hover:border-[#2bf02bce] hover:text-[#2bf02b] hover:border duration-100 active:scale-[.99]
       "
      >
        <Link
          to="/EarlyAccess"
          className=" textshadow text-[24px] font-bold px-[30px] py-[12px] mont "
        >
          Get Early Access
        </Link>
      </div>

      {/* FAQs */}
      <div className="relative flex justify-center ">
        <div className=" lg:text-[50px] md:text-[35px] text-[22px] text-[white] font-extrabold flex flex-col mont ">
          FAQs
        </div>
        <div className=" lg:text-[50px] md:text-[35px] text-[22px] font-extrabold text-[red] absolute flex flex-col mont  top-0 -z-[10] lg:-translate-x-[2px] -translate-x-[1px] lg:translate-y-[1px] translate-y-[0.7px] ">
          FAQs
        </div>
      </div>

      <section className="my-[10px] md:my-[30px] lg:my-[40px] w-[90vw] lg:w-[67vw] xl:w-[70vw] mx-auto grid justify-center  lg:grid-cols-2">
        {faqs.map((elem, index) => (
          <BoxComponent key={index} heading={elem.ques} desc={elem.ans} />
        ))}
      </section>

      {/* FOOTER  */}

      <footer className="bg-black text-white py-6 lg:px-0 md:px-[60px] px-[20px]">
        <div className=" mx-auto  lg:flex  justify-around items-center ">
          <div className="text-sm lg:w-[40vw]   lg:pr-[10vw] lg:pl-[1vw] ">
            <h1
              className="text-[25px] lg:text-[40px] lg:mb-[30px] lg:mt-[20px] mb-[10px] mt-[14px]  "
              id="brandname"
            >
              Crater
            </h1>
            <p className="mb-2 text-[15px] lg:text-[17px] text-[#ffffffff] lg:text-white  ">
              Crater is an AI-powered Business Manager for Creators &
              Freelancers.
            </p>
            <p className="mb-0 text-[17px] hidden lg:block  ">
              &copy; 2023 Crater - All Right Reserved.
            </p>
          </div>

          <div className="text-sm   lg:w-[15vw] lg:my-0 my-[23px] ">
            {/* <Link  to="/" className="block mb-2 text-[17px] font-medium hover:text-white">Blog</Link> */}
            <button className="block mb-2 lg:text-[17px] text-[15px] font-medium hover:text-white">
              Privacy Policy
            </button>
            <button className="block mb-2 lg:text-[17px] text-[15px] font-medium hover:text-white">
              Terms & Conditions
            </button>

            <p className="hidden lg:block">
              <a
                href="mailto:contact@thecrater.co"
                className="hover:text-white text-[17px]"
              >
                <br /> <br /> contact@thecrater.co
              </a>
            </p>
          </div>

          <div className="text-sm flex flex-col lg:text-center lg:px-[20px] lg:w-[30vw] lg:my-0 mt-[30px] mb-[20px]  ">
            <div className="flex items-center  w-fit mx-[-0.4rem] lg:mx-auto  my-[5px]">
              <a
                className="hover:opacity-75 duration-75"
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/crater.ai/"
              >
                {" "}
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/insta_BW.png"
                  className=" lg:w-[40px] w-[34px] h-[34px] lg:h-[40px] mx-[4px] "
                  alt=""
                />
              </a>
              {/* <a rel="noreferrer" target="_blank" href='https://www.facebook.com/thecrater.co' > <img src='https://www.pikpng.com/pngl/b/102-1028473_free-png-download-facebook-logo-white-png-images.png' className=' lg:w-[40px] w-[34px] h-[34px] lg:h-[40px] mx-[4px] ' alt='' /></a> */}
              <a
                className="hover:opacity-75 duration-75"
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/thecrater.co"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    color: "#e7eaee",
                    height: "2.1rem",
                    width: "2.1rem",
                    margin: "0.3rem",
                  }}
                />
              </a>
              <a
                className="hover:opacity-75 duration-75"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/company/the-crater/"
              >
                {" "}
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/linkedln_BW.png"
                  className=" rounded lg:w-[35px] w-[30px] h-[30px] lg:h-[35px] mx-[4px] "
                  alt=""
                />
              </a>
              <a
                className="hover:opacity-75 duration-75"
                rel="noreferrer"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=919703615148"
              >
                {" "}
                <img
                  src="https://s3.ap-south-1.amazonaws.com/www.cratermedia/website/whatsapp.png"
                  className=" lg:w-[40px] w-[34px] h-[34px] lg:h-[40px] mx-[4px] "
                  alt=""
                />
              </a>
            </div>
            <div className="flex flex-col">
              <p className="mb-2 lg:text-[17px] text-[15px] font-bold mr-0">
                Sports Inddex N Tech Private Limited
              </p>
              <p className="mb-0 lg:text-[17px] text-[15px] mr-0">
                14/4, J Block , 3rd Avenue, Anna Nagar ​East, Chennai, Tamil
                Nadu, 600102
              </p>
              <div className="text-[17px] lg:text-[15px]">
                <p className="mb-0 text-[17px] lg:hidden block text-[#ffffffea] ">
                  <a
                    href="mailto:contact@thecrater.co"
                    className="hover:text-white text-[15px] "
                  >
                    contact@thecrater.co
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="text-[17px] font-bold flex lg:hidden justify-center mt-[15px] mb-[0px]  ">
            &copy; 2023{" "}
            <span className=" text-yellow-600 "> &nbsp; Crater &nbsp;</span>{" "}
            -&nbsp; All Right Reserved.
          </div>
        </div>
      </footer>

      {/* FOOTER  */}
    </div>
  );
};

export default LandingPage;
