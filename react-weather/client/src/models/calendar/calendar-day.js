class CalendarDay {
    constructor(
        dayNumber,
        month,
        year,
        isCurrentMonthDay,
        isCurrentDay
    ) {
        this._dayNumber = dayNumber;
        this._month = month;
        this._year = year;
        this._isCurrentMonthDay = isCurrentMonthDay;
        this._isCurrentDay = isCurrentDay;
    }

    get dayNumber() {
        return this._dayNumber;
    }

    get isCurrentMonthDay() {
        return this._isCurrentMonthDay;
    }

    get isCurrentDay() {
        return this._isCurrentDay;
    }

    get month() {
        return this._month;
    }

    get year() {
        return this._year;
    }

    clone() {
        return new CalendarDay(
            this.dayNumber,
            this.month,
            this.year,
            this.isCurrentMonthDay,
            this.isCurrentDay
        );
    }
}

export default CalendarDay;