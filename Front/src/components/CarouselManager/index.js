import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CenterContainer } from '../../globalStyleds';


function CarouselManager_() {

    function handleInput(e) {
        filesUpload(e.target.files);
    }

    function filesUpload(files) {
        const url = 'http://localhost:3001/carousel/addImages';
        const formData = new FormData();

        [...files].forEach((file, index) => formData.append('file'+index, file));  

        const config = {
            method: 'POST',
            body: formData
        }
        fetch(url, config)
            .then(response => response.text())
            .then(response => { console.log('deu'); console.log(response) })
            .catch(err => console.log(err));

    }

    return (
        <CenterContainer>
            <form method="post" action="http://localhost:3001/carousel/addImages" encType="multipart/form-data">
                Upload Image
                <input type="file" name="files" accept=".jpg,.jpeg,.png"multiple onChange={handleInput} />
                <button type="submit">Upload</button>
            </form>
        </CenterContainer>
    )
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({}, dispatch);

const mapStateToProps = (store) => ({

});

export const CarouselManager = connect(mapStateToProps, mapDispatchToProps)(CarouselManager_);
