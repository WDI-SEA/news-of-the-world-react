import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Header from "./partials/Header"


console.log(process.env.REACT_APP_API_KEY)
function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
