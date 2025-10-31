import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='
          bg-[url("../assets/moneybackground.png")]
          max-w-full
          bg-cover
          bg-center
          h-screen
          '
          style={{clipPath: 'ellipse(60% 70% at 70% 40%)'}}
        >
        <Navbar />
      </div>
      <div>
        test
      </div>
    </>
  )
}

export default App
