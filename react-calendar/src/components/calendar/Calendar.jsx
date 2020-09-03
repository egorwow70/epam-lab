import React from 'react';
import CalendarMonthsTable from './calendar-months-table/CalendarMonthsTable';
import CalendarYearsTable from './calendar-years-table/CalendarYearsTable';
import CalendarHeader from './calendar-header/CalendarHeader';
import CalendarWeekdays from './calendar-weekdays/CalendarWeekdays';
import CalendarDaysTable from './calendar-days-table/CalendarDaysTable';
import PropTypes from 'prop-types';
import CalendarModel from '../../models/calendar-model';
import RussianDate from '../../models/russian-date';

function Calendar(props) {
    return (
        <div className="-app-calendar-wrapper">
            <CalendarHeader
                currentCalendarDate={props.currentCalendarDate.clone()}
                onNextMonthChange={props.onNextMonthChange}
                onPreviousMonthChange={props.onPreviousMonthChange}
                onNextYearChange={props.onNextYearChange}
                onPreviousYearChange={props.onPreviousYearChange}
                onNextDecadeChange={props.onNextDecadeChange}
                onPreviousDecadeChange={props.onPreviousDecadeChange}
                onCalendarMonthMode={props.onCalendarMonthMode}
                onCalendarYearsMode={props.onCalendarYearsMode}
                isSwitchedToMonthsTable={props.isSwitchedToMonthsTable}
                isSwitchedToYearsTable={props.isSwitchedToYearsTable} />
            {
                Boolean(!props.isSwitchedToMonthsTable) &&
                Boolean(!props.isSwitchedToYearsTable) &&
                <CalendarWeekdays />
            }
            {
                Boolean(!props.isSwitchedToMonthsTable) &&
                Boolean(!props.isSwitchedToYearsTable) &&
                <CalendarDaysTable currentCalendar={props.currentCalendar.clone()} />
            }
            {
                Boolean(props.isSwitchedToMonthsTable) &&
                Boolean(!props.isSwitchedToYearsTable) &&
                <CalendarMonthsTable
                    currentCalendar={props.currentCalendar.clone()}
                    onSwitchToThisMonth={props.onSwitchToThisMonth} />
            }
            {
                Boolean(props.isSwitchedToYearsTable) &&
                Boolean(!props.isSwitchedToMonthsTable) &&
                <CalendarYearsTable
                    currentCalendar={props.currentCalendar.clone()}
                    onSwitchToThisYear={props.onSwitchToThisYear} />
            }
        </div>
    );
}

Calendar.propTypes = {
    currentCalendar: PropTypes.instanceOf(CalendarModel),
    currentCalendarDate: PropTypes.instanceOf(RussianDate),
    onCalendarMonthMode: PropTypes.func,
    onCalendarYearsMode: PropTypes.func,
    isSwitchedToMonthsTable: PropTypes.bool,
    isSwitchedToYearsTable: PropTypes.bool,
    onPreviousMonthChange: PropTypes.func,
    onNextMonthChange: PropTypes.func,
    onPreviousYearChange: PropTypes.func,
    onNextYearChange: PropTypes.func,
    onPreviousDecadeChange: PropTypes.func,
    onNextDecadeChange: PropTypes.func,
    onSwitchToThisMonth: PropTypes.func,
    onSwitchToThisYear: PropTypes.func
}

export default React.memo(Calendar);