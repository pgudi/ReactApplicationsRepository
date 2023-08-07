import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import '../style/stylenew.css';
const FooterComponent=()=>{

    return(
        <div>
            <Container fluid>
                <div className="row justify-content-evenly bg-dark text-white mt-5" >
                    <div class="col-md-4 mt-5">
                            <h5 class="pb-3">GenTech Academy</h5>
                            <p className='fontfooter'>
                            Welcome to our Full Stack Development Institute! We are a leading institution dedicated to providing comprehensive training in full stack development. Our institute is committed to equipping aspiring developers with the knowledge, skills, and hands-on experience necessary to excel in the rapidly evolving field of web development.
                            </p>
                    </div>

                    <div class="col-md-4 mt-5">
                        <h5 class="pb-3">Important Links</h5>
                        <p>
                            <Link to="/" class="text-decoration-none text-light">Home</Link> <br/>
                            <Link to="/contact" class="text-decoration-none text-light">Contact Us</Link> <br/>
                            <Link to="/about" class="text-decoration-none text-light">About Us</Link> <br/>
                            <Link to="/courses" class="text-decoration-none text-light">Courses</Link> <br/>
                        </p>
                    </div>

                    <div class="col-md-4 mt-5">
                        <h5 class="pb-3">Visit Us</h5>
                            <p>#3, 2nd Floor,7th Main,<br/>
                            Above Mallige Child Care Center,
                            Vijayanagar, 1st F Cross Road,<br/>
                            RPC Layout Attiguppe, Bangalore-560040
                            </p>
                    </div>

                </div>
            </Container>
            <container fluid>
                <div class="row bg-secondary text-center text-light">
                    <div class="col-12">
                        <p>© 2023 - GenTech Academy All Rights Reserved</p>
                    </div>
                </div>
            </container>
        </div>
    )
}

export default FooterComponent;