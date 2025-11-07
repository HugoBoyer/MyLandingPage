import Header from './components/Header'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConversionDevise from './components/ConversionDevise'

function App() {

  return (
    <section className='bg-gradient-to-br from-white via-blue-100 to-blue-800'>
      <BrowserRouter>
        <div className='max-w-6xl mx-auto'>
          <div className='
              max-w-full
              bg-cover
              bg-center
              h-screen
              '
            >
            <div className=''>
              <Header />
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
