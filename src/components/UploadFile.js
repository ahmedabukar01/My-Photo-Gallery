import React from 'react'

export const UploadFile = () => {
    return (
        <form className="upload-file container">
            <div className="fields">
                <input type="file" id="file" />
                <label for="file">
                    <i className="fas fa-upload"></i>
                    Upload Photo
                </label>
            </div>
        </form>
    )
}

export default UploadFile;