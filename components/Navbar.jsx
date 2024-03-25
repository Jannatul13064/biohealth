"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <header className="border-b font-[sans-serif]">
      <section className="py-2 bg-[#1d294f] text-white text-center px-10">
        <p className="text-sm">Summer sale: Save up to 40%</p>
      </section>
      <div className="flex flex-wrap items-start px-10 py-4 relative bg-white min-h-[60px]">
        <Link
          href="/"
          className="lg:hidden font-extrabold text-2xl text-cyan-400"
        >
          {/* <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36 cursor-pointer lg:hidden"
          /> */}
          Bio <span className="text-[#1d294f]">Health</span>
        </Link>
        <div className="flex ml-auto lg:order-1 lg:hidden">
          <button id="toggle" className="ml-7">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          id="collapseMenu"
          className="lg:!flex lg:items-center w-full max-lg:hidden max-lg:py-4"
        >
          <ul className="lg:flex lg:space-x-8 max-lg:space-y-2">
            <li className="max-lg:border-b max-lg:py-2">
              <Link href="/">
                <span className="hover:text-[#007bff] font-semibold text-[#007bff] block text-[15px] cursor-pointer">
                  Home
                </span>
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link href="/products">
                <span className="hover:text-[#007bff] font-semibold text-[#333] block text-[15px] cursor-pointer">
                  Products
                </span>
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link href="/contact">
                <span className="hover:text-[#007bff] font-semibold text-[#333] block text-[15px] cursor-pointer">
                  Contact
                </span>
              </Link>
            </li>
            <li className="text-[15px] max-lg:border-b max-lg:py-2">
              <Link href="/gallery">
                <span className="hover:text-[#007bff] font-semibold text-[#333] block text-[15px] cursor-pointer">
                  Gallery
                </span>
              </Link>
            </li>
          </ul>
          <div className="m-auto absolute lg:left-2/4 lg:-translate-x-1/2 max-lg:hidden">
            <Link
              href="/"
              className="cursor-pointer font-extrabold text-2xl text-cyan-400"
            >
              {/* <img
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                className="w-36 cursor-pointer"
              /> */}
              Bio <span className="text-[#1d294f]">Health</span>
            </Link>
          </div>
          <ul className="lg:flex lg:space-x-8 max-lg:space-y-2 ml-auto">
            <li className="max-lg:border-b max-lg:py-2">
              <Link href="/about">
                <span className="hover:text-[#007bff] font-semibold text-[#333] block text-[15px] cursor-pointer">
                  About
                </span>
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link href="/missionandvision">
                <span className="hover:text-[#007bff] font-semibold text-[#333] block text-[15px] cursor-pointer">
                  Mission
                </span>
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link href="/certification">
                <span className="hover:text-[#007bff] font-semibold text-[#333] block text-[15px] cursor-pointer">
                  Certification
                </span>
              </Link>
            </li>
            {/* <li className="text-[15px] max-lg:border-b max-lg:py-2">
              <Link href="/">
                <span className="hover:text-[#007bff] font-semibold text-[#333] block text-[15px] cursor-pointer">
                  Partner
                </span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
