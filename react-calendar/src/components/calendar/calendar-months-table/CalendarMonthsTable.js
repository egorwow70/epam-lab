import React from 'react';
import PropTypes from 'prop-types';
import CalendarTableMonth from './calendar-table-month/CalendarTableMonth';
import CalendarModel from '../../../models/calendar-model';
import withCalendarBlocks from '../../../hocs/withCalendarBlocks';
import CalendarTablesClassNames from '../../../models/calendar-tables-class-names';

function CalendarMonthsTable(props) {
    const calendarBlockList = props.getCalendarBlockList();
    const calendarMonthsTableClassName = CalendarTablesClassNames.CALENDAR_MONTHS_TABLE_DEFAULT_CLASS_NAME;

    return (
        <div 
            className={calendarMonthsTableClassName}>
            { calendarBlockList }
        </div>
    );
}

CalendarMonthsTable.propTypes = {
    currentCalendar: PropTypes.instanceOf(CalendarModel),
    onSwitchToThisMonth: PropTypes.func
}

export default  withCalendarBlocks(
    CalendarMonthsTable, 
    CalendarTableMonth, 
    CalendarTablesClassNames.CALENDAR_MONTHS_TABLE_DEFAULT_CLASS_NAME
);
