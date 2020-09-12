import React from 'react';
import CalendarMonthsTable from './calendar-months-table/CalendarMonthsTable';
import CalendarYearsTable from './calendar-years-table/CalendarYearsTable';
import CalendarHeader from './calendar-header/CalendarHeader';
import CalendarWeekdays from './calendar-weekdays/CalendarWeekdays';
import CalendarDaysTable from './calendar-days-table/CalendarDaysTable';
import PropTypes from 'prop-types';
import CalendarModel from '../../models/calendar/calendar-model';
import RussianDate from '../../models/date/russian-date';

function Calendar({
    currentCalendar,
    currentCalendarDate,
    onCalendarMonthMode,
    onCalendarYearsMode,
    isSwitchedToMonthsTable,
    isSwitchedToYearsTable,
    onPreviousMonthChange,
    onNextMonthChange,
    onPreviousYearChange,
    onNextYearChange,
    onPreviousDecadeChange,
    onNextDecadeChange,
    onSwitchToThisMonth,
    onSwitchToThisYear
}) {
    return (
        <div className="-app-calendar-wrapper">
            <CalendarHeader
                currentCalendarDate={currentCalendarDate.clone()}
                onNextMonthChange={onNextMonthChange}
                onPreviousMonthChange={onPreviousMonthChange}
                onNextYearChange={onNextYearChange}
                onPreviousYearChange={onPreviousYearChange}
                onNextDecadeChange={onNextDecadeChange}
                onPreviousDecadeChange={onPreviousDecadeChange}
                onCalendarMonthMode={onCalendarMonthMode}
                onCalendarYearsMode={onCalendarYearsMode}
                isSwitchedToMonthsTable={isSwitchedToMonthsTable}
                isSwitchedToYearsTable={isSwitchedToYearsTable} />
            {
                Boolean(!isSwitchedToMonthsTable) &&
                Boolean(!isSwitchedToYearsTable) &&
                <CalendarWeekdays />
            }
            {
                Boolean(!isSwitchedToMonthsTable) &&
                Boolean(!isSwitchedToYearsTable) &&
                <CalendarDaysTable currentCalendar={currentCalendar.clone()} />
            }
            {
                Boolean(isSwitchedToMonthsTable) &&
                Boolean(!isSwitchedToYearsTable) &&
                <CalendarMonthsTable
                    currentCalendar={currentCalendar.clone()}
                    onSwitchToThisMonth={onSwitchToThisMonth} />
            }
            {
                Boolean(isSwitchedToYearsTable) &&
                Boolean(!isSwitchedToMonthsTable) &&
                <CalendarYearsTable
                    currentCalendar={currentCalendar.clone()}
                    onSwitchToThisYear={onSwitchToThisYear} />
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