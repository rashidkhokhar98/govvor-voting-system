/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import messages from './messages';
import MenuBar from '../../components/MenuBar';
import { ElectionCategories } from '../../constant';
import CenterModal from '../../components/CenterModal';
import Header from '../../components/header/header';

export default function HomePage({ history }) {
  const [modalShow, setModalShow] = useState(false);
  const placeHolderObj1 = 'King';
  const placeHolderObj2 = 'Prime_menister';
  const placeHolderObj3 = 'Senator';
  const placeHolderObj4 = 'Mayer';
  const [kingCategories, setKingCategories] = useState(
    ElectionCategories[placeHolderObj1].categories || [],
  );
  const [primenisterCategories, setPrimenisterCategories] = useState(
    ElectionCategories[placeHolderObj2].categories || [],
  );
  const [senatorCategories, setsenatorCategories] = useState(
    ElectionCategories[placeHolderObj3].categories || [],
  );
  const [mayerCategories, setMayerCategories] = useState(
    ElectionCategories[placeHolderObj4].categories || [],
  );
  useEffect(() => {
    if (!localStorage.getItem('userInfo')) {
      history.push('/');
    }
  }, []);
  return (
    <>
      <Header />
      <div className="cntainer-fluid row ">
        <CenterModal show={modalShow} onHide={() => setModalShow(false)} />
        <div
          className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 bg-dark "
          style={{ minHeight: '1000px' }}
        >
          <MenuBar />
        </div>
        <div className="col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10 ">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <div className="navbar-header">
                <a
                  className="navbar-brand font-weight-bold"
                  style={{ color: 'rgb(153,50,204)' }}
                  href="/"
                >
                  Welcome!
                </a>
              </div>
              <div>
                <a className="btn btn-danger my-2 my-sm-0  mr-2" href="/bill">
                  CreatBill
                </a>
              </div>
            </div>
          </nav>
          <hr style={{ border: '1px solid rgb(79, 235, 227)' }} />
          <div className="home border border-light ">
            <div className="diamond">
              <a className="" href="/government">
                <h4 className=" pt-5 text-center text-dark">Government</h4>
              </a>
            </div>
            <div className="triangle-left ">
              <a href="/election">
                <h4 className="pt-5 text-left text-light ">Elections</h4>
              </a>
            </div>
            <div className="triangle-right">
              <a href="/constitution">
                <h4 className="pt-5 text-right text-dark">Policy</h4>
              </a>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-xs-6 mx-auto"
              style={{ marginTop: '10%' }}
            >
              <p>
                <strong>Govvor.com Bio </strong> Have you ever seen a homeless
                guy who becomes a king of the world? He did it by issuing a bill
                on Govvor.com You will be the king of the entire world but you
                will only be king for a week because we both know you re not
                from royal descent! Instead of speculating on stocks based on
                analyst who can’t trade better than munchies, why not bet your
                money on Govvor prime ministers who will be elected next week
                because the returns are better than the stock market! Govvor is
                the only service where the constitution is organized by the
                devil himself, yes the devil of greed and money hunger and the
                devil said “only the winner can claim the bingo from my
                constitution!” That’s why Govvor logo is the devil face. Govvor
                is the only political platform where you can bet on senators the
                same way you can bet on horses. The devil said “the lower you
                look the less risky it gets so focus on mayors!” Govvor have a
                government that’s a mixture of homeless people and devil
                worshipers and horses and low risk mayors. Please join
                govvor.com and await for more jokes. Thank you so much for
                listening.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
