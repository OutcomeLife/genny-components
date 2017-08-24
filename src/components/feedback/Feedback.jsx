import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './message.css';

class Feedback extends Component {
  constructor () {
    super();
    this.state = { display: true };
  }

    componentDidMount = () => {
      const { timeout } = this.props;
      timeout !== undefined && setTimeout(() => {
        this.setState({ display: false });
      }, timeout * 1000);
    };

    handleClose = () => {
      this.setState({
        display: false
      });
    };

    render () {
      const { message, messageType, icon, style } = this.props;
      const messageIcon = messageType === 'success' ? 'done' : messageType;
      const { display } = this.state;
      if (!display) {
        return null;
      }
      return (
        <div className='message-component'>
          <div className={messageType} style={style}>
            <i className='material-icons'>{messageIcon}</i>
            {message}
            <span className='svg-icon'><i className='material-icons'>{icon}</i></span>
            <i className='material-icons close' onClick={this.handleClose}>close</i>
          </div>
        </div>
      );
    }
}

Feedback.propTypes = {
  message: PropTypes.string.isRequired,
  timeout: PropTypes.number,
  messageType: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.string

};
Feedback.defaultProps = {
  messageType: 'info'
};

export default Feedback;
