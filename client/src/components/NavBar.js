import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import './navbar.css'

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      
      <Menu.Menu position='right'>
      <Link to='/menu'>
          <Menu.Item name='Menu' />
        </Link>
      <Link to='/about'>
          <Menu.Item name='About' />
        </Link>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    )

  }

  render() {
    return (
      <div style={{paddingBottom: '30px'}}>
      <div className="desktopSizeDiv">
        <Menu pointing secondary style={{width: '100%'}}>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          { this.rightNavs() }
        </Menu>
        </div>
        <div className="mobileSizeDiv">
            <Dropdown icon='content' floating className='link item' style={{color: 'blue', display: 'flex', justifyContent: 'center', fontSize: '24px', margin: '20px'}}>
                <Dropdown.Menu className="menuTop" >
                    <Menu.Item as='a' href="/">Home</Menu.Item>                                                                                
                    <Menu.Item as='a' href="/menu">Menu</Menu.Item>                            
                    <Menu.Item as='a' href="/about">About</Menu.Item>
                    <Menu.Item as='a' href="/login">Login</Menu.Item>
                    <Menu.Item as='a' href="/register">register</Menu.Item>                       
                </Dropdown.Menu>
            </Dropdown>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
