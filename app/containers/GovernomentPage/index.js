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
import { ElectionCategories } from '../../constant';
import MenuBar from '../../components/MenuBar';
import CompactProfile from '../../components/CompactProfile';
import Header from '../../components/header/header';
import axios from 'axios';


export function GovernomentPage() {
  /* const placeHolderObj1="King";
  const placeHolderObj2="Primenister";
  const placeHolderObj3="Senator";
  const placeHolderObj4="Mayer";
   const[kingCategories, setKingCategories]=useState(ElectionCategories[placeHolderObj1].categories || []);
   const[primenisterCategories, setPrimenisterCategories]=useState(ElectionCategories[placeHolderObj2].categories || []);
   const[senatorCategories, setsenatorCategories]=useState(ElectionCategories[placeHolderObj3].categories || []);
   const[mayerCategories, setMayerCategories]=useState(ElectionCategories[placeHolderObj4].categories || []);
  */
  const [govt, setGovt] = useState();

  const [searchText, setSearchText] = useState('');

/*
  const search = value => {
    setSearchText(value);
    const updated =
      govt &&
      govt.length > 0 &&
      govt.filter(el => el.name.toLowerCase().indexOf(value) !== -1);
    setGovt(updated);

    if (!value) {
    }
  };
*/

  const [card, setCard] = useState();
  const [cardShow, setCardShow] = useState(false);

  const handleCategoryItem = value => {
    // e.preventDefault();
    setCard(value);
    setCardShow(true);
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
    <div className="cntainer-fluid row">

      <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark">
        <MenuBar />
      </div>
      <div
        className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 mt-3"
        style={{ minHeight: '1000px' }}
      >
        <div className="row  ">
          <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 mx-auto">
            <div className="form-group has-search">
              <Search className="form-control-feedback pt-2 pb-2" />
              <input
                type="Search"
                className="form-control"
                placeholder="Search Candidates.."
                aria-label="Search"
                value={searchText}
                aria-describedby="search-addon"
                onChange={e => search(e.target.value)}
              />
            </div>
          </div>
        </div>

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
            <span className="mx-auto">No record exist</span>
          )}
          
          {govt && govt.king &&
              <div onClick={() => handleCategoryItem(govt.king)}>
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
                      {govt.king.userId.fullName}
                      <br />
                      {govt.king.userId.role}
                    </Card.Text>
                    <Card.Title style={{ lineHeight: '5px' }}>
                      Votes:
                      {govt.king.vote}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
}
 
{govt && govt.pm &&
              <div onClick={() => handleCategoryItem(govt.pm)}>
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
                      {govt.pm.userId.fullName}
                      <br />
                      {govt.pm.userId.role}
                    </Card.Text>
                    <Card.Title style={{ lineHeight: '5px' }}>
                      Votes:
                      {govt.pm.vote}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
}
 
{govt && govt.senator &&
              <div onClick={() => handleCategoryItem(govt.senator)}>
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
                      {govt.senator.userId.fullName}
                      <br />
                      {govt.senator.userId.role}
                    </Card.Text>
                    <Card.Title style={{ lineHeight: '5px' }}>
                      Votes:
                      {govt.senator.vote}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
}
 
          {govt && govt.mayer &&
              <div onClick={() => handleCategoryItem(govt.mayer)}>
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
                      {govt.mayer.userId.fullName}
                      <br />
                      {govt.mayer.userId.role}
                    </Card.Text>
                    <Card.Title style={{ lineHeight: '5px' }}>
                      Votes:
                      {govt.mayer.vote}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
}
        </div>

        <Modal
          show={cardShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            <strong>  {card && card.userId.fullName }</strong> <small>(SELECTED {card && card.userId.role} OF THE WEEK!)</small>
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
                                <small>{card.userId.fullName}</small>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <small>{card.userId.role}</small>
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

                    {/*   <div className="row">
                <Button
                  className="btn btn-success px-auto mx-auto"
                  onClick={() => addVote(card)}
                  disabled={disableVote}
                >
                  Vote
                </Button>
                <Button className="btn btn-primary px-auto mx-auto">
                  Share
                </Button>
                <Button className="btn btn-danger px-auto mx-auto" href="/bill">
                  Claim
                </Button>
              </div> */}
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
