import React from 'react';
import { connect } from 'react-redux';
import { SearchCityAction } from '../../../store/geocode/geocode.actions';

class SearhCity extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            searchCityName: 'enter any city to search weather'
        }

        this.onChangeHandler = this.handleChange.bind(this);
        this.searchCity = this.searchCity.bind(this);
        this.enterInput = this.enterInput.bind(this);
    }

    handleChange(event) {
        this.setState({ searchCityName: event.target.value });
    }

    searchCity() {
        this.props.SearchCityAction({ cityName: this.state.searchCityName });
    }

    enterInput(e) {
        const keyCodeOfEnterKey = 13;
        if (e.keyCode === keyCodeOfEnterKey) {
            this.props.SearchCityAction({ cityName: this.state.searchCityName });
        }
    }

    render() {
        return (
            <div className="-app__menu-search">
                <input
                    className="-app__menu-search-input"
                    type="text"
                    onChange={(event) => this.handleChange(event)}
                    onKeyUp={(event) => this.enterInput(event)}
                    value={this.state.searchCityName} />
                <button
                    className="-app__menu-search-button"
                    onClick={() => this.searchCity()}>
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    SearchCityAction
};


export default connect(null, mapDispatchToProps)(SearhCity);