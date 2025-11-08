export default function VideoFeatures ({videos = [], description}) {
    return (
        <>
            
                {videos.map((video, index) => (
                        <div key={index} class="bg-white rounded-xl shadow-md overflow-hidden p-6 w-full sm:w-80 md:w-96 lg:w-[25rem]">
                            <div class="relative pb-[56.25%] h-0 overflow-hidden">
                                <iframe class="absolute top-0 left-0 w-full h-full" src={video} frameborder="0" allowfullscreen></iframe>
                            </div>
                            <p class="text-gray-700 text-base pt-5 pb-5">{description}</p>
                        </div>     
                ))}                           
        </>
    )
}