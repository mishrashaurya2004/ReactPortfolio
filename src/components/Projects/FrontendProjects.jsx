import Project2 from "../../assets/project2.png"
import Project1 from  "../../assets/project1.png"
import Project4 from "../../assets/Project4.png"
import Project5 from "../../assets/project5.png"
let Web = () => {

    return(<>
     <div className="projects-container">
        

<div className="project">
<div className="project__img">
  <img className="image3" src={Project5} alt="Project Preview" />
  </div>
  <div className="project__description">
  <h3>Bus Reservation</h3>
  <p>
    Terminal based bus reservation system.
    <br />
    <span>C++</span> <span>Encapsulation</span> <span>Inheritance</span> 
  </p>
  <a href="https://github.com/mishrashaurya2004/BusReservationSystemOOPS" className="button" target="_blank" rel="noreferrer">
    View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
</div>


<div className="project">
  <div className="project__description">
  <h3>Production House Website</h3>
  <p>
    Freelancers can show their services which they provide.
    <br />
    <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>XAMPP</span>
  </p>
  <a href="https://infinityproduction.000webhostapp.com/" className="button" target="_blank" rel="noreferrer">
  View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
  <div className="project__img">
  <img className="image2" src={Project2} alt="Project Preview" />
  </div>
</div>

<div className="project">
  <div className="project__description">
  <h3>Smart Library</h3>
  <p>
    Digitalistaion of Library
    <br />
    <span>C++</span> <span>Github</span> 
  </p>
  <a href="https://github.com/mishrashaurya2004/AlgorithmCourseProject" className="button" target="_blank" rel="noreferrer">
  View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
  <div className="project__img">
  <img className="image2" src={Project4} alt="Project Preview" />
  </div>
</div>

<div className="project">
<div className="project__img">
  <img className="image" src={Project1} alt="Project Preview" />
  </div>
  <div className="project__description">
  <h3>Space Count</h3>
  <p>
    Count Spaces in Parking Area
    <br />
    <span>Python</span>
  </p>
  <a href="https://github.com/mishrashaurya2004/DSCourseProject" className="button" target="_blank" rel="noreferrer">
    View Project <i class='bx bxs-right-arrow-alt'></i>
  </a>
  </div>
</div>

</div>
    </>)
}

export default Web