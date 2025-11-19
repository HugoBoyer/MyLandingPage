import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import IntroductionFeatures from "../components/IntroductionFeatures";
import LogoMarque from "../components/LogoMarque";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import VideoFeatures from "../components/VideoFeatures";

export default function Home ({comments, layout="horizontal"}) {
  
    const featuresData = [
        {
            videos: ["https://www.youtube.com/embed/VIDEO_ID1"], 
            description:"Description de la premiere carte."
        },
        {
            videos: ["https://www.youtube.com/embed/VIDEO_ID3"],
            description: "Description de la deuxième carte."
        },
        {
            videos: ["https://www.youtube.com/embed/VIDEO_ID5"],
            description: "Description de la troisième carte."
        }
    ]


    return (
        
        <>
            <section className="min-h-screen  relative w-full bg-gradient-to-br from-white via-blue-100 to-blue-800">
                    <Header />
                    <Hero />
            </section>
            
            <main>
                <LogoMarque />
                <div className='w-full mx-auto max-w-6xl px-3 lg:px-0'>
                    <IntroductionFeatures />
                    
                    <h2 className='text-center mb-10 mt-40 font-semibold  text-2xl sm:text-3xl lg:text-5xl'>Tests Video</h2>   
                    <div className="lg:flex md:flex block gap-10 pb-10 w-full">                        
                        {featuresData.map((feature, index) => (
                            <VideoFeatures key={index} videos={feature.videos} description={feature.description}/>
                        ))}
                    </div>
                    
                    <Testimonials comments={comments} layout={layout}/>
                    <Pricing />
                </div>
            </main>

            <Footer />
        </>
    )
}