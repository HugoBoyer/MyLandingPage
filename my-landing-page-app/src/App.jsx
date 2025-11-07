import Hero from './components/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConversionDevise from './components/ConversionDevise'
import Landing from './pages/Landing'
import FeaturesProduct from './pages/FeaturesProduct'

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
                <Route path='/' element={<Landing />}></Route>
                <Route path='/conversion-devise' element={<FeaturesProduct />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </section>
  )
}

export default App
