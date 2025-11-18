import { useState } from "react"

export default function Commentaire({comments, setComments}) {
    const [rating, setRating] = useState("0")
    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [image, setImage] = useState("null")

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if(!file) return

        const reader = new FileReader()
        reader.onloadend = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            id: Date.now(),
            name,
            rating,
            text,
            image,
            date: new Date().toLocaleString()
        }
        setComments([newComment, ...comments])
        setName("")
        setRating(0)
        setText("")
        setImage(null)
    }


    return (
        <>
            <div className="bg-white rounded-lg">
                <h3 className="lg:text-3xl pb-5 text-center md:pt-0 p-20 md:text-2xl text-2xl">Commentaire</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="file" onChange={handleFileChange} accept="image/*"/>
                    </div>
                    <label>Nom</label>
                    <input  type="text" placeholder="Alexandre"  value={name} onChange={(e) => setName(e.target.value)}/>
                    
                    <div>
                        <label>Note </label>
                        {[1,2,3,4,5].map(star => 
                            <span key={star} onClick={() => setRating(star)} className={`cursor-pointer text-2xl ${
                star <= rating ? "text-yellow-500" : "text-gray-400"
              }`}>★ </span>
                        )}
                    </div>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full border p-2 rounded" placeholder="Votre commentaire..."></textarea>
                    <button >Envoyer</button>
                </form>
            </div>
        </>
    )
}