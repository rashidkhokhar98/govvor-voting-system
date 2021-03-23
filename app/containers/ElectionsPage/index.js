/**
 *
 * ElectionsPage
 *
 */

import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

//import Bill from "../../components/Bill"
//import CompactProfile from "../../components/CompactProfile";
import MenuBar from '../../components/MenuBar'
import { Card } from "react-bootstrap";

import {ElectionCategories} from '../../constant';
import { Button } from "react-bootstrap";


export function ElectionsPage() {
 
  const placeHolderObj1="King";
  const placeHolderObj2="Primenister";
  const placeHolderObj3="Senator";
  const placeHolderObj4="Mayer";
   const[kingCategories, setKingCategories]=useState(ElectionCategories[placeHolderObj1].categories || []);
   const[primenisterCategories, setPrimenisterCategories]=useState(ElectionCategories[placeHolderObj2].categories || []);
   const[senatorCategories, setsenatorCategories]=useState(ElectionCategories[placeHolderObj3].categories || []);
   const[mayerCategories, setMayerCategories]=useState(ElectionCategories[placeHolderObj4].categories || []);
   const[card,setCard]=useState('');
  
   const onClick=(value)=>{
  setCard(value);
  
   }
    return (
      <div className="cntainer-fluid row">
    <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark">
      <MenuBar/>
    </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 mt-3">
        <div className="row">
          <div className="col-12">
          <center>
     
      <div className="border rounded border-dark w-50 pb-2">
  
  <div className="row mx-auto"  >
  
  <div className="col-md-9 text-left" >
  
  <h1 className="font-style "><i>Bill Name:<br/>{card.bill_name}</i></h1>
  <h3><i>Bill Number:{card.bill_number}</i></h3>
  <p>Bill Description:{card.bill_description}</p>
  
  </div>
  <div className="col-md-3 text-center">
  
  <table>
  <tbody>
      <tr>
          <td>
          <img  src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="Profile Pic" width="80em" height="80em" />
          </td>
      </tr>
      <tr>
          <td>
              <small>Name:{card.name}</small>
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
  
  </div>
  <hr/>
  
  <div className="row">
  <div className="col-md-4"><Button variant="success">Vote</Button>{' '}</div>
  <div className="col-md-4"><Button variant="primary">Share</Button>{' '}</div>
  <div className="col-md-4"><Button variant="danger">Claim</Button>{' '}</div>
  </div>
  
  
      </div>
      </center>
        </div>
           </div>
        <div className="row mt-2">
  
          <div className="col-12">
            <h3 className="font-style font-weight-bold">
              Runners for {placeHolderObj1}
            </h3>
  
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                backgroundColor: "transparent",
              }}
            >
              {kingCategories.map(item =>(
              <div onClick={()=>onClick(item)}>
       <Card className="ml-2 mb-2" style={{ width: '12rem', border: "1px solid black"}} >
      <Card.Header style={{backgroundColor: "transparent" }} >
      <img  src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="Profile Pic" width="70em" height="70em" />
      </Card.Header>
  <Card.Body>
  <Card.Text style={{fontSize: "medium", lineHeight: "25px"}}>
  <b>Name:</b>{item.name} <br/>
  <b>Rank:</b>{item.rank}
  </Card.Text>
  <Card.Title style={{lineHeight: "5px"}} ><b>Votes:</b>{item.vote}</Card.Title>
  </Card.Body>
  </Card>
              </div>
              
           ))}
  
           <br/>
            </div>
          </div>
        </div>
        <div className="row mt-2">
  
  <div className="col-12">
    <h3 className="font-style font-weight-bold">
      Runners for {placeHolderObj2}
    </h3>
  
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: "transparent",
      }}
    >
      {primenisterCategories.map(item =>(
      <div onClick={()=>onClick(item)}>
  <Card className="ml-2 mb-2" style={{ width: '12rem', border: "1px solid black"}}>
  <Card.Header style={{backgroundColor: "transparent" }} >
  <img  src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="Profile Pic" width="70em" height="70em" />
  </Card.Header>
  <Card.Body>
  <Card.Text style={{fontSize: "medium", lineHeight: "25px"}}>
  <b>Name:</b>{item.name} <br/>
  <b>Rank:</b>{item.rank}
  </Card.Text>
  <Card.Title style={{lineHeight: "5px"}} ><b>Votes:</b>{item.vote}</Card.Title>
  </Card.Body>
  </Card>
      </div>
      
   ))}
  
   <br/>
    </div>
  </div>
  </div>
  
  <div className="row mt-2">
  
  <div className="col-12">
    <h3 className="font-style font-weight-bold">
      Runners for {placeHolderObj3}
    </h3>
  
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: "transparent",
      }}
    >
      {senatorCategories.map(item =>(
      <div onClick={()=>onClick(item)}>
  <Card className="ml-2 mb-2" style={{ width: '12rem', border: "1px solid black"}}>
  <Card.Header style={{backgroundColor: "transparent" }} >
  <img  src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="Profile Pic" width="70em" height="70em" />
  </Card.Header>
  <Card.Body>
  <Card.Text style={{fontSize: "medium", lineHeight: "25px"}}>
  <b>Name:</b>{item.name} <br/>
  <b>Rank:</b>{item.rank}
  </Card.Text>
  <Card.Title style={{lineHeight: "5px"}} ><b>Votes:</b>{item.vote}</Card.Title>
  </Card.Body>
  </Card>
      </div>
      
   ))}
  
   <br/>
    </div>
  </div>
  </div>
  
  <div className="row mt-2">
  
  <div className="col-12">
    <h3 className="font-style font-weight-bold">
      Runners for {placeHolderObj4}
    </h3>
  
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: "transparent",
      }}
    >
      {mayerCategories.map(item =>(
      <div onClick={()=>onClick(item)}>
  <Card className="ml-2 mb-2" style={{ width: '12rem', border: "1px solid black"}}>
  <Card.Header style={{backgroundColor: "transparent" }} >
  <img  src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="Profile Pic" width="70em" height="70em" />
  </Card.Header>
  <Card.Body>
  <Card.Text style={{fontSize: "medium", lineHeight: "25px"}}>
  <b>Name:</b>{item.name} <br/>
  <b>Rank:</b>{item.rank}
  </Card.Text>
  <Card.Title style={{lineHeight: "5px"}} ><b>Votes:</b>{item.vote}</Card.Title>
  </Card.Body>
  </Card>
      </div>
      
   ))}
  
   <br/>
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
