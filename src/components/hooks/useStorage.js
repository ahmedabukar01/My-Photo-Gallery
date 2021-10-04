import { getDownloadURL } from "@firebase/storage";
import { useState, useEffect } from "react";
import {myStorage} from '../firebase/config'

const useStorage = (file) =>{
    const [progress,setProgress] = useState(null)
    const [err,setError] = useState(null)
    const [url,setUrl] = useState(null)

    
    useEffect(()=>{
        const storageRef = myStorage.ref();
        storageRef.put(file).on('state-change',(snap)=>{
            const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
            console.log(percentage);
        },(err)=>{
            setError(err)
        }, async ()=>{
            const url = await getDownloadURL()
            console.log(url)
        })
    },file)
}