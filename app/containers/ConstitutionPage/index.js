/**
 *
 * PolicyPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
//import Bill from "../../components/Bill"
import MenuBar from '../../components/MenuBar';
import { Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

import { ElectionCategories } from '../../constant';
import CenterModal from '../../components/CenterModal';
import Header from '../../components/header/header';
import axios from 'axios';


export function ConstitutionPage() {
  const [modalShow, setModalShow] = useState(false);
  const [govt, setGovt] = useState();
  const [searchText, setSearchText] = useState('');
  
  const search = value => {
    setSearchText(value);
    const updatedgovt =
    govt &&
    govt.length > 0 &&
    govt.filter(el => el.name.toLowerCase().indexOf(value) !== -1);
    setGovt(updatedgovt);

   if (!value) {
      useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/get-govt').then(res => {
      const data = (res && res.data) || {};
      
        console.log('resdsdasd', data);
        setGovt(data);
    });
  }, []);
  }
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/get-govt').then(res => {
      const data = (res && res.data) || {};
      
        console.log('resdsdasd', data);
        setGovt(data);
    });
  }, []);
  console.log('govt', govt);

  return (
    <>
    <Header />
    <div className="cntainer-fluid row ">
      <CenterModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark" style={{ minHeight: '1000px' }}>
        <MenuBar />
      </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 mt-3">
{/* 
      <div className="row  ">
          <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 mx-auto">
      <div className="form-group has-search">
      <Search className="form-control-feedback pt-2 pb-2"/>
    <input type="Search" className="form-control" placeholder="Search Candidates.."
     aria-label="Search"
     value={searchText}
     aria-describedby="search-addon"
     onChange={e => search(e.target.value)}
    />
  </div>
  </div>
  </div>
       */}
       
        <div className="row ">
          {govt && govt.length === 0 && (
            <span className="mx-auto">No record exist</span>
          )}

          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          
            {govt && govt.king &&
              <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 shadow mx-auto mt-4 px-auto pb-2 pt-2"
              style={{border:  '1px solid rgb(79, 235, 227)', borderRadius: '5px'}}>
                <div className="row mx-auto">
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 text-center">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                              alt="Profile Pic"
                              width="80em"
                              height="80em"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>  {govt.king.userId.fullName} </small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>  {govt.king.userId.role}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>  {govt.king.vote}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                       {govt.king.billName}
                    </h3>
                    <h4>
                      Bill Number: {govt.king.billNumber}
                    </h4>
                    <p>
                      {govt.king.billDescription}
                    </p>
                  </div>
                </div>
                <hr style={{border:  '1px solid rgb(79, 235, 227)'}} />


                <div className="row">
                  <Button
                    className="btn btn-primary px-auto mx-auto"
                    onClick={() => setModalShow(true)}
                  >
                    Share
                  </Button>
                  <Button
                    className="btn btn-danger px-auto mx-auto"
                    href="/bill"
                  >
                    Claim
                  </Button>
                </div>
              </div>
            }
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          {govt && govt.pm &&
              <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 shadow mx-auto mt-4 px-auto pb-2 pt-2"
              style={{border:  '1px solid rgb(79, 235, 227)', borderRadius: '5px'}}>
                <div className="row mx-auto">
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 text-center">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                              alt="Profile Pic"
                              width="80em"
                              height="80em"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>{govt.pm.userId.fullName}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>{govt.pm.userId.role}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>{govt.pm.vote}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                       {govt.pm.billName}
                    </h3>
                    <h4>
                      Bill Number: {govt.pm.billNumber}
                    </h4>
                    <p>
                     {govt.pm.billDescription}
                    </p>
                  </div>
                </div>
                <hr style={{border:  '1px solid rgb(79, 235, 227)'}} />


                <div className="row">
                  <Button
                    className="btn btn-primary px-auto mx-auto"
                    onClick={() => setModalShow(true)}
                  >
                    Share
                  </Button>
                  <Button
                    className="btn btn-danger px-auto mx-auto"
                    href="/bill"
                  >
                    Claim
                  </Button>
                </div>
              </div>
            }
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          {govt && govt.senator &&
              <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 shadow mx-auto mt-4 px-auto pb-2 pt-2"
              style={{border:  '1px solid rgb(79, 235, 227)', borderRadius: '5px'}}>
                <div className="row mx-auto">
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 text-center">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                              alt="Profile Pic"
                              width="80em"
                              height="80em"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small> {govt.senator.userId.fullName}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>  {govt.senator.userId.role}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>  {govt.senator.vote}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                  <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                       {govt.senator.billName}
                    </h3>
                    <h4>
                      Bill Number: {govt.senator.billNumber}
                    </h4>
                    <p>
                     {govt.senator.billDescription}
                    </p>.

                  </div>
                </div>
                <hr style={{border:  '1px solid rgb(79, 235, 227)'}} />


                <div className="row">
                  <Button
                    className="btn btn-primary px-auto mx-auto"
                    onClick={() => setModalShow(true)}
                  >
                    Share
                  </Button>
                  <Button
                    className="btn btn-danger px-auto mx-auto"
                    href="/bill"
                  >
                    Claim
                  </Button>
                </div>
              </div>
            }
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          {govt && govt.mayer &&
              <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 shadow mx-auto mt-4 px-auto pb-2 pt-2"
              style={{border:  '1px solid rgb(79, 235, 227)', borderRadius: '5px'}}>
                <div className="row mx-auto">
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 text-center">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                              alt="Profile Pic"
                              width="80em"
                              height="80em"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>{govt.mayer.userId.fullName}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small> {govt.mayer.userId.role}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small> {govt.mayer.vote}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                       {govt.mayer.billName}
                    </h3>
                    <h4>
                      Bill Number: {govt.mayer.billNumber}
                    </h4>
                    <p>
                     {govt.mayer.billDescription}
                    </p>
                  </div>
                </div>
                <hr style={{border:  '1px solid rgb(79, 235, 227)'}} />


                <div className="row">
                  <Button
                    className="btn btn-primary px-auto mx-auto"
                    onClick={() => setModalShow(true)}
                  >
                    Share
                  </Button>
                  <Button
                    className="btn btn-danger px-auto mx-auto"
                    href="/bill"
                  >
                    Claim
                  </Button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
 </>
  );
}

ConstitutionPage.propTypes = {
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

export default compose(withConnect)(ConstitutionPage);
