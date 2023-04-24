import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'

function App() {
  const [headerSticky, setHeaderSticky] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', (event) => {
      if(window.pageYOffset > 0){
        setHeaderSticky(true);
      } else {
        setHeaderSticky(false);
      }
    })
  },[])

  return (
    <div className='app-container' >
      <Routes>
        <Route path='/' element={<Home headerSticky={headerSticky} />} />
      </Routes>
    </div>
  )
}

export default App
