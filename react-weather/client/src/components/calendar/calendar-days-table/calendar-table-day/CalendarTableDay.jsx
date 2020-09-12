import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from '../../../../models/calendar/calendar-day';
import withStylesCalendarBlock from '../../../../hocs/withStylesCalendarBlock';
import CalendarBlocksClassNames from '../../../../models/calendar/calendar-blocks-class-names';

function CalendarTableDay({
    calendarBlock,
    getCalendarBlockStyles
}) {
    function highlightCalendarDay(event) {
        const pastHighlightedCalendarDay = document.querySelector('.-app-calendar__day_active');
        if (pastHighlightedCalendarDay) {
            pastHighlightedCalendarDay.classList.remove('-app-calendar__day_active');
        }

        const currentCalendarDay = event.currentTarget;
        const calendarDaysTable = document.querySelector('.-app-calendar__days-table');

        if (
            currentCalendarDay
            && calendarDaysTable.contains(currentCalendarDay)
        ) {
            currentCalendarDay.classList.add('-app-calendar__day_active');
        } else {
            return;
        }
    }

    function formatDayOrMonthNumber(dayOrMonthNumber) {
        return (dayOrMonthNumber < 10)
            ? '0' + dayOrMonthNumber
            : dayOrMonthNumber;
    }

    const currentCalendarDay = calendarBlock;
    const calendarDayStyles = getCalendarBlockStyles(currentCalendarDay.clone());

    return (
        <li
            className={calendarDayStyles.join(' ')}
            onClick={(event) => highlightCalendarDay(event)}
            title={`${formatDayOrMonthNumber(currentCalendarDay.dayNumber)}.${formatDayOrMonthNumber(currentCalendarDay.month)}.${currentCalendarDay.year}`}>
            {currentCalendarDay.dayNumber}
        </li>
    );
}


CalendarTableDay.propTypes = {
    calendarBlock: PropTypes.instanceOf(CalendarDay),
    getCalendarBlockStyles: PropTypes.func
}

export default withStylesCalendarBlock(
    CalendarTableDay,
    CalendarBlocksClassNames.CALENDAR_DAY_TABLE_DEFAULT_CLASS_NAME
);
