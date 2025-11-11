import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ContactPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-white via-blue-100 to-blue-800">
                <Header />
            </section>

            <main className="max-w-6xl mx-auto">
                <div className="flex w-2/2">
                    <div className="w-1/2">    
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum dolor, sit amet</p>
                        <p>Lorem ipsum dolor, sit amet</p>
                        <form>
                            <div>
                                <label>Name</label>
                                <input type="text" placeholder="Full Name" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="text" placeholder="Email adress" />
                            </div>
                            <div>
                                <label>Message</label>
                                <input type="text" placeholder="Email adress" />
                            </div>
                            <button>Send Message</button>
                        </form>
                    </div>
                    <div className="w-1/2">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999!2d2.2922926!3d48.8583731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdfdfdfdfdf%3A0xabcdef123456!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1234567890"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}