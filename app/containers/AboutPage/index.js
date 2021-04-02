/**
 *
 * AboutPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MenuBar from '../../components/MenuBar';
import Header from '../../components/header/header';


export function AboutPage() {
  return (
    <>
    <Header />
    <div className="cntainer-fluid row ">
      <div
        className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark"
        style={{ minHeight: '1000px' }}
      >
        <MenuBar />
      </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10">
        <div className="row mt-5">
          <div className="col-12">
            <h2
              className="font-weight-bold text-center"
              style={{ color: 'rgb(153,50,204)' }}
            >
              About Us
            </h2>
          </div>
        </div>
        <div className="row mt-5 mx-auto mr-2 px-auto text-justify">
          <div className="col-12">
            Govvor is a political Lottery service, if the bill you voted for
            loses then your vote will go to the winner. But if the bill you
            voted for wins then you can claim your share as a voter or as a
            politician. Voting fee is $4.99 per weekly election and divided by
            60% as claims by voters, 20% to the elected politicians, and 20%
            Govvor service fee (political lottery service)
          </div>
        </div>
        <div className="row mt-5 mx-auto justify-content-center">
          <div className="col-12 col-sm-12 col-md-10 col-lg-6 col-xl-6 ">
            <table className="table table-striped table-bordered table-hover table-condensed table-responsive text-center">
              <thead className="thead-dark">
                <tr className="font-style">
                  <th>Vote</th>
                  <th colSpan="3">Division</th>
                </tr>
              </thead>

              <thead className="thead-light">
                <th colSpan="1">Price</th>
                <th colSpan="1">Bill Execution</th>
                <th colSpan="1">Salary per Electorate</th>
                <th colSpan="1">Govvor Service Fee</th>
              </thead>

              <tr>
                <td colSpan="1">4.99 US Dollars</td>
                <td colSpan="1">60%</td>
                <td colSpan="1">20%</td>
                <td colSpan="1">20%</td>
              </tr>
              <tbody />
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
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
