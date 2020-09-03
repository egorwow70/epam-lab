import React from 'react';
import CalendarData from './calendar-data/CalendarData';
import CalendarSwitcher from './calendar-switcher/CalendarSwitcher';
import PropTypes from 'prop-types';
import RussianDate from '../../../models/russian-date';

function CalendarHeader(props) {
    return (
        <div className="-app-calendar__header">
            <div className="-app-calendar__header-wrapper">
                <h2 className="-app-calendar__header-title">
                    <CalendarData 
                        currentCalendarDate = { props.currentCalendarDate.clone() }
                        onCalendarMonthMode = { props.onCalendarMonthMode }
                        onCalendarYearsMode = { props.onCalendarYearsMode }
                        isSwitchedToMonthsTable = { props.isSwitchedToMonthsTable }
                        isSwitchedToYearsTable = { props.isSwitchedToYearsTable }/>
                </h2>
                <CalendarSwitcher 
                    onPreviousMonthChange = { props.onPreviousMonthChange }
                    onNextMonthChange = { props.onNextMonthChange }
                    onPreviousYearChange = { props.onPreviousYearChange }
                    onNextYearChange = { props.onNextYearChange }
                    onPreviousDecadeChange = { props.onPreviousDecadeChange }
                    onNextDecadeChange = { props.onNextDecadeChange }
                    isSwitchedToMonthsTable = { props.isSwitchedToMonthsTable }
                    isSwitchedToYearsTable = { props.isSwitchedToYearsTable }/>
            </div>
        </div>
    );
}

CalendarHeader.propTypes = {
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
    onNextDecadeChange: PropTypes.func
}

export default React.memo(CalendarHeader);