import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ContactPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-white via-blue-100 to-blue-800">
                <Header />
            </section>
            <main>
                <div>Contact Us</div>
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
            </main>

            <Footer />
        </>
    )
}