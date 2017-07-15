import React, {Component} from 'react';
import { ButtonThick, Icon, IconSmall } from '../../components';
import './Listing.css';
class Listing extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (


      <div className="listing">

        <div className="listing-icon">
            <Icon src={this.props.src}/>

        </div>

        <div className="listing-content">
        <div className="title">
          <h1 className="listing-title">{this.props.title}
          </h1>
        </div>

        <div className="listing-subtitle">
          <p>
            <span className="subtitle-text subtitle-company">{this.props.companyName} </span>
            <i className="material-icons">location_on </i>
            <span className="subtitle-text">{this.props.companyLocation}</span>
            <IconSmall name="access_time"/>
            <span className="subtitle-text">{this.props.timeInWords}</span>
          </p>
        </div>

        <div className="listing-description">
          <p>{this.props.description}
          </p>
        </div>
      </div>

        <div className="listing-call-action">
           <ButtonThick className={this.props.btnClassName} label={this.props.btnText}>  </ButtonThick>

        </div>

      </div>
    );
  }
}

export default Listing;
