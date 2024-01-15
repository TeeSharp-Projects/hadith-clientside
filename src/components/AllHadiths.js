import { useEffect } from "react";
import axios from "axios";

function AllHadith(){
    useEffect(()=>{
        const getAllHadith = async () => {
            let allHadithApi = await axios.get(`${serverLink}/hadithapi`);
            // console.log('inside useEffect AllHadiths', allHadithApi.data);
            setresults(allHadithApi.data)
            setshowitems(true);

        };
        getAllHadith();
        
    },[]);
}