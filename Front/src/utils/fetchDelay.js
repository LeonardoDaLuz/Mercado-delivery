let delay = 0.2;

const originalFetch = fetch;

window.fetch = (url, config) => { //intercepta o fetch para criar um delay fake
    return new Promise((resolve, reject) => {

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

const urlSearchParams = new URLSearchParams(window.location.search);
const _delay = urlSearchParams.get('delay');
if (_delay)
    delay = _delay;

export const purposefulDelay = {
    getDelay: () => { return delay },
    setDelay: (seconds) => { delay = seconds }
}