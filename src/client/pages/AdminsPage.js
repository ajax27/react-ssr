import React from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

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
      <div className="center-align" style={{ marginTop: '220px' }}>
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
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
