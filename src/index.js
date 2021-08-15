module.exports = function toReadable (number) {
    const arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arrDozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    if (number < 20) {
        return arr[number];
    }

    if (number < 100) {
        const readableDozens = arrDozens[Math.floor(number / 10)];
        const readableUnits = arr[number % 10];
        return readableUnits === "zero"
            ? `${readableDozens}`
            : `${readableDozens} ${readableUnits}`;
    }

    if (number >= 100) {
        const readableHundreds = arr[Math.floor(number / 100)];
        if (number % 100 < 20 && number % 100 !== 0) {
            const readableDozens = arr[number % 100];
            return `${readableHundreds} hundred ${readableDozens}`;
        }
        
        if (number % 100 === 0) {
            return `${readableHundreds} hundred`;
        }
        const readableDozens = arrDozens[Math.floor(number / 10) % 10];
        const readableUnits = arr[number % 10];
        return readableUnits === "zero"
            ? `${readableHundreds} hundred ${readableDozens}`
            : `${readableHundreds} hundred ${readableDozens} ${readableUnits}`;
    }
}
