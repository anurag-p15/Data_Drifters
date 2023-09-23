import React,{useEffect} from 'react';
import Navbar from './navbar';
import Cara_News from './carousel_news';
import Mission from './mission';
import Footer from './footer';
function Home(){
  useEffect(() => {
    // Set the title for the Home page
    document.title = 'EduPulse: Bridging Gaps, Building India ';
  }, []);
    return(
        <div>
            <Navbar/>
            <Cara_News/>
            <Mission/>
            <Footer/>
    </div>
  );
};

export default Home;