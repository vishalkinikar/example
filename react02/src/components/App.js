import React from 'react';
import Tickers from '../model/Tickers';
import Header from "./Header";
import Row from "./Row";

import '../css/style.css';

class App extends React.Component {

  state = {
    data: {}
  };
  
  componentDidMount = () => {
    Tickers( data => this.setState( {data} ) )
  }

  render() {
    return (
      <section className ="page-container">
        <Header isLive={Object.keys(this.state.data).length > 0 ? "start" : ""} />
        <div className ="pa4">
          <div className ="overflow-auto">
            <table className ="f6 w-100 mw8 center tickerTable" cellSpacing="0">
              <thead>
                <tr className ="flex">
                  <th className ="tickerTable__th">Ticker</th>
                  <th className ="tickerTable__th">Price</th>
                  <th className ="tickerTable__th">Change</th>
                  <th className ="tickerTable__th">Last Update</th>
                </tr>
              </thead>
              <tbody className ="lh-copy">
                {Object.keys(this.state.data).map(tickName => <Row key={tickName} name={tickName} tickData={this.state.data[tickName]} />)}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
