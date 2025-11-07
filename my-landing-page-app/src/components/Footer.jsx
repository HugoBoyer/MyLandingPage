export default function Footer () {
    return (
        <>
            <footer className="bg-gray-800 text-gray-300 text-center py-4">
                <p className="text-sm">
                    © {new Date().getFullYear()} MonSite. Tous droits réservés.
                </p>
            </footer>
        </>
    )
}