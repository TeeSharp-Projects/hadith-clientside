import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";


function AllHadiths(){

    const [results, setResults] = useState([]);
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
    const [showItems,setShowItems] = useState(false);
    
    useEffect(()=>{
        const getAllHadith = async () => {
            let allHadithApi = await axios.get(`${process.env.REACT_APP_SERVER}/hadithapi`);
            setResults(allHadithApi.data);
            setShowItems(true);

        };
        getAllHadith();
        
    },[]);

    return(
        <div>
            <div
          style={{
            display:"flex",
            flexFlow:"row",
            flexWrap: "wrap",
            padding: "4rem"
          }}>
            {showItems && results.map((item,index)=>
            <Item key ={index} item ={item}/>)}
            </div>
        </div>
            
        );
    }




export default AllHadiths;