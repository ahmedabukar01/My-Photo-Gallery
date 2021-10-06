import React from 'react'

const Models = ({url,setUrl}) => {
    const backend = (e) =>{
        if(e.target.classList.contains('backend')){
            setUrl(null)
        }
    }
    return (
        <div className="backend" onClick={(e)=>backend(e)}>
            <img src={url} alt="image" />
        </div>
    )
}

export default Models
