import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Icon extends Component{
  render(){
      const {icon,color} = this.props;

    return(
      <span color={color}> {( icon ) && <i className="material-icons">{icon}</i>} </span>
    );
  }

}

Icon.defaultProps= {
  icon: 'android',

}

Icon.propTypes={
  icon: PropTypes.string,
  color: PropTypes.string
}

export default Icon;
