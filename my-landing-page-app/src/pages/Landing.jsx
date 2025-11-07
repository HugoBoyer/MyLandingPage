import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import IntroductionFeatures from "../components/IntroductionFeatures";
import Testimonials from "../components/Testimonials";

export default function Home () {
    return (
        <>
            <section className="min-h-screen relative w-full bg-gradient-to-br from-white via-blue-100 to-blue-800">
                <div className="max-w-6xl mx-auto">
                    <Header />
                    <Hero />
                </div>
            </section>
            <section>
                <div className='max-w-6xl mx-auto'>
                    <IntroductionFeatures />
                    <Features />
                    <Testimonials />
                </div>
            </section>
        </>
    )
}