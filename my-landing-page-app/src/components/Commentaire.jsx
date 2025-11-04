import { useState } from "react"

export default function Commentaire() {
    const [comments, setComments] = useState(() => {
        const saved = localStorage.getItem("comments")
        return saved ? JSON.parse(saved) : []
    })
    const [rating, setRating] = useState("0")
    const [name, setName] = useState("")
    const [text, setText] = useState("")


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
            <div className="bg-white">
                <h1>Commentaire</h1>
                <form onSubmit={handleSubmit}>
                    <label>Nom</label>
                    <input type="text" placeholder="Alexandre"  value={name} onChange={(e) => setName(e.target.value)}/>
                    
                    <div>
                        <label>Note </label>
                        {[1,2,3,4,5].map(star => 
                            <span key={star} onClick={rating}>★ </span>
                        )}
                    </div>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full border p-2 rounded" placeholder="Votre commentaire..."></textarea>
                    <button >Envoyer</button>
                </form>
            </div>
            <div className="mt-5 pt-5 bg-white">
                Avis Recent
                {comments.map(comment => 
                    <div key={comment.id} className="mb-10">
                        <p>{comment.rating}</p>
                        <p>{comment.name} <span>{comment.date}</span></p>
                        <p>{comment.text}</p>
                    </div>
                )}
            </div>
        </>
    )
}