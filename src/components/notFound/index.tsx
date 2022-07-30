import React, { FC } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Styles from './index.module.scss';

const propTypes = {};

const defaultProps = {};

const NotFound: FC = (props: any) => {
  return (
    <React.Fragment>
      <div className='grid h-screen place-items-center text-5xl'>
        404 Not Found
      </div>
    </React.Fragment>
  );
};

NotFound.propTypes = propTypes;
NotFound.defaultProps = defaultProps;

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
