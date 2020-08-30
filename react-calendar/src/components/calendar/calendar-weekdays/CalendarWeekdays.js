import React from 'react';
import CalendarWeekday from '../calendar-weekdays/calendar-weekday/CalendarWeekday';
import withCalendarBlocks from '../../../hocs/withCalendarBlocks';
import CalendarTablesClassNames from '../../../models/calendar-tables-class-names';

function CalendarWeekdays(props) {
    const calendarBlockList = props.getCalendarBlockList();
    const CalendarBlocksClassNames = CalendarTablesClassNames.CALENDAR_WEEKDAYS_DEFAULT_CLASS_NAME;

    return (
        <div className={CalendarBlocksClassNames}>
            { calendarBlockList }
        </div>
    );
}

export default withCalendarBlocks(
    CalendarWeekdays, 
    CalendarWeekday, 
    CalendarTablesClassNames.CALENDAR_WEEKDAYS_DEFAULT_CLASS_NAME
);