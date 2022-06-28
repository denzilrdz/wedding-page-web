import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Home from './home.template';
import { changeCountAction } from './home.action';
import { State } from '../../interface/state';

const propTypes = {
  count: PropTypes.number,
  changeCount: PropTypes.func,
};

const defaultProps = {
  count: 0,
  changeCount: () => {},
};

export const HomeConatiner = (props: any) => {
  return <Home {...props} />;
};

HomeConatiner.propTypes = propTypes;
HomeConatiner.defaultProps = defaultProps;

const mapStateToProps = (state: State) => ({
  count: state.home.count,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeCount: (payload: Number) => dispatch(changeCountAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeConatiner);
