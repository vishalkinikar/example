import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSlide: 0
    };

    this.getSlides = this.getSlides.bind(this)
    this.onSlideChange = this.onSlideChange.bind(this)
  }

  getSlides() {
    let slideElements = [];
    if(this.props.currentSlidesNumber > 0){
      for(let i = 0; i < this.props.currentSlidesNumber; i++) {
        slideElements.push(
          <div className="slide-warp__item" key={i}>{i+1}</div>
        )
      }
    }
    return slideElements;
  }

  onSlideChange(type) {
    if(type === 'Add') {
      this.setState({
        currentSlide: this.state.currentSlide + 1
      })
    }
    if(type === 'Minus') {
      this.setState({
        currentSlide: this.state.currentSlide - 1
      })
    }
  }

  render() {
    return (
      <div className="slide-warp">
        <span className={`slide-warp-btn prev ${this.state.currentSlide > 0 ? '' : ' hideBtn'}`} onClick={this.onSlideChange.bind(this, 'Minus')}>Prev</span>
          <div className="slide-warp-over" style={{width: this.props.currentSlidesNumber * 300, marginLeft: -this.state.currentSlide * 300}}>
            {this.getSlides()}
          </div>
        <span className={`slide-warp-btn next ${(this.state.currentSlide + 1) >= this.props.currentSlidesNumber ? ' hideBtn' : ''}`} onClick={this.onSlideChange.bind(this, 'Add')}>Next</span>
      </div>
    )
  }
}