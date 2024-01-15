import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";





function App() {
  return ( 
  <>
      <BrowserRouter>
      <Header/>
      <Routes>
        {/* <Route exact path ='/' element ={}/> */}

        <Route exact path ='/allHadith' element ={<AllHadiths/>}/>
      </Routes>

      <Footer/>

      </BrowserRouter>
  

  </>

  );
}

export default App;
