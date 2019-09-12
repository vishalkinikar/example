import React from 'react';

export default class FinishButton extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.activeModal(true)
  }

  render() {
    return (
      <div className="PT10">
        <button onClick={this.onClick}>FINISH</button>
      </div>
    )
  }

}