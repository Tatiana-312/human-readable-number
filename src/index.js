module.exports = function toReadable (number) {
    const arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arrDozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    if (number < 20) {
        const result = arr[number];
        return result;
    } else if (number >= 20 && number < 100) {
        const readableDozens = arrDozens[Math.floor(number / 10)];
        const readableUnits = arr[number % 10];
        if (readableUnits === 'zero') {
            const result = `${readableDozens}`;
            return result;
        }
        const result = `${readableDozens} ${readableUnits}`;
        return result;
    } else if (number >= 100) {
        if (number % 100 < 20 && number % 100 !== 0) {
            const readableHundreds = arr[Math.floor(number / 100)];
            const readableDozens = arr[number % 100];
            const result = `${readableHundreds} hundred ${readableDozens}`;
            return result;
        } else if (number % 100 === 0) {
            const readableHundreds = arr[Math.floor(number / 100)];
            const result = `${readableHundreds} hundred`;
            return result;
        }
        const readableHundreds = arr[Math.floor(number / 100)];
        const readableDozens = arrDozens[(Math.floor(number / 10)) % 10];
        const readableUnits = arr[number % 10];
        if (readableUnits === 'zero') {
            const result = `${readableHundreds} hundred ${readableDozens}`;
            return result;
        } else {
            const result = `${readableHundreds} hundred ${readableDozens} ${readableUnits}`;
            return result;
        }
    }
}
