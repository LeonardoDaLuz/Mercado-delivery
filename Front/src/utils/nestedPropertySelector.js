export const nestedPropertySeletor = (parent, path) => {


    path = path.split('.');
    let cursorPropertyName = path[0];

    path.forEach((current, index) => {
        if (index > 0 && parent !== undefined) {
            parent = parent[path[index - 1]]
        }
        cursorPropertyName = current;
    })

    return {
        get: () => {

            if (cursorPropertyName === '') {
                return parent;
            }

            if (parent === undefined)
                return undefined;

            return parent[cursorPropertyName];
        },
        set: (value) => {

            if (parent === undefined)
                return undefined;

            let type = typeof parent[cursorPropertyName];

            switch (type) {
                case 'number':
                    parent[cursorPropertyName] = parseFloat(value);
                    break;
                case 'boolean':
                    if (typeof value === 'string')
                        value = value === 'true';

                    parent[cursorPropertyName] = value;
                    break;
                default:
                    parent[cursorPropertyName] = value;
            }

        }
    }
}