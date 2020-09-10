module.exports = class Temperature {
    static transformTemperature(degs) {
        const celsiusDegs = this.convertKelvinToCelcius(degs);
        const celsiusDegsWithDegreeSymbol = this.addDegreeSymbol(celsiusDegs);
        const transformedTemperature = this.addNumberSign(celsiusDegsWithDegreeSymbol);
        return transformedTemperature;
    }

    static convertKelvinToCelcius(degs) {
        const numbersToRoundAfterPoint = 1;
        const differenceBetweenCelciusAndKelvin = 273.15;
        const celsiusDegs = (degs - differenceBetweenCelciusAndKelvin).toFixed(numbersToRoundAfterPoint);
        return celsiusDegs;
    }

    static addDegreeSymbol(degs) {
        const unicDegreeNumber = 176;
        return `${degs}${String.fromCharCode(unicDegreeNumber)}`
    }

    static addNumberSign(degs) {
        let signSymbol;
        const decimalNumberSystem = 10;
        const degsNumberWithoutDegsSymbol = parseInt(degs.slice(0, degs.length - 1), decimalNumberSystem);
        signSymbol = (degsNumberWithoutDegsSymbol === 0 || degsNumberWithoutDegsSymbol < 0) 
            ? '' 
            : '+';
        return `${signSymbol}${degs}`;
    }
}