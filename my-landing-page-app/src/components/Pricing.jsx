export default function Pricing() {
            const cardPrices = [
            {
                grade: "Basic",
                prix: "9",
                description: "Lorem ipsum dolor sit amet consectetur"
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
                <h1>Pricing</h1>
                <p>Our pricing is not expensive </p>
                <div className="flex">
                    {cardPrices.map((cardPrice, index) => (

                        <div key={index} className="w-1/3 bg-white p-4 rounded-lg shadow">         
                            <span>{cardPrice.grade}</span>
                            <h2>{cardPrice.prix}/month</h2>
                            <p>{cardPrice.description}</p>
                            <button>Get started with {cardPrice.grade}</button>  
                        </div>
                    ))}
                </div>
            </div>  
        </>
    )
}