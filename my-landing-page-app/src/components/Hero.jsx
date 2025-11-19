import pngPortableMoney from '../assets/portableMoney.png'
import {useNavigate} from 'react-router-dom'
import { motion } from "framer-motion"

export default function Hero() {
    const navigate = useNavigate()

    return (
        <div className='w-full mx-auto max-w-6xl mt-[6vh] lg:mt-[8vh] px-3 lg:px-0 '>
            <div className='md:flex block gap-10 '>
                <motion.div className='lg:w-1/2 text-center' 
                    initial={{ opacity: 0, y: 20 }}           // animation slide-in depuis la droite
                    whileInView={{ opacity: 1, y: 0 }}           // Arrive en glissant quand visible
                    transition={{ duration: 0.8 }}
                >
                    <span className="uppercase text-[#7f7f7fff] text-sm sm:text-base">- Gratuit pendant 30 jours</span>
                    <h1 className="text-4xl md:text-6xl px-20 lg:px-0 lg:text-[72px] leading-tight font-bold lg:w-full md:w-full">Boost your productivity. Start using our app today.</h1>
                    <p className="mt-4 text-base">Rapide, simple et précis pour toutes vos transactions internationales.</p>
                    <div className='text-center'>
                        <motion.button
                                onClick={() => navigate('/conversion-devise')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white px-10 py-5 rounded-lg mx-10 mb-10 mt-2"
                        >
                            Essayer gratuitement
                        </motion.button>    
                    </div>
                </motion.div>
                <motion.div  className='w-1/2 ' initial={{ scale: 1.5 , opacity: 0}}
                                whileInView={{ scale: 1 , opacity: 1 }}            // Reviens à taille normale
                                transition={{ duration: 0.5 , opacity: 1 }} 
                                viewport={{ once: true , ease: "easeOut"}} >
                    <img loading="lazy"  src={pngPortableMoney} className='w-64 sm:w-80 lg:w-480 xl:w-480 relative z-10' alt="Portable Money" />
                </motion.div>
            </div>  
        </div>
    )
}