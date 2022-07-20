import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { State } from '../interface/state';

const propTypes = {};

const defaultProps = {};

const Home = lazy(() => import('../container/home.container'));

const AppRouter = (props: any) => {
  const AppRoute = ({ children }: any) => {
    if (false) return <Navigate to='/' />;
    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <AppRoute>
              <Suspense fallback={<div></div>}>
                <Home />
              </Suspense>
            </AppRoute>
          }
        />
        <Route
          path='*'
          element={
            <AppRoute>
              <div className=''>404 NOT FOUND</div>
            </AppRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

AppRouter.propTypes = propTypes;
AppRouter.defaultProps = defaultProps;

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
