/**
 *
 * Bill
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button } from "react-bootstrap";


function Bill() {
  return (
    <center>
    <div style={{border: "1px solid DodgerBlue", borderRadius: "10px", width: "40%", padding: "1%", }}>

<div className="row" style={{margin: "5px"}} >

<div className="col-md-9"  style={{textAlign: "left"}} >

<h1 className="font-style text-primary"><i>Bill Name</i></h1>
<h3><i>Bill Number</i></h3>
<p>Bill Description</p>

</div>
<div className="col-md-3" style={{textAlign: "center"}}>

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
<div className="col-md-4"><Button variant="primary">Vote</Button>{' '}</div>
<div className="col-md-4"><Button variant="primary">Share</Button>{' '}</div>
<div className="col-md-4"><Button variant="primary">Claim</Button>{' '}</div>
</div>


    </div>
    </center>

  );
}

Bill.propTypes = {};

export default Bill;
