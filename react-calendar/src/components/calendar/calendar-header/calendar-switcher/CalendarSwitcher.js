import React from 'react';
import PropTypes from 'prop-types';

function CalendarSwitcher(props) {
    function switchToPrevious() {
        if (props.isSwitchedToMonthsTable) {
            props.onPreviousYearChange();
        } else {
            removePastHighlightedCalendarDay();
            props.onPreviousMonthChange();
        }
        if (props.isSwitchedToYearsTable) {
            props.onPreviousDecadeChange();
        }
    }

    function removePastHighlightedCalendarDay() {
        const pastHighlightedCalendarDay = document.querySelector('.-app-calendar__day_active');
        if (pastHighlightedCalendarDay) {
            pastHighlightedCalendarDay.classList.remove('-app-calendar__day_active');
        }
    }

    function switchToNext() {
        if (props.isSwitchedToMonthsTable) {
            props.onNextYearChange();
        } else {
            removePastHighlightedCalendarDay();
            props.onNextMonthChange();
        }
        if (props.isSwitchedToYearsTable) {
            props.onNextDecadeChange();
        }
    }

    return (
        <div className="-app-calendar__switcher">
            <button 
                className="-app-calendar__switcher-button -app-calendar__switcher-button_top"
                onClick={ () => switchToPrevious()}>
            </button>
            <button 
                className="-app-calendar__switcher-button -app-calendar__switcher-button_bottom"
                onClick={ () => switchToNext()}>
            </button>
        </div>
    );
}

CalendarSwitcher.propTypes = {
    isSwitchedToMonthsTable: PropTypes.bool,
    isSwitchedToYearsTable: PropTypes.bool,
    onPreviousMonthChange : PropTypes.func,
    onNextMonthChange : PropTypes.func,
    onPreviousYearChange : PropTypes.func,
    onNextYearChange : PropTypes.func,
}

export default React.memo(CalendarSwitcher);


