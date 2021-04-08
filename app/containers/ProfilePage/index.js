/**
 *
 * ProfilePage
 *
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MenuBar from '../../components/MenuBar';
import Header from '../../components/header/header';

export function ProfilePage() {
 // const [profile, setProfile]= useState();
  //setProfile(JSON.parse(localStorage.getItem('userInfo')));

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
                  <h4 className="text-center" style={{ color: 'rgb(153,50,204)' }}>
                    <b>Name:</b>
                    {JSON.parse(localStorage.getItem('userInfo')) &&
                      JSON.parse(localStorage.getItem('userInfo')).newUser &&
                      JSON.parse(localStorage.getItem('userInfo')).newUser
                        .fullName}
                  </h4>
                  <h4 className="text-center" style={{ color: 'rgb(153,50,204)' }}>
                  <b>Role:</b>
                    {JSON.parse(localStorage.getItem('userInfo')) &&
                      JSON.parse(localStorage.getItem('userInfo')).newUser &&
                      JSON.parse(localStorage.getItem('userInfo')).newUser.role}
                      </h4>
                  <h4 className="text-center" style={{ color: 'rgb(153,50,204)' }}>
                  <b>Vote:</b>
                    {JSON.parse(localStorage.getItem('userInfo')) &&
                      JSON.parse(localStorage.getItem('userInfo')).newUser &&
                      JSON.parse(localStorage.getItem('userInfo')).newUser.__v} 
                      </h4>
                </div>
              </div>
              <div
                className="row mx-auto border mt-3"
                style={{ backgroundColor: 'rgb(79, 235, 227)' }}
              >
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3 ml-3 ">
                  <form>
                    <div className="form-group row">
                      <label className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4  control-label">
                        Full Name
                      </label>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                        <input
                          className="form-control"
                          type="text"
                          name="fullName"
                          placeholder= {JSON.parse(localStorage.getItem('userInfo')) &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser.fullName || "Empty"}
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
                          placeholder={JSON.parse(localStorage.getItem('userInfo')) &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser.email || "Empty"}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 control-label">
                        Role
                      </label>
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input
                          className="form-control"
                          type="text"
                          name="role"
                          placeholder={JSON.parse(localStorage.getItem('userInfo')) &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser.role || "Empty"}
                        />
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
                          placeholder={JSON.parse(localStorage.getItem('userInfo')) &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser.city || "Empty"}
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
                          placeholder={JSON.parse(localStorage.getItem('userInfo')) &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser.state || "Empty"}
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
                          placeholder={JSON.parse(localStorage.getItem('userInfo')) &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser &&
                          JSON.parse(localStorage.getItem('userInfo')).newUser.country || "Empty"}
                        />
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
