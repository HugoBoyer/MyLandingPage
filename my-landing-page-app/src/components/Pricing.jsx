export default function Pricing() {
            const cardPrices = [
            {
                grade: "Basic",
                prix: "9",
                description: "Lorem ipsum dolor sit amet consectetursectetu"
            },
            {
                grade: "Pro",
                prix: "19",
                description: "Lorem ipsum dolor sit amet consectetur adipi" ,
                populaire: "Most popular"
            },
            {
                grade: "Busisness",
                prix: "99",
                description: "Lorem ipsum dolor sit amet consectetur adipi"    
            }
        ]
    return (
        <>
            <div className='max-w-6xl mx-auto '>
                <h1 className="text-center lg: text-4xl pt-10 pb-5 font-semibold">Pricing</h1>
                <p className="text-center pb-12">Lorem ipsum dolor sit amet consectetursectetuLorem ipsum dolor sit amet consectetursectetu</p>
                <div className="xl:flex lg:flex md:flex block overflow-visible relative gap-4">
                    {cardPrices.map((cardPrice, index) => (

                        <div key={index} className="xl:w-1/3 lg:w-1/3 md:w-1/3 w-full bg-white p-9 rounded-lg shadow relative transition-all duration-300  hover:scale-115 hover:z-20 hover:shadow-x">   
                            {cardPrice.populaire ? <span className="absolute right-10 bg-[#3164F4] text-white pl-5 pr-5 pb-1 pt-1 rounded-full font-semibold">Most popular</span> : ""}      
                            <span className="font-semibold lg:text-1xl  ">{cardPrice.grade}</span>
                            <div className="pt-2 flex "><p className="font-semibold">$</p><span className="text-6xl font-semibold">{cardPrice.prix}</span><span className="block flex items-end">/month</span></div>
                            <p className="pt-5 pb-10">{cardPrice.description}</p>
                            <button className={cardPrice.grade === "Pro" ? "bg-[#3164F4] lg: border w-full p-2 rounded-lg text-white font-semibold" : "lg: border w-full p-2 rounded-lg font-semibold"}>Get started with {cardPrice.grade}</button>
                        </div>
                    ))}
                </div>
            </div>  
        </>
    )
}