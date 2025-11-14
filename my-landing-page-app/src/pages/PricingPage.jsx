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
                    <div className='max-w-6xl mx-auto pt-15'>
                        <h2 className="lg:text-2xl font-semibold pb-10 pt-10">Compare features</h2>
                        <div className="flex"> 
                            {compareFeatures.map((compareFeature, index) => (
                                <div key={index} className=" w-1/3">
                                    <h2 className="lg:text-2xl font-semibold">{compareFeature.plan}</h2>
                                    <p className="border-b-1 mb-5 mt-5"></p>
                                    <ul className="">
                                        {compareFeature.features.map((feature, i) => (
                                            <li key={i} className="flex items-center p-2.5"><FaCircleCheck size={28} color="bg-[#3164F4]"/><span className="pl-5">{feature}</span></li>
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