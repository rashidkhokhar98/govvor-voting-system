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
    <div className="cntainer-fluid row " >
    <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark " style={{height: '1000px' }}>
      <MenuBar/>
    </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 ">
       <h1 className="text-center mt-5 mb-5">
        Welcome to Govvor.com !
    </h1>
    
    <form>
    <div class="form-group">
    <textarea class="form-control" className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 " id="exampleFormControlTextarea1" placeholder="Please Write Bill Heading! " rows="1"></textarea>
    <textarea class="form-control" className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 " id="exampleFormControlTextarea1" placeholder="Please Write Bill Description! " rows="10"></textarea>
  </div>
  <a className="btn btn-success">Post</a>
    </form>
  
    </div>
    </div>

  );
}
