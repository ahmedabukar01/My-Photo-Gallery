import React from 'react'
import {useState} from 'react'
import UseFirestore from './hooks/UseFirestore'
import Models from './Models';

const ImageGrid =  () => {
    const {docs} = UseFirestore('images');
    const [url,setUrl] = useState(null);

    const onClick = (e)=>{
        setUrl(e.target.src);
    }

    return (
        <div className="image-grid container">
            {docs && docs.map((doc)=>(
                <div className="wrap-image">
                    <img key={doc.id} src={doc.url} alt="image" onClick={onClick}/>
                </div>
            ))}

            {url && <Models url={url} setUrl={setUrl}/>}
        </div>
    )
}

export default ImageGrid
