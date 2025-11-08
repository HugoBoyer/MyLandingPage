import { useNavigate } from "react-router-dom"


export default function IntroductionFeatures() {
    const navigate = useNavigate()
    const logos = ["Adidas","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo"]

    return (
        <>
             {/* Logos */}
            <div className='text-center mt-10 px-4 sm:px-6 lg:px-8 marquee-container'>
                    <span cl='text-sm sm:text-base'>Trusted by individuals and team at the world's best companies</span>
                    <div className='flex justify-center gap-6 mt-6 marquee-track'>
                        {logos.map((logo, index) => (
                            <span key={index} className='text-lg sm:text-xl  text-[#7f7f7fff] pr-10'>{logo}</span>
                        ))}
                        {logos.map((logo, index) => (
                            <span key={index + "-2"} className='text-lg sm:text-xl  text-[#7f7f7fff] pr-10'>{logo}</span>
                        ))}          
                    </div>
            </div> 

             {/* Section principale */}
            <section className="bg-white rounded-xl mt-26 mb-15 p-6 lg:p-20 sm:p-30 flex flex-col lg:flex-row items-center relative shadow">
                <div className="lg:max-w-md">
                    <h2 className=" font-semibold  text-2xl sm:text-3xl lg:text-5xl leading-snug sm:leading-tight lg:leading-[55px] pb-5 sm:pb-5">Lorem ipsum dolor sit amet consectetur</h2>
                    <p className="text-base sm:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet.</p>
                    <button
                        onClick={() => navigate('/conversion-devise')}
                        className="mt-5 sm:mt-7 bg-[#3164F4] text-white p-25 py-2.5 px-4 sm:px-6 rounded-md hover:bg-blue-700 transition">Try for free</button>
                </div>
                <div className="relative w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end">
                    <img src="https://assets.api.uizard.io/api/cdn/stream/b1248553-6fb6-4670-8bef-7a02781703b7.png" className='lg:absolute lg:top-[-380px] lg:left-50 lg:h-[600px] max-w-none'/>
                </div>
            </section>  
        </>
        
    )
}