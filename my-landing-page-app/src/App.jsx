import Hero from './components/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConversionDevise from './components/ConversionDevise'

function App() {

  return (
    <section >
      <BrowserRouter>
        <div >
          <div className='
              max-w-full
              bg-cover
              bg-center
              h-screen
              '
            >
            <div>
              <Routes>
                <Route path='/' element={<Hero />}></Route>
                <Route path='/conversion-devise' element={<ConversionDevise />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </section>
  )
}

export default App
