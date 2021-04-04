import React from 'react';
import Logo from '../../images/logo1.jpg';
const Header = () => {
  const isLoggedIn = localStorage.getItem('userInfo');
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: 'rgb(79, 235, 227)' }}
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <a
            className="navbar-brand  font-weight-bold "
            style={{ color: 'rgb(153,50,204)' }}
          >
            <img
              src={Logo}
              alt="Logo-img"
              width="40"
              height="40"
              className="rounded-circle mr-1"
            />
            Govvor
          </a>
        </div>
        {!JSON.parse(localStorage.getItem('userInfo')) ? (
          <div>
            <a
              className="btn btn-success my-2 my-sm-0  mr-2 ml-2"
              href="/Signup"
            >
              SignUp
            </a>
            <a className="btn btn-success my-2 my-sm-0" href="/login">
              LogIn
            </a>
          </div>
        ) : (
          <div>
            <span>
              {isLoggedIn && isLoggedIn.newUser && isLoggedIn.newUser.fullName}
            </span>
            <img
              src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
              width="40"
              height="40"
              className="rounded-circle mr-1"
            />

            <a
              className="btn btn-danger my-2 my-sm-0"
              onClick={() => localStorage.removeItem('userInfo')}
              href="/login"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
