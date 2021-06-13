let delay = 0;

const originalFetch = fetch;

window.fetch = (url, config) => { //intercepta o fetch para criar um delay fake
    return new Promise((resolve, reject) => {
        if (url.includes('?')) {
            if (url.charAt(url.length - 1) == '?')
                url += 'delay=' + delay;
            else
                url += '&delay=' + delay;
        }
        else {
            url += '?delay=' + delay;
        }

        console.log(url);
        originalFetch(url, config).then((data) => resolve(data)).catch(err => reject(err));
    })
}

const urlSearchParams = new URLSearchParams(window.location.search);
const _delay = urlSearchParams.get('delay');
if(_delay)
    delay = _delay;

export const purposefulDelay = {
    getDelay: () => { return delay },
    setDelay: (seconds) => { delay = seconds }
}