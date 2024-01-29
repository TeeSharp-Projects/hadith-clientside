import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';

function Header () {
    return(
      
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Hadith by: Azeezah Bidmos</Navbar.Brand> 
        <Link href='/about'>About</Link>
        <Link to ='/allHadith'>All Hadiths</Link>
        <Link to ='/'>Favourites</Link>        
        
      </Navbar>
  
  )
}
export default Header;