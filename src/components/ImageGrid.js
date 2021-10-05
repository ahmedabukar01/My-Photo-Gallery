import React from 'react'
import UseFirestore from './hooks/UseFirestore'

const ImageGrid =  () => {
    const {docs} = UseFirestore('images');
    console.log(docs,'how')

    return (
        <div className="image-grid container">
            {docs && docs.map((doc)=>(
                <div className="wrap-image">
                    <img key={doc.id} src={doc.url} alt="image" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
