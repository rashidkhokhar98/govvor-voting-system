/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {useState} from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import MenuBar from '../../components/MenuBar';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  text: yup.string().required(),
 
});
export default function HomePage() {

  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState('');

  const onSubmitt = data => {
    console.log('data', data);
    setFormData({ ...data });
    reset();
  };
  return (
    <div className="cntainer-fluid row">
    <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark">
      <MenuBar/>
    </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10">
       <h2 className="text-center mt-5 mb-5">
        Welcome!
    </h2>
    <h3 className="text-center">
      Please login here!
    </h3>
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
              id="eamil"
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
                Login!
              </button>
              </div>

        </div>
      </form>
    </div>
    </div>
  
    </div>
    </div>

  );
}
