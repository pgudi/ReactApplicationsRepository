
import { Link } from "react-router-dom";
import CarouselComponent from "../includes/CarouselComponent";
import '../style/stylenew.css';
const Home=()=>{

    return(
        <div>
             
             <CarouselComponent/>
           { /* <div className="container-fluid"> */}
                <container fluid>
                    <div className="row">
                        <div className="col-lg-12 mb-5 mt-5 text-center">
                            <h3 style={{color:"orange"}}>GenTech Academy</h3>
                            <p className="text-center mx-4 fs-6 fw-normal">
                            Welcome to our Full Stack Development Institute! We are a leading institution dedicated to providing comprehensive training in full stack development. Our institute is committed to equipping aspiring developers with the knowledge, skills, and hands-on experience necessary to excel in the rapidly evolving field of web development.
                            </p>
                            <Link to='/about' className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                    {/* End of the Row */}
                </container>

                <container fluid>
                    <div className="row justify-content-evenly">
                        <h3 className="text-center text-warning">Vision, Mission and Values</h3>

                        <div className="col-md-4  mt-2">
                            <h6 className="text-center text-warning">Our Vision</h6>
                            <p className="fontvision">
                            At our development institute, our vision is to create a thriving and sustainable future by empowering individuals, organizations, and communities to reach their full potential. We believe in a world where everyone has equal access to opportunities and resources, and where innovation and collaboration drive positive change.
                            </p>
                        </div>
                        <div className="col-md-4 mt-2">
                            <h6 className="text-center text-warning">Our Mission</h6>
                            <p className="fontvision">
                            At the Development Institute, our mission is to empower individuals, communities, and nations to achieve sustainable development and create a better future for all. We are committed to fostering economic growth, social progress, and environmental stewardship through innovative programs, research, and capacity building.
                            </p>
                        </div>
                        <div className="col-md-4 mt-2">
                            <h6 className="text-center text-warning">Our Core Values</h6>
                            <p className="fontvision">
                            We strive for excellence in all aspects of our work. We encourage continuous improvement, set high standards, and aim to deliver the best possible outcomes for our participants. We promote ethical leadership practices that inspire and empower others.
                            </p>
                        </div>
                    </div>
                    {/* end of container */}
                    </container>


                {/* end of container fluid */}
            { /* </div> */}
            {/* end of First Div */}
         </div>
       
    )
}

export default Home;