import React, { useState } from 'react';
import ProgressBar from './progressbar'

const Formupload = () => {

    
    const [file , setfile] = useState(null);
    const [error , seterror] = useState(null);

    const types = ['image/png','image/jpeg'];


    const uploadhandler =(a) => {

        let selected  = a.target.files[0];

        if(selected && types.includes(selected.type))
        {
            setfile(selected);
            seterror("")
        }else{

            setfile(null);
            seterror("ples select image file");

        }
    }



    
    return(
<form>
        <div>
    <label for="file-upload" class="custom-file-upload">
     Upload
     <input   id="file-upload" type ="file" onChange = {uploadhandler} />
     </label>

  

   
      
       
    
       <div className = "output">
           {error && <div className =  "error">
               {error}
               </div>}
            {/* {file && <div>{file.name}</div>} */}
            {file && <ProgressBar file= {file} setfile={setfile} /> }
      </div>
    
      </div>
</form>

);

}

export  default Formupload;