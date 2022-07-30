import React, { FC } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Styles from './index.module.scss';

const propTypes = {};

const defaultProps = {};

const Footer: FC = (props: any) => {
  return (
    <React.Fragment>
      <footer className='text-gray-600 body-font bg-blue-50'>
        <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
          <div className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <FontAwesomeIcon icon={faPeopleRoof} />
            <span className='ml-3 text-xl'>The Wedding Page</span>
          </div>
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
            © 2022 TWP India —
            <a
              href='https://denzilrdz.github.io/denzilrodrigues/'
              className='text-gray-600 ml-1'
              rel='noopener noreferrer'
              target='_blank'
            >
              Denzil Rodrigues
            </a>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a
              className='text-gray-500'
              href='https://www.facebook.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className={Styles.socialMediaIcon}
              />
            </a>
            <a
              className='ml-3 text-gray-500'
              href='https://www.instagram.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={Styles.socialMediaIcon}
              />
            </a>
            <a
              className='ml-3 text-gray-500'
              href='https://www.linkedin.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={Styles.socialMediaIcon}
              />
            </a>
            <a
              className='ml-3 text-gray-500'
              href='https://www.linkedin.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className={Styles.socialMediaIcon}
              />
            </a>
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
