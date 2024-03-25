import React from "react";

const Footer = () => {
  return (
    <footer className="font-sans bg-[#213343] py-8 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-[#FFA726] font-bold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Our Story
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Newsroom
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Careers
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Blog
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#FFA726] font-bold text-lg mb-5">Services</h4>
          <ul className="space-y-4">
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Web Development
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Testing Automation
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                AWS Development Services
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Mobile App Development
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#FFA726] font-bold text-lg mb-5">Platforms</h4>
          <ul className="space-y-4">
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Hubspot
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Marketo Integration Services
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Marketing Glossary
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                UIPath
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#FFA726] font-bold text-lg mb-5">Company</h4>
          <ul className="space-y-4">
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Accessibility
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                About
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Contact
              </span>
            </li>
            <li>
              <span className="hover:text-[#FFA726] text-gray-300 text-[15px] font-semibold transition-all">
                Learn more
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
        <p className="text-gray-300 text-[15px] font-semibold">
          Copyright © 2024
          <span className="hover:underline mx-1">Bio Health</span>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
