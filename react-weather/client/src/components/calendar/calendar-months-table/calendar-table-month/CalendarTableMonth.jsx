import React from 'react';
import PropTypes from 'prop-types';
import CalendarMonth from '../../../../models/calendar-month';
import RussianDate from '../../../../models/russian-date';
import withStylesCalendarBlock from '../../../../hocs/withStylesCalendarBlock';
import CalendarBlocksClassNames from '../../../../models/calendar-blocks-class-names';

function CalendarTableMonth(props) {
    function switchToThisMonth(month, year) {
        props.onSwitchToThisMonth(month, year);
    }

    const currentCaledarMonth = props.calendarBlock;
    const calendarMonthStyles = props.getCalendarBlockStyles(currentCaledarMonth.clone());

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