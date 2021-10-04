import { useState, useEffect } from "react";
import {myStorage, myFirestore, timestamp} from '../firebase/config'

const UseStorage = (file) =>{
    const [progress,setProgress] = useState(null)
    const [err,setError] = useState(null)
    const [url,setUrl] = useState(null)

    console.log(file.name);
    
    useEffect(()=>{
        const storageRef = myStorage.ref(file.name);
        const firestoreRef = myFirestore.collection('images');

        storageRef.put(file).on('state-change',(snap)=>{
            const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
            console.log("hfghf");
            console.log(percentage);
        },(err)=>{
            setError(err)
        }, async ()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            firestoreRef.add({url,createdAt})
            setUrl(url);
            
        })
    },[file]);

    return { progress,err,url }
}

export default UseStorage