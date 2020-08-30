import React from 'react';
import PropTypes from 'prop-types';
import CalendarModel from '../../../models/calendar-model';
import withCalendarBlocks from '../../../hocs/withCalendarBlocks';
import CalendarTableDay from './calendar-table-day/CalendarTableDay';
import CalendarTablesClassNames from '../../../models/calendar-tables-class-names';

function CalendarDaysTable(props) {
    const calendarBlockList = props.getCalendarBlockList();
    const calendarDaysTableClassName = CalendarTablesClassNames.CALENDAR_DAYS_TABLE_DEFAULT_CLASS_NAME;

    return (
        <div 
            className={calendarDaysTableClassName}>
            { calendarBlockList }
        </div>
    );
}

CalendarDaysTable.propTypes = {
    currentCalendar: PropTypes.instanceOf(CalendarModel)
}

export default withCalendarBlocks(
    CalendarDaysTable, 
    CalendarTableDay, 
    CalendarTablesClassNames.CALENDAR_DAYS_TABLE_DEFAULT_CLASS_NAME
);