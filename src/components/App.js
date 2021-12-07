import { Routes, Route } from 'react-router-dom';
import '../App.css';
import { useParams } from 'react-router-dom';
import Display from './pages/Display';
import Landing from './pages/Landing';

function App() {
  const { id } = useParams();

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path={`/display/:id`} element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
