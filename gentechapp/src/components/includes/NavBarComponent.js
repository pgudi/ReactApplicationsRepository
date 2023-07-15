
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../images/GenTech_BlueLogo_Name.png';
const NavBarComponent = () =>{
    return(
        <Navbar expand="lg" className="bg-transparent">
      <Container>
    {/*   <Navbar.Brand href="#home" className='text-primary fw-bolder fs-2' >GenTech Academy</Navbar.Brand> */} 
         <img className='img-fluid' style={{width:'280px', height:'70px'}} src={logo}  alt="logo" />   
        <Link to="/" class="text-decoration-none text-primary">Home</Link>
        <Link to="/courses" class="text-decoration-none text-primary">Courses</Link>
        <Link to="/about" class="text-decoration-none text-primary">About Us</Link>
        <Link to="/contact" class="text-decoration-none text-primary">Contact Us</Link>

      </Container>
    </Navbar>
    )
}

export default NavBarComponent;