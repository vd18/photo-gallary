import React from 'react';
import UseFirestore from '../hooks/usefirestore';
import {motion} from 'framer-motion'



const ImageGrid = ({setSelectedImg}) => {
    const { docs } = UseFirestore('images');
    return(
        
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-warp" key = {doc.id}
                    layout
                    whileHover={{opacity : 3}}
                    onClick= {() => setSelectedImg(doc.url)}
                > 
                    <motion.img src = {doc.url} alt="not upload"
                        initial = {{opacity : 0}}
                        animate = {{opacity : 2}}
                        transition = {{delay : 1}}
                       
                     />
                   
                </motion.div>
                
            ))}
            
        </div>
    )
}

export default ImageGrid;
