import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllHadiths from "./components/AllHadiths";





function App() {
  return ( 
  <>
      <BrowserRouter>
      <Header/>
      <Routes>
        {/* <Route exact path ='/' element ={}/> */}

        <Route exact path ='/' element ={<AllHadiths/>}/>
      </Routes>

      <Footer/>

      </BrowserRouter>
  

  </>

  );
}

export default App;
