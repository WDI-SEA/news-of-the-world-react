import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
