// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import CD from './pages/CD'
import MMA from './pages/MMA'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Optional Home page */}
        <Route path="/" element={<Home />} />

        {/* Pages with LEFT SIDE */}
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/CD" element={<CD />} />
        <Route path="/MMA" element={<MMA />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
