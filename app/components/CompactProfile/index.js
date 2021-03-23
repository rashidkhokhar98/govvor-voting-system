/**
 *
 * CompactProfile
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Card } from "react-bootstrap";


function CompactProfile() {
  return (
    <>
    <Card style={{ width: '12rem', border: "1px solid transparent",}}>
    <Card.Header style={{backgroundColor: "transparent" }} >
    <img  src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt="Profile Pic" width="70em" height="70em" />
    </Card.Header>


<Card.Body>
<Card.Text style={{fontSize: "medium", lineHeight: "25px"}}>
Name <br/>
Rank
</Card.Text>
<Card.Title style={{lineHeight: "5px"}} >Votes</Card.Title>
</Card.Body>
</Card>
<br/>
</>
  );
}

CompactProfile.propTypes = {};

export default CompactProfile;
