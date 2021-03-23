/**
 *
 * GovernomentPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

//import Bill from "../../components/Bill";
import CompactProfile from '../../components/CompactProfile';
import MenuBar from '../../components/MenuBar';
import { Button } from 'react-bootstrap';
import { ElectionCategories } from '../../constant';
import { Card } from 'react-bootstrap';

export function GovernomentPage() {
  /*const placeHolderObj1="King";
  const placeHolderObj2="Primenister";
  const placeHolderObj3="Senator";
  const placeHolderObj4="Mayer";
   const[kingCategories, setKingCategories]=useState(ElectionCategories[placeHolderObj1].categories || []);
   const[primenisterCategories, setPrimenisterCategories]=useState(ElectionCategories[placeHolderObj2].categories || []);
   const[senatorCategories, setsenatorCategories]=useState(ElectionCategories[placeHolderObj3].categories || []);
   const[mayerCategories, setMayerCategories]=useState(ElectionCategories[placeHolderObj4].categories || []);
  */
  return (
    <div className="cntainer-fluid row">
      <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark">
        <MenuBar />
      </div>
      <div
        className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 mt-2"
        style={{ height: '1000px' }}
      >
        <div className="row d-flex bg-light">
          
          <div >
            <Card
              className="ml-2 mb-2 border border-dark"
              style={{ width: '12rem' }}
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
                <Card.Text style={{ fontSize: 'medium', lineHeight: '25px' }}>
                  <b>Name:</b>
                  <br />
                  <b>Rank:</b>

                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div >
            <Card
              className="ml-2 mb-2 border border-dark"
              style={{ width: '12rem' }}
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
                <Card.Text style={{ fontSize: 'medium', lineHeight: '25px' }}>
                  <b>Name:</b>
                  <br />
                  <b>Rank:</b>

                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div >
            <Card
              className="ml-2 mb-2 border border-dark"
              style={{ width: '12rem' }}
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
                <Card.Text style={{ fontSize: 'medium', lineHeight: '25px' }}>
                  <b>Name:</b>
                  <br />
                  <b>Rank:</b>

                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div >
            <Card
              className="ml-2 mb-2 border border-dark"
              style={{ width: '12rem' }}
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
                <Card.Text style={{ fontSize: 'medium', lineHeight: '25px' }}>
                  <b>Name:</b>
                  <br />
                  <b>Rank:</b>

                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>

      </div>
    </div>
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
