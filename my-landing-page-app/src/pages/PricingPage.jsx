import Footer from "../components/Footer";
import Header from "../components/Header";
import Pricing from "../components/Pricing";

export default function PricingPage() {


        return (
            <>
                <section className="relative bg-gradient-to-br from-white via-blue-100 to-blue-800">
                    <Header />
                </section>
                
                <main>
                    <Pricing />
                </main>

                <Footer /> 
            </>
        )
}