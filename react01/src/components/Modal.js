import React from 'react';

export default class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.number = 0
  }
  render() {
    return (
      <div className="overlay" style={{display: this.props.showModal ? 'block' : 'none'}}>
        <div className="overlay-inner">
          Selected slides number
          <div className="PT10">
            {this.props.selectedNumber.map((num, index) => <span className="numberBox" key={num}>{index > 0 && ', '}{num}</span>)}
          </div>
        </div>
      </div>
    )
  }

}