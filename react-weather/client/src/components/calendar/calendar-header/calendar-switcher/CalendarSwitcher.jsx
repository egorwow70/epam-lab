import React from 'react';
import PropTypes from 'prop-types';

function CalendarSwitcher({
    isSwitchedToMonthsTable,
    isSwitchedToYearsTable,
    onPreviousMonthChange,
    onNextMonthChange,
    onPreviousYearChange,
    onNextYearChange,
    onPreviousDecadeChange,
    onNextDecadeChange
}) {
    function switchToPrevious() {
        if (isSwitchedToMonthsTable) {
            onPreviousYearChange();
        } else {
            removePastHighlightedCalendarDay();
            onPreviousMonthChange();
        }
        if (isSwitchedToYearsTable) {
            onPreviousDecadeChange();
        }
    }

    function removePastHighlightedCalendarDay() {
        const pastHighlightedCalendarDay = document.querySelector('.-app-calendar__day_active');
        if (pastHighlightedCalendarDay) {
            pastHighlightedCalendarDay.classList.remove('-app-calendar__day_active');
        }
    }

    function switchToNext() {
        if (isSwitchedToMonthsTable) {
            onNextYearChange();
        } else {
            removePastHighlightedCalendarDay();
            onNextMonthChange();
        }
        if (isSwitchedToYearsTable) {
            onNextDecadeChange();
        }
    }

    return (
        <div className="-app-calendar__switcher">
            <button
                className="-app-calendar__switcher-button -app-calendar__switcher-button_top"
                onClick={() => switchToPrevious()}>
            </button>
            <button
                className="-app-calendar__switcher-button -app-calendar__switcher-button_bottom"
                onClick={() => switchToNext()}>
            </button>
        </div>
    );
}

CalendarSwitcher.propTypes = {
    isSwitchedToMonthsTable: PropTypes.bool,
    isSwitchedToYearsTable: PropTypes.bool,
    onPreviousMonthChange: PropTypes.func,
    onNextMonthChange: PropTypes.func,
    onPreviousYearChange: PropTypes.func,
    onNextYearChange: PropTypes.func,
    onPreviousDecadeChange: PropTypes.func,
    onNextDecadeChange: PropTypes.func
}

export default React.memo(CalendarSwitcher);


