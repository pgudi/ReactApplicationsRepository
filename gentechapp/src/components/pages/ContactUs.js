import {useRef} from 'react';
import emailjs from '@emailjs/browser';
const ContactUs =()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_krodbrf",
         "template_a7h0w2t", form.current, 
         "VuqgdhUK3zHQ6XTMi")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return(
        <div>
            <h3 className="bg-primary text-warning mt-3 text-white">Contact Us</h3>
            <container fluid>
            <div class="row justify-content-evenly mt-5 mb-5" style={{backgroundColor:"lightblue"}}>
                <div className="col-md-5">
                    <h3 className="mt-5">Contact Form</h3>
                    <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group mb-3">
                        <input type="text" className='form-control' name="user_name" id="user_name" placeholder="Enter Full Name"></input>
                    </div> 
                    <div className="form-group mb-3">
                        <input type="text" className='form-control' name="user_phone"  id="user_phone" placeholder="Enter Phone Number"></input>
                    </div>
                    <div className="form-group mb-3">
                      <input type="email" className='form-control' name="user_email"  id="user_email" placeholder="Enter Email Address"></input>
                      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    
                    <div class="form-group mb-3">
                        <textarea className='form-control' name="user_message" id="user_message" placeholder="Describe Yourself"></textarea>
                      </div>
                    <button type="submit" className="btn btn-danger">Submit</button>
                  </form>
                </div>

                <div class="col-md-5">
                    <h3 class="mt-5">Address</h3>
                    <p>#403,6th Cross,7th Main,<br/>
                        RPC Layout, Hampinagar,<br/>
                        Vijayanagar Bangalore-560040
                    </p>
                    <iframe title="gentech" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1602927692215!2d77.53606647454932!3d12.961592887352854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e7534328b8d%3A0x23f77cb3aa5c668c!2sGowri%20Software%20Solutions%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1688490552402!5m2!1sen!2sin" style={{width:"450px", height: "200px", border:0}}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
           </container>
        </div>
    )
}

export default ContactUs;