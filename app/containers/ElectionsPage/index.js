import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

// import Bill from "../../components/Bill"
// import CompactProfile from "../../components/CompactProfile";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import MenuBar from '../../components/MenuBar';

import { ElectionCategories } from '../../constant';
import CenterModal from '../../components/CenterModal';
import StripeCheckout from 'react-stripe-checkout';

export function ElectionsPage() {
  const [modalShow, setModalShow] = useState(false);
  const [stripeShow, setStripeShow] = useState(false);
  const [product] = React.useState({
    name: 'Govvor.com',
    price: 4.99,
    description: 'Vote People For Better',
  });
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
  const [card, setCard] = useState('');
  const [disableVote, setDisableVote] = useState(false);
  const handleCategoryItem = value => {
    setCard(value);
  };
  const addVote = cardV => {
    setStripeShow(true);
    const cloneObj = { ...cardV };
    cloneObj.vote += 1;
    setCard(cloneObj);
    setDisableVote(true);
  };
  const onToken = token => {
    console.log('token is', token);
  };
  return (
    <div className="cntainer-fluid row">
      <CenterModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark">
        <MenuBar />
      </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 mt-3 mb-5 ">
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {card && (
              <div className="border rounded border-dark col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 shadow mx-auto mt-4 px-auto pb-2 pt-2">
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
                            <small>Name:{card.name}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Votes:{card.vote}</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <small>Rank:{card.rank}</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                    <h3 className="font-style ">{card.bill_name}</h3>
                    <h4>Bill Number:{card.bill_number}</h4>
                    <p>
                      Bill Description:
                      <br />
                      {card.bill_description}
                    </p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  {stripeShow ? (
                    <StripeCheckout
                      className="px-auto mx-auto"
                      token={onToken}
                      stripeKey="pk_test_51ICk33BW8V4hKaTPZuaaXpps2drWjjMXobfOy9pwGcQBrEb9fzb3xvtjdEr9TPsQFlEONX9hTI93IQLXDWQO6qe000sp4KoAsP"
                      name="Govvor.com"
                      amount={product.price * 100}
                      billingAddress
                      shippingAddress
                    />
                  ) : (
                    <Button
                      className="btn btn-success px-auto mx-auto"
                      onClick={() => addVote(card)}
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
                    href="/bill"
                  >
                    Claim
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12">
            <h3 className="font-style text-center">CANDIDATES FOR KING</h3>

            <div className="row d-flex bg-light mx-auto">
              {kingCategories.map(item => (
                <div onClick={() => handleCategoryItem(item)}>
                  <Card
                    className="ml-5 mb-5 border border-dark shadow"
                    style={{ width: '12rem' }}
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
                        {item.name} <br />
                        <b>Rank:</b>
                        {item.rank}
                      </Card.Text>
                      <Card.Title style={{ lineHeight: '5px' }}>
                        <b>Votes:</b>
                        {item.vote}
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
            <h3 className="font-style text-center">
              CANDIDATES FOR PRIME_MENISTER
            </h3>

            <div className="row d-flex bg-light">
              {primenisterCategories.map(item => (
                <div onClick={() => handleCategoryItem(item)}>
                  <Card
                    className="ml-5 mb-5 border border-dark shadow"
                    style={{ width: '12rem' }}
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
                        {item.name} <br />
                        <b>Rank:</b>
                        <small>{item.rank}</small>
                      </Card.Text>
                      <Card.Title style={{ lineHeight: '5px' }}>
                        <b>Votes:</b>
                        {item.vote}
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
            <h3 className="font-style text-center">CANDIDATES FOR SENATOR</h3>

            <div className="row d-flex bg-light">
              {senatorCategories.map(item => (
                <div onClick={() => handleCategoryItem(item)}>
                  <Card
                    className="ml-5 mb-5 border border-dark shadow"
                    style={{ width: '12rem' }}
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
                        {item.name} <br />
                        <b>Rank:</b>
                        {item.rank}
                      </Card.Text>
                      <Card.Title style={{ lineHeight: '5px' }}>
                        <b>Votes:</b>
                        {item.vote}
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
            <h3 className="font-style text-center">CANDIDATES FOR MAYER</h3>

            <div className="row d-flex bg-light">
              {mayerCategories.map(item => (
                <div onClick={() => handleCategoryItem(item)}>
                  <Card
                    className="ml-5 mb-5 border border-dark shadow"
                    style={{ width: '12rem' }}
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
                        {item.name} <br />
                        <b>Rank:</b>
                        {item.rank}
                      </Card.Text>
                      <Card.Title style={{ lineHeight: '5px' }}>
                        <b>Votes:</b>
                        {item.vote}
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
