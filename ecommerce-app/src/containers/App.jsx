import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'

function App() {

  return (
    <div className='app-container' >
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
