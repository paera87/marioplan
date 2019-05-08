import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = ({ signOut }) => {
  return (
    <ul className="right">
      <li><a onClick={signOut}>Log out</a></li>
      <li><NavLink to='/create'>New Project</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
