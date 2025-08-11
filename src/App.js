
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Mood from './Mood';
import Inspiration from './Inspiration';
import Planner from './Planner';
import Recipes from './Recipes';

import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Mood' element={<Mood />} />
        <Route path='/Inspiration' element={<Inspiration />} />
        <Route path='/Planner' element={<Planner />} />
        <Route path='/Recipes' element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;
