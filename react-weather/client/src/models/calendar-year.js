class CalendarYear {
    constructor(
        year,
        isCurrentDecadeYear,
        isCurrentYear
    ) {
        this._year = year;
        this._isCurrentDecadeYear = isCurrentDecadeYear;
        this._isCurrentYear = isCurrentYear;
    }

    get year() {
        return this._year;
    }

    get isCurrentDecadeYear() {
        return this._isCurrentDecadeYear;
    }

    get isCurrentYear() {
        return this._isCurrentYear;
    }

    clone() {
        return new CalendarYear(
            this.year,
            this.isCurrentDecadeYear,
            this.isCurrentYear
        );
    }
}

export default CalendarYear;