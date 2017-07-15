import React, {Component} from 'react';
import './Label.css';
const Label = (props) => {
  return (
    <div>
    <span className={props.className}>
      {props.children}
    </span>
  </div>
  );
}


Label.defaultProps = {
  className: 'label label-primary',
};



export default Label;
