import pngConverterMoney from '../assets/pngegg.png'
import {useNavigate} from 'react-router-dom'
import IntroductionFeatures from './IntroductionFeatures'


export default function Hero() {
    const navigate = useNavigate()

    return (
        <>
            <section className="pt-40">
                <div className='flex'>
                    <div className='w-1/2'>
                        <span className="uppercase text-[#7f7f7fff]">- Gratuit pendant 30 jours</span>
                        <h1 className="text-xl text-[72px] pb-5 leading-[80px]">Boost your productivity. Start using our app today.</h1>
                        <p>Rapide, simple et précis pour toutes vos transactions internationales.</p>
                        <div className=' text-center'>
                            <button
                                onClick={() => navigate('/conversion-devise')}
                                className="bg-[#3164F4] rounded-md px-4 py-4 text-white mt-15">
                                Essayer gratuitement
                            </button>    
                        </div>
                    </div>
                    <div  className='w-1/2 '>
                        <img src='https://assets.api.uizard.io/api/cdn/stream/b733eebc-b165-4038-af41-cdbd51d7aedd.png' />
                        <img src={pngConverterMoney} className='bg-center absolute top-40 rigth-20'/>
                    </div>
                </div> 
                <div className='align-center text-center'>
                    <span className='width-[40px] '>Trusted by individuals and team at the world's best companies</span>
                <div className='pt-10'>
                        <span className='text-[30px] text-[#7f7f7fff] pr-10'>Logo</span>
                        <span className='text-[30px] text-[#7f7f7fff] pr-10'>Logo</span>
                        <span className='text-[30px] text-[#7f7f7fff] pr-10'>Logo</span>
                        <span className='text-[30px] text-[#7f7f7fff] pr-10'>Logo</span>
                        <span className='text-[30px] text-[#7f7f7fff] pr-10'>Logo</span>            
                </div>
                </div> 
            </section>
            <section>
                <IntroductionFeatures />
            </section>
        </>
    )
}