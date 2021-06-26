const originalFetch = fetch;

let query = window.location.search;
if (query === '') {
    let hash = window.location.hash;
    let index = hash.indexOf('?');
    query = hash.substring(index, hash.length);
}
let browserURL = new URLSearchParams(query);
const delay = browserURL.get('delay');

window.fetch = (url, config) => { //intercepta o fetch para criar um delay fake

    return new Promise((resolve, reject) => {

        if (delay) {
            //prepara o que foi colocado nas querys da url
            if (url.includes('?')) {
                if (url.charAt(url.length - 1) == '?')
                    url += 'delay=' + delay;
                else
                    url += '&delay=' + delay;
            }
            else {
                url += '?delay=' + delay;
            }
        }

        originalFetch(url, config).then(async response => {
            if (response.ok) {
                resolve(response);
            }
            else {
                let text = await response.text();
                let responseClone = {
                    ok: response.ok,
                    status: response.status,
                    text: () => text,
                    json: () => JSON.stringify(text)
                }
                resolve(responseClone);
                let alertMessage = 'URL: ' + url + '\n\n' + text;
                setTimeout(() => alert(alertMessage), 500);

                let error = new Error();
                error.customMessage = alertMessage;
                throw error;
            }
        }
        ).catch(err => {
            console.error(err.customMessage);
            console.error(err.stack);
            reject(err)
        });
    })
}