import React from 'react';

class Row extends React.Component {

    render() {
        return(
            <tr className="flex">
                <td className="tickerTable__td font-bold">{this.props.name}</td>
                <td className={`tickerTable__td ${this.props.tickData[1] >= 0 ? 'isUp':'isDown'}`}>{this.props.tickData[0]}</td>
                <td className={`tickerTable__td ${this.props.tickData[1] >= 0 ? 'isUp':'isDown'}`}>{this.props.tickData[1]}%</td>
                <td className="tickerTable__td">{this.props.tickData[2]}</td>
            </tr>
        )
    }

}

export default Row;