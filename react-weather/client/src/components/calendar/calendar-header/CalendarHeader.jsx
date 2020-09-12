import React from 'react';
import CalendarData from './calendar-data/CalendarData';
import CalendarSwitcher from './calendar-switcher/CalendarSwitcher';
import PropTypes from 'prop-types';
import RussianDate from '../../../models/date/russian-date';

function CalendarHeader({
    currentCalendarDate,
    onCalendarMonthMode,
    onCalendarYearsMode,
    isSwitchedToMonthsTable,
    isSwitchedToYearsTable,
    onPreviousMonthChange,
    onNextMonthChange,
    onPreviousYearChange,
    onNextYearChange,
    onPreviousDecadeChange,
    onNextDecadeChange
}) {
    return (
        <div className="-app-calendar__header">
            <div className="-app-calendar__header-wrapper">
                <h2 className="-app-calendar__header-title">
                    <CalendarData
                        currentCalendarDate={currentCalendarDate.clone()}
                        onCalendarMonthMode={onCalendarMonthMode}
                        onCalendarYearsMode={onCalendarYearsMode}
                        isSwitchedToMonthsTable={isSwitchedToMonthsTable}
                        isSwitchedToYearsTable={isSwitchedToYearsTable} />
                </h2>
                <CalendarSwitcher
                    onPreviousMonthChange={onPreviousMonthChange}
                    onNextMonthChange={onNextMonthChange}
                    onPreviousYearChange={onPreviousYearChange}
                    onNextYearChange={onNextYearChange}
                    onPreviousDecadeChange={onPreviousDecadeChange}
                    onNextDecadeChange={onNextDecadeChange}
                    isSwitchedToMonthsTable={isSwitchedToMonthsTable}
                    isSwitchedToYearsTable={isSwitchedToYearsTable} />
            </div>
        </div>
    );
}

CalendarHeader.propTypes = {
    currentCalendarDate: PropTypes.instanceOf(RussianDate),
    onCalendarMonthMode: PropTypes.func,
    onCalendarYearsMode: PropTypes.func,
    isSwitchedToMonthsTable: PropTypes.bool,
    isSwitchedToYearsTable: PropTypes.bool,
    onPreviousMonthChange: PropTypes.func,
    onNextMonthChange: PropTypes.func,
    onPreviousYearChange: PropTypes.func,
    onNextYearChange: PropTypes.func,
    onPreviousDecadeChange: PropTypes.func,
    onNextDecadeChange: PropTypes.func
}

export default React.memo(CalendarHeader);