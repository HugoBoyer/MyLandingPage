import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import FeaturesProduct from './pages/FeaturesProduct'
import { useEffect, useState } from 'react';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/Prix';
import Prix from './pages/Prix';

function App() {
    const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem("comments")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments))
  }, [comments])

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
                <Route path='/' element={<Landing comments={comments} setComments={setComments}/>}></Route>
                <Route path='/conversion-devise' element={<FeaturesProduct comments={comments} setComments={setComments} />}></Route>
                <Route path='/prix' element={<Prix />} ></Route>
                <Route path='/contact' element={<ContactPage />} ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </section>
  )
}

export default App
