import React from 'react';
import PropTypes from 'prop-types';
import HourlyWeather from './hourly-weather/HourlyWeather';
import HourlyWeatherButton from './hourly-weather-button/HourlyWeatherButton';

class HourlyWeatherList extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            scrollCounter: 0,
            hourlyWeatherList: [...this.props.hourlyWeatherList],
            isCanLeftScroll: false,
            isCanRightScroll: true
        };

        this.scrollRight = this.scrollRight.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
    }

    componentDidMount() {
        const hourlyWeatherListWrapper = document.querySelector('.-app-weather__hourly-weather-list-wrapper');
        hourlyWeatherListWrapper.scrollLeft = this.state.scrollCounter;
        this.setState(state => ({
            ...state,
            hourlyWeatherListWrapper: hourlyWeatherListWrapper
        }))
    }

    setStateAfterScroll(scrollNumber) {
        this.setState(state => ({
            ...state,
            scrollCounter: scrollNumber
        }));
    }

    scroll(scrollNumber) {
        this.state.hourlyWeatherListWrapper.scrollTo({
            left: scrollNumber,
            behaviour: "smooth"
        });
    }

    getScrollNumber(scrollType) {
        const scrollPixelsValue = 500;
        const scrollNumber = (scrollType === 'left')
            ? this.state.scrollCounter - scrollPixelsValue
            : this.state.scrollCounter + scrollPixelsValue;
        return scrollNumber;
    }

    scrollLeft() {
        const scrollType = 'left';
        const scrollNumber = this.getScrollNumber(scrollType);
        this.scroll(scrollNumber);
        this.setStateAfterScroll(scrollNumber);
        this.validScrollButtons(scrollNumber);
    }

    scrollRight() {
        const scrollType = 'right';
        const scrollNumber = this.getScrollNumber(scrollType);
        this.scroll(scrollNumber);
        this.setStateAfterScroll(scrollNumber);
        this.validScrollButtons(scrollNumber);
    }

    validScrollButtons(scrollNumber) {
        const maxScrollPixelsValue = 4000;
        const isCanLeftScroll = (scrollNumber === 0)
            ? false
            : true;
        const isCanRightScroll = (scrollNumber < maxScrollPixelsValue)
            ? true
            : false;
        this.setState(state => ({
            ...state,
            isCanLeftScroll: isCanLeftScroll,
            isCanRightScroll: isCanRightScroll
        }));
    }

    render() {
        return (
            <div className="-app-weather__hourly-weather-list">
                <HourlyWeatherButton 
                    modificatorClassName="-app-weather__hourly-weather-button_left"
                    scrollFunc={this.scrollLeft}
                    isDisabled={!this.state.isCanLeftScroll}/>
                <ul className="-app-weather__hourly-weather-list-wrapper">
                    {[...this.state.hourlyWeatherList].map((hourlyWeather, index) => {
                        return <HourlyWeather
                            time={hourlyWeather.time}
                            airTemperature={hourlyWeather.airTemperature}
                            icon={hourlyWeather.icon}
                            key={index} />
                    })}
                </ul>
                <HourlyWeatherButton 
                    modificatorClassName="-app-weather__hourly-weather-button_right"
                    scrollFunc={this.scrollRight}
                    isDisabled={!this.state.isCanRightScroll}/>
            </div >
        );
    }
}

HourlyWeatherList.propTypes = {
    hourlyWeatherList: PropTypes.array
}

export default HourlyWeatherList;