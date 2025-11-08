import CommentaireList from "./CommentaireList"


export default function Testimonials ({comments}) {
    return (
        <>
            <h2 className='text-center mb-10 mt-30 font-semibold  text-2xl sm:text-3xl lg:text-5xl'>Testimonials</h2>   
            <p className="text-center">People love what we do and we want to let your know</p>
            <div className="">
                <div className=" bg-white rounded-xl shadow-md p-6 shadow">
                    <CommentaireList comments={comments}  layout="horizontal"/>
                </div>

            </div>
        </>
    )
}