import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";

function MyFavs(){
    const [results, setResults] = useState([]);
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
    const [showItems,setShowItems] = useState(false);
}




export default MyFavs;