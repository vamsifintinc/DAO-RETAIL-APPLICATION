import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Register flows */}
        <Route path="/getstarted" element={<Register />} />
        <Route path="/cd" element={<Register />} />
        <Route path="/mma" element={<Register />} />

        {/* Optional: fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
