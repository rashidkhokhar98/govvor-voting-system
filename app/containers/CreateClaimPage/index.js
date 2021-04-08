/**
 *
 * CreateClaimPage
 *
 */

 import React, { useState } from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { compose } from 'redux';
 
 import { Link } from 'react-router-dom';
 import axios from 'axios';
 import { toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 
 import { useForm } from 'react-hook-form';
 import * as yup from 'yup';
 import { yupResolver } from '@hookform/resolvers/yup';
import MenuBar from '../../components/MenuBar';
import Header from '../../components/header/header';

const schema = yup.object().shape({
  email: yup.string().required(),
  body: yup.string().required(),
});
export function CreateClaimPage() {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [fromEmail, setFromEmail] = useState('');
  const [text, setText] = useState('');
  const toEmail = 'rashidKhokhar98@gmail.com';
  toast.configure();

  const onSubmit = data => {
    setFromEmail(...data.email);
    setText(...data.body);
    sendMail();
    reset();
  };

  const sendMail = () => {
    const obj = {
      fromEmail,
      toEmail,
      text,
    };
    axios
      .post('http://18.220.178.164/api/v1/users/send-email', obj)
      .then(res => {
        if (res.data.success === 1) {
          toast(
            'Success! Your Email has been sent, you will recieve an email shortly',
            { type: 'success' },
          );
        } else {
          toast(`${res.data.message}`, { type: 'error' });
        }
      });
  };
  return (
    <>
    <Header />
    <div className="cntainer-fluid row ">
      <div
        className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark "
        style={{ minHeight: '1000px' }}
      >
        <MenuBar />
      </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 ">
      <div className="container bootdey">
      <div className="email-app mt-5" >
        <main className="px-auto pt-3"
         style={{
          color: 'rgb(153,50,204)',
        }}
       >
        <div className="form-row mx-auto">
          <p className="text-center col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Govvor - New Claim Creation</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row mb-3">
              <label htmlFor="to" className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center col-form-label">Reciever Email:</label>
              <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9" >
                <input type="email" className="form-control" id="to" placeholder="To" value={toEmail} readOnly  style={{
          border: '2px solid rgb(79, 235, 227)',
          borderRadius: '5px',
        }} />
              </div>
            </div>
            <div className="form-row mb-3">
              <label htmlFor="cc" className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center col-form-label">Your Email:</label>
              <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                <input type="email" name="email" className="form-control" id="fromEmail" placeholder="Your Email" onChange={(e)=> setFromEmail(e.target.value)} ref={register}  style={{
          border: '2px solid rgb(79, 235, 227)',
          borderRadius: '5px',
        }} />
                <div style={{color:'red'}}> {errors && errors.email && " Enter valid Email *"}</div>
    
              </div>
            </div>
            {/* <div className="form-row mb-3">
              <label htmlFor="bcc" className="col-2 col-sm-1 col-form-label">BCC:</label>
              <div className="col-10 col-sm-11">
                <input type="email" className="form-control" id="bcc" placeholder="BCC" />
              </div>
            </div> */}
             <div className="form-group mt-4 ml-5">
                <textarea className="form-control" id="message" name="body" rows={12} placeholder="Write Claim Description here!" onChange={(e)=>setText(e.target.value)} ref={register}  style={{
          border: '2px solid rgb(79, 235, 227)',
          borderRadius: '5px',
        }}/>
                <div style={{color:'red'}}> {errors && errors.body && "Field is required * "}</div>
    
              </div>
              <div className="form-group ml-5 mb-5">
                <button type="submit" className="btn btn-success mr-2" >Send Email</button>
                <Link className="btn btn-danger" to="/">Exit</Link>
              </div>
            
          </form>
           
        </main>
      </div>
    </div>
    
      </div>
    </div>
    </>
  );
}

CreateClaimPage.propTypes = {
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

export default compose(withConnect)(CreateClaimPage);
