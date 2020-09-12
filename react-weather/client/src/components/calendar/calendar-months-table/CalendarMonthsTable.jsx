import React from 'react';
import PropTypes from 'prop-types';
import CalendarTableMonth from './calendar-table-month/CalendarTableMonth';
import withCalendarBlocks from '../../../hocs/withCalendarBlocks';
import CalendarTablesClassNames from '../../../models/calendar/calendar-tables-class-names';

function CalendarMonthsTable({getCalendarBlockList}) {
    const calendarBlockList = getCalendarBlockList();
    const calendarMonthsTableClassName = CalendarTablesClassNames.CALENDAR_MONTHS_TABLE_DEFAULT_CLASS_NAME;

    return (
        <div
            className={calendarMonthsTableClassName}>
            {calendarBlockList}
        </div>
    );
}

CalendarMonthsTable.propTypes = {
    getCalendarBlockList: PropTypes.func
}

export default withCalendarBlocks(
    CalendarMonthsTable,
    CalendarTableMonth,
    CalendarTablesClassNames.CALENDAR_MONTHS_TABLE_DEFAULT_CLASS_NAME
);
