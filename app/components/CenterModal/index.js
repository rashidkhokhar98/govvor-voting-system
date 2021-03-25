/**
 *
 * Modal
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {FacebookShareButton, WhatsappShareButton} from 'react-share';
import {FacebookIcon, WhatsappIcon} from 'react-share';

function CenterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Share Modal! 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Share From..</h4>
       <FacebookShareButton 
       url="https://vigilant-goldstine-939166.netlify.app/" 
       qoute="please visit site" hashtag="online voting system" 
       className="ml-5" 
       onClick={props.onHide}>
         <FacebookIcon logoFillColor="white" round={true}/>
        </FacebookShareButton>
       <WhatsappShareButton 
        url="https://vigilant-goldstine-939166.netlify.app/" 
       title="Sharing Online Voting System"
       className="ml-5" 
       onClick={props.onHide}>
         <WhatsappIcon logoFillColor="white" round={true}/>
         </WhatsappShareButton>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

CenterModal.propTypes = {};

export default CenterModal;
