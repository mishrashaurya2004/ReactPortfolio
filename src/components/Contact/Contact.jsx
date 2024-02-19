import X from "../../assets/x_icon.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import "./Contact.css"

let Contact = () => {
    return (
        <section className="Contact__data" id="contact">
        <div className="contact__container">
          <h1 id="section_title">Let’s work together</h1>
          <p id="section__description">"Connect with me to discuss collaboration opportunities or to learn more about my work - I'm just a message away!". "Let's chat! Reach out via email or social media to start a conversation about your project or any inquiries."</p>
          <div className="Contact_icons">
          <div>
            <a href="https://twitter.com/ShauryaMis56254"  className="home__social-icon" target ="_blank">
          <img src={X} alt="X"/> </a>
          </div>
          <div>
          <a href="https://www.instagram.com/mi_shraaa/" className="home__social-icon" target ="_blank">
          <img src={Instagram} alt="Instagram"/></a>
          </div><div>
          <a href="https://www.linkedin.com/in/shaurya-mishra-70a189249" className="home__social-icon" target="_blank">
  <img src={Linkedin} alt="Linkedin"/>
</a>
          </div>
          </div>
          <p id="social"><span>Based In:</span> Ujjain, Madhya Pradesh, India</p>
          <p id="social"><span>Email:</span> mishrashaurya97@gmail.com</p>
        </div>
      </section>
      
        )
}

export default Contact