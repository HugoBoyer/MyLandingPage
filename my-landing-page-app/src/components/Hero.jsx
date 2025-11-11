import pngConverterMoney from '../assets/pngegg.png'
import pngPortableMoney from '../assets/portableMoney.png'
import {useNavigate} from 'react-router-dom'


export default function Hero() {
    const navigate = useNavigate()

    return (
        <>
            <div className='flex  mt-20 lg:mt-[8vh] sm:px-6 max-w-6xl mx-auto gap-10 '>
                <div className='w-full lg:w-1/2'>
                    <span className="uppercase text-[#7f7f7fff] text-sm sm:text-base">- Gratuit pendant 30 jours</span>
                    <h1 className="text-3xl  sm:text-5xl lg:text-[72px] leading-snug sm:leading-tight lg:leading-[80px] font-bold">Boost your productivity. Start using our app today.</h1>
                    <p className="mt-4 text-base">Rapide, simple et précis pour toutes vos transactions internationales.</p>
                    <div className='text-center'>
                        <button
                            onClick={() => navigate('/conversion-devise')}
                            className="bg-[#3164F4] rounded-md px-4 sm:px-8 py-4 sm:py-6 text-white mt-[6vh] px-6 py-3  hover:bg-blue-700 font-semibold rounded-xl shadow-lg transition">
                            Essayer gratuitement
                        </button>    
                    </div>
                </div>
                <div  className='w-1/2 '>
                    <img src={pngPortableMoney} className=' w-64 sm:w-80 lg:w-480 relative z-10' alt="Portable Money"/>
                </div>
            </div>  
        </>
    )
}