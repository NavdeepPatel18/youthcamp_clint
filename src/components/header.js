import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import { Offcanvas } from "bootstrap";

function Header() {
  return (
    <header>
      <div class="bg-white header-height">
        <Link to="/index" class="navbar-brand">
          <img
            src={require("../assests/xdExport/blackLogo.png").default}
            class="black-logo-img"
            alt="logo"
          />
        </Link>
        <div class="container ">
          <span
            onclick="openNav()"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <img
              src={require("../assests/xdExport/blackHamberger.png").default}
              class="float-right cursor-pointer"
              id="black-hamberger-menu"
              alt=""
            />
          </span>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header bg-warning justify-content-md-end">
              <div class="bg-warning row">
                <button
                  type="button"
                  class="btn-close text-reset justify-content-md-end"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
                <div class="col-sm-4">
                  <Link to="/page14">
                    <img
                      src={require("../assests/img/user2.png").default}
                      class="circle-img"
                      alt=""
                    />
                  </Link>
                </div>
                <div class="col-sm-5 text-white font-weight-bold">
                  <h5 class="mb-0">Misha Malhotra</h5>
                  <small>+9198989989</small>
                </div>
                <div class="col-sm-3 font-weight-bold">
                  <small>
                    {" "}
                    <Link to="#" class="text-white">
                      Logout
                    </Link>
                  </small>
                </div>
              </div>
            </div>
            <div class="offcanvas-body bg-white justify-content-md-end">
              <div class="nav-body bg-white">
                <Link to="/page12">
                  <img
                    src={require("../assests/img/homw.svg").default}
                    alt=""
                  />{" "}
                  Dashboard{" "}
                </Link>
                <Link to="/page9">
                  <img
                    src={require("../assests/img/camp.svg").default}
                    alt="icon"
                  />{" "}
                  Camp{" "}
                  <img
                    src={require("../assests/xdExport/navArrow.png").default}
                    class="float-right"
                    alt="arrow"
                  />{"   "}
                </Link>
                <Link to="/page8" class="active-link">
                  <img
                    src={require("../assests/img/team.svg").default}
                    alt="icon"
                  />{"   "}
                  Team
                  <img
                    src={require("../assests/xdExport/navArrow.png").default}
                    class="float-right"
                    alt="arrow"
                  />
                </Link>
                <Link to="/aboutUs">
                  <img
                    src={require("../assests/img/about_us.svg").default}
                    alt="icon"
                  />{" "}
                  About us{" "}
                  <img
                    src={require("../assests/xdExport/navArrow.png").default}
                    class="float-right"
                    alt="arrow"
                  />
                </Link>
                <Link to="/page2">
                  <img
                    src={
                      require("../assests/xdExport/documentIcon.png").default
                    }
                    alt="icon"
                  />{" "}
                  Travel Stories{" "}
                  <img
                    src={require("../assests/xdExport/navArrow.png").default}
                    class="float-right"
                    alt="arrow"
                  />
                </Link>
              </div>
              <div class="nav-footer bg-white mt-5">
                <p>
                  <img
                    src={require("../assests/img/phone.svg").default}
                    alt=""
                  />{" "}
                  +91 9924246267
                </p>
                <p>
                  <img
                    src={require("../assests/img/Website.svg").default}
                    alt=""
                  />{" "}
                  www.youthcamping.in
                </p>
                <p>
                  <img
                    src={require("../assests/img/location.svg").default}
                    alt=""
                  />{" "}
                  G225, Sumel Business Park Dudheshwar Ahmedabad
                </p>
                <div class="social-media">
                  <p>Keep wandering with us</p>
                  <i class="bx bxl-instagram"></i>
                  <i class="bx bxl-whatsapp"></i>
                  <i class="bx bxl-facebook-circle"></i>
                </div>
              </div>
              {/* <!--Login Modal --> */}
              {/* <div
                class="modal fade"
                id="loginModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="loginModalTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="loginModalTitle">
                        Login
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body wrap text-center">
                      <div class="row login-link">
                        <div class="col-md-6 col-sm-12 col-12 mb-2">
                          <Link to="">
                            {" "}
                            <img
                              src={
                                require("../assests/xdExport/fb.png").default
                              }
                              alt=""
                            />
                          </Link>
                        </div>
                        <div class="col-md-6 col-sm-12 col-12 mb-2">
                          <Link to="">
                            <img
                              src={
                                require("../assests/xdExport/Gmail.png").default
                              }
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer d-block">
                      <button
                        type="button"
                        class="btn btn-white text-warning border-warning"
                        data-dismiss="modal"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        class="btn btn-warning text-white float-right"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
