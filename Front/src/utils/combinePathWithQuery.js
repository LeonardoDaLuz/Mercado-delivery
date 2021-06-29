export function combinePathWithQuery(path, query) {

    if (path.charAt(path.length - 1) === '?') {
        path = path.replace('?','')
    }

    if (path.charAt(path.length - 1) !== '/') {
        path += '/';
    }

    if (query.charAt(0) !== '?') {
        query = '?' + query;
    }

    return path+query;
}