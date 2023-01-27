import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Spring from './Spring'
import Hall from './Hall'
import LogicCircuit from './logicalcircuit/page/App'
import { useEffect } from 'react';
import {v4} from 'uuid';
import Questions from './question_bank/Questions';
import Forum from './discussion_forum/Forum';

function App() {
  localStorage.setItem('User',v4())
  
  
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/spring" element={<Spring />} />
        <Route path="/hall" element={<Hall />} />
        <Route path="/circuit" element={<LogicCircuit />} />
        <Route path="/question" element={<Questions />} />
        <Route path="/forum" element={<Forum />} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
