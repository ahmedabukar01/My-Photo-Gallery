import React from 'react'
import {useState} from 'react'

export const UploadFile = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const onChange = (e)=>{
        const type = ['image/png','image/jpeg'];
        const selected = e.target.files[0];
        
        if(selected && type.includes(selected.type)){
            setFile(selected);
            setError(null)
            
        } else{
            setError('please Selected valid image such as (png or jpeg)');
            setFile(null);
        }
        
        
    }
    return (
        <form className="upload-file container">
            <div className="fields">
                <input type="file" id="file" onChange={onChange}/>
                <label htmlFor="file">
                    <i className="fas fa-upload"></i>
                    {file? <div className="file-name">{file.name}</div> : 'Upload Photo'}
                    {error && (<div className="error">{error}</div>)}
                </label>
            </div>
        </form>
    )
}

export default UploadFile;