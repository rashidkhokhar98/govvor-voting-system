/**
 *
 * GovernomentPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

//import Bill from "../../components/Bill";
import CompactProfile from '../../components/CompactProfile';
import MenuBar from '../../components/MenuBar';
import { Button } from 'react-bootstrap';
import { ElectionCategories } from '../../constant';
import { Card } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { Modal } from "react-bootstrap";



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
  const [govt, setGovt] = useState([
    {
      name: 'AdilK01',
      value: 'adil01',
      rank: 'King',
      vote: 1,
      bill_name: 'Lorem Ipsum',
      bill_number: 1,
      bill_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      name: 'AdilP02',
      value: 'adil02',
      rank: 'Prime_menister',
      vote: 2,
      bill_name: 'Lorem Ipsum',
      bill_number: 2,
      bill_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      name: 'AdilS03',
      value: 'adil03',
      rank: 'Senator',
      vote: 3,
      bill_name: 'Lorem Ipsum',
      bill_number: 3,
      bill_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      name: 'Adil04',
      value: 'adil04',
      rank: 'Mayer',
      vote: 4,
      bill_name: 'Lorem Ipsum',
      bill_number: 4,
      bill_description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ]);

  const [searchText, setSearchText] = useState('');
  
  const search = value => {
    setSearchText(value);
    const updated =
    govt &&
    govt.length > 0 &&
    govt.filter(el => el.name.toLowerCase().indexOf(value) !== -1);
    setGovt(updated);

   
   if (!value) {
     setGovt([
      {
        name: 'AdilK01',
        value: 'adil01',
        rank: 'King',
        vote: 1,
        bill_name: 'Lorem Ipsum',
        bill_number: 1,
        bill_description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'AdilP02',
        value: 'adil02',
        rank: 'Prime_menister',
        vote: 2,
        bill_name: 'Lorem Ipsum',
        bill_number: 2,
        bill_description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'AdilS03',
        value: 'adil03',
        rank: 'Senator',
        vote: 3,
        bill_name: 'Lorem Ipsum',
        bill_number: 3,
        bill_description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        name: 'Adil04',
        value: 'adil04',
        rank: 'Mayer',
        vote: 4,
        bill_name: 'Lorem Ipsum',
        bill_number: 4,
        bill_description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ]);
    
  }
  };

  const [card, setCard] = useState();
  const [cardShow, setCardShow] = useState(false);


  const handleCategoryItem = value => {
    // e.preventDefault();
    setCard(value);
    setCardShow(true);

    
  };

  return (
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

        <div className="row text-center">
          <h4 className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{color: 'rgb(153,50,204)'}}>
            Elected Government Of The Week
          </h4>
        </div>
        <div className="row d-flex bg-light mt-5 ">
          {govt && govt.length===0 && <span className="mx-auto">No record exist</span>}
          {govt &&
            govt.map(item => (
              <div onClick={() => handleCategoryItem(item)}>
                <Card
                  className="ml-5 mb-5 shadow"
                  style={{width: '12rem' ,border:  '1px solid rgb(79, 235, 227)', borderRadius: '5px'}}
                 
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
                     {item.name}
                      <br />
                     {item.rank}
                     
                    </Card.Text>
                    <Card.Title style={{ lineHeight: '5px' }}>
                        Votes:
                        {item.vote}
                      </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>

        <Modal
      show={cardShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      

     <Modal.Header >
     <Modal.Title id="contained-modal-title-vcenter">
          Selected! 
        </Modal.Title>
                   
     <button type="button" className="close" aria-label="Close" onClick={() => setCardShow(false)}>
  <span aria-hidden="true">&times;</span>
</button>
      
      </Modal.Header>
      
      <Modal.Body >
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {card && (
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
                            <small>{card.name}</small>
                          </td>
                        </tr>
                       
                        <tr>
                          <td>
                            <small>{card.rank}</small>
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
                    <h3 className="font-style " style={{color: 'rgb(153,50,204)'}} >{card.bill_name}</h3>
                    <h4>Bill Number:{card.bill_number}</h4>
                    <p>
                      {card.bill_description}
                    </p>
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
              </div>*/}
              </div>
            )}
          </div>
        </div>

        </Modal.Body>
        </Modal>
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
