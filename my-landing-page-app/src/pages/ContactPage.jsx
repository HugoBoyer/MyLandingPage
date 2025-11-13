import Footer from "../components/Footer";
import Header from "../components/Header";
import { TbMapPinFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa";
import { MdFax } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-white via-blue-100 to-blue-800">
                <Header />
            </section>

            <main className="max-w-6xl mx-auto">
                <div className="flex mt-15 mb-20 gap-15">
                    <div className="w-1/2">    
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum dolor, sit amet</p>
                        <p>Lorem ipsum dolor, sit amet</p>
                        <form>
                            <div>
                                <label className="block mb-5 mt-5">Name</label>
                                <input type="text" placeholder="Full Name" className="border-[#E5E7EB] border-2 border-solid rounded-lg  p-3 w-full"/>
                            </div>
                            <div>
                                <label className="block mb-5 mt-5">Email</label>
                                <input type="text" placeholder="Email adress" className="border-[#E5E7EB] border-2 border-solid rounded-lg  p-3 w-full"/>
                            </div>
                            <div>
                                <label className="block mb-5 mt-5">Message</label>
                                <input type="text" placeholder="Email adress" className="border-[#E5E7EB] border-2 border-solid rounded-lg  p-3 w-full" />
                            </div>
                            <button className="rounded-lg mt-10 mb-10 p-5 block bg-[#E5E7EB] w-full">Send Message</button>
                        </form>
                    </div>
                    <div className="w-1/2 h-auto grid grid-cols-2  text-center">
                        <div className="bg-[#E5E7EB] p-5 m-5">
                            <div className="flex justify-center items-center">
                                <TbMapPinFilled size={80} color="#3164F4" />
                            </div>
                            <h2 className=" uppercase font-bold pt-5">Our main office</h2>
                            <p className="lg:pt-5">Lorem ipset con 95 sectetur ad 101r</p>
                        </div>
                        <div className="bg-[#E5E7EB] p-5 m-5">
                            <div className="flex justify-center items-center">
                                <FaPhone size={80} color="#3164F4"/>
                            </div>
                            <h2 className=" uppercase font-bold pt-5">Phone Number</h2>
                            <p className="lg:pt-5">233-5465-5465</p>
                        </div>
                        <div className="bg-[#E5E7EB] p-5 m-5">
                            <div className="flex justify-center items-center">
                                <MdFax size={80} color="#3164F4"/>
                            </div>                       
                            <h2 className=" uppercase font-bold pt-5">Fax</h2>
                            <p className="lg:pt-5">123-132-5463-</p>
                        </div>
                        <div className="bg-[#E5E7EB] p-5 m-5 ">
                            <div className="flex justify-center items-center">
                                <AiOutlineMail size={80} color="#3164F4"/>
                            </div>
                            <h2 className=" uppercase font-bold pt-5">Email</h2>
                            <p className="lg:pt-5">lorem@landing.com</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}