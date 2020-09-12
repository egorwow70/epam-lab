import React from 'react';
import RussianDate from '../../models/date/russian-date';
import PropTypes from 'prop-types';

class TodayData extends React.PureComponent {
    constructor(props) {
        super(props);

        const todayEuropeDate = new Date();
        const todayRussianDate = new RussianDate(todayEuropeDate);

        this.state = {
            todayRussianDate: todayRussianDate.clone()
        };
    }

    render() {
        return (
            <React.Fragment>
                {this.props.render(this.state.todayRussianDate)}
            </React.Fragment>
        )
    }
}

TodayData.propTypes = {
    render: PropTypes.func
}

export default TodayData;