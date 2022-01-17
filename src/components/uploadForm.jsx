import React, { Component } from "react";
import axios from "axios";

class UploadForm extends Component {
    state = { selectedFile: null };

    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        });
    };

    fileUploadHandler = () => {
        const formData = new FormData();
        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        const uploadURL = "http://localhost:5000/submitUpload";

        axios
            .post(uploadURL, formData, {
                onUploadProgress: (progressEvent) => {
                    console.log(
                        "Upload Progress: " +
                            (progressEvent.loaded / progressEvent.total) * 100 +
                            "%"
                    );
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.status == 200) {
                    return <h1>YA TA! SUCCESS~</h1>;
                }
            });
    };

    render() {
        return (
            <div className="container">
                <h3>Upload Form</h3>
                <p>Go ahead and select a file to upload.</p>
                <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload File</button>
                <p>File Upload Progress #TODO</p>
            </div>
        );
    }
}
export default UploadForm;
