import './App.css';
import {Routes,Route, NavLink} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Acedemics from './Components/Acedemics';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">

      <nav className='navbar'>
         <ul className='list'>
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/about'>About</NavLink>
           <NavLink to='/contact'>Contact</NavLink>
           <NavLink to='/acedemics'>Acedemics</NavLink>
           <NavLink to='/projects'>Projects</NavLink>
         </ul>
      </nav>

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/acedemics' element={<Acedemics/>} />
          <Route path='/projects' element={<Projects/>} />
      </Routes>
       
    </div>
  );
}

export default App;
