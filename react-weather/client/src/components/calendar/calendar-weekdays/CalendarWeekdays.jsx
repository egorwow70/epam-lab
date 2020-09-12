import React from 'react';
import CalendarWeekday from './calendar-weekday/CalendarWeekday';
import withCalendarBlocks from '../../../hocs/withCalendarBlocks';
import CalendarTablesClassNames from '../../../models/calendar/calendar-tables-class-names';
import PropTypes from 'prop-types';

function CalendarWeekdays({getCalendarBlockList}) {
    const calendarBlockList = getCalendarBlockList();
    const CalendarBlocksClassNames = CalendarTablesClassNames.CALENDAR_WEEKDAYS_DEFAULT_CLASS_NAME;

    return (
        <div className={CalendarBlocksClassNames}>
            {calendarBlockList}
        </div>
    );
}
CalendarWeekdays.propTypes = {
    getCalendarBlockList: PropTypes.func
}

export default withCalendarBlocks(
    CalendarWeekdays,
    CalendarWeekday,
    CalendarTablesClassNames.CALENDAR_WEEKDAYS_DEFAULT_CLASS_NAME
);