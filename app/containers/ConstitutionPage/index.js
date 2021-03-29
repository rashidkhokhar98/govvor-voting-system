/**
 *
 * PolicyPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
//import Bill from "../../components/Bill"
import MenuBar from '../../components/MenuBar';
import { Button } from 'react-bootstrap';
import { ElectionCategories } from '../../constant';
import CenterModal from '../../components/CenterModal';

export function ConstitutionPage() {
  const [modalShow, setModalShow] = useState(false);
  const placeHolderObj1 = 'King';
  const placeHolderObj2 = 'Prime_menister';
  const placeHolderObj3 = 'Senator';
  const placeHolderObj4 = 'Mayer';
  const [kingCategories, setKingCategories] = useState(
    ElectionCategories[placeHolderObj1].categories || [],
  );
  const [primenisterCategories, setPrimenisterCategories] = useState(
    ElectionCategories[placeHolderObj2].categories || [],
  );
  const [senatorCategories, setsenatorCategories] = useState(
    ElectionCategories[placeHolderObj3].categories || [],
  );
  const [mayerCategories, setMayerCategories] = useState(
    ElectionCategories[placeHolderObj4].categories || [],
  );

  return (
    <div className="cntainer-fluid row ">
      <CenterModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark ">
        <MenuBar />
      </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 ">
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {kingCategories.map(item => (
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
                            <small>Name: {item.name}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Rank: {item.rank}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                      <i> {item.bill_name}</i>
                    </h3>
                    <h4>
                      <i>Bill Number: {item.bill_number}</i>
                    </h4>
                    <p>
                      {item.bill_description}
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
            ))}
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {primenisterCategories.map(item => (
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
                            <small>Name: {item.name}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Rank: {item.rank}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                      <i> {item.bill_name}</i>
                    </h3>
                    <h4>
                      <i>Bill Number: {item.bill_number}</i>
                    </h4>
                    <p>
                     {item.bill_description}
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
            ))}
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {senatorCategories.map(item => (
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
                            <small>Name: {item.name}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Rank: {item.rank}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                      <i> {item.bill_name}</i>
                    </h3>
                    <h4>
                      <i>Bill Number: {item.bill_number}</i>
                    </h4>
                    <p>
                     {item.bill_description}
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
            ))}
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {mayerCategories.map(item => (
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
                            <small>Name: {item.name}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Rank: {item.rank}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                      <i> {item.bill_name}</i>
                    </h3>
                    <h4>
                      <i>Bill Number: {item.bill_number}</i>
                    </h4>
                    <p>
                     {item.bill_description}
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
            ))}
          </div>
        </div>
      </div>
    </div>
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
