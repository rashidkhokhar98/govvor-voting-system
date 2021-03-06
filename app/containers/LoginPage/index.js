/**
 *
 * LoginPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import MenuBar from '../../components/MenuBar';
import Header from '../../components/header/header';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
export function LoginPage({ history }) {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState('');

  const onSubmitt = data => {
    setFormData({ ...data });
    axios.post('https://hrwaller.com/api/v1/users/login', data).then(res => {
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      history.push('/public');

      if (res.data.success === 1) {
        toast.success('Success! You have sucessfully LogIn', {
          type: 'success',
        });
      } else {
        toast.error(`${res.data.message}`, { type: 'error' });
      }
      if (res.data && formData) {
        // add a call for 3.3 $ weekly payment here
      }
    });
    reset();
  };
  return (
    <>
      <Header />
      <div className="cntainer-fluid row " style={{ height: '1000px' }}>
        {/*   <div
        className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark "
       
      >
        <MenuBar />
      </div>
      */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
          <div className="row justify-content-center ">
            <div className="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-6 bg-dark  pb-3 pt-3 border mt-5 mb-5 text-light rounded ">
              <form onSubmit={handleSubmit(onSubmitt)}>
                <div className="row">
                  <div className="form-group col">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      ref={register}
                    />
                    <div style={{ color: 'red' }}>
                      {errors && errors.email && '* Enter valid email '}
                    </div>
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      ref={register}
                    />
                    <div style={{ color: 'red' }}>
                      {errors && errors.password && '* Password is required'}
                    </div>
                  </div>
                </div>

                <div className="row ">
                  <div className="col text-center">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
