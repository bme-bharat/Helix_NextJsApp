'use client'

import Link from 'next/link';
import { FaInstagram, FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import { CiLinkedin, CiYoutube } from 'react-icons/ci';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';

const FooterHome = () => {
  const scrollToTop = () => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
    // });
  };

  return (
    <div className="bg-gray-800 text-white py-6  lg:py-3 text-center text-xs sm:text-sm">
      <div className="mx-auto flex flex-col md:flex-row justify-between">
        {/* first Section ✅ */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mx-auto">
          <div className="">
            <p className="text-white">
              Helix Private Limited &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

          <div className='hidden md:block'><IoStarSharp color='white' /></div>


          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center space-x-4  w-96 sm:w-auto mx-auto">
            <a href="https://www.facebook.com/HelixPrivateLimited/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaSquareFacebook color='white' size={24} />
            </a>
            <a href="https://www.instagram.com/helix.pvt.ltd/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaInstagram color='white' size={24} />
            </a>
            <a href="https://www.linkedin.com/company/helix-corporation?trk=biz-companies-cym" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <CiLinkedin color='white' size={24} />
            </a>
            <a href="https://x.com/Helix_Pvt_Ltd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaXTwitter color='white' size={24} />
            </a>
            <a href="https://www.youtube.com/@HelixPrivateLimited" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <CiYoutube color='white' size={24} />
            </a>
          </div>

          <div className='hidden md:block'><IoStarSharp color='white' /></div>


          {/* Links Section */}
          <div className="flex flex-wrap justify-center items-center space-x-2 mx-7 md:mx-0">
            <Link href="/about" className="text-white no-underline hover:underline" onClick={() => {
              scrollToTop()
            }} style={{ lineHeight: '1' }}>About</Link>
            <span className="text-white" style={{ lineHeight: '1' }}>|</span>
            {/* <Link href="/login" className="text-white no-underline hover:underline" onClick={() => {
              scrollToTop()
            }} style={{ lineHeight: '1' }}>Jobs</Link>
            <span className="text-white" style={{ lineHeight: '1' }}>|</span>
            <Link href="/login" className="text-white no-underline hover:underline" onClick={() => {
              scrollToTop()
            }} style={{ lineHeight: '1' }}>Companies</Link>
            <span className="text-white" style={{ lineHeight: '1' }}>|</span>
            <Link href="/login" className="text-white no-underline hover:underline" onClick={() => {
              scrollToTop()
            }} style={{ lineHeight: '1' }}>Forum</Link>
            <span className="text-white" style={{ lineHeight: '1' }}>|</span>
            <Link href="/login" className="text-white no-underline hover:underline" onClick={() => {
              scrollToTop()
            }} style={{ lineHeight: '1' }}>Products</Link>

            <span className="text-white" style={{ lineHeight: '1' }}>|</span>
            <Link href="/privacypolicy" className="text-white no-underline hover:underline" onClick={() => {
              scrollToTop()
            }} style={{ lineHeight: '1' }}>Privacy Policy</Link>
            <span className="text-white" style={{ lineHeight: '1' }}>|</span>

            <Link href="/termsandconditions" className="text-white no-underline hover:underline" onClick={() => {
              scrollToTop()
            }} style={{ lineHeight: '1' }}>Terms & Conditions</Link>
            <span className="text-white" style={{ lineHeight: '1' }}>|</span> */}

            <Link href="/contact-us" className="text-white no-underline hover:underline" onClick={() => {
              scrollToTop()
            }} style={{ lineHeight: '1' }}>Contact Us</Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default FooterHome;
