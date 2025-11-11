import ConversionDevise from "../components/ConversionDevise";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ConversionApp ({comments , setComments}) {
    return (
        <>
            <section className="relative bg-gradient-to-br from-white via-blue-100 to-blue-800">
                <Header />
            </section>    

            <main>
                <ConversionDevise comments={comments} setComments={setComments}/>
            </main>

            <Footer />
        </>
    )
}