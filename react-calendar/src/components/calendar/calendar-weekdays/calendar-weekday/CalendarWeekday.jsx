import React from 'react';
import PropTypes from 'prop-types';

function CalendarWeekday(props) {
    return (
        <li className="-app-calendar__weekday">
            {props.calendarBlock}
        </li>
    );
}

CalendarWeekday.propTypes = {
    calendarBlock: PropTypes.string
};

export default React.memo(CalendarWeekday);