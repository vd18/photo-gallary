import React, { useState } from 'react';
import Title from './comps/Title';
import Formupload from './comps/formupload'
import ImageGrid from './comps/imagegrid';
import Model from './comps/model';



function App() {
  const [selectedImg , setSelectedImg] = useState(null);


  return (
    <div className="App">
      <Title/>
     <Formupload></Formupload>
     <ImageGrid setSelectedImg = {setSelectedImg}></ImageGrid>
     { selectedImg && <Model selectedImg = {selectedImg} setSelectedImg={setSelectedImg}></Model>}
     
    </div>
  );
}

export default App;
