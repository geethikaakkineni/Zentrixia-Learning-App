import course1 from './assets/course1.jpg';
import prog1 from './assets/prog1.png';
import prog2 from './assets/prog2.png';


function Programs() {
  const program = [{progress:30},
                   {progress:60},
                   {progress:72}
                  ];

  return (
    <div data-aos="zoom-out" className="programs">
      <div id="programheading">
        Ongoing Programs
      </div>
      <div id="longcard1">
        <img className="longcard_img" src={course1} alt="AI course picture" />
        <div className="longcard_content">
          <h2 className="longcard_title">Artificial Intelligence</h2>
          <p className="longcard_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis architecto suscipit maiores nihil at totam corporis vel esse enim eos, ut ipsam sunt aut amet incidunt saepe? Cumque, amet.
          </p>
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${program.progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{program.progress}% completed</span>
        </div>
      </div>

      <div id="longcard2">
        <img className="longcard_img" src={prog1} alt="AI course picture" />
        <div className="longcard_content">
          <h2 className="longcard_title">Artificial Intelligence</h2>
          <p className="longcard_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis architecto suscipit maiores nihil at totam corporis vel esse enim eos, ut ipsam sunt aut amet incidunt saepe? Cumque, amet.
          </p>
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${program.progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{program.progress}% completed</span>
        </div>
      </div>

      <div id="longcard3">
        <img className="longcard_img" src={prog2} alt="AI course picture" />
        <div className="longcard_content">
          <h2 className="longcard_title">Artificial Intelligence</h2>
          <p className="longcard_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis architecto suscipit maiores nihil at totam corporis vel esse enim eos, ut ipsam sunt aut amet incidunt saepe? Cumque, amet.
          </p>
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${program.progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{program.progress}% completed</span>
        </div>
      </div>

      </div>
  );
}

export default Programs;

