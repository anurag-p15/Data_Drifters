import React,{useEffect} from 'react';
import Navbar from "../Home/navbar";
import EducationAnalysis from "./general";
import Footer from "../Home/footer";

function General(){
    useEffect(() => {
        document.title = 'India: Education and Challenges ';
      }, []);
    return(
        <div>
            <Navbar/>
            <EducationAnalysis/>
            <Footer/>
        </div>
    )
}
export default General;