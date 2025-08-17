import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Courses.css";

const cards = [
  { name: "Machine Learning Essentials", description:"Understand ML concepts, train models, and build prediction systems using scikit-learn.",level:"Beginner",cost:"Free",cert:"Certification Course", duration:"Self-paced" },
  { name: "Cloud Computing with AWS & Azure", description:"Gain hands-on experience in deploying applications on cloud platforms.",level:"Beginner",cost:"Free",cert:"Certification Course", duration:"Self-paced" },
  { name: "UI/UX Design Fundamentals", description:"Understand design principles, wireframing, prototyping, and user-centered design practices.",level:"Intermediate",cost:"Paid",cert:"Certification Course", duration:"2 Weeks" },
  { name: "Blockchain & Web3 Development", description:"Build decentralized apps, understand smart contracts, and blockchain fundamentals.",level:"Beginner",cost:"Paid",cert:"Certification Course", duration:"4 Weeks" },
  { name: "Artificial Intelligence Concepts", description:"Explore AI fundamentals including neural networks, natural language processing, and computer vision.",level:"Intermediate",cost:"Free",cert:"Certification Course", duration:"Self-paced" },
  { name: "Mobile App Development", description:"Learn to build cross-platform mobile apps using React Native and JavaScript.",level:"Intermediate",cost:"Free",cert:"Certification Course", duration:"Self-paced"},

];

const extendedCards = [
  ...cards.slice(-3), 
  ...cards,
  ...cards.slice(0, 3), 
];

const cardsPerPage = 3;

function Courses() {
  const [currentIndex, setCurrentIndex] = useState(3); 
  const trackRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        trackRef.current.style.transition = "none";
        setCurrentIndex(cards.length);
        setTimeout(() => {
          trackRef.current.style.transition = "transform 0.5s ease-in-out";
        }, 0);
      }
      if (currentIndex === cards.length + 3) {
        trackRef.current.style.transition = "none";
        setCurrentIndex(3);
        setTimeout(() => {
          trackRef.current.style.transition = "transform 0.5s ease-in-out";
        }, 0);
      }
    };

    const track = trackRef.current;
    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex]);

  return (
    <div data-aos="zoom-out" id="coursesection">
      <div id="courseheading">
          Trending courses
      </div>
      <div className="coursess">
      <button className="arrow left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <div className="coursess-container">
        <div
          className="coursess-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
          }}
        >
          {extendedCards.map((card, index) => (
            <div key={index} className="card">
              <h3 className="card-name">{card.name}</h3>
              <p className="card-role">{card.description}</p>
              <p className="card-role">{card.level} | {card.cost}</p>
              <p className="card-role">{card.duration}</p>
              <p className="card-role"><i className="fa-solid fa-star"></i>  {card.cert}</p>
              <div id="buttondiv"><button id="buttonincard">Register Now</button></div>
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
    </div>
  );
}


export default Courses;