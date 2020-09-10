module.exports = class Time {
    static weekdaysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    static getLocalTimeFromUTCTime(timeInSec) {
        const currentDate = Time.getLocalDateFromUTCTime(timeInSec);
        const strTime = currentDate.toLocaleTimeString();
        const validSymbolNumbOfTimeStr = 8;
        return (strTime.length < validSymbolNumbOfTimeStr) 
            ? '0' + strTime 
            : strTime;
    }

    static getLocalMiddayFromUTCTime(timeInSec) {
        const currentDate = Time.getLocalDateFromUTCTime(timeInSec);
        return Time.weekdaysNames[currentDate.getDay()];
    }

    static getLocalDataFromUTCTime(timeInSec) {
        const currentDate = Time.getLocalDateFromUTCTime(timeInSec);

        const dateOptions = {
            month: "long",
        };
        const monthName = currentDate.toLocaleString("en-US", dateOptions);
        const needMonthLetterNumber = 3;
        const shortCutMonthName = monthName.slice(0, needMonthLetterNumber);
        const dateNumber = currentDate.getDate();
        return `${dateNumber} ${shortCutMonthName}`;
    }

    static getLocalDateFromUTCTime(timeInSec) {
        const thousand = 1000;
        const currentDate = new Date(timeInSec * thousand);
        return currentDate;
    }
}