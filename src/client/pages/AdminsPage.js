import React from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminsPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    });
  }

  render() {
    return (
      <div className="center-align">
        <h3>Protected List Of Admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(AdminsPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
