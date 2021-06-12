export const uploadImages = () => {
    return new Promise(async function (resolve, reject) {

        console.log('Image Uploading...');

        var elemento = document.createElement("input");
        elemento.type = "file";
        elemento.setAttribute('multiple', "");
        elemento.onchange = async (e) => {

            let files = e.target.files;

            const formData = new FormData();

            const url = 'http://localhost:3001/imageUpload/';

            [...files].forEach((file, index) => formData.append('file' + index, file));

            const config = {
                method: 'POST',
                body: formData
            }

            let response = await fetch(url, config);
            if (response.ok) {
                let data = await response.json();
                console.log("Image Upload Success");
                resolve(data);
            } else {
                console.error("Image Upload Failure");
                reject("Image Upload Failure");
            }
        };

        elemento.click();
    })
}