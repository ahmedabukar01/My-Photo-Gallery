import React from 'react'
import UseFirestore from './hooks/UseFirestore'

const ImageGrid =  () => {
    const {docs} = UseFirestore('images');
    console.log(docs,'how')
    return (
        <div className="image-grid">
            {docs && docs.map((doc)=>(
                <img key={doc.id} src={doc.url} alt="image" />
            ))}
        </div>
    )
}

export default ImageGrid
