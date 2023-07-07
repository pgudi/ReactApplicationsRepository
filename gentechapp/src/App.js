import './App.css';
import NavBarComponent from './components/includes/NavBarComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import ContactUs from './components/pages/ContactUs';
import FooterComponent from './components/includes/FooterComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={AboutUs}></Route>
          <Route path='/courses' Component={Courses}></Route>
          <Route path='/contact' Component={ContactUs}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
