import React from 'react';
import RussianDate from '../../models/russian-date';

class TodayData extends React.PureComponent {
    constructor(props) {
        super(props);

        const todayEuropeDate = new Date();
        const todayRussianDate = new RussianDate(todayEuropeDate);

        this.state = {
            todayRussianDate: todayRussianDate.clone()
        };
    }

    render () {
        return (
            <div className="-app-today">
                { this.props.render(this.state.todayRussianDate) }
            </div>
        )
    }
}

export default TodayData;