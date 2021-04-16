/**
 *
 * ProfilePage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { roles } from '../../constant';
import Header from '../../components/header/header';
import MenuBar from '../../components/MenuBar';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  role: yup.string().required(),
  country: yup.string().required(),
});

export function ProfilePage() {
  const [profile, setProfile] = useState();
  toast.configure();
  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem('userInfo')).newUser);
  }, []);

  // adding form functionality
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [formData, setFormData] = useState('');
  const [role, setRole] = useState(roles || []);
  const onSubmitt = data => {
    setFormData(data);
    const id = JSON.parse(localStorage.getItem('userInfo'));
    data.userId = id.newUser._id;
    axios
      .put('https://hrwaller.com/api/v1/users/update-profile', data)
      .then(res => {
        if (res.data.success === 1) {
          // localStorage.setItem('userInfo', res.data)
          toast('Success! profile has been updated', { type: 'success' });
        } else {
          toast(`${res.data.message}`, { type: 'error' });
        }
      });
    reset();
  };

  return (
    <>
      {!JSON.parse(localStorage.getItem('userInfo')) ? (
        <div>
          <span>please login!</span>
        </div>
      ) : (
        <>
          <Header />
          <div className="cntainer-fluid row">
            <div
              className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark"
              style={{ minHeight: '1000px' }}
            >
              <MenuBar />
            </div>
            <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 bg-light ">
              <div className="row mt-5">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                  <img
                    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                    alt="Circle Image"
                    className="rounded-circle mx-auto d-block"
                    width="200em"
                    height="200em"
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                  <h4
                    className="text-center"
                    style={{ color: 'rgb(153,50,204)' }}
                  >
                    <b>Name:</b>
                    {profile && profile.fullName}
                  </h4>
                  <h4
                    className="text-center"
                    style={{ color: 'rgb(153,50,204)' }}
                  >
                    <b>Role:</b>
                    {profile && profile.role}
                  </h4>
                </div>
              </div>
              <div
                className="row mx-auto border rounded mt-3"
                style={{
                  backgroundColor: 'rgb(79, 235, 227)',
                  border: '2px solid rgb(153,50,204)',
                }}
              >
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3 ml-3 ">
                  <form onSubmit={handleSubmit(onSubmitt)}>
                    <div className="form-group row">
                      <label className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4  control-label">
                        Full Name
                      </label>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                        <input
                          className="form-control"
                          type="text"
                          name="fullName"
                          placeholder={
                            (profile && profile.fullName) || 'Enetr Name'
                          }
                          ref={register}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 control-label">
                        Email address
                      </label>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                          placeholder={
                            (profile && profile.email) || 'Enter Email'
                          }
                          ref={register}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 control-label">
                        Role
                      </label>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <select
                          className="form-control"
                          id="clubName"
                          name="role"
                          placeholder={
                            (profile && profile.role) || 'Enter Role'
                          }
                          ref={register}
                        >
                          <option disabled selected>
                            {(profile && profile.role) || 'Enter Role'}
                          </option>
                          {role.map(item => (
                            <option value={item.value}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 control-label">
                        City
                      </label>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input
                          className="form-control"
                          type="text"
                          name="city"
                          placeholder={
                            (profile && profile.city) || 'Enter City'
                          }
                          ref={register}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 control-label">
                        State
                      </label>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input
                          className="form-control"
                          type="text"
                          name="state"
                          placeholder={
                            (profile && profile.state) || 'Enter State'
                          }
                          ref={register}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 control-label">
                        Country
                      </label>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input
                          className="form-control"
                          type="text"
                          name="country"
                          placeholder={
                            (profile && profile.country) || 'Enter Country'
                          }
                          ref={register}
                        />
                      </div>
                    </div>
                    <div className=" form-group row ">
                      <div className="col text-center">
                        <button type="submit" className="btn btn-danger">
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

ProfilePage.propTypes = {
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

export default compose(withConnect)(ProfilePage);
