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
                        <p>#3, 2nd Floor,7th Main,<br/>
                            Above Mallige Child Care Center,
                            Vijayanagar, 1st F Cross Road,<br/>
                            RPC Layout Attiguppe, Bangalore-560040
                        </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.4770371687911!2d77.53362413722904!3d12.963402327698743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1bc98d3d1919c13%3A0xf75efa90f3d46abc!2sGenTech%20Academy!5e0!3m2!1sen!2sin!4v1691395029010!5m2!1sen!2sin" style={{width:"450px", height: "200px", border:0}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
           </container>
        </div>
    )
}

export default ContactUs;