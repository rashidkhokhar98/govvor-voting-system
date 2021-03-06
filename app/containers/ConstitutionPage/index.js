/**
 *
 * PolicyPage
 *
 */

 import React, { useState, useEffect } from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { compose } from 'redux';
 import { Button } from 'react-bootstrap';
 import axios from 'axios';
 import MenuBar from '../../components/MenuBar';
 import CenterModal from '../../components/CenterModal';
 import Header from '../../components/header/header';
 
 export function ConstitutionPage() {
   const [modalShow, setModalShow] = useState(false);
   const [govt, setGovt] = useState();
   const [senatorInfo, setSenatorInfo] = useState(null);
   const [mayerInfo, setMayerInfo] = useState(null);
   const [pmInfo, setPmInfo] = useState(null);
   const [kingInfo, setKingInfo] = useState(null);
   useEffect(() => {
     axios.get('https://hrwaller.com/api/v1/users/get-govt').then(res => {
       const data = (res && res.data) || {};
       setGovt(data.result);
       setSenatorInfo(data.senatorInfo);
       setMayerInfo(data.mayerInfo);
       setKingInfo(data.kingInfo);
       setPmInfo(data.pmInfo);
     });
   }, []);
   return (
     <>
       <Header />
       <div className="cntainer-fluid row ">
         <CenterModal show={modalShow} onHide={() => setModalShow(false)} />
         <div
           className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark"
           style={{ minHeight: '1000px' }}
         >
           <MenuBar />
         </div>
         <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 mt-3">
           <div className="row ">
             {govt && govt.length === 0 && (
               <div className="spinner-border" role="status">
                 <span className="sr-only">Loading...</span>
               </div>
             )}
 
             <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
               {kingInfo && (
                 <div
                   className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 shadow mx-auto mt-4 px-auto pb-2 pt-2"
                   style={{
                     border: '1px solid rgb(79, 235, 227)',
                     borderRadius: '5px',
                   }}
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
                               <small> {kingInfo && kingInfo.fullName} </small>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <small> {kingInfo && kingInfo.role}</small>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <small> {govt.king.vote}</small>
                             </td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
 
                     <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                       <h3
                         className="font-style "
                         style={{ color: 'rgb(153,50,204)' }}
                       >
                         {govt.king.billName}
                       </h3>
                       <h4>Bill Number: {govt.king.billNumber}</h4>
                       <p>{govt.king.billDescription}</p>
                     </div>
                   </div>
                   <hr style={{ border: '1px solid rgb(79, 235, 227)' }} />
 
                   <div className="row">
                     <Button
                       className="btn btn-primary px-auto mx-auto"
                       onClick={() => setModalShow(true)}
                     >
                       Share
                     </Button>
                     <Button
                       className="btn btn-danger px-auto mx-auto"
                       href="/claim"
                     >
                       Claim
                     </Button>
                   </div>
                 </div>
               )}
             </div>
           </div>
           <div className="row ">
             <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
               {pmInfo && (
                 <div
                   className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 shadow mx-auto mt-4 px-auto pb-2 pt-2"
                   style={{
                     border: '1px solid rgb(79, 235, 227)',
                     borderRadius: '5px',
                   }}
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
                               <small>{pmInfo && pmInfo.fullName}</small>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <small>{pmInfo && pmInfo.role}</small>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <small>{govt.pm.vote}</small>
                             </td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
 
                     <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                       <h3
                         className="font-style "
                         style={{ color: 'rgb(153,50,204)' }}
                       >
                         {govt.pm.billName}
                       </h3>
                       <h4>Bill Number: {govt.pm.billNumber}</h4>
                       <p>{govt.pm.billDescription}</p>
                     </div>
                   </div>
                   <hr style={{ border: '1px solid rgb(79, 235, 227)' }} />
 
                   <div className="row">
                     <Button
                       className="btn btn-primary px-auto mx-auto"
                       onClick={() => setModalShow(true)}
                     >
                       Share
                     </Button>
                     <Button
                       className="btn btn-danger px-auto mx-auto"
                       href="/claim"
                     >
                       Claim
                     </Button>
                   </div>
                 </div>
               )}
             </div>
           </div>
           <div className="row ">
             <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
               {senatorInfo && (
                 <div
                   className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 shadow mx-auto mt-4 px-auto pb-2 pt-2"
                   style={{
                     border: '1px solid rgb(79, 235, 227)',
                     borderRadius: '5px',
                   }}
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
                               <small>
                                
                                 {senatorInfo && senatorInfo.fullName}
                               </small>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <small> {senatorInfo && senatorInfo.role}</small>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <small> {govt.senator.vote}</small>
                             </td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
 
                     <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                       <h3
                         className="font-style "
                         style={{ color: 'rgb(153,50,204)' }}
                       >
                         {govt.senator.billName}
                       </h3>
                       <h4>Bill Number: {govt.senator.billNumber}</h4>
                       <p>{govt.senator.billDescription}</p>.
                     </div>
                   </div>
                   <hr style={{ border: '1px solid rgb(79, 235, 227)' }} />
 
                   <div className="row">
                     <Button
                       className="btn btn-primary px-auto mx-auto"
                       onClick={() => setModalShow(true)}
                     >
                       Share
                     </Button>
                     <Button
                       className="btn btn-danger px-auto mx-auto"
                       href="/claim"
                     >
                       Claim
                     </Button>
                   </div>
                 </div>
               )}
             </div>
           </div>
           <div className="row ">
             <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
               {mayerInfo && (
                 <div
                   className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 shadow mx-auto mt-4 px-auto pb-2 pt-2"
                   style={{
                     border: '1px solid rgb(79, 235, 227)',
                     borderRadius: '5px',
                   }}
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
                               <small>
                                 {mayerInfo && mayerInfo.fullName}
                               </small>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <small>
                                
                                 {mayerInfo && mayerInfo.role}
                               </small>
                             </td>
                           </tr>
                           <tr>
                             <td>
                               <small> {govt.mayer.vote}</small>
                             </td>
                           </tr>
                         </tbody>
                       </table>
                     </div>
 
                     <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 text-justify">
                       <h3
                         className="font-style "
                         style={{ color: 'rgb(153,50,204)' }}
                       >
                         {govt.mayer.billName}
                       </h3>
                       <h4>Bill Number: {govt.mayer.billNumber}</h4>
                       <p>{govt.mayer.billDescription}</p>
                     </div>
                   </div>
                   <hr style={{ border: '1px solid rgb(79, 235, 227)' }} />
 
                   <div className="row">
                     <Button
                       className="btn btn-primary px-auto mx-auto"
                       onClick={() => setModalShow(true)}
                     >
                       Share
                     </Button>
                     <Button
                       className="btn btn-danger px-auto mx-auto"
                       href="/claim"
                     >
                       Claim
                     </Button>
                   </div>
                 </div>
               )}
             </div>
           </div>
         </div>
       </div>
     </>
   );
 }
 
 ConstitutionPage.propTypes = {
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
 
 export default compose(withConnect)(ConstitutionPage);
 