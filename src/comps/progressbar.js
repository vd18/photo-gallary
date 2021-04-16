import React, { useEffect } from 'react';
import useStorage from '../hooks/usestorage';



const ProgressBar = ({file , setfile}) => {
const {url , progress} = useStorage(file);

useEffect(() => {
    if(url){
    setfile(null)
    }

},[url,setfile])


    return(


        <div className = "progress-bar">
            
        </div>
    )



} 

export default ProgressBar;