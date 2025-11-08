import ConversionDevise from "../components/ConversionDevise";
import Header from "../components/Header";

export default function ConversionApp ({comments , setComments}) {
    return (
        <>
            <section className="relative bg-gradient-to-br from-white via-blue-100 to-blue-800">
                <div className="max-w-6xl mx-auto">
                    <Header />
                </div>

            </section>                
            <section>
                <ConversionDevise comments={comments} setComments={setComments}/>
            </section>
        </>
    )
}