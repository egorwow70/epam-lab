import React from 'react';
import PropTypes from 'prop-types';
import CalendarModel from '../../../models/calendar-model';
import CalendarTableYear from './calendar-table-year/CalendarTableYear';
import withCalendarBlocks from '../../../hocs/withCalendarBlocks';
import CalendarTablesClassNames from '../../../models/calendar-tables-class-names';

function CalendarYearsTable(props) {
    const calendarBlockList = props.getCalendarBlockList();
    const calendarYearsTableClassName = CalendarTablesClassNames.CALENDAR_YEARS_TABLE_DEFAULT_CLASS_NAME;

    return (
        <div 
            className={calendarYearsTableClassName}>
            { calendarBlockList }
        </div>
    );
}

CalendarYearsTable.propTypes = {
    currentCalendar: PropTypes.instanceOf(CalendarModel),
    onSwitchToThisYear: PropTypes.func
}

export default withCalendarBlocks(
    CalendarYearsTable, 
    CalendarTableYear, 
    CalendarTablesClassNames.CALENDAR_YEARS_TABLE_DEFAULT_CLASS_NAME
);