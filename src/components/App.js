import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react'
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';



function App() {
  
  const [input, setInput] = useState('')
  const [faves, setFaves] = useState([])

  return (
    <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <Landing 
                setInput={setInput}
                faves={faves}
                setFaves={setFaves}
              />
            } 
          />
          <Route 
            path="/display" 
            element={
              <Display
                faves={faves}
                setFaves={setFaves} 
                input={input}
              />
            } 
          />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
