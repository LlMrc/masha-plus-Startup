"use client";

import React, { useState } from "react";
import List from "./li";
import CloseMenu from "./icon/closeMenu";
import HamburgerMenu from "./icon/hamburgerMenu";

import Link from "next/link";
import masha from "../../public/images/masha.png";
import Image from "next/image";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="pt-0 pb-px lg:px-[30px]   w-screen sticky top-0 z-10 flex items-start  background-color: rgb(255 255 255 / 0.1) border-b border-solid border-[#F0F0F0] backdrop-blur-[100px]">
      <div className="flex px-4 items-center sticky top-0 justify-between w-full  h-[90px]">
        <div className="inline-flex">
          <Image
            src={masha}
            width="91"
            height="32"
            alt={""}
            className="w-[90px] "
          />

          <div className="hidden lg:inline-flex items-end">
            <ul className="flex items-center w-[486.328px] h-[24px] shrink-0">
              <List name={"Product"} />
              <List name={"Solutions"} />
              <List name={"Enterprise"} />
              <List name={"Resources"} />
              <li className=" px-2  text-[#050038]  text-base not-italic font-normal leading-6">
                Pricing
              </li>
            </ul>
          </div>
        </div>

        <div
          className="block lg:hidden translate-x-2 delay-75 ease-in"
          onClick={handleClick}
        >
          {openMenu ? <CloseMenu /> : <HamburgerMenu />}
        </div>

        <ul className=" hidden lg:flex  gap-4 items-center  h-[50px] shrink-0]">
          <div className="inline-flex pr-[0.172px] items-start gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.6562 12C24.6562 18.6275 19.2837 24 12.6562 24C6.02884 24 0.65625 18.6275 0.65625 12C0.65625 5.37259 6.02884 0 12.6562 0C19.2837 0 24.6562 5.37259 24.6562 12ZM6.78002 14C6.69833 13.3448 6.65625 12.6773 6.65625 12C6.65625 11.3227 6.69834 10.6552 6.78005 10H2.85629C2.72512 10.6462 2.65625 11.3151 2.65625 12C2.65625 12.6849 2.72512 13.3537 2.85629 14H6.78002ZM7.1603 16H3.48834C4.66585 18.6951 6.99688 20.7707 9.85733 21.6031C8.61781 19.9536 7.6897 18.0568 7.1603 16ZM9.23601 16H16.0765C15.4185 18.2109 14.2291 20.1929 12.6562 21.798C11.0835 20.1929 9.89401 18.2109 9.23601 16ZM16.5145 14H8.79804C8.70461 13.3468 8.65625 12.679 8.65625 12C8.65625 11.321 8.70461 10.6532 8.79804 10H16.5145C16.6079 10.6532 16.6562 11.321 16.6562 12C16.6562 12.679 16.6079 13.3468 16.5145 14ZM18.5325 14C18.6141 13.3448 18.6562 12.6773 18.6562 12C18.6562 11.3227 18.6141 10.6552 18.5325 10H22.4563C22.5875 10.6462 22.6562 11.3151 22.6562 12C22.6562 12.6849 22.5875 13.3537 22.4563 14H18.5325ZM18.1523 16H21.8241C20.6467 18.6951 18.3156 20.7707 15.4552 21.6031C16.6947 19.9536 17.6228 18.0568 18.1523 16ZM12.6562 2.20204C11.0835 3.80704 9.89401 5.78908 9.23601 8H16.0765C15.4185 5.78908 14.2291 3.80704 12.6562 2.20204ZM15.4552 2.39697C16.6947 4.04639 17.6228 5.94316 18.1521 8H21.8241C20.6467 5.30497 18.3156 3.22927 15.4552 2.39697ZM3.48834 8H7.16033C7.68973 5.94316 8.61785 4.04639 9.85736 2.39697C6.99689 3.22927 4.66585 5.30497 3.48834 8Z"
                fill="#050038"
              />
            </svg>
            <h6 className="text-[#050038] text-center [font-family:Helvetica] text-base not-italic font-normal leading-6 uppercase">
              en
            </h6>
          </div>

          <h6 className="text-[#050038] [font-family:Inter] text-base not-italic font-normal leading-6">
            Contact Sales
          </h6>
          <h6 className="text-[#050038] [font-family:Inter] text-base not-italic font-normal leading-6">
            Login
          </h6>
          <div className="relative overflow-hidden group z-0 inline-flex items-start pl-[22px] pr-[22.766px] py-[17px] text-white  border [background:#4262FF] rounded-3xl border-solid border-[#4262FF] hover:text-gray-800">
            <h6 className="  [font-family:Helvetica] text-base not-italic font-normal leading-4">
              Sign up free →
            </h6>
            <div className="absolute inset-0 bg-white translate-x-full transition-all duration-300 -z-10 ease-in group-hover:translate-x-0" />
          </div>
        </ul>
      </div>

      {/* *************************************************************************** */}
      <div
        className={
          openMenu
            ? ` mx-auto  h-screen w-full z-10 absolute top-16
             `
            : "hidden"
        }
      >
        <div
          className="bg-red-500 flex flex-col gap-2 h-screen
         

             text-2xl 
             font-semibold 
             space-x-2 
             justify-center items-center "
        >
          <Link href={""} onClick={handleClick}>
            <p className="pb-2">Product</p>
          </Link>
          <Link href={""} onClick={handleClick}>
            <p className="py-2">Solutions</p>
          </Link>
          <Link href={""} onClick={handleClick}>
            <p className="py-2">Enterprise</p>
          </Link>
          <Link href={""} onClick={handleClick}>
            <p className="py-2">Resources</p>
          </Link>
          <Link href={""} onClick={handleClick}>
            {" "}
            <p className="py-2">Pricing</p>
          </Link>
          <p onClick={handleClick} className="p-y">
            Contact Sales
          </p>
          <p onClick={handleClick} className="p-y">
            Login
          </p>
          <div
            onClick={handleClick}
            className="relative overflow-hidden group z-0 inline-flex items-start pl-[22px] pr-[22.766px] py-[17px] text-white  border [background:#4262FF] rounded-3xl border-solid border-[#4262FF] hover:text-gray-800"
          >
            <h6 className="  text-white [font-family:Helvetica] text-base not-italic font-normal leading-4">
              Sign up free →
            </h6>
            <div className="absolute inset-0 bg-white translate-x-full transition-all duration-300 -z-10 ease-in group-hover:translate-x-0" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
