import React from 'react';
import Login from './Login';
import Selectslides from './Selectslides';
import Carousel from './Carousel';
import FinishButton from './FinishButton';
import Modal from './Modal';

import '../css/style.css';

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      isLogin: false,
      selectedNumber: [],
      currentSlidesNumber: 0,
      showModal: false
    };

    this.isLogin = this.isLogin.bind(this)
    this.addNumber = this.addNumber.bind(this)
    this.activeModal = this.activeModal.bind(this)
  }

  isLogin(isLogin) {
    this.setState({isLogin})
  }

  addNumber(newValue) {
    this.setState({selectedNumber: [...this.state.selectedNumber, newValue], currentSlidesNumber: newValue})
  }

  activeModal(showModal) {
    this.setState({showModal})
  }


  render() {
    return (
      <div>
        <section className ="page-container">
          <div className ="pa4">
              {this.state.isLogin ? <Selectslides addNumber={this.addNumber} /> : <Login isLogin={this.isLogin} />}
              {this.state.currentSlidesNumber > 0 && <Carousel currentSlidesNumber={this.state.currentSlidesNumber} />}
              {this.state.currentSlidesNumber > 0 && <FinishButton activeModal={this.activeModal} />}
          </div>
        </section>
        <Modal selectedNumber={this.state.selectedNumber} showModal={this.state.showModal} />
      </div>
    );
  }
}

export default App;