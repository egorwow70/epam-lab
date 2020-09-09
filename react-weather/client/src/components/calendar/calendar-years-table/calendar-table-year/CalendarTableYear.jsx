import React from 'react';
import PropTypes from 'prop-types';
import CalendarYear from '../../../../models/calendar-year';
import withStylesCalendarBlock from '../../../../hocs/withStylesCalendarBlock';
import CalendarBlocksClassNames from '../../../../models/calendar-blocks-class-names';

function CalendarTableYear(props) {
    function switchToThisYear(year) {
        props.onSwitchToThisYear(year);
    }

    const currentCaledarYear = props.calendarBlock;
    const calendarYearStyles = props.getCalendarBlockStyles(currentCaledarYear.clone());

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
    onSwitchToThisYear: PropTypes.func
}

export default withStylesCalendarBlock(
    CalendarTableYear,
    CalendarBlocksClassNames.CALENDAR_YEAR_TABLE_DEFAULT_CLASS_NAME
);