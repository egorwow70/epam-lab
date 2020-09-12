class CalendarMonth {
    constructor(
        month,
        year,
        isCurrentYearMonth,
        isCurrentMonth,
        monthName
    ) {
        this._month = month;
        this._year = year;
        this._isCurrentYearMonth = isCurrentYearMonth;
        this._isCurrentMonth = isCurrentMonth;
        this._monthName = monthName;
    }

    get month() {
        return this._month;
    }

    get year() {
        return this._year;
    }

    get isCurrentYearMonth() {
        return this._isCurrentYearMonth;
    }

    get isCurrentMonth() {
        return this._isCurrentMonth;
    }

    get monthName() {
        return this._monthName;
    }

    clone() {
        return new CalendarMonth(
            this.month,
            this.year,
            this.isCurrentYearMonth,
            this.isCurrentMonth,
            this.monthName
        )
    }
}

export default CalendarMonth;