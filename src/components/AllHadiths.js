import { useEffect, useState } from "react";
import axios from "axios";


function AllHadith(){

    const [results, setresults] = useState([]);
    useEffect(()=>{
        const getAllHadith = async () => {
            let allHadithApi = await axios.get(`${process.env.REACT_APP_SERVER}/hadithapi`);
            // console.log('inside useEffect AllHadiths', allHadithApi.data);
            setresults(allHadithApi.data);
            setshowitems(true);

        };
        getAllHadith();
        
    },[]);
}

export default AllHadith;