import CalendarDay from './calendar-day';
import RussianDate from '../date/russian-date';
import CalendarMonth from './calendar-month';
import CalendarYear from './calendar-year';

class CalendarModel {
    static WEEKDAYS_NUMBER = 7;
    static YEAR_MONTHS_NUMBER = 12;
    static DECADE_YEARS_NUMBER = 10;

    static WEEKDAYS = [
        'mo',
        'tu',
        'we',
        'th',
        'fr',
        'sa',
        'su',
    ];

    static CALENDAR_DAYS_NUMBER = 42;
    static CALENDAR_MONTHS_NUMBER = 16;
    static CALENDAR_YEARS_NUMBER = 16;

    constructor(date) {
        this._calendarDate = date;
        this._thisFirstMonthDayNumber = this._calendarDate.getFirstDayOfMonth();
        this._thisMonthDaysNumber = this._calendarDate.getDaysInMonth();
        this._startDecadeYearNumber = this._calendarDate.getStartDecadeYearNumber();
    }

    get calendarDate() {
        return this._calendarDate;
    }

    get calendarDays() {
        return this._calendarDays;
    }

    get calendarMonths() {
        return this._calendarMonths;
    }

    get calendarYears() {
        return this._calendarYears;
    }

    createCalendarDays() {
        this._calendarDays = new Array(CalendarModel.CALENDAR_DAYS_NUMBER);
        this._calendarDays = [...this._calendarDays].filter((calendarDay, index) => ++index);
    }

    createCurrentMonth() {
        let dayCounter = 0;
        this._calendarDays = [...this._calendarDays].map((calendarDay, index) => {
            const currentCalendarDayOptions = {};
            if (
                index + 1 >= this._thisFirstMonthDayNumber &&
                dayCounter < this._thisMonthDaysNumber
            ) {
                dayCounter++;
                const isCurrentDay = this.isCurrentDay(
                    dayCounter,
                    this._calendarDate.data.month,
                    this._calendarDate.data.year
                );
                currentCalendarDayOptions.dayNumber = dayCounter;
                currentCalendarDayOptions.month = this._calendarDate.data.month;
                currentCalendarDayOptions.year = this._calendarDate.data.year;
                currentCalendarDayOptions.isCurrentMonthDay = true;
                currentCalendarDayOptions.isCurrentDay = isCurrentDay;
                return this.getCurrentCalendarDay(currentCalendarDayOptions);
            } else {
                return this.getCurrentCalendarDay(currentCalendarDayOptions);
            }
        });
    }

    createPreviousMonth() {
        const previousMonthDate = this._calendarDate.getPreviousMonth();
        const previousMonthDateDaysNumber = previousMonthDate.getDaysInMonth();
        const previousMonthCalendarDaysNumber = CalendarModel.CALENDAR_DAYS_NUMBER -
            this._thisMonthDaysNumber -
            this._nextMonthCalendarDaysNumber;
        let dayCounter = previousMonthCalendarDaysNumber;
        this._calendarDays = [...this._calendarDays].map((calendarDay, index) => {
            const currentCalendarDayOptions = {};
            if (
                dayCounter > 0
            ) {
                const currentPreviousMonthCalendarDay = previousMonthDateDaysNumber - previousMonthCalendarDaysNumber + index + 1;
                dayCounter--;
                currentCalendarDayOptions.dayNumber = currentPreviousMonthCalendarDay;
                currentCalendarDayOptions.month = previousMonthDate.data.month;
                currentCalendarDayOptions.year = previousMonthDate.data.year;
                return this.getCurrentCalendarDay(currentCalendarDayOptions);
            } else {
                if (calendarDay instanceof CalendarDay) {
                    currentCalendarDayOptions.dayNumber = calendarDay.dayNumber;
                    currentCalendarDayOptions.month = calendarDay.month;
                    currentCalendarDayOptions.year = calendarDay.year;
                    currentCalendarDayOptions.isCurrentMonthDay = calendarDay.isCurrentMonthDay;
                    currentCalendarDayOptions.isCurrentDay = calendarDay.isCurrentDay;
                    return this.getCurrentCalendarDay(currentCalendarDayOptions);
                } else {
                    return null;
                }
            }
        });
    }

    createNextMonth() {
        const nextMonthDate = this._calendarDate.getNextMonth();
        const firstNumberOfNextMonthCalendarDay = this._thisMonthDaysNumber + this._thisFirstMonthDayNumber;
        let dayCounter = 0;
        this._calendarDays = [...this._calendarDays].map((calendarDay, index) => {
            const currentCalendarDayOptions = {};
            if (index + 1 >= firstNumberOfNextMonthCalendarDay) {
                dayCounter++;
                currentCalendarDayOptions.dayNumber = dayCounter;
                currentCalendarDayOptions.month = nextMonthDate.data.month;
                currentCalendarDayOptions.year = nextMonthDate.data.year;
                return this.getCurrentCalendarDay(currentCalendarDayOptions);
            } else {
                if (calendarDay instanceof CalendarDay) {
                    currentCalendarDayOptions.dayNumber = calendarDay.dayNumber;
                    currentCalendarDayOptions.month = calendarDay.month;
                    currentCalendarDayOptions.year = calendarDay.year;
                    currentCalendarDayOptions.isCurrentMonthDay = calendarDay.isCurrentMonthDay;
                    currentCalendarDayOptions.isCurrentDay = calendarDay.isCurrentDay;
                    return this.getCurrentCalendarDay(currentCalendarDayOptions);
                } else {
                    return null;
                }
            }
        });
        this._nextMonthCalendarDaysNumber = dayCounter;
    }

    createCalendarDaysTable() {
        this.createCalendarDays();
        this.createCurrentMonth();
        this.createNextMonth();
        this.createPreviousMonth();
    }

    createCalendarMonths() {
        this._calendarMonths = new Array(CalendarModel.CALENDAR_MONTHS_NUMBER);
        this._calendarMonths = [...this._calendarMonths].filter((calendarMonth, index) => ++index);
    }

    createCalendarMonthList() {
        let thisYearMonthCounter = 0;
        let nextYearMonthCounter = 0;
        this._calendarMonths = [...this._calendarMonths].map((calendarMonth, index) => {
            const currentCalendarMonthOptions = {};
            let shorcutMonthName;
            if (index < CalendarModel.YEAR_MONTHS_NUMBER) {
                thisYearMonthCounter++;
                const isCurrentMonth = this.isCurrentMonth(
                    thisYearMonthCounter,
                    this._calendarDate.data.year
                );
                shorcutMonthName = this.getCalendarMonthName(
                    thisYearMonthCounter,
                    this._calendarDate.data.year
                );
                currentCalendarMonthOptions.month = thisYearMonthCounter;
                currentCalendarMonthOptions.year = this._calendarDate.data.year;
                currentCalendarMonthOptions.isCurrentYearMonth = true;
                currentCalendarMonthOptions.isCurrentMonth = isCurrentMonth;
                currentCalendarMonthOptions.monthName = shorcutMonthName;
                return this.getCurrentCalendarMonth(currentCalendarMonthOptions);
            } else {
                nextYearMonthCounter++;
                shorcutMonthName = this.getCalendarMonthName(
                    nextYearMonthCounter,
                    this._calendarDate.data.year
                );
                currentCalendarMonthOptions.month = nextYearMonthCounter;
                currentCalendarMonthOptions.year = this._calendarDate.data.year + 1;
                currentCalendarMonthOptions.monthName = shorcutMonthName;
                return this.getCurrentCalendarMonth(currentCalendarMonthOptions);
            }
        });
    }

    createCalendarMonthsTable() {
        this.createCalendarMonths();
        this.createCalendarMonthList();
    }

    createCalendarYears() {
        this._calendarYears = new Array(CalendarModel.CALENDAR_YEARS_NUMBER);
        this._calendarYears = [...this._calendarYears].filter((calendarYear, index) => ++index);
    }

    createCalendarYearList() {
        const decade = 10;
        const startNextDecadeYearNumber = this._startDecadeYearNumber + decade;

        const indexToStartDecade = this.getIndexToStartCalendarDecade();
        let thisDecadeYearCounter = 0;
        let nextDecadeYearCounter = 0;
        let previousDecadeYearCounter = indexToStartDecade + 1;
        this._calendarYears = [...this._calendarYears].map((calendarYear, index) => {
            const currentCalendarYearOptions = {};
            if (
                thisDecadeYearCounter < CalendarModel.DECADE_YEARS_NUMBER &&
                index > indexToStartDecade
            ) {
                const yearNumber = this._startDecadeYearNumber + thisDecadeYearCounter;
                thisDecadeYearCounter++;
                const isCurrentYear = this.isCurrentYear(
                    yearNumber
                );
                currentCalendarYearOptions.year = yearNumber;
                currentCalendarYearOptions.isCurrentDecadeYear = true;
                currentCalendarYearOptions.isCurrentYear = isCurrentYear;
                return this.getCurrentCalendarYear(currentCalendarYearOptions);
            } else {
                if (index <= indexToStartDecade) {
                    const currentYearOfPreviousDecade = this._startDecadeYearNumber - previousDecadeYearCounter;
                    previousDecadeYearCounter--;
                    currentCalendarYearOptions.year = currentYearOfPreviousDecade;
                    return this.getCurrentCalendarYear(currentCalendarYearOptions);
                } else {
                    const currentYearOfNextDecade = startNextDecadeYearNumber + nextDecadeYearCounter;
                    nextDecadeYearCounter++;
                    currentCalendarYearOptions.year = currentYearOfNextDecade;
                    return this.getCurrentCalendarYear(currentCalendarYearOptions);
                }
            }
        });
    }

    createCalendarYearsTable() {
        this.createCalendarYears();
        this.createCalendarYearList();
    }

    isCurrentMonth(
        currentMonth,
        currentYear
    ) {
        const currentEuropeToday = new Date();
        const currentRussianToday = new RussianDate(currentEuropeToday);
        return currentRussianToday.data.month === currentMonth &&
            currentRussianToday.data.year === currentYear ?
            true :
            false;
    }

    isCurrentYear(
        year
    ) {
        const currentEuropeToday = new Date();
        return currentEuropeToday.getFullYear() === year ?
            true :
            false;
    }

    isCurrentDay(
        currentDay,
        currentMonth,
        currentYear
    ) {
        const currentEuropeToday = new Date();
        const currentRussianToday = new RussianDate(currentEuropeToday);
        return currentRussianToday.data.day === currentDay &&
            currentRussianToday.data.month === currentMonth &&
            currentRussianToday.data.year === currentYear ?
            true :
            false;
    }

    getCalendarMonthName(
        currentMonth,
        currentYear
    ) {
        const currentDate = new Date(currentYear, currentMonth - 1, 1);
        const stringDateInfo = currentDate.toString().split(' ');
        return stringDateInfo[1];
    }

    getIndexToStartCalendarDecade() {
        let minIndexToStartDecade = 0;
        let maxIndexToStartDecade = 3;
        minIndexToStartDecade = Math.ceil(minIndexToStartDecade);
        maxIndexToStartDecade = Math.floor(maxIndexToStartDecade);
        return Math.floor(
            Math.random() * (maxIndexToStartDecade - minIndexToStartDecade)
        ) + minIndexToStartDecade;
    }

    getCurrentCalendarDay({
        dayNumber,
        month,
        year,
        isCurrentMonthDay = false,
        isCurrentDay = false
    }) {
        return new CalendarDay(
            dayNumber,
            month,
            year,
            isCurrentMonthDay,
            isCurrentDay
        );
    }

    getCurrentCalendarMonth({
        month,
        year,
        isCurrentYearMonth = false,
        isCurrentMonth = false,
        monthName
    }) {
        return new CalendarMonth(
            month,
            year,
            isCurrentYearMonth,
            isCurrentMonth,
            monthName
        );
    }

    getCurrentCalendarYear({
        year,
        isCurrentDecadeYear = false,
        isCurrentYear = false
    }) {
        return new CalendarYear(
            year,
            isCurrentDecadeYear,
            isCurrentYear
        );
    }

    clone() {
        return new CalendarModel(this.calendarDate.clone());
    }
}

export default CalendarModel;