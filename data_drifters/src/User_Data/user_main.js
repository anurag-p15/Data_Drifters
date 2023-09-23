import React,{useEffect} from 'react';
import Footer from "../Home/footer";
import Navbar from "../Home/navbar";
import User_Body from "./user";
function User(){
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Get Your own Analysis';
      }, []);
    return(
    <div>
    <Navbar />
    <User_Body />
    <Footer />
    </div>
    )
}
export default User;
