import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Project from './pages/projects/Project';
import Contact from './pages/contact/Contact';

function App() {

  let kartik = "<KARTIK/>";
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <span style={{color : 'black' , fontWeight : 'bold'}}>{kartik}</span>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;