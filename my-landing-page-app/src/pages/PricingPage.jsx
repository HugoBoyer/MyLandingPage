import Footer from "../components/Footer";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import { FaCircleCheck } from "react-icons/fa6";

export default function PricingPage() {
    const compareFeatures = [
    {
        plan: "Basic",
        features: [
        "Process Analysis",
        "Task Management",
        "Time Tracking",
        "Performance Metrics",
        "Customizable Reports",
        "Email Integration"
        ]
    },
    {
        plan: "Pro",
        features: [
        "Process Analysis",
        "Task Management",
        "Time Tracking",
        "Performance Metrics",
        "Customizable Reports",
        "Email Integration",
        "Real-time Collaboration",
        "Automated Workflows"
        ]
    },
    {
        plan: "Business",
        features: [
        "Process Analysis",
        "Task Management",
        "Time Tracking",
        "Performance Metrics",
        "Customizable Reports",
        "Email Integration",
        "Real-time Collaboration",
        "Automated Workflows",
        "Analytics Dashboard",
        "SLA Management"
        ]
    }
];

        return (
            <>
                <section className="relative bg-gradient-to-br from-white via-blue-100 to-blue-800">
                    <Header />
                </section>
                
                <main>
                    <Pricing />
                    <div className='mx-auto w-full max-w-6xl pt-[3.75rem]'>
                        <h2 className="lg:text-2xl font-semibold pb-10 pt-10">Compare features</h2>
                        <div className="md:flex block"> 
                            {compareFeatures.map((compareFeature, index) => (
                                <div key={index} className="md:w-1/3 w-full">
                                    <h2 className="lg:text-2xl font-semibold text-center">{compareFeature.plan}</h2>
                                    <p className="border-b-1 mb-5 mt-5"></p>
                                    <ul className="flex flex-col items-center space-y-3">
                                        {compareFeature.features.map((feature, i) => (
                                            <li key={i} className="flex items-center w-full max-w-xs">
                                                <div className="">
                                                    <FaCircleCheck size={28} color="bg-[#3164F4]"/>
                                                </div>
                                                <span className="pl-5">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                ))} 
                        </div>
                    </div>
                </main>

                <Footer /> 
            </>
        )
}