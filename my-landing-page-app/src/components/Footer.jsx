import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import {motion} from "framer-motion"

export default function Footer () {

    return (
        <footer className="bg-[#3164F4] text-gray-300 py-10 mt-20 md:text-start text-center">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-3 lg:px-0">
                <div>
                    <h3 className="text-lg font-semibold mb-3">À propos</h3>
                    <p>Tester notre produit</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Liens utiles</h3>
                    <ul>
                        <li><a href="#" className="hover:text-white">Accueil</a></li>
                        <li><a href="#" className="hover:text-white">Services</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Suivez-nous</h3>
                    <div className="flex space-x-4 justify-center md:justify-start" >
                        <motion.a href="#" whileHover={{ scale: 1.2, color: "#3B82F6" }}><FaXTwitter /></motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2, color: "#3B82F6" }}><FaInstagramSquare /></motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2, color: "#3B82F6" }}><FaFacebookSquare /></motion.a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                &copy; 2025 MonSite. Tous droits réservés.
            </div>
        </footer>
    )
}