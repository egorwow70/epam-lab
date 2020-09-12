import React from 'react';
import PropTypes from 'prop-types';
import RussianDate from '../../../../models/date/russian-date'

function CalendarData({
    currentCalendarDate,
    onCalendarMonthMode,
    onCalendarYearsMode,
    isSwitchedToMonthsTable,
    isSwitchedToYearsTable,
}) {
    function switchToCalendarMonthsTable() {
        onCalendarMonthMode();
    }

    function switchToCalendarYearsTable() {
        onCalendarYearsMode();
    }

    return (
        <div className="-app-calendar__data">
            {Boolean(isSwitchedToMonthsTable) &&
                <div
                    className="-app-calendar__data-info"
                    onClick={() => switchToCalendarYearsTable()}>
                    {currentCalendarDate.data.year}
                </div>
            }
            {
                Boolean(!isSwitchedToMonthsTable) &&
                Boolean(!isSwitchedToYearsTable) &&
                <div
                    className="-app-calendar__data-info"
                    onClick={() => switchToCalendarMonthsTable()}>
                    {currentCalendarDate.getDataName()}
                </div>
            }
            {
                Boolean(isSwitchedToYearsTable) &&
                <div className="-app-calendar__data-info -app-calendar__data-info_with-default-cursor">
                    {currentCalendarDate.getDecadeDiapazon()}
                </div>
            }
        </div>
    );
}

CalendarData.propTypes = {
    currentCalendarDate: PropTypes.instanceOf(RussianDate),
    onCalendarMonthMode: PropTypes.func,
    onCalendarYearsMode: PropTypes.func,
    isSwitchedToMonthsTable: PropTypes.bool,
    isSwitchedToYearsTable: PropTypes.bool,
}

export default React.memo(CalendarData);