'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdOutlinePhoneAndroid } from 'react-icons/md';

const HelpCenter = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                    <div className="text-left">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h1>
                        {/* <p className="text-lg ">We're here to help and answer any questions you might have.</p> */}
                    </div>
                    <hr className="my-8 mt-3 border-gray-300" />
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Information */}
                        <div className="lg:w-1/2">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-gray-50 p-2 rounded-full">
                                        <FaMapMarkerAlt className="text-[#075cab] text-base" />
                                    </div>
                                    <div className="ml-4">
                                        {/* <h3 className="text-lg font-medium text-gray-900">Our Office</h3> */}
                                        <p className="mt-0.5 ">
                                            Headquarters<br />
                                            Helix Private Limited<br />
                                            #878, 17th Cross, 9th B Main,<br />
                                            ISRO Layout, Bengaluru- 560078<br />
                                            Karnataka, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-gray-50 p-2 rounded-full">
                                        <FaMapMarkerAlt className="text-[#075cab] text-base" />
                                    </div>
                                    <div className="ml-4">
                                        {/* <h3 className="text-lg font-medium text-gray-900">Our Office</h3> */}
                                        <p className="mt-0.5 ">
                                            Manufacturing Unit<br />
                                            Helix Private Limited Factory,<br />
                                            #31, 3rd Floor, Prathibha Industrial Area,<br />
                                            Yelachenahalli, Bengaluru – 560078
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-gray-50 p-2 rounded-full">
                                        <FaEnvelope className="text-[#075cab] text-base" />
                                    </div>
                                    <div className="ml-4">
                                        {/* <h3 className="text-lg font-medium text-gray-900">Email Us</h3> */}
                                        <div className="mt-1 space-y-2">
                                            <a
                                                href="mailto:admin@bmebharat.com"
                                                className="block text-[#075cab] hover:text-blue-800 transition-colors"
                                            >
                                                marketing@helixindia.com
                                            </a>

                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-gray-50 p-2 rounded-full">
                                        <MdOutlinePhoneAndroid  className="text-[#075cab] text-base" />
                                    </div>
                                    <div className="ml-4">
                                        {/* <h3 className="text-lg font-medium text-gray-900">Call Us</h3> */}
                                        <a
                                            href="tel:+916363801839"
                                            className="mt-1 block text-[#075cab] hover:text-blue-800 transition-colors"
                                        >
                                            +91 6363801839
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-gray-50 p-2 rounded-full">
                                        <FaPhoneVolume className="text-[#075cab] text-base" />
                                    </div>
                                    <div className="ml-4">
                                        {/* <h3 className="text-lg font-medium text-gray-900">Call Us</h3> */}
                                        <a
                                            href="tel:080-26860692"
                                            className="mt-1 block text-[#075cab] hover:text-blue-800 transition-colors"
                                        >
                                            080-26860692
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="h-full w-full rounded-lg overflow-hidden shadow-md">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497815.37915461615!2d77.558483!3d12.895974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fe0f223539b%3A0x58286659f3a889f!2s878%2C%2017th%20Cross%20Rd%2C%20Prasanti%20Nagar%2C%20ISRO%20Layout%2C%20Bengaluru%2C%20Karnataka%20560062%2C%20India!5e0!3m2!1sen!2sus!4v1742874183396!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="min-h-[300px] lg:min-h-[350px]"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            onClick={() => router.back()}
                            className="custom-btn"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;