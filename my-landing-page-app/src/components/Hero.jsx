import pngConverterMoney from '../assets/pngegg.png'
import pngPortableMoney from '../assets/portableMoney.png'
import {useNavigate} from 'react-router-dom'
import IntroductionFeatures from './IntroductionFeatures'
import Features from './Features'
import Header from './Header'
import Testimonials from './Testimonials'


export default function Hero() {
    const navigate = useNavigate()

    return (
        <>
            <section className="min-h-screen relative w-full bg-gradient-to-br from-white via-blue-100 to-blue-800">
                <div className="max-w-6xl mx-auto">
                    <Header />
                    <div className='flex'>
                        <div className='w-1/2'>
                            <span className="uppercase text-[#7f7f7fff]">- Gratuit pendant 30 jours</span>
                            <h1 className="text-xl text-[72px] pb-5 leading-[80px]">Boost your productivity. Start using our app today.</h1>
                            <p>Rapide, simple et précis pour toutes vos transactions internationales.</p>
                            <div className=' text-center'>
                                <button
                                    onClick={() => navigate('/conversion-devise')}
                                    className="bg-[#3164F4] rounded-md px-4 py-4 text-white mt-15 px-6 py-3  hover:bg-blue-700 font-semibold rounded-xl shadow-lg transition">
                                    Essayer gratuitement
                                </button>    
                            </div>
                        </div>
                        <div  className='w-1/2 '>
                            <img src={pngPortableMoney} className='w-240'/>
                            <img src={pngConverterMoney} className='bg-center absolute top-150 right-160 h-20'/>
                        </div>
                    </div>  
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