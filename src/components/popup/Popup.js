import React, {Component} from 'react';
import './Popup.css';

export default class Popup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: 0
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({opacity: 1})
    }, 50);
  }

  render() {
    return (
      <div className="popup" style={{
        opacity: this.state.opacity
      }}>
        <div className="popup-overlay"></div>
        <div className="popup-screen" style={{
          opacity: this.state.opacity
        }}>
          <div className="popup-container">
            <div className="close-icon-container">
              <i className="material-icons close-icon" onClick={this.props.handleClose}>close</i>
            </div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
