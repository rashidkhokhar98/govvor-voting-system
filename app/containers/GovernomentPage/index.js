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
import CompactProfile from "../../components/CompactProfile";
import MenuBar from '../../components/MenuBar'
import { Button } from "react-bootstrap";
import {ElectionCategories} from '../../constant';


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
      <MenuBar/>
    </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10">
      <div className="row mt-2">
        <div className="col-12">
        <center>
   
    <div className="border rounded border-dark w-50 pb-2">

<div className="row mx-auto"  >

<div className="col-md-9 text-left" >

<h1 className="font-style "><i>Bill Name</i></h1>
<h3><i>Bill Number</i></h3>
<p>Bill Description</p>

</div>
<div className="col-md-3 text-center">

<table>
<tbody>
    <tr>
        <td>
        <img  src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt="Profile Pic" width="80em" height="80em" />
        </td>
    </tr>
    <tr>
        <td>
            <small>Name</small>
        </td>
    </tr>
    <tr>
        <td>
            <small>Rank</small>
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
        <div className="row">
          <div className="col-12">
<center>
<CompactProfile />
</center>
<hr style={{backgroundColor: "black"}} />

</div>
</div>
<div className="row">
          <div className="col-12">
<center>
<CompactProfile />
</center>
<hr style={{backgroundColor: "black"}} />
</div>
</div>

<div className="row">
 <div className="col-12">
<center>
<CompactProfile />
</center>
<hr style={{backgroundColor: "black"}} />
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
