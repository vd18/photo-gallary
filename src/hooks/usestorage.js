import {useState , useEffect } from 'react'
import { prostorage , profirestore, timestamp } from '../fireconfig/config';


const useStorage  = (file) => {

    const [progress , setprogress] = useState(0);
    const [error , seterror] = useState(null);
    const [url , setUrl] = useState(null);


useEffect(() => {

    const storageRef = prostorage.ref(file.name);
    const collectionref = profirestore.collection('images');


    storageRef.put(file).on('state_changed', (snap) => {
        let per = (snap.bytesTransferred / snap.totalBytes) * 100;
        setprogress(per);

    },  (err) => {
        seterror(err);

    }, async () =>{
        const url = await storageRef.getDownloadURL();
        const createdAT = timestamp();
        collectionref.add({url , createdAT});
        setUrl(url)
    });
}, [file])




  return { progress , url , error};



}

export default useStorage;


