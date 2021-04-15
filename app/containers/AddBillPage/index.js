/**
 *
 * AddBillPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import MenuBar from '../../components/MenuBar';
import Header from '../../components/header/header';

const schema = yup.object().shape({
  billName: yup.string().required(),
  billDescription: yup.string().required(),
});
export function AddBillPage() {
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState('');
  const [isError, setIsError] = useState(0);

  const makeApiCall = data => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const dataUpdate = {
      ...data,
      userId: userInfo.newUser._id,
    };
    axios
      .post('https://hrwaller.com/api/v1/users/add-bill', dataUpdate)
      .then(res => {
        const {
          data: { success },
        } = res || {};
        if (success === 1) {
          setIsError(1);
        }
      });
  };
  const onSubmitt = data => {
    console.log('data', data);
    setFormData({ ...data });
    makeApiCall(data);
    reset();
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
        <div className="row justify-content-center ">
          <div
            className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 pb-3 pt-3 mt-5"
            style={{
              border: '2px solid rgb(79, 235, 227)',
              borderRadius: '5px',
              color: 'rgb(153,50,204)',
            }}
          >
            <form onSubmit={handleSubmit(onSubmitt)}>
              <div className="row">
                {isError === 1 && (
                  <span style={{ color: 'green' }}>Bill has been added</span>
                )}
              </div>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="billName">Bill Title</label>
                  <textarea
                    type="text"
                    name="billName"
                    className="form-control"
                    id="billName"
                    rows="1"
                    placeholder="Write Bill Title"
                    ref={register}
                  />
                  <div style={{ color: 'red' }}>
                    {errors && errors.heading && '* Title is required field'}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-group col">
                  <label htmlFor="billDescription">Bill Description</label>
                  <textarea
                    type="text"
                    name="billDescription"
                    className="form-control"
                    id="billDescription"
                    rows="10"
                    placeholder="Write Bill Description"
                    ref={register}
                  />
                  <div style={{ color: 'red' }}>
                    {errors &&
                      errors.description &&
                      '* Description is required field'}
                  </div>
                </div>
              </div>

              <div className="row ">
                <div className="col text-center">
                  <button type="submit" className="btn btn-primary">
                    Add Bill
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

AddBillPage.propTypes = {
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

export default compose(withConnect)(AddBillPage);
