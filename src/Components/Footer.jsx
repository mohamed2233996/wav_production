import React from 'react'
import logo  from "../assets/Img/logo.png"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

function Footer() {

  return (


    <footer className="bg-[#0A142F]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center justify-center md:justify-normal">
              <img src={logo} className="w-48 md:w-full me-3" alt="wav.Logo" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-bold text-white uppercase">Learn More</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/About us" className="hover:underline">About us</a>
                </li>
                <li className="mb-4">
                  <a href="/Releases" className="hover:underline">
                  Press Releases
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/Environment" className="hover:underline">
                    Environment
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/join us" className="hover:underline">
                    work with us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/Privacy Policy" className="hover:underline">
                  Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/Contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-white uppercase">Privacy Policy</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/Terms of Use" className="hover:underline ">Terms of Use</a>
                </li>
                <li className='mb-4'>
                  <a href="/Cookie" className="hover:underline">Cookie Settings</a>
                </li>
                <li>
                  <a href="/Policy" className="hover:underline">Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-white uppercase">Contact Us</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <span>Office:</span>
                  <a href="tel:+201006695204"className="hover:underline">+201006695204</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-white uppercase">Social</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4 flex flex-row gap-4 items-center">
                  <a href="#" className="hover:underline text-2xl hover:text-[#29a49f]">
                    <AiFillFacebook />
                  </a>
                  <a href="#" className="hover:underline text-2xl hover:text-[#29a49f]">
                    <AiFillInstagram />
                  </a>
                  <a href="#" className="hover:underline text-2xl hover:text-[#29a49f]">
                    <AiFillTwitterCircle />
                  </a>
                  <a href="#" className="hover:underline text-2xl hover:text-[#29a49f]">
                    <AiFillYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="/" className="hover:underline">Could.wav</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>

  )
}

export default Footer;