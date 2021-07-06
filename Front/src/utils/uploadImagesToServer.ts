/**
 * 
 * @param {*} multiple Indicate if will upload multiple images
 * @param {*} onStartUploadCallback callback that fires when the upload starts
 * @returns 
 */
export const uploadImages = (multiple: boolean = true, onStartUploadCallback: Function) => {
    return new Promise<[string] | string>(async function (resolve, reject) {

        console.log('Image Uploading...');

        var elemento = document.createElement("input");
        elemento.type = "file";

        if (multiple)
            elemento.setAttribute('multiple', "");

        elemento.onchange = async (e) => {

            if (onStartUploadCallback)
                onStartUploadCallback();

            let files = (e.target as HTMLInputElement).files as FileList;

            const formData = new FormData();

            const url = 'http://localhost:3001/imageUpload/';

            Array.from(files).forEach((file, index) => formData.append('file' + index, file));

            const config = {
                method: 'POST',
                body: formData
            }

            let response = await fetch(url, config);
            if (response.ok) {
                let data = await response.json();
                console.log("Image Upload Success");

                console.log('data', data);
                if (multiple)
                    resolve(data);
                else
                    resolve(data[0]);
            } else {
                console.error("Image Upload Failure");
                reject("Image Upload Failure");
            }
        };

        elemento.click();
    })
}