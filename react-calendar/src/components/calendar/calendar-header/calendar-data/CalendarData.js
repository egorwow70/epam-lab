import React from 'react';
import PropTypes from 'prop-types';
import RussianDate from '../../../../models/russian-date'

function CalendarData(props) {
    function switchToCalendarMonthsTable() {
       props.onCalendarMonthMode();
    }

    function switchToCalendarYearsTable() {
        props.onCalendarYearsMode();
    }

    return ( 
        <div className="-app-calendar__data">
            { Boolean(props.isSwitchedToMonthsTable) &&
                <div 
                    className="-app-calendar__data-info"
                    onClick = { () => switchToCalendarYearsTable() }>
                    { props.currentCalendarDate.data.year }
                </div>
            }
            {
                Boolean(!props.isSwitchedToMonthsTable) &&
                Boolean(!props.isSwitchedToYearsTable) &&
                    <div 
                        className="-app-calendar__data-info"
                        onClick = { () => switchToCalendarMonthsTable() }>
                        { props.currentCalendarDate.getDataName() }
                    </div>
            }
            { 
                Boolean(props.isSwitchedToYearsTable) &&
                    <div className="-app-calendar__data-info -app-calendar__data-info_with-default-cursor">
                        { props.currentCalendarDate.getDecadeDiapazon() }
                    </div>
            }
        </div>
    );
}

CalendarData.propTypes = {
    currentCalendarDate: PropTypes.instanceOf(RussianDate),
    onCalendarMonthMode : PropTypes.func,
    isSwitchedToMonthsTable: PropTypes.bool,
    isSwitchedToYearsTable: PropTypes.bool
}

export default React.memo(CalendarData);