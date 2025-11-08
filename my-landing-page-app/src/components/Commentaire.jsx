import { useState } from "react"

export default function Commentaire() {
    const [comments, setComments] = useState(() => {
        const saved = localStorage.getItem("comments")
        return saved ? JSON.parse(saved) : []
    })
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
            date: new Date().toLocaleString()
        }
        setComments([newComment, ...comments])
        setName("")
        setRating(0)
        setText("")
    }
    

    return (
        <>
            <div className="bg-white p-10 rounded-lg">
                <h3 className="lg:text-3xl pb-5 text-center md:text-2xl sm:text-1xl">Commentaire</h3>
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
            <div className="mt-5 p-10 bg-white rounded-lg overflow-hidden ">
                <p className="text-center pb-10">Avis Recent</p>
                {comments.map(comment => 
                    <div key={comment.id} className="mb-10">                
                        
                        <div className="flex">
                            <img src={image} className="w-8 h-8 rounded-full"/>
                            <span className="pl-5">{comment.name}</span>           
                        </div>
                        <p>{"★".repeat(comment.rating)}{"☆".repeat(5 - comment.rating)}</p>
                        <i className="bg-">{comment.date}</i>
                        
                        <p className="wrap-anywhere">{comment.text}</p>
                    </div>
                )}
            </div>
        </>
    )
}