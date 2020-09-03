import Data from "./data";
import CalendarModel from "./calendar-model";

class RussianDate {
    constructor(date) {
        const currentRussianDateDay = date.getDate();
        const currentRussianDateMonth = date.getMonth() + 1;
        const currentRussianDateYear = date.getFullYear();
        this._data = new Data(
            currentRussianDateDay,
            currentRussianDateMonth,
            currentRussianDateYear,
        );
    }

    get data() {
        return this._data;
    }

    getDaysInMonth() {
        const magicNumberOfNextMonthDay = 32;
        return magicNumberOfNextMonthDay - new Date(
            this._data.year,
            this._data.month - 1,
            magicNumberOfNextMonthDay
        ).getDate();
    }

    getFirstDayOfMonth() {
        const previousMonthEuropeDate = new Date(
            this._data.year,
            this._data.month - 1,
            1
        );
        return (previousMonthEuropeDate.getDay() === 0) 
            ? CalendarModel.WEEKDAYS_NUMBER 
            : previousMonthEuropeDate.getDay();
    }

    getPreviousMonth() {
        const previousMonthEuropeDate = new Date(
            this._data.year,
            this._data.month - 2,
            1
        );
        return new RussianDate(previousMonthEuropeDate);
    }

    getNextMonth() {
        const nextMonthEuropeDate = new Date(this._data.year, this._data.month, 1);
        return new RussianDate(nextMonthEuropeDate);
    }

    getMonthName() {
        const dateOptions = {
            month: "long",
        };

        const currentEuropeDate = new Date(
            this._data.year,
            this._data.month - 1,
            this._data.day
        );
        return currentEuropeDate.toLocaleString("en-US", dateOptions);
    }

    getDataName() {
        const currentMonthName = this.getMonthName();
        const currentYear = this._data.year;
        return `${currentMonthName} ${currentYear}`;
    }

    getStartDecadeYearNumber() {
        const currentStringYear = `${this._data.year}`;
        const decade = 10;
        return Number(currentStringYear.slice(0, currentStringYear.length - 1)) * decade;
    }

    getDecadeDiapazon() {
        return `${this.getStartDecadeYearNumber()} - ${this.getStartDecadeYearNumber() + 9}`;
    }

    clone() {
        const currentEuropeDate = new Date(this.data.year, this.data.month - 1, this.data.day);
        return new RussianDate(currentEuropeDate);
    }
}

export default RussianDate;