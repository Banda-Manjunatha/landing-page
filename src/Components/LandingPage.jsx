import React from "react";
import "./LandingPage.css";
import { FaFire } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import phone from "../assets/image-1.png";
import phone2 from "../assets/image-2.png";
import blurImage from "../assets/blur-image.png";
import { IoTrophyOutline } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import star from "../assets/Star 1.png";

const LandingPage = () => {
  return (
    <>
      <div className="body-container">
        <div>
          <img
            src={blurImage}
            alt=""
            className="absolute -z-10  bottom-[-0px] right-2"
          />
        </div>
        <div>
          <img
            src={star}
            alt=""
            className=" absolute -z-10 left-[5%] h-[6%] top-[15%] transform rotate-45"
          />
        </div>

        <header>
          <div className="logo-container">
            <FaFire className="text-2xl text-red-500 sm: text-lg" />
            <h2 className=" text-2xl font-bold relative sm: text-lg">
              uifry
              <small
                className="absolute text-[.3rem] right-[-10px] top-[0px]
              font-bold"
              >
                TM
              </small>
            </h2>
          </div>
          <div className="header-contentContainer">
            <div className="link-container">
              <p className=" text-red-500 font-bold">Home</p>
              <p>About</p>
              <p>Pricing</p>
              <p>Features</p>
            </div>
            <button className="download-btn">Download</button>
          </div>
        </header>
        <div className="main-content">
          <div className=" h-full blur-right">
            <img
              src={blurImage}
              alt=""
              className="absolute -z-10 h-[50%] left-60 opacity-90"
            />
          </div>
          <div>
            <img
              src={star}
              alt=""
              className=" absolute -z-10 left-[13%] h-[6%] bottom-[30%] transform rotate-45 "
            />
          </div>
          <div className="left">
            <div className="content-container">
              <h3>Make The Best Financial Decision</h3>
              <p className="text-gray-500">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerrisque
                Alliquet Faucibus Tincidunt Eu Adipiscing Soclis Arcu Lorem
                Porttitor.
              </p>
              <div className="leftBtn-container">
                <button className="started-btn">
                  {" "}
                  Get Started
                  <FaArrowRightLong />
                </button>
                <button className="watch-btn">
                  <IoPlayCircleOutline className=" text-2xl" /> Watch Video
                </button>
              </div>
            </div>
            <div className="tag-container">
              <div className="trail-container">
                <div className=" border-x-2 border-black flex items-center justify-center">
                  {" "}
                  <img src={star} alt="" className=" h-[70%] mx-2" />
                </div>
                <div className=" flex flex-col justify-center">
                  <p className="font-semibold text-[.8rem]">Uifry Premium</p>
                  <p className="text-[12px]">Free Trail</p>
                </div>
              </div>
              <div className="centerTag-container">
                Make The Best Financial Decision
              </div>

              <div className="secondContent-container">
                <div className="trophy-container">
                  <div className="icon">
                    <IoTrophyOutline />
                  </div>
                  <div>
                    <p className="font-semibold text-[.8rem]">Achievements</p>
                    <p className="text-[12px]">Best Finance App On Playstore</p>
                  </div>
                </div>
                <div className="text-4xl font-light">/</div>
                <div className="trophy-container">
                  <div className="icon">
                    <FaMoneyBillAlt />
                  </div>
                  <div>
                    <p className="font-semibold text-[.8rem]">Finance</p>
                    <p className="text-[12px]">Most Popular Accounting App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className=" h-[100%]">
              <img src={phone2} alt="" className="image-1" />
              <img src={phone} alt="" className="image-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
