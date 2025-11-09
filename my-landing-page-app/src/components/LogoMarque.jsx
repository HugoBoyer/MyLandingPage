import { useEffect, useRef } from "react";

export default function LogoMarque() {
    const baseLogos = ["Adidas","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo","Logo"]
    const logos = [...baseLogos, ...baseLogos];
    const trackRef = useRef(null);

    
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const trackWidth = track.scrollWidth / 2; // largeur de la première moitié
        setTimeout(() => {
        track.style.setProperty('--marquee-translate', `-${trackWidth}px`);
        }, 50);
    }, []);


    return (
        <>
            {/* Logos */}
            <div className='text-center mt-10 px-4 sm:px-6 lg:px-8 marquee-container'>
                <span   className='text-sm sm:text-base'>Trusted by individuals and team at the world's best companies</span>
                <div ref={trackRef} style={{ '--marquee-translate': '0px' }}  className='flex gap-6 mt-6 marquee-track'>
                    {logos.map((logo, index) => (
                        <span key={index} className='text-lg sm:text-xl  text-[#7f7f7fff] pr-10 marquee-item  marquee-item'>{logo}</span>
                    ))}         
                </div>
            </div> 
        </>
    )
}