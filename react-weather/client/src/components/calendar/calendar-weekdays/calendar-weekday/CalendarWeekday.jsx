import React from 'react';
import PropTypes from 'prop-types';

function CalendarWeekday({calendarBlock}) {
    return (
        <li className="-app-calendar__weekday">
            {calendarBlock}
        </li>
    );
}

CalendarWeekday.propTypes = {
    calendarBlock: PropTypes.string
};

export default React.memo(CalendarWeekday);