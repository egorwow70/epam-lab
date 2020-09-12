import React from 'react';
import RussianDate from '../../models/date/russian-date';
import PropTypes from 'prop-types';
import CalendarModel from '../../models/calendar/calendar-model';
import Calendar from './Calendar';

class CalendarContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        const currentCalendar = new CalendarModel(this.props.todayRussianDate);
        this.state = {
            currentCalendar: currentCalendar.clone(),
            currentCalendarDate: currentCalendar.calendarDate.clone(),
            isSwitchedToMonthsTable: false,
            isSwitchedToYearsTable: false
        };

        this.switchToPreviousMonth = this.switchToPreviousMonth.bind(this);
        this.switchToNextMonth = this.switchToNextMonth.bind(this);

        this.switchToPreviousYear = this.switchToPreviousYear.bind(this);
        this.switchToNextYear = this.switchToNextYear.bind(this);

        this.switchToPreviousDecade = this.switchToPreviousDecade.bind(this);
        this.switchToNextDecade = this.switchToNextDecade.bind(this);

        this.switchToCalendarMonthsTable = this.switchToCalendarMonthsTable.bind(this);
        this.switchToCalendarYearsTable = this.switchToCalendarYearsTable.bind(this);

        this.switchToThisMonth = this.switchToThisMonth.bind(this);
        this.switchToThisYear = this.switchToThisYear.bind(this);
    }

    switchToNextMonth() {
        const nextMonthEuropeDate = new Date(
            this.state.currentCalendarDate.data.year,
            this.state.currentCalendarDate.data.month,
            this.state.currentCalendarDate.data.day
        );
        this.switchCalendarState(nextMonthEuropeDate);
    }

    switchToPreviousMonth() {
        const previousMonthEuropeDate = new Date(
            this.state.currentCalendarDate.data.year,
            this.state.currentCalendarDate.data.month - 2,
            this.state.currentCalendarDate.data.day
        );
        this.switchCalendarState(previousMonthEuropeDate);
    }

    switchToPreviousYear() {
        const previousYearEuropeDate = new Date(
            this.state.currentCalendarDate.data.year - 1,
            this.state.currentCalendarDate.data.month - 1,
            this.state.currentCalendarDate.data.day
        );
        this.switchCalendarState(previousYearEuropeDate);
    }

    switchToNextYear() {
        const nextYearEuropeDate = new Date(
            this.state.currentCalendarDate.data.year + 1,
            this.state.currentCalendarDate.data.month - 1,
            this.state.currentCalendarDate.data.day
        );
        this.switchCalendarState(nextYearEuropeDate);
    }

    switchToPreviousDecade() {
        const previousDecadeEuropeDate = new Date(
            this.state.currentCalendarDate.data.year - 10,
            this.state.currentCalendarDate.data.month,
            this.state.currentCalendarDate.data.day
        );
        this.switchCalendarState(previousDecadeEuropeDate);
    }

    switchToNextDecade() {
        const nextDecadeEuropeDate = new Date(
            this.state.currentCalendarDate.data.year + 10,
            this.state.currentCalendarDate.data.month,
            this.state.currentCalendarDate.data.day
        );
        this.switchCalendarState(nextDecadeEuropeDate);
    }

    switchToCalendarDaysTable() {
        this.setState(state => ({
            ...state,
            isSwitchedToMonthsTable: false,
            isSwitchedToYearsTable: false
        }))
    }

    switchToCalendarMonthsTable() {
        this.setState(state => ({
            ...state,
            isSwitchedToMonthsTable: true,
            isSwitchedToYearsTable: false
        }))
    }

    switchToCalendarYearsTable() {
        this.setState(state => ({
            ...state,
            isSwitchedToMonthsTable: false,
            isSwitchedToYearsTable: true
        }))
    }

    switchToThisMonth(month, year) {
        const europeDate = new Date(
            year,
            month - 1,
            this.state.currentCalendarDate.data.day
        );
        this.switchCalendarState(europeDate);
        this.switchToCalendarDaysTable();
    }

    switchToThisYear(year) {
        const europeDate = new Date(
            year,
            this.state.currentCalendarDate.data.month,
            this.state.currentCalendarDate.data.day
        );
        this.switchCalendarState(europeDate);
        this.switchToCalendarMonthsTable();
    }

    switchCalendarState(europeDate) {
        const currentDate = new RussianDate(europeDate);
        const currentCalendar = new CalendarModel(currentDate);
        this.setState(state => ({
            ...state,
            currentCalendar: currentCalendar.clone(),
            currentCalendarDate: currentCalendar.calendarDate.clone()
        }));
    }

    render() {
        return (
            <div className="-app-calendar">
                <Calendar
                    currentCalendarDate={this.state.currentCalendarDate.clone()}
                    onNextMonthChange={this.switchToNextMonth}
                    onPreviousMonthChange={this.switchToPreviousMonth}
                    onNextYearChange={this.switchToNextYear}
                    onPreviousYearChange={this.switchToPreviousYear}
                    onNextDecadeChange={this.switchToNextDecade}
                    onPreviousDecadeChange={this.switchToPreviousDecade}
                    onCalendarMonthMode={this.switchToCalendarMonthsTable}
                    onCalendarYearsMode={this.switchToCalendarYearsTable}
                    isSwitchedToMonthsTable={this.state.isSwitchedToMonthsTable}
                    isSwitchedToYearsTable={this.state.isSwitchedToYearsTable}
                    currentCalendar={this.state.currentCalendar.clone()}
                    onSwitchToThisMonth={this.switchToThisMonth}
                    onSwitchToThisYear={this.switchToThisYear} />
            </div>
        )
    }
}

CalendarContainer.propTypes = {
    todayRussianDate: PropTypes.instanceOf(RussianDate)
};

export default CalendarContainer;