import React from "react";

function Error404() {
  return (
    <>
      <div class="container-fluid px-0">
        <header>
          <div class="bg-white header-height">
            <a href="/index.html" class="navbar-brand">
              <img
                src={require("../assests/xdExport/blackLogo.png").default}
                class="black-logo-img"
                alt="logo"
              />
            </a>
            <div class="container ">
              <span onclick="openNav()">
                <img
                  src={require("../assests/xdExport/blackHamberger.png").default}
                  class="float-right cursor-pointer"
                  id="black-hamberger-menu"
                  alt=""
                />
              </span>
              <nav class="navbar"></nav>
            </div>
          </div>
          <div id="mySidenav" class="sidenav bg-warning">
            <div class="bg-white">
              <div class="nav-header bg-warning text-white pl-4 pb-4">
                <a
                  href="javascript:void(0)"
                  class="closebtn"
                  onclick="closeNav()"
                >
                  &times;
                </a>
                <h5>New to Youthcamping?</h5>
                <h5>
                  <a href="#" class="text-white font-weight-bold">
                    LogIn
                  </a>
                </h5>
              </div>
              <div class="nav-body bg-white">
                <a href="/page9.html">
                  <img src={require("../assests/img/camp.svg").default} alt="" />{" "}
                  Camp
                </a>
                <a href="/page8.html">
                  <img src={require("../assests/img/team.svg").default} alt="" />{" "}
                  Team
                </a>
                <a href="/index.html">
                  <img
                    src={require("../assests/img/about_us.svg").default}
                    alt=""
                  />{" "}
                  About us
                </a>
                <a href="/page2.html">
                  <img
                    src={require("../assests/img/contact_us.svg").default}
                    alt=""
                  />{" "}
                  Contact
                </a>
              </div>
              <div class="nav-footer bg-white">
                <p>
                  <img src={require("../assests/img/phone.svg").default} alt="" />{" "}
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
            </div>
          </div>
        </header>

        <div class="mt-4 mb-4 payment bg-white pt-4 pb-2 px-4">
          <button
            class="btn btn-warning mr-3 mb-3 text-white"
            id="pay-btn"
            data-toggle="modal"
            data-target="#thankyouModal"
          >
            404
          </button>
          <button class="btn text-waning btn-light btn2 mb-3">Cancel</button>
        </div>

        <div
          class="modal fade"
          id="thankyouModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="thankyouModalTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body text-center">
                <img
                  src={require("../assests/xdExport/404.png").default}
                  class="small-img"
                  alt=""
                />
                <p>
                  Oops something happened. Please try again later or contact
                  Youthcamping Team
                  <a href="tel:+919924246267" class="text-warning mt-4">
                    +91 9924246267
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="container-fluid footer-block bg-white">
        <div class="container wrap">
          <div class="text-center py-2">
            <p class=" grey-font d-inline">
              &copy; 2021 Youthcamping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Error404;
