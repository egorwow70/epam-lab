import React from 'react';
import PropTypes from 'prop-types';
import CalendarYear from '../../../../models/calendar/calendar-year';
import withStylesCalendarBlock from '../../../../hocs/withStylesCalendarBlock';
import CalendarBlocksClassNames from '../../../../models/calendar/calendar-blocks-class-names';

function CalendarTableYear({
    calendarBlock,
    onSwitchToThisYear,
    getCalendarBlockStyles
}) {
    function switchToThisYear(year) {
        onSwitchToThisYear(year);
    }

    const currentCaledarYear = calendarBlock;
    const calendarYearStyles = getCalendarBlockStyles(currentCaledarYear.clone());

    return (
        <li
            className={calendarYearStyles.join(' ')}
            onClick={() => switchToThisYear(
                currentCaledarYear.year
            )}>
            {currentCaledarYear.year}
        </li>
    );
}


CalendarTableYear.propTypes = {
    calendarBlock: PropTypes.instanceOf(CalendarYear),
    onSwitchToThisYear: PropTypes.func,
    getCalendarBlockStyles: PropTypes.func
}

export default withStylesCalendarBlock(
    CalendarTableYear,
    CalendarBlocksClassNames.CALENDAR_YEAR_TABLE_DEFAULT_CLASS_NAME
);