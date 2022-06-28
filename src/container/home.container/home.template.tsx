import React from 'react';
import Header from '../../components/header';
import Styles from './index.module.scss';

export const Home = (props: any) => {
  return (
    <React.Fragment>
      <Header />
      <div>Count :{props.count}</div>
      <div className=''>
        <button
          className={Styles.addBtn}
          onClick={() => props.changeCount(parseInt(props.count) + 1)}
        >
          Add
        </button>
      </div>
      <div className=''>
        <button onClick={() => props.changeCount(parseInt(props.count) - 1)}>
          Sub
        </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
