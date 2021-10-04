import React from 'react'
import UseStorage from './hooks/UseStorage';

const ProgressBar = ({file,setFile}) => {
    console.log(file)
    const {progress,url} = UseStorage(file);

    return (
        <div className="progress-bar">
            {file && <div className="progress" style={{width:progress + '%'}}>
            {progress}%
            </div>}
        </div>
    )
}

export default ProgressBar
