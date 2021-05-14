window.waitForSeconds = function (seconds) {
    return new Promise((resolve, reject)=> setTimeout(()=>resolve(), seconds*1000));
};

window.waitForEndOfFrame = function () {
    return new Promise((resolve, reject)=> setTimeout(()=>resolve(), 16));
};


export default window.waitForSeconds;