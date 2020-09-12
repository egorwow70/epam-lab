import React from 'react';
import CalendarBlocksClassNames from '../models/calendar/calendar-blocks-class-names';

function withStylesCalendarBlock(Component, componentClassName) {
    class WithStylesCalendarBlock extends React.PureComponent {
        constructor(props) {
            super(props);

            const calendarDayBlockClassName = CalendarBlocksClassNames.CALENDAR_DAY_TABLE_DEFAULT_CLASS_NAME;
            const calendarMonthBlockClassName = CalendarBlocksClassNames.CALENDAR_MONTH_TABLE_DEFAULT_CLASS_NAME;
            const calendarYearBlockClassName = CalendarBlocksClassNames.CALENDAR_YEAR_TABLE_DEFAULT_CLASS_NAME;
            this.state = {
                calendarDayBlockClassName: calendarDayBlockClassName,
                calendarDayBlockClassNameGreyMode: `${calendarDayBlockClassName}_grey`,
                calendarDayBlockClassNameCurrentMode: `${calendarDayBlockClassName}_current`,
                calendarMonthBlockClassName: calendarMonthBlockClassName,
                calendarMonthBlockClassNameGreyMode: `${calendarMonthBlockClassName}_grey`,
                calendarMonthBlockClassNameCurrentMode: `${calendarMonthBlockClassName}_current`,
                calendarYearBlockClassName: calendarYearBlockClassName,
                calendarYearBlockClassNameGreyMode: `${calendarYearBlockClassName}_grey`,
                calendarYearBlockClassNameCurrentMode: `${calendarYearBlockClassName}_current`
            }
        }

        isCurrentDiapazonBlock(calendarBlock) {
            if (componentClassName === this.state.calendarDayBlockClassName) {
                return calendarBlock.isCurrentMonthDay;
            }
            if (componentClassName === this.state.calendarMonthBlockClassName) {
                return calendarBlock.isCurrentYearMonth;
            }
            if (componentClassName === this.state.calendarYearBlockClassName) {
                return calendarBlock.isCurrentDecadeYear;
            }
        }

        isCurrentBlock(calendarBlock) {
            if (componentClassName === this.state.calendarDayBlockClassName) {
                return calendarBlock.isCurrentDay;
            }
            if (componentClassName === this.state.calendarMonthBlockClassName) {
                return calendarBlock.isCurrentMonth;
            }
            if (componentClassName === this.state.calendarYearBlockClassName) {
                return calendarBlock.isCurrentYear;
            }
        }

        setCalendarBlockStyles({
            calendarBlock,
            calendarBlockStyles,
            isNotCurrentDiapazonBlockClass,
            isCurrentBlockClass
        }) {
            if (!this.isCurrentDiapazonBlock(calendarBlock)) {
                calendarBlockStyles.push(isNotCurrentDiapazonBlockClass);
            }
            if (this.isCurrentBlock(calendarBlock)) {
                calendarBlockStyles.push(isCurrentBlockClass);
            }
        }

        getCalendarBlockStyles(calendarBlock) {
            let calendarBlockStyles = [];
            let defaultCalendarBlockStyles;
            const currentCalendarBlockOptions = {};
            if (componentClassName === this.state.calendarDayBlockClassName) {
                defaultCalendarBlockStyles = [this.state.calendarDayBlockClassName];
                currentCalendarBlockOptions.calendarBlock = calendarBlock;
                currentCalendarBlockOptions.calendarBlockStyles = calendarBlockStyles;
                currentCalendarBlockOptions.isNotCurrentDiapazonBlockClass = this.state.calendarDayBlockClassNameGreyMode;
                currentCalendarBlockOptions.isCurrentBlockClass = this.state.calendarDayBlockClassNameCurrentMode;
            }
            if (componentClassName === this.state.calendarMonthBlockClassName) {
                defaultCalendarBlockStyles = [this.state.calendarMonthBlockClassName];
                currentCalendarBlockOptions.calendarBlock = calendarBlock;
                currentCalendarBlockOptions.calendarBlockStyles = calendarBlockStyles;
                currentCalendarBlockOptions.isNotCurrentDiapazonBlockClass = this.state.calendarMonthBlockClassNameGreyMode;
                currentCalendarBlockOptions.isCurrentBlockClass = this.state.calendarMonthBlockClassNameCurrentMode;
            }
            if (componentClassName === this.state.calendarYearBlockClassName) {
                defaultCalendarBlockStyles = [this.state.calendarYearBlockClassName];
                currentCalendarBlockOptions.calendarBlock = calendarBlock;
                currentCalendarBlockOptions.calendarBlockStyles = calendarBlockStyles;
                currentCalendarBlockOptions.isNotCurrentDiapazonBlockClass = this.state.calendarYearBlockClassNameGreyMode;
                currentCalendarBlockOptions.isCurrentBlockClass = this.state.calendarYearBlockClassNameCurrentMode;
            }
            this.setCalendarBlockStyles(currentCalendarBlockOptions);
            return calendarBlockStyles.concat(defaultCalendarBlockStyles);
        }

        render() {
            return (
                <Component
                    getCalendarBlockStyles={this.getCalendarBlockStyles.bind(this)}
                    {...this.props} />
            )
        }
    }

    WithStylesCalendarBlock.displayName = `WithStylesCalendarBlock(${Component.displayName || Component.name || 'Component'})`;

    return WithStylesCalendarBlock;
}

export default withStylesCalendarBlock;