import './App.css';
import NavBarComponent from './components/includes/NavBarComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import ContactUs from './components/pages/ContactUs';
import FooterComponent from './components/includes/FooterComponent';
import CoreJava from './components/pages/CoreJava';
import Springboot from './components/pages/Springboot';
import MySQLPage from './components/pages/MySQLPage';
import HTMLPage from './components/pages/HTMLPage';
import BootstrapPage from './components/pages/BootstrapPage';
import JavaScriptPage from './components/pages/JavaScriptPage';
import CSSPage from './components/pages/CSSPage';
import ReactPage from './components/pages/ReactPage';
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
          <Route path='/corejava' Component={CoreJava}></Route>
          <Route path='/springboot' Component={Springboot}></Route>
          <Route path='/mysql' Component={MySQLPage}></Route>
          <Route path='/html' Component={HTMLPage}></Route>
          <Route path='/bootstrap' Component={BootstrapPage}></Route>
          <Route path='/javascript' Component={JavaScriptPage}></Route>
          <Route path='/css' Component={CSSPage}></Route>
          <Route path='/react' Component={ReactPage}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
