import {useState , useEffect } from 'react'
import { profirestore } from '../fireconfig/config';


const UseFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {

     const unsub =  profirestore.collection(collection)
            .orderBy('createdAT', 'desc')
            .onSnapshot((snap)=> {

                let document = [];
                snap.forEach(doc => {
                    document.push({...doc.data(), id: doc.id});

                });
                setDocs(document);
                
            });

            return() => unsub();
        
    }, [collection]);


    return { docs };

}

export default UseFirestore;