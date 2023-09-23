import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './Css files/navbar.css';
import './Css files/body.css';
import'./Css files/user_main.css';
import'./Css files/general.css';
import Home from "./Home/body";
import User from './User_Data/user_main';
import General from './General_Overview/general_main';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/general" element={<General/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
