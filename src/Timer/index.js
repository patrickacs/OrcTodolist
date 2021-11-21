import React from 'react'
import "./timer.css"

let time = new Date().toLocaleDateString()
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleDateString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleDateString()
    });
  }
  render() {
    return (
      <p className="App-clock">
        {this.state.time}
      </p>
    );
  }
}
  export { Clock }