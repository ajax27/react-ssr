import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
      <a href="/api/auth/google">Login</a>
    );

  return (
    <nav>
      <div className="nav-wrapper teal lighten-2">
        <Link to="/" className="brand-logo" style={{ marginLeft: '40px' }}>React SSR</Link>
        <ul className="right" style={{ marginRight: '40px' }}>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/admins">Admins</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  )
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
