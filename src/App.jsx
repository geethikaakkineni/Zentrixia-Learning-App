import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Courses from './Courses.jsx';
import Programs from './Programs';
import Instructors from './Instructors';
import Join from './Join';
import Footer from './Footer.jsx';
import TypingEffect from './TypingEffect.jsx';

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
        AOS.init({
          duration: 2000, 
        });
      },[]);

  return (
    <>
      <Header/>
      <Navbar/>
      <Home/>
      <Courses/>
      <Programs/>
      <Instructors/>
      <Join/>
      <Footer/>  
    </>
  );
}

export default App
