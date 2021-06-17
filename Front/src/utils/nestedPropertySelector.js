export const nestedPropertySeletor = (parent, path) => {
    path = path.split('.');
    let cursorPropertyName = path[0];

    path.forEach((current, index) => {
        if (index > 0) {
            parent = parent[path[index - 1]]
        }
        cursorPropertyName = current;
    })

    return {
        get: () => parent[cursorPropertyName],
        set: (value) => {
            let type = typeof parent[cursorPropertyName];
            console.log('type',type);
            switch(type) {
                case 'number':
                    parent[cursorPropertyName] = parseFloat(value);
                    break;
                default:
                    parent[cursorPropertyName] = value;
            }
          
        }
    }
}