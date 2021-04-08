import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

// import Bill from "../../components/Bill"
// import CompactProfile from "../../components/CompactProfile";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

import MenuBar from '../../components/MenuBar';
import { Modal } from "react-bootstrap";
import Header from '../../components/header/header';
import axios from 'axios';

import { ElectionCategories } from '../../constant';
import CenterModal from '../../components/CenterModal';
import StripeCheckout from 'react-stripe-checkout';

export function ElectionsPage() {
  const [modalShow, setModalShow] = useState(false);
  const [cardShow, setCardShow] = useState(false);
  const [stripeShow, setStripeShow] = useState(false);
  const [userId, setUserId] = useState(null);
  const [product] = React.useState({
    name: 'Govvor.com',
    price: 4.99,
    description: 'Vote People For Better',
  });

  const [kingCategories, setKingCategories] = useState([]);
  const [primenisterCategories, setPrimenisterCategories] = useState([]);
  const [senatorCategories, setsenatorCategories] = useState([]);
  const [mayerCategories, setMayerCategories] = useState([]);

  const [card, setCard] = useState('');
  
  const [userDetail, setUserDetail] = useState({});
  const [billDetail, setBillDetail] = useState([]);
  const [disableVote, setDisableVote] = useState(false);
  const [searchText, setSearchText] = useState('');
  
  
  const search = value => {
    setSearchText(value);
    const updatedKing =
      kingCategories &&
      kingCategories.length > 0 &&
      kingCategories.filter(el => el.fullName.toLowerCase().indexOf(value) !== -1);
    setKingCategories(updatedKing);

    const updatedPrimenister =
      primenisterCategories &&
      primenisterCategories.length > 0 &&
      primenisterCategories.filter(
        el => el.fullName.toLowerCase().indexOf(value) !== -1,
      );
    setPrimenisterCategories(updatedPrimenister);

    const updatedSenator =
      senatorCategories &&
      senatorCategories.length > 0 &&
      senatorCategories.filter(
        el => el.fullName.toLowerCase().indexOf(value) !== -1,
      );
    setsenatorCategories(updatedSenator);

    const updatedMayer =
      mayerCategories &&
      mayerCategories.length > 0 &&
      mayerCategories.filter(el => el.fullName.toLowerCase().indexOf(value) !== -1);
    setMayerCategories(updatedMayer);

  if (!value) {
    axios.get('http://localhost:5000/api/v1/users/get-users').then(res => {
      const { KING, MAYER, PM, SENATOR } = (res && res.data) || {};
      setKingCategories(KING);
      setPrimenisterCategories(PM);
      setsenatorCategories(SENATOR);
      setMayerCategories(MAYER);
    });
   }
  };


  const handleCategoryItem = value => {
   console.log("handleCategoryItem triger")
    // e.preventDefault();
    axios
      .get(`http://localhost:5000/api/v1/users/get-user?id=${value._id}`)
      .then(res => {
        const { data } = res || {};
        if (data.success === 1) {
          console.log('res', data);
          setUserDetail(data.user);
          setBillDetail(data.bill);
          setCard(value);
          setCardShow(true);
        }
      });
  };

  const addVote = (cardV, userIdV) => {
    setStripeShow(true);
    setUserId(userIdV);
    const cloneObj = { ...cardV };
    cloneObj.vote += 1;
    setCard(cloneObj);
    setDisableVote(true);
  };
 
  async function onToken(token, addresses) {
    const response = await axios.post(
      'http://localhost:5000/api/v1/users/checkout',
      { token, product, userId },
    );
    const { status } = response.data;
    console.log('Response:', response.data);
    window.location.reload();
    if (status === 'success') {
      console.log('ddddddd', status);
      // toast('Success! ($9.45 USD) - Payment has been done', {
      //   type: 'success',
      // });
    } else {
      console.log('error', status);
      // toast('Something went wrong', { type: 'error' });
    }
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/users/get-users').then(res => {
      const { KING, MAYER, PM, SENATOR } = (res && res.data) || {};
      setKingCategories(KING);
      setPrimenisterCategories(PM);
      setsenatorCategories(SENATOR);
      setMayerCategories(MAYER);
    });
  }, []);


  return (
    <>
    <Header />
    <div className="cntainer-fluid row">
      <CenterModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark" style={{ minHeight: '1000px' }}>
        <MenuBar />
      </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 mt-3 mb-5 ">

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
  <Modal
      show={cardShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      

     <Modal.Header >
     <Modal.Title id="contained-modal-title-vcenter">
       <strong>  {userDetail && userDetail.fullName }</strong> <small>({userDetail && userDetail.role})</small>
        </Modal.Title>
                   
     <button type="button" className="close" aria-label="Close" onClick={() => setCardShow(false)}>
  <span aria-hidden="true">&times;</span>
</button>
      
      </Modal.Header>
      
      <Modal.Body >
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {userDetail && (
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto px-auto pb-2 pt-2"
             >
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
                                  <small>{userDetail.fullName}</small>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <small>{userDetail.role}</small>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <small>Votes:{billDetail&& billDetail.length > 0 && billDetail[0].vote || 0}</small>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                  </div>
                  {billDetail && billDetail.length > 0 ? (
                          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                            <h3
                              className="font-style "
                              style={{ color: 'rgb(153,50,204)' }}
                            >
                              {billDetail[0].billName}
                            </h3>
                            <h6>Bill_Number:{billDetail[0].billNumber}</h6>
                            <p>{billDetail[0].billDescription}</p>
                          </div>
                        ) : (
                          <div>
                            <span>No Bill Found</span>
                          </div>
                        )}
                      </div>
        <hr style={{border:  '1px solid rgb(79, 235, 227)'}} />
                

                <div className="row">
                  {stripeShow ? (
                    <StripeCheckout
                      className="px-auto mx-auto"
                      token={onToken}
                      stripeKey="pk_test_Lp6L3Vsfdml5cUGlmP5yzysT"
                      name="Govvor.com"
                      amount={product.price * 100}
                      billingAddress
                      shippingAddress
                    />
                  ) : (
                    <Button
                      className="btn btn-success px-auto mx-auto"
                      onClick={() => addVote(card, userDetail._id)}
                      disabled={disableVote}
                    >
                      Vote
                    </Button>
                  )}

                  <Button
                    className="btn btn-primary px-auto mx-auto"
                    onClick={() => setModalShow(true)}
                   
                  >
                    Share
                  </Button>
                  <Button
                    className="btn btn-danger px-auto mx-auto"
                    href="/claim"
                    onClick={() => setCardShow(false)}
                  >
                    Claim
                  </Button>
                </div>
              
              </div>
            )}
          </div>
        </div>
        </Modal.Body>
    </Modal>

        <div className="row mt-2">
          <div className="col-12">
            <h3 className="font-style text-center" style={{color: 'rgb(153,50,204)'}}>King Candidates</h3>
            <span>
              {kingCategories &&
                kingCategories.length === 0 &&
                <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>}
            </span>
            <div className="row d-flex bg-light mx-auto">
              {kingCategories && kingCategories.map(item => (
                 <div onClick={() => handleCategoryItem(item)}>
                   <Card
                        className=" mr-3 mb-3 shadow"
                        style={{
                          width: '14rem',
                          border: '1px solid rgb(79, 235, 227)',
                          borderRadius: '5px',
                        }}
                        
                      >
                    <Card.Header style={{ backgroundColor: 'transparent' }}>
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
                        <b>Name:</b>
                        {item.fullName} <br />
                        <b>Rank:</b>
                        {item.role}
                      </Card.Text>
                      <Card.Title style={{ lineHeight: '5px' }}>
                        <b>Votes:</b>
                        {item.vote || 0}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}

              <br />
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <h3 className="font-style text-center" style={{color: 'rgb(153,50,204)'}}>
              Prime Minister Candidates
            </h3>
            <span>
              {primenisterCategories &&
                primenisterCategories.length === 0 &&
                <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>}
            </span>
            <div className="row d-flex bg-light mx-auto">
     

              {primenisterCategories && primenisterCategories.map(item => (
                <div onClick={() => handleCategoryItem(item)}>
                   <Card
                        className=" mr-3 mb-3 shadow"
                        style={{
                          width: '14rem',
                          border: '1px solid rgb(79, 235, 227)',
                          borderRadius: '5px',
                        }}
                        
                      >
                    <Card.Header style={{ backgroundColor: 'transparent' }}>
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
                        <b>Name:</b>
                        {item.fullName} <br />
                        <b>Rank:</b>
                        {item.role}
                      </Card.Text>
                      <Card.Title style={{ lineHeight: '5px' }}>
                        <b>Votes:</b>
                        {item.vote || 0}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}

              <br />
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12">
            <h3 className="font-style text-center" style={{color: 'rgb(153,50,204)'}}>Senator Candidates</h3>
            <span>
              {senatorCategories &&
                senatorCategories.length === 0 &&
                <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>}
            </span>
            <div className="row d-flex bg-light mx-auto">

              {senatorCategories && senatorCategories.map(item => (
                <div onClick={() => handleCategoryItem(item)}>
                  <Card
                        className=" mr-3 mb-3 shadow"
                        style={{
                          width: '14rem',
                          border: '1px solid rgb(79, 235, 227)',
                          borderRadius: '5px',
                        }}
                        
                      >
                    <Card.Header style={{ backgroundColor: 'transparent' }}>
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
                        <b>Name:</b>
                        {item.fullName} <br />
                        <b>Rank:</b>
                        {item.role}
                      </Card.Text>
                      <Card.Title style={{ lineHeight: '5px' }}>
                        <b>Votes:</b>
                        {(item.bill && item.bill.length > 0 && item.bill[0].vote) || 0}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}

              <br />
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12">
            <h3 className="font-style text-center" style={{color: 'rgb(153,50,204)'}}>Mayer Candidates</h3>
            <span>
              {mayerCategories &&
                mayerCategories.length === 0 &&
                <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>}
            </span>
            <div className="row d-flex bg-light mx-auto">
         

              {mayerCategories && mayerCategories.map(item => (
                <div onClick={() => handleCategoryItem(item)}>
                   <Card
                        className=" mr-3 mb-3 shadow"
                        style={{
                          width: '14rem',
                          border: '1px solid rgb(79, 235, 227)',
                          borderRadius: '5px',
                        }}
                        
                      >
                    <Card.Header style={{ backgroundColor: 'transparent' }}>
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
                        <b>Name:</b>
                        {item.fullName} <br />
                        <b>Rank:</b>
                        {item.role}
                      </Card.Text>
                      <Card.Title style={{ lineHeight: '5px' }}>
                        <b>Votes:</b>
                        {item.vote || 0}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
ElectionsPage.propTypes = {
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

export default compose(withConnect)(ElectionsPage);
