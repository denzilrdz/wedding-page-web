import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../interface/state';

const propTypes = {
  name: PropTypes.string,
};

const defaultProps = {
  name: '',
};

export const Header = (props: any) => {
  return (
    <React.Fragment>
      <div className=''>Header</div>
    </React.Fragment>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

const mapStateToProps = (state: State) => ({
  name: state.header.name,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
