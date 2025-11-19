import ConversionDevise from "../components/ConversionDevise";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ConversionApp ({comments , setComments}) {
    return (
        <>
            <Header />
    

            <main className="max-w-6xl mx-auto px-3 lg:px-0">
                <h1 className="text-5xl text-center pb-15 pt-15">Tester notre produit</h1>
                <ConversionDevise comments={comments} setComments={setComments}/>
            </main>

            <Footer />
        </>
    )
}