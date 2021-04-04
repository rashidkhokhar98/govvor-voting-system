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

  const [searchText, setSearchText] = useState('');
  
  const search = value => {
    setSearchText(value);
    const updatedKing =
    kingCategories &&
    kingCategories.length > 0 &&
    kingCategories.filter(el => el.name.toLowerCase().indexOf(value) !== -1);
    setKingCategories(updatedKing);

    const updatedPrimenister =
    primenisterCategories &&
    primenisterCategories.length > 0 &&
    primenisterCategories.filter(el => el.name.toLowerCase().indexOf(value) !== -1);
    setPrimenisterCategories(updatedPrimenister);

    const updatedSenator =
    senatorCategories &&
    senatorCategories.length > 0 &&
    senatorCategories.filter(el => el.name.toLowerCase().indexOf(value) !== -1);
    setsenatorCategories(updatedSenator);

    const updatedMayer =
    mayerCategories &&
    mayerCategories.length > 0 &&
    mayerCategories.filter(el => el.name.toLowerCase().indexOf(value) !== -1);
    setMayerCategories(updatedMayer);

   if (!value) {
     setKingCategories( ElectionCategories[placeHolderObj1].categories);
     setPrimenisterCategories( ElectionCategories[placeHolderObj2].categories);
     setsenatorCategories( ElectionCategories[placeHolderObj3].categories);
     setMayerCategories( ElectionCategories[placeHolderObj4].categories);
  }
  };

  return (
    <>
    <Header />
    <div className="cntainer-fluid row ">
      <CenterModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark" style={{ minHeight: '1000px' }}>
        <MenuBar />
      </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 mt-3">

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
        <div className="row ">
        {kingCategories && primenisterCategories && senatorCategories && mayerCategories && kingCategories.length===0 && primenisterCategories.length===0 && senatorCategories.length===0 && mayerCategories.length===0 && <span className="mx-auto mt-5">No record exist</span>}

          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          
            {kingCategories && kingCategories.map(item => (
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
                            <small> {item.name}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>{item.rank}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                       {item.bill_name}
                    </h3>
                    <h4>
                      Bill Number: {item.bill_number}
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
            {primenisterCategories && primenisterCategories.map(item => (
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
                            <small>{item.name}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>{item.rank}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                       {item.bill_name}
                    </h3>
                    <h4>
                      Bill Number: {item.bill_number}
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
            {senatorCategories && senatorCategories.map(item => (
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
                            <small>{item.name}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>{item.rank}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                       {item.bill_name}
                    </h3>
                    <h4>
                      Bill Number: {item.bill_number}
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
            {mayerCategories && mayerCategories.map(item => (
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
                            <small>{item.name}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>{item.rank}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}}>
                      {item.bill_name}
                    </h3>
                    <h4>
                      Bill Number: {item.bill_number}
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
