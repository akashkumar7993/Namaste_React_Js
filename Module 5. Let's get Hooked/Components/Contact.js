import { useState } from "react";

const Contact = () => {
    const [message, setMessage] = useState(false);
      const handleSubmit = (e) => {
          // e.preventDefault();
          // setMessage(true);
      }
    return (
      <div className="contact-container">
        <div className="contact-left">
        <h1>Contact us</h1>
        <p>Need to get in touch us? Either fill out the form with your inquiry or</p> 
        <p>find the department email you'd like to contact below.</p>
        </div>
        <div className="contact-right">        
                  <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Name" required/>
                      <input type="email" placeholder="Email" required/>
                      <textarea placeholder="Type your Message here..." required></textarea>
                      <button type="submit">Submit</button>
                      {/* {message && <span>Thanks for contacting FoodFire, We will reply ASAP.</span>} */}
                  </form>
        </div>
      </div>
    );
  };
  
  export default Contact;