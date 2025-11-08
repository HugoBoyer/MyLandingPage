export default function Header() {
    return (
        <>
            <nav className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 backdrop-blur-sm ">
                <div className="max-w-6xl mx-auto">
                    <div className="relative flex h-28 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center pr-10 sm:pr-20">
                                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" class="h-8 w-auto" />
                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#" className="rounded-md px-3 py-2 text-sm  sm:text-base font-medium text-[#030303]  ">Home</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm  sm:text-base font-medium text-[#030303]  ">Pricing</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm  sm:text-base font-medium text-[#030303]  ">About us</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm  sm:text-base font-medium text-[#030303] ">Contact</a>                     
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-2">
                                <a href="#" className="rounded-md px-3 py-2 text-sm sm:text-base font-medium text-[#030303]">Log In</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm sm:text-base font-medium bg-[#3164F4] text-white">Sign up</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}