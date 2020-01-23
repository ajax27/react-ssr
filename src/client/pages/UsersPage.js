import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`Ajax27 React SSR | ${this.props.users.length} Users`}</title>
        <meta property="og:title" content="Ajax27 React SSR | Users" />
      </Helmet>
    )
  }

  render() {
    return (
      <div className="center-align" style={{ marginTop: '220px' }}>
        {this.head()}
        <h2>Here is a list of the Users: </h2>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersPage)
};
