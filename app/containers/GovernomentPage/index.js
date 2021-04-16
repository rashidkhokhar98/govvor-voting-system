/**
 *
 * GovernomentPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

// import Bill from "../../components/Bill";
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { ElectionCategories } from '../../constant';
import MenuBar from '../../components/MenuBar';
import CompactProfile from '../../components/CompactProfile';
import Header from '../../components/header/header';

export function GovernomentPage() {
  const [govt, setGovt] = useState();
  const [card, setCard] = useState();
  const [cardShow, setCardShow] = useState(false);
  const [senatorInfo, setSenatorInfo] = useState(null);
  const [mayerInfo, setMayerInfo] = useState(null);
  const [pmInfo, setPmInfo] = useState(null);
  const [kingInfo, setKingInfo] = useState(null);
  const handleCategoryItem = value => {
    setCard(value);
    setCardShow(true);
  };

  useEffect(() => {
    axios.get('https://hrwaller.com/api/v1/users/get-govt').then(res => {
      const data = (res && res.data) || {};
      setGovt(data.result);
      setSenatorInfo(data.senatorInfo);
      setMayerInfo(data.mayerInfo);
      setKingInfo(data.kingInfo);
      setPmInfo(data.pmInfo);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="cntainer-fluid row">
        <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark">
          <MenuBar />
        </div>
        <div
          className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 mt-3"
          style={{ minHeight: '1000px' }}
        >
          <div className="row text-center">
            <h4
              className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
              style={{ color: 'rgb(153,50,204)' }}
            >
              Elected Government Of The Week
            </h4>
          </div>
          <div className="row d-flex bg-light mt-5  mx-auto">
            {govt && govt.length === 0 && (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}

            {kingInfo && (
              <div onClick={() => handleCategoryItem(kingInfo)}>
                <Card
                  className=" mr-3 mb-3 shadow"
                  style={{
                    width: '14rem',
                    border: '1px solid rgb(79, 235, 227)',
                    borderRadius: '5px',
                  }}
                >
                  <Card.Header className="bg-light">
                    <img
                      src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                      alt="Profile Pic"
                      width="70em"
                      height="70em"
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: 'medium', lineHeight: '25px' }}
                    >
                      {kingInfo && kingInfo.fullName}
                      <br />
                      {kingInfo && kingInfo.role}
                    </Card.Text>
                    <Card.Title style={{ lineHeight: '5px' }}>
                      Votes:
                      {govt.king.vote}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            )}

            {pmInfo && (
              <div onClick={() => handleCategoryItem(pmInfo)}>
                <Card
                  className=" mr-3 mb-3 shadow"
                  style={{
                    width: '14rem',
                    border: '1px solid rgb(79, 235, 227)',
                    borderRadius: '5px',
                  }}
                >
                  <Card.Header className="bg-light">
                    <img
                      src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                      alt="Profile Pic"
                      width="70em"
                      height="70em"
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: 'medium', lineHeight: '25px' }}
                    >
                      {pmInfo && pmInfo.fullName}
                      <br />
                      {pmInfo && pmInfo.role}
                    </Card.Text>
                    <Card.Title style={{ lineHeight: '5px' }}>
                      Votes:
                      {govt.pm.vote}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            )}

            {senatorInfo && (
              <div onClick={() => handleCategoryItem(senatorInfo)}>
                <Card
                  className=" mr-3 mb-3 shadow"
                  style={{
                    width: '14rem',
                    border: '1px solid rgb(79, 235, 227)',
                    borderRadius: '5px',
                  }}
                >
                  <Card.Header className="bg-light">
                    <img
                      src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                      alt="Profile Pic"
                      width="70em"
                      height="70em"
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: 'medium', lineHeight: '25px' }}
                    >
                      {senatorInfo && senatorInfo.fullName}
                      <br />
                      {senatorInfo && senatorInfo.role}
                    </Card.Text>
                    <Card.Title style={{ lineHeight: '5px' }}>
                      Votes:
                      {govt.senator.vote}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            )}

            {mayerInfo && (
              <div onClick={() => handleCategoryItem(mayerInfo)}>
                <Card
                  className=" mr-3 mb-3 shadow"
                  style={{
                    width: '14rem',
                    border: '1px solid rgb(79, 235, 227)',
                    borderRadius: '5px',
                  }}
                >
                  <Card.Header className="bg-light">
                    <img
                      src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                      alt="Profile Pic"
                      width="70em"
                      height="70em"
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Text
                      style={{ fontSize: 'medium', lineHeight: '25px' }}
                    >
                      {mayerInfo && mayerInfo.fullName}
                      <br />
                      {mayerInfo && mayerInfo.role}
                    </Card.Text>
                    <Card.Title style={{ lineHeight: '5px' }}>
                      Votes:
                      {govt.mayer.vote}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            )}
          </div>

          <Modal
            show={cardShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                <strong> {card && card.fullName}</strong>{' '}
                <small>
                  (SELECTED {card && card.role} OF THE WEEK!)
                </small>
              </Modal.Title>

              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => setCardShow(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </Modal.Header>

            <Modal.Body>
              <div className="row ">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  {card && (
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto px-auto pb-2 pt-2">
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
                                  <small>{card.fullName}</small>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <small>{card.role}</small>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <small>Votes:{card.vote}</small>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                          <h3
                            className="font-style "
                            style={{ color: 'rgb(153,50,204)' }}
                          >
                            {card.billName}
                          </h3>
                          <h4>Bill Number:{card.billNumber}</h4>
                          <p>{card.billDescription}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}

GovernomentPage.propTypes = {
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

export default compose(withConnect)(GovernomentPage);
