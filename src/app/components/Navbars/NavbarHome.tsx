'use client'
import React, { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { GoX } from "react-icons/go";
import { usePathname, useRouter } from "next/navigation";
import Loader from "../Loader";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string>("");
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // scroll to top btn starts ✅
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    setActiveDropdown("");
    setIsOpen(false)
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown("");
        setIsOpen(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    setActiveDropdown("");
  };

  const isActive = (path: string) => {
    const pathname = usePathname();
    return pathname.startsWith(path);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+916363801839'.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return <div><Loader /></div>;
  }

  return (
    <><div className="bg-white shadow-md fixed mt-0 w-[100%] z-50">

      {/* Navigation bar */}
      <div className="flex items-center justify-between px-5 py-1 text-[#075CAB] border-b ">
        {/* Logo Section */}
        <div className="flex justify-between items-center ">
          <Link href="/" onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>

            <img
              src="/assets/images/Helix-logo.jpg"
              alt="Logo"
              onContextMenu={(e) => e.preventDefault()}
              className="transition-all duration-300 ease-in-out h-[60px]" />

          </Link>

        </div>

        {/* Desktop Navigation */}
        <div className="justify-center items-center gap-2 hidden lg:flex">
          <div className="lg:flex items-center justify-center gap-2">
            <button
              className={`flex items-center px-10 py-2 font-bold text-[#075CAB] md:px-4 md:py-2 hover:bg-gray-100 rounded-full ${isActive("/home") ? "bg-gray-100" : ""}`}
              onClick={() => { router.push('/'); window.scrollTo(0, 0); }}
            >
              Home
            </button>

            <button
              className={`flex items-center px-4 py-2 font-bold text-[#075CAB] md:px-4 md:py-2 hover:bg-gray-100 rounded-full ${isActive("/about") ? "bg-gray-100" : ""}`}
              onClick={() => { router.push('/about'); window.scrollTo(0, 0); }}
            >
              About
            </button>

            <button
              className={`flex items-center px-4 py-2 font-bold text-[#075CAB] md:px-4 md:py-2 hover:bg-gray-100 rounded-full ${isActive("/contact-us") ? "bg-gray-100" : ""}`}
              onClick={() => { router.push('/contact-us'); window.scrollTo(0, 0); }}
            >
              Enquiry
            </button>

            <button
              className={`flex items-center px-4 py-2 font-bold text-[#075CAB]  hover:bg-gray-100 rounded-full`}
              onClick={() => handleWhatsAppClick()}
            >
              <FaWhatsapp size={30} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? (
              <GoX size={10} />
            ) : (
              <IoMdMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg flex items-center justify-between px-6 py-3 sm:flex lg:hidden">
        <Link href="/login" className={`flex flex-col items-center ${isActive('/isActive') ? 'text-[#075CAB]' : ''}`}>
          <IoHome
            size={24}
            color={isActive('/isActive') ? '#075CAB' : 'black'}
          />
          <span className={` ${isActive('/isActive') ? 'text-[#075CAB] text-sm' : 'text-sm'}`}>Home</span>
        </Link>


        <Link href="/login" className={`flex flex-col items-center ${isActive('/isActive/jobs') ? 'text-[#075CAB]' : ''}`}>
          <IoBriefcase
            size={24}
            color={isActive('/isActive/jobs') ? 'fill-[#075CAB]' : ''}
          />
          <span className={` ${isActive('/isActive/jobs') ? 'text-[#075CAB] text-sm' : 'text-sm'}`}>Jobs</span>
        </Link>


        <Link href="/login" className={`flex flex-col items-center ${isActive('/isActive/forums') ? 'text-[#075CAB]' : ''}`}>
          <IoChatbubbles className={`h-6 w-6 ${isActive('/isActive/forums') ? 'fill-[#075CAB]' : ''}`} />
          <span className={` ${isActive('/isActive/forums') ? 'text-[#075CAB] text-sm' : 'text-sm'}`}>Forum</span>
        </Link>

        <Link href="/login" className={`flex flex-col items-center ${isActive('/isActive/product') ? 'text-[#075CAB]' : ''}`}>
          <HiShoppingBag className={`h-6 w-6 ${isActive('/isActive/product') ? 'fill-[#075CAB]' : ''}`} />
          <span className={` ${isActive('/isActive/product') ? 'text-[#075CAB] text-sm' : 'text-sm'}`}>Products</span>
        </Link>


        <Link href="/login" onMouseEnter={() => setActiveDropdown("profile")} className={`flex flex-col gap-y-0.5 items-center ${isActive('/isActive/profile') ? 'text-[#075CAB]' : ''}`}>
          <IoPerson style={{ fill: isActive('/isActive/profile') ? '#075CAB' : '' }} className="h-6 w-6" />
          <span className={`${isActive('/isActive/profile') ? 'text-[#075CAB] text-sm' : 'text-sm'}`}>Profile</span>
        </Link>

      </div> */}

      {isOpen && (
        <div ref={dropdownRef} className="flex justify-center items-center flex-col gap-6 my-2 ml-5">
          <button
            className={`flex items-center px-4 py-2 font-bold text-[#075CAB] md:px-8 md:py-4 hover:bg-gray-100 rounded ${isActive("/home") ? "bg-gray-100" : ""}`}
            onClick={() => { router.push('/home'); window.scrollTo(0, 0); }}
          >
            Home
          </button>

          <button
            className={`flex items-center px-4 py-2 font-bold text-[#075CAB] md:px-8 md:py-4 hover:bg-gray-100 rounded ${isActive("/about") ? "bg-gray-100" : ""}`}
            onClick={() => { router.push('/about'); window.scrollTo(0, 0); }}
          >
            About
          </button>
          <button
            className={`flex items-center px-4 py-2 font-bold text-[#075CAB] md:px-8 md:py-4 hover:bg-gray-100 rounded ${isActive("/contact-us") ? "bg-gray-100" : ""}`}
            onClick={() => { router.push('/contact-us'); window.scrollTo(0, 0); }}
          >
            Enquiry
          </button>

          <button
            className={`flex items-center px-4 py-2 font-bold text-[#075CAB] md:px-8 md:py-4 hover:bg-gray-100 rounded-full`}
          >
            <FaWhatsapp size={30} />
          </button>
        </div>
      )}
    </div><div className="pt-[70px] bg-bme_grey"></div></>
  );
};
