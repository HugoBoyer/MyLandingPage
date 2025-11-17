export default function Formulaire() {
    return (
        <>
            <form>
                <div>
                    <label className="block mb-5 mt-5">Name</label>
                    <input type="text" placeholder="Full Name" className="border-[#E5E7EB] border-2 border-solid rounded-lg  p-3 w-full"/>
                </div>
                <div>
                    <label className="block mb-5 mt-5">Email</label>
                    <input type="text" placeholder="Email adress" className="border-[#E5E7EB] border-2 border-solid rounded-lg  p-3 w-full"/>
                </div>
                <div>
                    <label className="block mb-5 mt-5">Message</label>
                    <input type="text" placeholder="Email adress" className="border-[#E5E7EB] border-2 border-solid rounded-lg  p-3 w-full" />
                </div>
                <button className="rounded-lg mt-10 mb-10 p-5 block bg-[#E5E7EB] w-full">Send Message</button>
            </form>
        </>
    )
}