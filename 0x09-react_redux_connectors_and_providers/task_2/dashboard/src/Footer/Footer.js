import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';
import { connect } from 'react-redux';

const Footer = ({ isLoggedIn = false, user = {} }) => {

  return (
    <>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {isLoggedIn && (
        <a href="#">Contact us</a>
      )}
    </>
  );
};

export const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
    isLoggedIn: state.get('isUserLoggedIn'),
  };
};

export default connect(mapStateToProps)(Footer);