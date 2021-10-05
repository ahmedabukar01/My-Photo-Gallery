import { myFirestore } from "../firebase/config"
import {useState,useEffect} from 'react'

const UseFirestore = (collection)=>{
    const [docs,setDocs] = useState(null)
    console.log('hi')
    useEffect(()=>{
        myFirestore.collection(collection).orderBy('createdAt','desc')
        .onSnapshot((snap)=>{
            const documents = [];
            snap.docs.forEach(snap=>{
                documents.push({...snap.data(),id:snap.id});
            })

            setDocs(documents)
        })

            
    },[collection])

    return {docs};

}

export default UseFirestore