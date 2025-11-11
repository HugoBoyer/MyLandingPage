import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer () {

    return (
        <footer class="bg-blue-900 text-gray-300 py-10 mt-20">
            <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-lg font-semibold mb-3">À propos</h3>
                    <p>Tester notre produit</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-3">Liens utiles</h3>
                    <ul>
                        <li><a href="#" class="hover:text-white">Accueil</a></li>
                        <li><a href="#" class="hover:text-white">Services</a></li>
                        <li><a href="#" class="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-3">Suivez-nous</h3>
                    <div class="flex space-x-4">
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaInstagramSquare /></a>
                        <a href="#"><FaFacebookSquare /></a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                &copy; 2025 MonSite. Tous droits réservés.
            </div>
        </footer>
    )
}