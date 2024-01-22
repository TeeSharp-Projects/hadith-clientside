import { useEffect, useState } from "react";
import axios from "axios";


function AllHadith(){

    const [results, setresults] = useState([]);
    const [showItems,setshowItems] = useState(false);
    useEffect(()=>{
        const getAllHadith = async () => {
            let allHadithApi = await axios.get(`${process.env.REACT_APP_SERVER}/hadithapi`);
            // console.log('inside useEffect AllHadiths', allHadithApi.data);
            setresults(allHadithApi.data);
            setshowItems(true);

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




export default AllHadith;