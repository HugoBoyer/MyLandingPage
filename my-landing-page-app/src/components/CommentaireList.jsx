export default function CommentaireList({comments, layout = "vertical" }) {
      if (comments.length === 0) {
    return <p className="text-center text-gray-500">Aucun commentaire pour le moment.</p>
  }
    return (
        <div className={layout === "horizontal" ? " flex gap-4 overflow-x-auto py-4 " : "flex flex-col gap-4"}>
                {comments.map(comment => 
                    <div key={comment.id} className={
            layout === "horizontal"
              ? "w-80 h-80 lg:w-1/3 bg-white items-start p-4  rounded-lg shadow flex-shrink-0"
              : "bg-white p-4 rounded-lg shadow"
          }>                
                        
                        <div className="flex">
                            <img src={comment.image} className="w-8 h-8 rounded-full"/>
                            <span className="pl-5">{comment.name}</span>           
                        </div>
                        <p>{"★".repeat(comment.rating)}{"☆".repeat(5 - comment.rating)}</p>
                        <small  className="bg-">{comment.date}</small>
                        
                        <p className="wrap-anywhere ">{comment.text}</p>
                    </div>
                )}
        </div>
    )
}