import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllHadiths from "./components/AllHadiths";
import MyFavs from "./components/MyFavs";
import Item from "./components/Item";





function App() {
  return ( 
  <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path ='/' element ={<MyFavs/>}/>
        <Route exact path ='/allhadith' element ={<AllHadiths/>}/>
      </Routes>

      <Footer/>

      </BrowserRouter>
  

  </>

  );
}

export default App;
