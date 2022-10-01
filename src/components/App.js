import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';

import axios from 'axios'


export default function App() {

  const api_key = process.env.REACT_APP_NEWS_API_KEY
  console.log(api_key)
  
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}


