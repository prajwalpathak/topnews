import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{`${(props.subtitle).charAt(0).toUpperCase()}${(props.subtitle).slice(1)}`}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Top Stories'
}

export default Header;