import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
// import FavItem from "./FavItem";

function MyFavs(){
    const [results, setResults] = useState([]);
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
    const [showItems,setShowItems] = useState(false);

    useEffect(()=>{
        const getFavHadith = async () => {
            let allHadithApi = await axios.get(`${serverLink}/hadiths`);
            setResults(allHadithApi.data)
            setShowItems(true);

        };
        getFavHadith();
    
    },[]);

    return(
        <>   
       
       <h1>Your Favoirite Hadiths</h1>
       <div
       style={{
         display: "flex",
         flexFlow: "row",
         flexWrap: "wrap",
         padding: "4rem",
       }}
     >
       {showItems && results.map((item,index)=> <Item key ={index} 
       item ={item}/>)};
       </div>
       </>
    );
}
    




export default MyFavs;