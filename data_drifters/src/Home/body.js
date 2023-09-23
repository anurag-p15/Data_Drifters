import React from 'react';
import Navbar from './navbar';
import Cara_News from './carousel_news';
import Mission from './mission';
import Footer from './footer';
function Body(){
    return(
        <div>
            <Navbar/>
            <Cara_News/>
            <Mission/>
            <Footer/>
    </div>
  );
};

export default Body;