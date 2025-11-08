import CommentaireList from "./CommentaireList"


export default function Testimonials ({comments}) {
    return (
        <>
            <div className="w-3/3">
                    <h2 className='text-center mb-10 mt-30 font-semibold  text-2xl sm:text-3xl lg:text-5xl'>Testimonials</h2>   
                <p className="text-center">People love what we do and we want to let your know</p>
                <div className=" rounded-xl p-6">
                    <CommentaireList comments={comments}  layout="horizontal"/>
                </div>
            </div>
        </>
    )
}