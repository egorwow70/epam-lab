import React from 'react';

function MenuLogo() {
    return (
        <h1 className="-app__menu-logo">
            <span
                className="-app__menu-symbol">
            </span>
                Weather Api
        </h1>
    )
}

export default React.memo(MenuLogo);
