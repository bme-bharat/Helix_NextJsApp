"use client";
import { useRouter } from 'next/navigation';
import "./About.css"

const About = () => {
    const router = useRouter();

    return (
        <>
            <div className="min-h-screen flex justify-center bg-gradient-to-b from-blue-100 to-blue-50">
                {/* Main Container with full width */}
                <div className="bg-white shadow-lg rounded-lg w-full px-8 lg:px-12 py-10">
                    <div className="text-start pl-4">
                        <h1 className="text-2xl font-bold text-blue-700 underline mt-5 transform transition-transform duration-300 group hover:scale-105 hover:z-10">
                            About Us
                        </h1>
                    </div>

                    <div className="fade-in flex w-full p-4 text-gray-700 bg-white rounded-lg leading-relaxed transform transition-transform duration-300 group hover:scale-105 hover:z-10 mt-10">
                        {/* Parent div for content and image */}
                        <div className="flex flex-col md:flex-row w-full">
                            {/* Content Div - 70% width */}
                            <div className="w-full md:w-6/12 text-base text-justify mb-4 md:mb-0">
                                <p>
                                    Helix Private Limited is based in Bengaluru, and well represented all over India with a strong team of distributors and partners.We have been serving the medical Industry with our products and services since 1994.
                                    We have the privilege of serving in the medical industry for nearly three decades, while offering quality medical products and being a reliable partner in their endeavour for excellence.We have worked as a vendor partner for test equipment with over 2000 hospitals, educational & research institutions, and OEMs all over India.Further we have assisted more than 50 customers all over India in setting up their own in-house biomedical testing and calibrating facility.
                                </p>
                                <br />
                                <strong>Our mission</strong> is to provide a comprehensive
                                resource hub for all things related to biomedical engineering,
                                from cutting-edge research to practical applications that impact
                                lives around the world.
                                <br />
                                <br />
                                <strong>Our vision</strong> is a world where biomedical
                                engineering breakthroughs revolutionize healthcare and contribute
                                to global well-being. Through our app, we aim to promote awareness
                                and understanding of this transformative field.
                                <br />
                            </div>

                            {/* Image Div */}
                            <div className="w-full md:w-6/12 flex justify-center items-center relative">
                                <img
                                    src={`/assets/images/tree.jpg`}
                                    alt="Biomedical Engineering"
                                    className="w-[80%] sm:w-[60%] md:w-[60%] lg:w-[40%] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <h1 className="mt-2 mb-7 text-center text-[#075CAB] font-bold text-lg sm:text-xl md:text-2xl px-2 flex items-center justify-between">
                        <span className="inline-block w-1/4 sm:w-1/5 md:w-1/4 border-t border-gray-300 mt-2 mr-5"></span>
                        <span className="inline-block w-1/4 sm:w-1/5 md:w-1/4 border-t border-gray-300 mt-2 ml-5"></span>
                    </h1>

                    {/* Grid Container */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 p-4 md:p-8">
                        {/* Left Slide-in Section */}
                        <section className="p-6 rounded-tl-[50px] rounded-br-[50px] border border-gray-200 group hover:scale-105 hover:z-10 bg-white transform transition-transform duration-300">
                            <h2 className="text-2xl font-semibold text-bme_blue mb-4 text-center md:text-left">
                                Why Choose BME Bharat App?
                            </h2>
                            <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                                BME Bharat app is your gateway to the fascinating realm of
                                biomedical engineering. Whether you are an aspiring biomedical
                                engineer, a medical healthcare professional, or just a curious
                                individual intrigued by the intersection of technology and
                                medicine, you've come to the right place. This app is tailored to
                                meet your needs. At BME Bharat we have developed an easy-to-use
                                mobile application where:
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>
                                    A BME can find an easier way of connecting to people in the
                                    biomedical industry.
                                </li>
                                <li>Buyers can select from a range of vendors & suppliers.</li>
                                <li>
                                    Manufacturers, service providers, dealers & distributors can
                                    list their products to reach a huge audience.
                                </li>
                                <li>
                                    BMEs & professionals will receive regular newsletters/articles
                                    from senior professionals, including doctors, professors, and
                                    HODs of biomedical institutes.
                                </li>
                                <li>You can share knowledge with a targeted audience.</li>
                                <li>
                                    You can ask doubts/questions and get answers from experienced
                                    professionals.
                                </li>
                            </ul>
                        </section>

                        {/* Right Slide-in Section */}
                        <section className="p-6 rounded-tl-[50px] rounded-br-[50px] border border-gray-200 group hover:scale-105 hover:z-10 bg-white transform transition-transform duration-300">
                            <h2 className="text-2xl font-semibold text-bme_blue mb-4 text-center md:text-left">
                                Industry Insights
                            </h2>
                            <p className="text-gray-700 mb-4">
                                <strong>Stay Updated:</strong> Stay updated with conferences,
                                workshops, industry events, and the latest trends in biomedical
                                engineering. Our app offers real-time news and expert insights
                                from leading professionals.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>Career Guidance:</strong> If you are considering a career
                                in biomedical engineering, let us guide you through educational
                                paths, job prospects, and skill requirements.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>Innovation Showcase:</strong> Discover groundbreaking
                                innovations and technological advancements in the healthcare
                                industry.
                            </p>
                            <p className="text-gray-700">
                                <strong>Networking Opportunities:</strong> Connect with
                                like-minded individuals, researchers, and professionals in the
                                biomedical engineering community.
                            </p>
                        </section>
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 mt-4">
                        {/* Vendor Directory */}
                        <section className="p-6 border rounded-lg transform transition-transform duration-300 group hover:scale-105 hover:z-5">
                            <h2 className="text-xl font-semibold text-bme_blue mb-4">
                                Vendor Directory
                            </h2>
                            <p className="text-base text-gray-700 leading-relaxed mb-4 text-justify">
                                <strong>"Discover Leading Biomedical Engineering Companies and
                                    Suppliers"</strong>
                                <br />
                                Welcome to the Vendor Directory in our biomedical engineering app,
                                where you can explore a curated list of top-notch companies and
                                suppliers in the field. Whether you're looking for cutting-edge
                                medical devices, quality lab equipment, or innovative biotechnology
                                solutions, our directory is your one-stop resource for finding
                                trusted partners.
                            </p>
                            <ul className="list-disc pl-5 text-gray-700">
                                <li className="mb-2">
                                    <strong>Browse Vendors:</strong> We've carefully selected a
                                    diverse array of companies, from established industry leaders to
                                    innovative startups, ensuring you have access to a wide range of
                                    products and services.
                                </li>
                                <li className="mb-2">
                                    <strong>Search and Filter:</strong> Our user-friendly interface
                                    allows you to search for specific vendors or products and apply
                                    filters to narrow down your options.
                                </li>
                                <li className="mb-2">
                                    <strong>Detailed Profiles:</strong> Each vendor listing includes
                                    detailed information about the company, its product offerings,
                                    and contact details, making it easy to connect and inquire.
                                </li>
                                <li className="mb-2">
                                    <strong>Benefits for Buyers:</strong> Access to a comprehensive
                                    list of verified vendors, product details, and contact options
                                    for hassle-free inquiries.
                                </li>
                                <li className="mb-2">
                                    <strong>Benefits for Companies:</strong> Expanded reach to a
                                    network of potential buyers, increased visibility, and a
                                    platform for real-time interactions with prospective clients.
                                </li>
                            </ul>
                        </section>

                        {/* Job Portal */}
                        <section className="p-6 rounded-lg transform transition-transform duration-300 group hover:scale-105 hover:z-5">
                            <h2 className="text-xl font-semibold text-bme_blue mb-4">
                                Job Portal
                            </h2>
                            <p className="text-base text-gray-700 leading-relaxed mb-4 text-justify">
                                <strong>
                                    Your Gateway to Exciting Career Opportunities in Biomedical
                                    Engineering:
                                </strong>
                                Welcome to the Job Portal in our biomedical engineering app, where
                                you can explore a vast database of job listings, ranging from
                                research positions and project management roles to quality
                                assurance and regulatory affairs in biomedical engineering.
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 mb-4">
                                <li className="mb-2">
                                    <strong>Search and Discover:</strong> Explore a vast database of
                                    job listings, ranging from research positions and project
                                    management roles to quality assurance and regulatory affairs in
                                    biomedical engineering.
                                </li>
                                <li className="mb-2">
                                    <strong>Detailed Listings:</strong> Each job listing provides
                                    comprehensive details about the position, including job
                                    responsibilities, qualifications required, and application
                                    deadlines.
                                </li>
                                <li className="mb-2">
                                    <strong>One-Click Application:</strong> Apply to your desired
                                    positions with a single click, making it convenient and
                                    straightforward to kickstart your career or take the next step.
                                </li>
                                <li className="mb-2">
                                    <strong>Wide Reach:</strong> When you post job updates on our
                                    platform, you gain access to a diverse and global community of
                                    biomedical engineers. Our users are not limited to a specific
                                    region or expertise, ensuring that your job listings reach a
                                    wide and qualified audience.
                                </li>
                                <li className="mb-2">
                                    <strong>Specialized Audience:</strong> Your job updates are seen
                                    by individuals who are specifically interested in and qualified
                                    for roles within the biomedical engineering sector, increasing
                                    the likelihood of connecting with the right candidates.
                                </li>
                                <li className="mb-2">
                                    <strong>User-Friendly Interface:</strong> Our user-friendly
                                    interface makes it easy for companies to post job updates
                                    quickly and efficiently. You can create and manage listings,
                                    track applicant responses, and communicate with potential hires
                                    seamlessly.
                                </li>
                            </ul>
                        </section>

                        {/* Forum */}
                        <section className="p-6 border rounded-lg transform transition-transform duration-300 group hover:scale-105 hover:z-5">
                            <h2 className="text-xl font-semibold text-bme_blue mb-4">Forum</h2>
                            <p className="text-base text-gray-700 leading-relaxed mb-4 text-justify">
                                Welcome to the Biomedical Engineering Forum, a dedicated space for
                                professionals, students, and enthusiasts in the biomedical
                                industry to connect, share knowledge, and support each other.
                                Whether you're a seasoned expert or just starting your journey in
                                biomedical engineering, this forum is the perfect place to ask
                                questions, share insights, and collaborate on innovative ideas.
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 mb-4">
                                <li className="mb-2">
                                    <strong>Ask and Answer:</strong> Post your questions and receive
                                    answers from a global community of professionals, researchers,
                                    and industry leaders.
                                </li>
                                <li className="mb-2">
                                    <strong>Share Knowledge:</strong> Share your expertise, advice,
                                    and experiences with others in the field of biomedical
                                    engineering.
                                </li>
                                <li className="mb-2">
                                    <strong>Collaborate:</strong> Discuss new technologies, ideas,
                                    research, and challenges facing the biomedical field.
                                </li>
                                <li className="mb-2">
                                    <strong>Networking:</strong> Build meaningful connections with
                                    other professionals in the biomedical engineering community.
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="flex w-full items-center justify-center my-4  ">
                        <button
                            className="custom-btn bg-white"
                            onClick={() => {
                                router.back()
                            }}
                        >
                            Back
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;
