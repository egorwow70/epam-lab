import React from 'react';
import Menu from './Menu';

export default class MenuContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            onMenu: false
        };
    }

    render() {
        return (
            <div className="-app__menu">
                <Menu />
            </div>
        );
    }
}