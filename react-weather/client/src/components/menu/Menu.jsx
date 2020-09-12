import React from 'react';
import MenuLogo from './menu-logo/MenuLogo';
import SearhCity from './search-city/SearchCity';

function Menu() {
    return (
        <React.Fragment>
            <MenuLogo />
            <SearhCity />
        </React.Fragment>
    )
}

export default React.memo(Menu);