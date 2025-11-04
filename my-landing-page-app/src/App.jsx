import Header from './components/Header'
import Hero from './components/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConversionDevise from './components/ConversionDevise'

function App() {

  return (
    <BrowserRouter>
      <div className="bg-[rgb(237,237,237)]">
        <div className='
            max-w-full
            bg-cover
            bg-center
            h-screen
            '
          >
          <Header />
          <Routes>
            <Route path='/' element={<Hero />}></Route>
            <Route path='/conversion-devise' element={<ConversionDevise />}></Route>
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
