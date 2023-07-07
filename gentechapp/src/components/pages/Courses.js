import javaImage from '../images/java.png';
import springbootImage from '../images/Springboot.png';
import mysqlImage from '../images/database.png';
import htmlImage from '../images/Html.png';
import bootstrapImage from '../images/bootstrap.png';
import javascriptImage from '../images/javascript.png';
import cssImage from '../images/CSS.png';
import reactImage from '../images/React.png';
const Courses =()=>{

    return(
        <div>
            <h3 className="bg-primary text-warning mt-3 text-white">Courses Offered</h3>
            <div className='container-fluid'>
                <div className='container'>
                <div className='row justify-content-evenly pt-3 pb-3'>
                    <div className='col-md-4'>
                        
                            <img className='card-img-top img-fluid' style={{width:'100px', height:'100px'}}  src={javaImage} alt="Java" />
                            <h4>Core Java</h4>
                            <p>
                            Java is widely used for building a variety of applications, including desktop software, web applications, mobile apps and many more. 
                            </p>
                            <button className="btn btn-primary">Read More</button>
                    </div>
                    <div className='col-md-4'>
                            <img className='card-img-top img-fluid' style={{width:'100px', height:'100px'}} src={springbootImage} alt="Springboot" />
                            <h4>Springboot</h4>
                            <p>
                            Spring Boot is a Java-based open-source framework that simplifies the development of stand-alone, production-grade web applications and microservices. 
                            </p>
                            <button className="btn btn-primary">Read More</button>
                    </div>
                    <div className='col-md-4'>
                            <img className='card-img-top img-fluid' style={{width:'100px', height:'100px'}} src={mysqlImage} alt="MySQL" />
                            <h4>MySQL Database</h4>
                            <p>
                            SQL, short for Structured Query Language, is a programming language specifically designed for managing and manipulating relational databases. 
                            </p>
                            <button className="btn btn-primary">Read More</button>
                    </div>
                </div>

                {/* second Row of Images and Content */}

                <div className='row justify-content-evenly pt-3 pb-3 mt-4'>
                    <div className='col-md-4'>
                        
                            <img className='card-img-top img-fluid' style={{width:'100px', height:'100px'}} src={htmlImage} alt="html" />
                            <h4>HTML</h4>
                            <p>
                            HTML is the backbone of the web, serving as the foundation for creating structured and well-formatted web pages. 
                            </p>
                            <button className="btn btn-primary">Read More</button>
                    </div>
                    <div className='col-md-4'>
                            <img className='card-img-top img-fluid' style={{width:'100px', height:'100px'}} src={bootstrapImage} alt="Bootstrap" />
                            <h4>Bootstrap</h4>
                            <p>
                            Bootstrap is a popular front-end framework for building responsive and visually appealing websites and web applications.
                            </p>
                            <button className="btn btn-primary">Read More</button>
                    </div>
                    <div className='col-md-4'>
                            <img className='card-img-top img-fluid' style={{width:'100px', height:'100px'}} src={javascriptImage} alt="JavaScript" />
                            <h4>JavaScript</h4>
                            <p>
                            JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.                        
                            </p>
                            <button className="btn btn-primary">Read More</button>
                    </div>
                </div>

                 {/* Third Row of Images and Content */}
                 <div className='row justify-content-evenly pt-3 pb-3 mt-5'>
                    <div className='col-md-5'>
                        
                            <img className='card-img-top img-fluid' style={{width:'100px', height:'100px'}} src={cssImage} alt="CSS" />
                            <h4>Cascading Style Sheet</h4>
                            <p>
                            CSS is a crucial technology in web development, working in conjunction with HTML and JavaScript to create visually appealing and responsive web pages. 
                            </p>
                            <button className="btn btn-primary">Read More</button>
                    </div>
                    <div className='col-md-5'>
                            <img className='card-img-top img-fluid' style={{width:'100px', height:'100px'}} src={reactImage} alt="React" />
                            <h4>React</h4>
                            <p>
                            React is a popular JavaScript library for building user interfaces (UIs) for web applications. It is widely used for building single-page applications (SPAs) and complex user interfaces. 
                            </p>
                            <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
                 </div>  {/* container  */}
            </div> {/* container Fluid */}
        </div>
    )
}

export default Courses;