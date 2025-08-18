import prof1 from './assets/prof1.jpg';
import prof2 from './assets/prof2.jpg';
import prof3 from './assets/prof3.avif';
import prof4 from './assets/prof4.avif';

function Instructors() {
  return (
    <div data-aos="zoom-out" className="instructorss">
      <div id="instrheading">
        Meet the Instructors
      </div>
      <div className="instructors">
        <div className="card">
          <img src={prof1} alt="Mr. Dermot" id="instr1" />
          <h3 className="card_title">Mr. Dermot</h3>
          <p className="card_text"> Full-Stack Developer with 10+ years of experience in building scalable 
            web applications. Active open-source contributor with a passion for 
            mentoring aspiring developers in modern JavaScript frameworks.</p>
        </div>
        <div className="card">
          <img src={prof2} alt="Ms. Suz" id="instr2" />
          <h3 className="card_title">Ms. Suz</h3>
          <p className="card_text">  Experienced Web Developer and Educator, known for making complex 
            front-end concepts simple through hands-on teaching. Expert in 
            responsive design, accessibility, and modern UI practices.</p>
        </div>
        <div className="card">
          <img src={prof3} alt="Mr. Allen" id="instr3" />
          <h3 className="card_title">Mr. Allen</h3>
          <p className="card_text">Cybersecurity Specialist with a strong background in ethical hacking 
            and network defense. Regularly conducts workshops on penetration 
            testing and digital forensics, empowering students to secure real-world systems.</p>
        </div>
        <div className="card">
          <img src={prof4} alt="Mr. John" id="instr4" />
          <h3 className="card_title">Mr. John</h3>
          <p className="card_text">IT Security Consultant with deep expertise in cryptography, incident 
            response, and vulnerability assessment. Dedicated trainer who helps 
            students gain practical cybersecurity skills through real-world case studies.</p>
        </div>
      </div>
    </div>
  );
}

export default Instructors;
