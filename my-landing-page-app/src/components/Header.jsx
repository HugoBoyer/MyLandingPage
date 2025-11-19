import { useState } from "react";
import { Link } from "react-router-dom"
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion"


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md px-3 lg:px-0">
            <nav className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10  ">
                <div className="max-w-6xl mx-auto">
                    <div className="relative flex md:h-17 h-15 items-center justify-between">
                        <div className="flex md:flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className=" flex items-center md:hidden">
                                <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                                </button>
                            </div>
                            <div className="flex shrink-0 items-center pr-10 sm:pr-20">
                                <motion.img whileInView={{ rotate: 360 }}transition={{ duration: 1.2, ease: "easeOut"}} viewport={{ once: true }} src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="icon-logo h-8 w-auto" />
                            </div>
                            {/* Desktop links */}
                                <div className="flex space-x-4 hidden md:block">
                                    <Link to={"/"} className="rounded-md px-3 py-2 text-sm md:text-[13px]  sm:text-base font-medium text-[#030303] relative group">
                                        Home  
                                        <span className="absolute left-1/2  -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#171819] transition-all duration-300 group-hover:w-[70%]"></span>
                                    </Link>
                                    <Link to={"/price"} className="md:text-[13px] rounded-md px-3 py-2 text-sm  sm:text-base font-medium text-[#030303]  group relative">
                                        Pricing
                                        <span className="absolute left-1/2  -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#171819] transition-all duration-300 group-hover:w-[70%]"></span>
                                    </Link>
                                    <Link to={"/contact"} className="md:text-[13px] rounded-md px-3 py-2 text-sm  sm:text-base font-medium text-[#030303] group relative">
                                        Contact
                                        <span className="absolute left-1/2  -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#171819] transition-all duration-300 group-hover:w-[70%]"></span>
                                    </Link>                     
                                </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-2">
                                <Link to="/login" className="rounded-md px-3 py-2 text-sm sm:text-base font-medium text-[#030303] md:text-[13px]">Log In</Link>
                                <Link to="/signup" className="rounded-md px-3 py-2 text-sm sm:text-base font-medium bg-[#3164F4] text-white md:text-[13px]">Sign up</Link>
                        </div>
                    </div>
                </div>
                    {/* Mobile menu */}
                    {isOpen && (
                        <div className="flex flex-col space-x-4 md:hidden bg-white">
                            <Link to={"/"} onClick={() => setIsOpen(false)} className="w-full hover:bg-blue-600 hover:text-white px-3 py-2 text-sm  sm:text-base font-medium text-[#030303]  ">Home</Link>
                            <Link to={"/price"} onClick={() => setIsOpen(false)} className="w-full hover:bg-blue-600 hover:text-white px-3 py-2 text-sm  sm:text-base font-medium text-[#030303]  ">Pricing</Link>
                            <Link to={"/contact"} onClick={() => setIsOpen(false)} className="w-full hover:bg-blue-600 hover:text-white px-3 py-2 text-sm  sm:text-base font-medium text-[#030303] ">Contact</Link>                     
                        </div>
                    )
                }
            </nav>

        </header>
    )
}