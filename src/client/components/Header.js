import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = () => {
  return (
    <div>
      <Link to="/">React SSR</Link>
    </div>
  )
};

export default connect()(Header);
