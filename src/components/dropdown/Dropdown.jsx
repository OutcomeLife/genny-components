import React, {Component} from 'react';
import PropType from 'prop-types';
import './dropdown.scss';

class Dropdown extends Component {
  constructor () {
    super();
    this.state = ({showUserProfile: false, transform: 'rotate(0)'});
  }

  renderDropdown = () => {
    const {showUserProfile} = this.state;
    if (showUserProfile === false) {
      document.getElementById('dropdown-container').style.display = 'block';
      this.setState({showUserProfile: true, transform: 'rotate(180deg)'});
    } else {
      document.getElementById('dropdown-container').style.display = 'none';
      this.setState({showUserProfile: false, transform: 'rotate(0deg)'});
    }
  }

  hideDropdown = () => {
    document.getElementById('dropdown-container').style.display = 'none';
    this.setState({showUserProfile: false, transform: 'rotate(0deg)'});
  }

  render () {
    const {user, dropdownListItem, className, style} = this.props;
    const {showUserProfile, transform} = this.state;

    return (
      <div className={className} style={style}>
        <div className='dropdown'>
          {/* For blur event to fire on an element, the element needs to receive focus first. But <div> elements do not receive focus by default.we can add tabindex="0" or contentEditable to your div so it will receive focus. */}
          <div tabIndex='0' className={showUserProfile
            ? 'user-profile-active'
            : 'user-profile'} onBlur={this.hideDropdown} onClick={this.renderDropdown} style={{
            transition: '0.3s ease-in'
          }}>
            <span>
              {user.name}
            </span>
            <span>
              <img src={user.image} className='userImage' alt='userImg' />
              <i className='material-icons' style={{
                transform: `${transform}`,
                transition: '0.5s ease transform'
              }}>keyboard_arrow_down</i>
            </span>

          </div>
          <div className='dropdown-container' id='dropdown-container'>
            {dropdownListItem.map(item => {
              return (
                <li onMouseDown={item.onClick} key={item.name}>
                  <a href={item.name}>{item.name}
                    <i className='material-icons' style={{
                      fontSize: '18px',
                      float: 'right',
                      paddingRight: '5px'
                    }}>{item.icon}</i>
                  </a>
                </li>
              );
            })}
          </div>

        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  user: PropType.object,
  dropdownListItem: PropType.array.isRequired,
  className: PropType.string,
  style: PropType.object

};

Dropdown.defaultProps = {
  user: {name: 'unique_prakash2002@yahoo.com', image: '/images/user.png'},
  className: 'default'
};

export default Dropdown;
