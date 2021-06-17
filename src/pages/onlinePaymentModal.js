import React from "react";

function paymentMod() {
  return (
    <div class="bg-light-gray">
      {/* <!-- <section class="container">
        <h3 class="section-header text-warning">Kasol Sarpass Bagpacking Trek</h3>
        <div class="row top-section">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <p class="">Hoi An tours are ideal for travellers looking to experience the local culture and history of the UNESCO-listed coastal town. Between the 15th and 19th century, Hoi An was a prominent Vietnamese trading port for silk, porcelain, pepper,
                    cinnamon, and medicinal plants due to its proximity</p>
            </div>
        </div>
    </section> --> */}
      <div class="container-fluid px-0">
        <header>
          {/* <!-- <img src={require("../assests/img/camp.jpg").default} class="img-fluid header-img" alt="" /> -->
            <!-- <img src={require("../assests/xdExport/registrationBg.png").default} class="img-fluid small-header-img" alt="" /> --> */}

          <div class="bg-white header-height">
            {/* <!-- <nav class="navbar"> --> */}
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
              {/* <!-- </div> --> */}
            </div>
          </div>
          <div id="mySidenav" class="sidenav bg-warning">
            <div class="bg-white">
              {/* <!--Navigation after Login--> */}
              {/* <!-- <div class="nav-header bg-warning row">
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                        <div class="col-sm-4">
                            <a href="/page14.html"><img src={require("../assests/img/user2.png").default} class="circle-img" alt="" /></a>
                        </div>
                        <div class="col-sm-5">
                            <p>Misha Malhotra</p>
                            <small>+9198989989</small>
                        </div>
                        <div class="col-sm-3">
                            <small> <a href="#" class="text-white">Logout</a></small>
                        </div>
                    </div> --> */}
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
                {/* <!-- <a href="/page13.html"><img src={require("../assests/img/homw.svg").default} alt=""> Dashboard</a> --> */}
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
            Pay Now
          </button>
          <button class="btn text-waning btn-light btn2 mb-3">Cancel</button>
        </div>
        {/* <!-- Button trigger modal -->
        <!-- Modal --> */}
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
                  src={require("../assests/xdExport/OnlinePayment.png").default}
                  alt=""
                />
                <img
                  src={require("../assests/xdExport/gift.png").default}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- <footer class="container-fluid footer-block bg-white">
        <div class="container wrap">
            <div class="text-center py-2">
                <p class=" grey-font d-inline">&copy; 2021 Youthcamping. All rights reserved.</p>
            </div>
        </div>
    </footer> --> */}
    </div>
  );
}

export default paymentMod;
