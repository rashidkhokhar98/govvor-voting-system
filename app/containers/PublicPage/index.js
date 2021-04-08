import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import Bill from "../../components/Bill";
// import CompactProfile from "../../components/CompactProfile";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Search } from 'react-bootstrap-icons';
import { Modal } from 'react-bootstrap';
import MenuBar from '../../components/MenuBar';
import Header from '../../components/header/header';
import { ElectionCategories } from '../../constant';
// import Avatar from '../../images/User-Avatar.png';

export function PublicPage() {
  const [kingCategories, setKingCategories] = useState([]);
  const [primenisterCategories, setPrimenisterCategories] = useState([]);
  const [senatorCategories, setsenatorCategories] = useState([]);
  const [mayerCategories, setMayerCategories] = useState([]);
  const [card, setCard] = useState('');
  const [cardShow, setCardShow] = useState(false);
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

 /* const addVote = cardV => {
    const cloneObj = { ...cardV };
    cloneObj.vote += 1;
    setCard(cloneObj);
    setDisableVote(true);
  };
  */

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
        <div
          className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark"
          style={{ minHeight: '1000px' }}
        >
          <MenuBar />
        </div>
        <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 mt-3 mb-5 ">
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
          <Modal
            show={cardShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
              <strong>  {userDetail && userDetail.fullName }</strong> <small>({userDetail && userDetail.role})</small> 
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
                  {userDetail && (
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
                                  <small>Votes:{userDetail.vote || 0}</small>
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

          <div className="row mt-2 ">
            <div className="col-12">
              <h3
                className="font-style text-center"
                style={{ color: 'rgb(153,50,204)' }}
              >
                King Candidates
              </h3>
              <span>
                {kingCategories &&
                  kingCategories.length === 0 &&
                  <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>}
              </span>
              <div className="row d-flex bg-light mx-auto ">
                {kingCategories &&
                  kingCategories.map(item => (
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
              <h3
                className="font-style text-center"
                style={{ color: 'rgb(153,50,204)' }}
              >
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
                {primenisterCategories &&
                  primenisterCategories.map(item => (
                    <div onClick={() => handleCategoryItem(item)}>
                      <Card
                        className="mr-3 mb-3 shadow"
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
              <h3
                className="font-style text-center"
                style={{ color: 'rgb(153,50,204)' }}
              >
                Senator Candidates
              </h3>
              <span>
                {senatorCategories &&
                  senatorCategories.length === 0 &&
                  <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>}
              </span>
              <div className="row d-flex bg-light mx-auto">
                {senatorCategories &&
                  senatorCategories.map(item => (
                    <div onClick={() => handleCategoryItem(item)}>
                      <Card
                        className="mr-3 mb-3 shadow"
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
              <h3
                className="font-style text-center"
                style={{ color: 'rgb(153,50,204)' }}
              >
                Mayer Candidates
              </h3>
              <span>
                {mayerCategories &&
                  mayerCategories.length === 0 &&
                  <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>}
              </span>
              <div className="row d-flex bg-light mx-auto">
                {mayerCategories &&
                  mayerCategories.map(item => (
                    <div onClick={() => handleCategoryItem(item)}>
                      <Card
                        className="mr-3 mb-3 shadow"
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

PublicPage.propTypes = {
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

export default compose(withConnect)(PublicPage);
