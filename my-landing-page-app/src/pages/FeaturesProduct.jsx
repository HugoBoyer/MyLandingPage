import ConversionDevise from "../components/ConversionDevise";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ConversionApp ({comments , setComments}) {
    return (
        <>
            <section className="relative bg-gradient-to-br from-white via-blue-100 to-blue-800">
                <Header />
            </section>    

            <main className="max-w-6xl mx-auto px-3 lg:px-0">
                <ConversionDevise comments={comments} setComments={setComments}/>
            </main>

            <Footer />
        </>
    )
}