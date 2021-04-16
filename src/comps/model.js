import React from 'react';


const Model = ({selectedImg , setSelectedImg}) => {

    const handleclick = (e) => {
        if(e.target.classList.contains('backdrop'))
        setSelectedImg(null);
    }
    return(
        <div className = "backdrop" onClick= {handleclick}>
        
            <img src={selectedImg} alt="enlarged img"></img>
     </div>

    )



}

export default Model;
