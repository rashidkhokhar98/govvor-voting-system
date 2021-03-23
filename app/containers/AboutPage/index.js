/**
 *
 * AboutPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MenuBar from '../../components/MenuBar'
export function AboutPage() {
  return ( 
    <div className="cntainer-fluid row">
    <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark">
      <MenuBar/>
    </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10">
      
      <div className="row mt-5">
        <div className="col-12">
        <h2 className="font-weight-bold text-center text-dark">About Us</h2>
        </div>
     </div>
     <div className="row mt-5 mx-auto px-auto">
        <div className="col-12 ">
        <b>
        Voting fee is USD $4.99 per vote, up to $450 Claims / all funding to a bill via payed voted will be destributed as per 65% to Bill execution as a payment to a non profit or a political party that will administer the claims, %20 as Salary per elect representative for their services, and 14% service fee to Govvor (Live Policy Club) 
          </b>
        </div>
      </div>
        <div className="row mt-5 mx-auto justify-content-center">
            <div className="col-6 ">
            <table className="table table-striped table-hover table-bordered table-responsive text-center" >
            <thead className="thead-dark" >
                <tr className="font-style">
                    <th>Vote</th>
                    <th colSpan="3">Division</th>
                </tr>
                
            </thead>
            <thead className="thead-light">
            <tr>
                    <th>Price</th>
                    <th>Bill Execution</th>
                    <th>Salary per Electorate</th>
                    <th>Govvor Service Fee</th>
                </tr>
            </thead>
                <tr>
                    <td>4.99 US Dollars</td>
                    <td>65%</td>
                    <td>20%</td>
                    <td>14%</td>
                </tr>
            <tbody>

            </tbody>

        </table>
            </div>
        </div>

    </div>
</div>
 );
}

AboutPage.propTypes = {
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

export default compose(withConnect)(AboutPage);
