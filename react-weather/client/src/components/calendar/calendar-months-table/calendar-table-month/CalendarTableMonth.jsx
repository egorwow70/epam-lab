import React from 'react';
import PropTypes from 'prop-types';
import CalendarMonth from '../../../../models/calendar/calendar-month';
import RussianDate from '../../../../models/date/russian-date';
import withStylesCalendarBlock from '../../../../hocs/withStylesCalendarBlock';
import CalendarBlocksClassNames from '../../../../models/calendar/calendar-blocks-class-names';

function CalendarTableMonth({
    calendarBlock,
    onSwitchToThisMonth,
    getCalendarBlockStyles
}) {
    function switchToThisMonth(month, year) {
        onSwitchToThisMonth(month, year);
    }

    const currentCaledarMonth = calendarBlock;
    const calendarMonthStyles = getCalendarBlockStyles(currentCaledarMonth.clone());

    const currentMonthEuropeDate = new Date(currentCaledarMonth.year, currentCaledarMonth.month - 1, 1);
    const currentMonthRussianDate = new RussianDate(currentMonthEuropeDate);
    return (
        <li
            className={calendarMonthStyles.join(' ')}
            title={`${currentMonthRussianDate.getMonthName()} ${currentCaledarMonth.year}`}
            onClick={() => switchToThisMonth(
                currentCaledarMonth.month,
                currentCaledarMonth.year
            )}>
            {currentCaledarMonth.monthName}
        </li>
    )
}

CalendarTableMonth.propTypes = {
    calendarBlock: PropTypes.instanceOf(CalendarMonth),
    onSwitchToThisMonth: PropTypes.func,
    getCalendarBlockStyles: PropTypes.func
}

export default withStylesCalendarBlock(
    CalendarTableMonth,
    CalendarBlocksClassNames.CALENDAR_MONTH_TABLE_DEFAULT_CLASS_NAME
);