import React from "react";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="pt-12 pb-6 px-6 rounded-t-lg bg-[#081C03]">
        {/* footer items */}
      <div className="md:flex lg:flex mx-auto justify-between mb-20 w-full md:w-[90%] lg:w-[80%]">
        <div className="text-center md:text-start lg:text-start text-[#FFFFFF] mb-8 md:mb-0 lg:mb-0">
          <a href="" className="block">
            About us
          </a>
          <a href="" className="block my-2">
            Contact us
          </a>
          <a href="" className="block">
            How it works
          </a>
        </div>
        <div className="text-center md:text-start lg:text-start text-[#FFFFFF] mb-8 md:mb-0 lg:mb-0">
          <a href="" className="block">
            Complaints about a member
          </a>
          <a href="" className="block my-2">
            Secure contacts
          </a>
          <a href="" className="block">
            Terms of use
          </a>
        </div>
        <div className="text-center md:text-start lg:text-start text-[#FFFFFF] mb-8 md:mb-0 lg:mb-0">
          <a href="" className="block">
            Privacy notice
          </a>
          <a href="" className="block  my-2">
            Guaranteed T&Cs
          </a>
          <a href="" className="block">
            Sitemap
          </a>
        </div>
        <div className="text-center md:text-start lg:text-start text-[#FFFFFF]">
          <a href="" className="block">
            Post a job
          </a>
          <a href="" className="block  my-2">
            Trade sign up
          </a>
          <a href="" className="block">
            Find trades
          </a>
        </div>
      </div>
      {/* social link and logo */}
      <div className="text-[#FFFFFF] md:flex lg:flex md:justify-between lg:justify-between w-full md:w-[90%] lg:w-[80%] mx-auto mt-10 mb-5">
        <div className="flex w-full md:w-1/2 lg:w-1/2 justify-center md:justify-start lg:justify-start items-center">
          <p className="mr-6">Follow us</p>

          <a href="">
            <img
              src={facebook}
              alt="facebook"
              className="mr-2 h-10 border border-[#9DAA99] rounded-[50%] p-2"
            />
          </a>
          <a href="">
            <img
              src={instagram}
              alt="instagram"
              className="mr-2 h-10 border border-[#9DAA99] rounded-[50%] p-2"
            />
          </a>
        </div>
        <div className="w-full mt-5 md:w-1/2 lg:w-1/2">
          <img
            src={logo}
            alt="logo"
            className="md:float-right lg:float-right w-40 mx-auto"
          />
        </div>
      </div>
      {/* copyright */}
      <hr className="md:w-[90%] lg:w-[80%] mx-auto border-[#9DAA99]" />
      <p className="font-semibold text-[#FFFFFF] py-4">
        &copy; 2023 Findatrade Brittany - All rights reserved
      </p>
      <hr className="md:w-[90%] lg:w-[80%] mx-auto border-[#9DAA99] mb-5" />
      <small className="text-[#FFFFFF]">
        Web App Development by Lintech Group
      </small>
    </div>
  );
};

export default Footer;
