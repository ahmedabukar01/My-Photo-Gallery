import { useState, useEffect } from "react";
import {myStorage} from '../firebase/config'

const UseStorage = (file) =>{
    const [progress,setProgress] = useState(null)
    const [err,setError] = useState(null)
    const [url,setUrl] = useState(null)

    console.log(file.name);
    
    useEffect(()=>{
        const storageRef = myStorage.ref(file.name);
        console.log(storageRef);

        storageRef.put(file).on('state-change',(snap)=>{
            const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
            console.log("hfghf");
            console.log(percentage);
        },(err)=>{
            setError(err)
        }, async ()=>{
            const url = await storageRef.getDownloadURL();
            setUrl(url);
            console.log(url)
        })
    },[file]);

    return { progress,err,url }
}

export default UseStorage