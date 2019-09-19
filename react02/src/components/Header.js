import React from 'react';
import {dateFormat, timeFormat} from '../Helper';

class Header extends React.Component {

    render() {
        return(
            <header className="header">
                <div className="header__left">
                    <div className="header__date">{dateFormat()}</div>
                    <div className="header__title"><span className={`live ${this.props.isLive}`}></span>Market Live</div>
                </div>
                <div className="header__time">{timeFormat()}</div>
            </header>
        )
    }

}

export default Header;