import Color from 'color';

const _colorTheme = {
    contentBackground: 'white',
    contentText: 'black',
    siteBackground: 'rgb(244, 244, 244)',
    primary: '#0dad0d',
    secondary: '#2457D0',
    tertiary: '#41aea9',
    neutral: 'grey',
    lightPrimary: '#c4ffc4',
    primaryComplementary: 'rgb(137, 137, 137)',
    secondary: '#2457D0',
    lightSecondary: 'blue',
    background: 'rgb(244, 244, 244)',
    text: 'black',
    complementaryText: '#a1a1a1',
    hilightText: 'rgb(2, 157, 2)',
}

function createAdvancedColorThemeObject(themeObject) {
    let newObj = {};
    let _bakedColors = {};
    let hslValues = {}
    let keys = Object.keys(themeObject);
    keys.forEach(key => {
        hslValues[key] = Color(themeObject[key]).hsl().color;
        newObj[key] = function (weight = 500) {
            if (typeof weight === 'object') {
                return themeObject[key];
            } else {
                let lightness = (((1000 - weight) / 1000) - 0.5) * 100;
                return `hsl(${hslValues[key][0]},${hslValues[key][1]}%,${hslValues[key][2] + lightness}%)`;
            }
        }
    })
    console.log(newObj)
    return newObj;
}

export const colorTheme = createAdvancedColorThemeObject(_colorTheme);