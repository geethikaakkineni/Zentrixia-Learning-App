import './Home.css';
import React from "react";
import {ReactTyped} from "react-typed";

function Home(){
    return(
        <div id="homesection">
        <div id="homecontent">           
            <ReactTyped
                    strings={["Future Ready Skills , Fast-Track Learning"]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
            />
            <div class="search-box">
                <input type="text" placeholder="Search Courses..." />
                <button class="search-btn">
                <i class="fas fa-search"></i>
                </button>
            </div>
            5-15 day hands-on programs in AI, WebDev, Cloud & many more.
        </div>
    </div>
    );
}
export default Home;