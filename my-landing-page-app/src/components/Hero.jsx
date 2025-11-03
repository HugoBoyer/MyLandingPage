import pngConverterMoney from '../assets/pngegg.png'

export default function Hero() {
    return (
        <section className="pl-35 pr-35 pt-40">
            <div className='flex'>
                <div className='w-1/2'>
                    <span className="uppercase text-[#7f7f7fff]">- Free 30 days trials</span>
                    <p className='w-[490px]'>
                        <h1 className="text-xl text-[72px] ">The best app conversion money</h1>
                    </p>    
                    <p>Here you can put a short description about your project</p>
                    <button className="bg-[#3164F4] rounded-md px-8 py-6 text-sm text-white">Get strated</button>    
                </div>
                <div  className='w-1/2 '>
                    <img src='https://assets.api.uizard.io/api/cdn/stream/b733eebc-b165-4038-af41-cdbd51d7aedd.png' />
                    <img src={pngConverterMoney} className='bg-center absolute top-40 rigth-20'/>
                </div>
            </div> 
            <div className='align-center text-center'>
                <span className='width-[40px]'>Trusted by individuals and team at the world's best companies</span>
               <div>
                    <span className='text-[30px]'>Logo</span>
                    <span className='text-[30px]'>Logo</span>
                    <span className='text-[30px]'>Logo</span>
                    <span className='text-[30px]'>Logo</span>
                    <span className='text-[30px]'>Logo</span>            
               </div>
            </div> 
        </section>
    )
}