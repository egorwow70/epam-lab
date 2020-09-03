import React from 'react';
import CalendarTablesClassNames from '../models/calendar-tables-class-names';
import CalendarModel from '../models/calendar-model';

function withCalendarBlocks(Component, CalendarBlockComponent, componentClassName) {
    class WithCalendarBlocks extends React.PureComponent {
        constructor(props) {
            super(props);

            const calendarBLockListWrapperClassName = componentClassName + '-wrapper';
            this.state = {
                calendarBLockListWrapperClassName: calendarBLockListWrapperClassName
            }
        }

        getCalendarBlockList() {
            let calendarBlockList;
            let onSwitchToThisMonth;
            let onSwitchToThisYear;
            if (componentClassName === CalendarTablesClassNames.CALENDAR_DAYS_TABLE_DEFAULT_CLASS_NAME) {
                this.props.currentCalendar.createCalendarDaysTable();
                calendarBlockList = this.props.currentCalendar.calendarDays;
            }
            if (componentClassName === CalendarTablesClassNames.CALENDAR_MONTHS_TABLE_DEFAULT_CLASS_NAME) {
                this.props.currentCalendar.createCalendarMonthsTable();
                calendarBlockList = this.props.currentCalendar.calendarMonths;
                onSwitchToThisMonth = this.props.onSwitchToThisMonth;
            }
            if (componentClassName === CalendarTablesClassNames.CALENDAR_YEARS_TABLE_DEFAULT_CLASS_NAME) {
                this.props.currentCalendar.createCalendarYearsTable();
                calendarBlockList = this.props.currentCalendar.calendarYears;
                onSwitchToThisYear = this.props.onSwitchToThisYear;
            }
            if (componentClassName === CalendarTablesClassNames.CALENDAR_WEEKDAYS_DEFAULT_CLASS_NAME) {
                calendarBlockList = CalendarModel.WEEKDAYS;
            }
            return <ul className={this.state.calendarBLockListWrapperClassName} >
                {[...calendarBlockList].map((calendarBlockItem, index) => {
                    const calendarBlock = (typeof calendarBlockItem !== 'string')
                        ? calendarBlockItem.clone()
                        : calendarBlockItem;
                    return <CalendarBlockComponent
                        calendarBlock={calendarBlock}
                        key={index}
                        onSwitchToThisMonth={onSwitchToThisMonth}
                        onSwitchToThisYear={onSwitchToThisYear} />
                })}
            </ul>
        }

        render() {
            return (
                <Component getCalendarBlockList={this.getCalendarBlockList.bind(this)}{...this.props} />
            )
        }
    }

    WithCalendarBlocks.displayName = `WithCalendarBlocks(${Component.displayName || Component.name || 'Component'})`;

    return WithCalendarBlocks;
}

export default withCalendarBlocks;