import Footer from "../components/Footer";
import Header from "../components/Header";
import Pricing from "../components/Pricing";

export default function Prix() {
        const priceFeatures = [
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
                <section className="relative bg-gradient-to-br from-white via-blue-100 to-blue-800">
                    <Header />
                </section>
                
                <main>
                    <div className='max-w-6xl mx-auto'>
                        <h2>testteesettestse</h2>
                        <Pricing />
                        {priceFeatures.map((price, index) => (
                            <div key={index}>         
                                <span>{price.grade}</span>
                                <h1>{price.prix}/month</h1>
                                <p>{price.description}</p>
                                <button>Get started with {price.grade}</button>  
                            </div>
                        ))}
                    </div>          
                </main>

                <Footer /> 
            </>
        )
}