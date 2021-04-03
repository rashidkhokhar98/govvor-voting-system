/**
 *
 * SignupPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { CountryDropdown } from 'react-country-region-selector';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { roles } from '../../constant';
import Header from '../../components/header/header';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  role: yup.string().required(),
});

export function SignupPage({ history }) {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState('');
  const [role, setRole] = useState(roles || []);

  const onSubmitt = data => {
    console.log('data', data);
    console.log('country', country);
    const obj = { ...data, image };
    setFormData({ obj });
    console.log('data', obj);
    axios.post('http://localhost:5000/api/v1/users/register', obj).then(res => {
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      reset();
     if (res.data.success === 1) {
      toast.success('Success! You have sucessfully Registered');
    //
    } else {
        toast.error(`${res.data.message}`, { type: 'error' });
      }
      if (res.data && formData) {
        // add a call for 3.3 $ weekly payment here
      }
      history.push('/public');

    });
  };
  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  const handleImage = async file => {
    const base64Image = await toBase64(file);
    setImage(base64Image);
  };
  return (
    <>
    <Header />
    <div className="container-fluid ">
      <div className="container bg-dark  pb-3 pt-3 border mt-5 mb-5 text-light rounded">
        <form onSubmit={handleSubmit(onSubmitt)}>
          <div className="row">
            <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                id="fullName"
                placeholder="Enter Full Name"
                ref={register}
              />
              <div style={{ color: 'red' }}>
                {' '}
                {errors && errors.fullName && '* Name is required'}
              </div>
            </div>
            <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="eamil"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                ref={register}
              />
              <div style={{ color: 'red' }}>
                {' '}
                {errors && errors.email && '* Enter valid email '}
              </div>

              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
            <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <label htmlFor="city">Enter City Name</label>
              <input
                type="text"
                name="city"
                className="form-control"
                id="city"
                placeholder="Enter City"
                ref={register}
              />
              <div style={{ color: 'red' }}>
                {errors && errors.city && '* City is required'}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label htmlFor="state">Enter State Name</label>
              <input
                type="text"
                name="state"
                className="form-control"
                id="state"
                placeholder="Enter State"
                ref={register}
              />
              <div style={{ color: 'red' }}>
                {errors && errors.state && '* State is required field'}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label htmlFor="clubName">Select Role</label>
              <select
                className="form-control"
                id="clubName"
                name="role"
                ref={register}
              >
                <option />
                {role.map(item => (
                  <option value={item.value}>{item.name}</option>
                ))}
              </select>
              <div style={{ color: 'red' }}>
                {errors && errors.role && '* Role is required field'}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <CountryDropdown
                className="form-control"
                value={country}
                onChange={val => setCountry(val)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label htmlFor="image">Select your avatar : </label>
              <input
                type="file"
                name="image"
                id="image"
                ref={register}
                onChange={e => handleImage(e.target.files[0])}
              />
              <div style={{ color: 'red' }}>
                {errors && errors.state && '* Upload your picture '}
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col text-center">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
 </>
  );
}

SignupPage.propTypes = {
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

export default compose(withConnect)(SignupPage);
