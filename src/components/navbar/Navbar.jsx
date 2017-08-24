import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'components';
import './navbar.scss';

class Navbar extends Component {
  render () {
    const { logo, user, dropdownListItem, toggleClick } = this.props;
    const showDropdown = dropdownListItem === undefined || user === undefined ? null : <Dropdown user={user} dropdownListItem={dropdownListItem} className='default' />;
    return (
      <div className='nav'>
        <div className='navbar-brand' >
          <table className='navbar-brand'>
            <tbody>
              <tr>
                <td> <i className='material-icons' onClick={toggleClick}> menu</i></td>
                <td> <a className='logo'>{logo}</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='nav-right' >
          {showDropdown}
        </div>
      </div >

    );
  }
}

Navbar.propTypes = {
  user: PropTypes.object,
  logo: PropTypes.string,
  dropdownListItem: PropTypes.array,
  toggleClick: PropTypes.func
};

Navbar.defaultProps = {
  logo: 'Company Logo'
};

export default Navbar;
