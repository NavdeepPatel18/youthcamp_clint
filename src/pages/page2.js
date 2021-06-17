import React from "react";

function page2() {
  return (
    <div>
      <header class="container-fluid bg-white px-0">
        {/* <!-- <img src={require("../assests/img/videoBackground.jpg").default} class="img-fluid header-img" alt="" /> --> */}
        <img
          src={require("../assests/xdExport/page2Bg.png").default}
          class="img-fluid header-img"
          alt=""
        />

        {/* </div> */}
        <div class="container">
          <nav class="navbar">
            <a href="/index.html" class="navbar-brand text-white">
              <img
                src={require("../assests/xdExport/logo.png").default}
                id="white-logo"
                alt=""
              />
            </a>
            <span onclick="openNav()">
              <img
                src={require("../assests/img/hamberger.svg").default}
                id="hamberger-menu"
                alt=""
              />
            </span>
          </nav>
          <div class="header-content container width-75">
            <h1 class="text-white sm-w-75">Hampta Pass & Chandratal Lake</h1>
            <button class="btn bg-white text-warning">
              <i class="bx bx-download text-warning"></i>&nbsp;Brochure
            </button>
            <div class="details">
              <ul>
                <li>
                  <img
                    src={require("../assests/img/calendar.svg").default}
                    alt="calendar"
                  />{" "}
                  7 Days/8 Nights
                </li>
                <li>
                  <img
                    src={require("../assests/img/speedometer.svg").default}
                    alt="speedometer"
                  />{" "}
                  Moderate
                </li>
                <li>
                  <img
                    src={require("../assests/img/mountain.svg").default}
                    alt="mountain"
                  />{" "}
                  20 km
                </li>
                <li>
                  <img
                    src={require("../assests/img/customer.svg").default}
                    alt="customer"
                  />{" "}
                  15-30 Years
                </li>
              </ul>
            </div>
            <div class="price-card">
              <div class="card w-19">
                <div class="card-body">
                  <h5 class="card-title">₹12,500 / person</h5>
                  <hr />
                  <p class="card-text">
                    <div class="row">
                      <div class="col-xl-6 col-lg-6">
                        <i class="bx bx-coffee"></i>&nbsp; Food
                      </div>
                      <div class="col-xl-6 col-lg-6">
                        <i class="bx bxs-car"></i>&nbsp; Travelling
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6 col-lg-6">
                        <i class="bx bxs-tree"></i>&nbsp; Sight-seeing
                      </div>
                      <div class="col-xl-6 col-lg-6">
                        <i class="bx bx-cloud-snow"></i>&nbsp; Snow Suit
                      </div>
                    </div>
                  </p>
                  <hr />
                  <a
                    href="#"
                    class="btn btn-warning d-block text-white"
                    data-toggle="modal"
                    data-target="#Modal1"
                  >
                    Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Login Modal --> */}
        <div
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
                    <a href="">
                      {" "}
                      <img
                        src={require("../assests/xdExport/fb.png").default}
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="col-md-6 col-sm-12 col-12 mb-2">
                    <a href="">
                      <img
                        src={require("../assests/xdExport/Gmail.png").default}
                        alt=""
                      />
                    </a>
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
        </div>
        <div
          class="modal fade"
          id="Modal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="Modal1Label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="Modal1Label">
                  Select Package
                </h5>
                {/* <!-- <p class="grey-font">It’ll vary according to the dates</p> --> */}
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="scroll">
                  <div class="row ">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 margin ">
                      <input
                        type="radio"
                        name="cardRadio"
                        id="card1"
                        hidden
                        value="card1-selected"
                      />
                      <a href="#" onclick="selectCard(card1,cardId1)">
                        <div class="card w-14" id="cardId1">
                          <img
                            src={
                              require("../assests/xdExport/page2card.png").default
                            }
                            class="card-img-top "
                            alt="Photo"
                          />
                          <div class="card-body ">
                            <p class="card-text ">Ahemdabad</p>
                            <p class="card-caption ">Join us from Ahemdabad </p>
                          </div>
                          <div class="card-link ">
                            <p>
                              ₹12,500
                              <i class="bx bx-calendar"></i>7D/8N
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 margin ">
                      <input
                        type="radio"
                        name="cardRadio"
                        id="card2"
                        hidden
                        value="card2-selected"
                      />
                      <a href="#" onclick="selectCard(card2,cardId2)">
                        <div class="card w-14" id="cardId2">
                          <img
                            src={
                              require("../assests/xdExport/page2card.png").default
                            }
                            class="card-img-top "
                            alt="Photo"
                          />
                          <div class="card-body ">
                            <p class="card-text ">Delhi</p>
                            <p class="card-caption ">Join us from Delhi </p>
                          </div>
                          <div class="card-link ">
                            <p>
                              ₹7,350
                              <i class="bx bx-calendar"></i>4D/5N
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 margin ">
                      <input
                        type="radio"
                        name="cardRadio"
                        id="card3"
                        hidden
                        value="card3-selected"
                      />
                      <a href="#" onclick="selectCard(card3,cardId3)">
                        <div class="card w-14" id="cardId3">
                          <img
                            src={
                              require("../assests/xdExport/page2card.png").default
                            }
                            class="card-img-top "
                            alt="Photo"
                          />
                          <div class="card-body ">
                            <p class="card-text ">Kasol</p>
                            <p class="card-caption ">Join us from Kasol </p>
                          </div>
                          <div class="card-link ">
                            <p>
                              ₹5,350
                              <i class="bx bx-calendar"></i>2D/1N
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <hr />
                <h5 class="modal-title" id="Modal1Label">
                  Select Travel Mode
                </h5>
                <div class="wrap">
                  <div class="row">
                    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 border ml-3 mt-4 rounded">
                      <a href="#" class="text-dark text-decoration-none">
                        <div class="row">
                          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                            <img
                              src={
                                require("../assests/xdExport/sunset.png").default
                              }
                              alt="img"
                              class="modal-small-img rounded py-2"
                            />
                          </div>
                          <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 py-2">
                            <h5>3 AC Train</h5>
                            <p class="mt-4 grey-font mb-1">INR 8700</p>
                          </div>
                          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 pt-3 mt-3">
                            <p class="mt-4 grey-font mb-1">5D/4N</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 border ml-3 mt-4 rounded">
                      <a href="#" class="text-dark text-decoration-none">
                        <div class="row">
                          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                            <img
                              src={
                                require("../assests/xdExport/sunset.png").default
                              }
                              alt="img"
                              class="modal-small-img rounded py-2"
                            />
                          </div>
                          <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 py-2">
                            <h5>3 AC Train</h5>
                            <p class="mt-4 grey-font mb-1">INR 8700</p>
                          </div>
                          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 pt-3 mt-3">
                            <p class="mt-4 grey-font mb-1">5D/4N</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 border ml-3 mt-2 rounded">
                      <a href="#" class="text-dark text-decoration-none">
                        <div class="row">
                          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                            <img
                              src={
                                require("../assests/xdExport/sunset.png").default
                              }
                              alt="img"
                              class="modal-small-img rounded py-2"
                            />
                          </div>
                          <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 py-2">
                            <h5>3 AC Train</h5>
                            <p class="mt-4 grey-font mb-1">INR 8700</p>
                          </div>
                          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 pt-3 mt-3">
                            <p class="mt-4 grey-font mb-1">5D/4N</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer d-block">
                {/* <!-- <button type="button" id="modal-card-button" disabled class="btn btn-warning text-white px-4 " data-toggle="modal" data-dismiss="modal" data-target="#calenderModal1">Next</button> --> */}
                <button
                  type="button"
                  class="btn btn-white text-warning border-warning"
                  data-dismiss="modal"
                >
                  Back
                </button>
                <button
                  type="button"
                  class="btn btn-warning text-white float-right text-white"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#calenderModal1"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Calender modal --> */}
        <div
          class="modal fade"
          id="calenderModal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="calenderModal1"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="calenderModal1">
                  Enter Dates
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
              <div class="modal-body wrap">
                <div class="row mt-2">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="from">From*</label>
                    <br />
                    <input
                      type="date"
                      name="from"
                      id="from"
                      class="input-block"
                    />
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label for="to">To*</label>
                    <br />
                    <input type="date" name="to" id="to" class="input-block" />
                  </div>
                </div>
                <div class="modal-footer d-block">
                  {/* <!-- <button type="button" class="btn btn-warning text-white" data-toggle="modal" data-dismiss="modal" data-target="#otpModal1">Next</button> --> */}
                  <button
                    type="button"
                    class="btn btn-white text-warning border-warning"
                    data-dismiss="modal"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning text-white float-right text-white"
                    data-toggle="modal"
                    data-dismiss="modal"
                    data-target="#loginModal"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Otp modal -->
        <!-- <div class="modal fade" id="otpModal1" tabindex="-1" role="dialog" aria-labelledby="otpModal1" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="otpModal1">Enter Contact Details</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
                    </div>
                    <div class="modal-body wrap">
                        <label for="mobile">Enter mobile number</label><br />
                        <div class="row">
                            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
                                <input type="tel" class="d-block py-2 w-100 mb-3" />
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                                <button type="button" onclick="showOTPInput()" id="js-startTimer" class="btn btn-warning text-white">Send Otp</button>
                            </div>
                        </div>
                        <br />
                        <div id="otpInput" class="invisible">
                            <label for="otp">Enter otp</label><br />
                            <div class="row">
                                <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
                                    <input type="tel" class="w-100 py-2" />
                                </div>
                                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                                </div>
                            </div>
                            <p>You can ask for a new code in <span class="js-timeout">2:00</span> minutes.</p>
                        </div>

                    </div>
                    <div class="modal-footer d-block">

                        <a onclick="registrationPage()" data-target="/page7.html" type="button" class="btn btn-warning text-white" data-toggle="modal" data-dismiss="modal">Next</a>
                        <button type="button" class="btn btn-outline-warning ">Resend otp</button>
                    </div>
                </div>
            </div> --> */}
        <div id="mySidenav" class="sidenav bg-warning">
          <div class="bg-white">
            {/* <!--Navigation after Login-->
                <!-- <div class="nav-header bg-warning row">
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
                <a
                  href="#"
                  class="text-white font-weight-bold"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  LogIn
                </a>
              </h5>
            </div>
            <div class="nav-body bg-white">
              {/* <!-- <a href="/page13.html"><img src={require("../assests/img/homw.svg").default} alt="" /> Dashboard <img src={require("../assests/xdExport/navArrow.png").default} class="float-right" alt="arrow" /></a> --> */}
              <a href="/page9.html">
                <img src={require("../assests/img/camp.svg").default} alt="icon" />{" "}
                Camp{" "}
                <img
                  src={require("../assests/xdExport/navArrow.png").default}
                  class="float-right"
                  alt="arrow"
                />{" "}
              </a>
              <a href="/page8.html">
                <img src={require("../assests/img/team.svg").default} alt="icon" />{" "}
                Team
                <img
                  src={require("../assests/xdExport/navArrow.png").default}
                  class="float-right"
                  alt="arrow"
                />
              </a>
              <a href="/aboutUs.html">
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
              </a>
              <a href="/page2.html" class="active-link">
                <img
                  src={require("../assests/xdExport/documentIcon.png").default}
                  alt="icon"
                />{" "}
                Travel Stories{" "}
                <img
                  src={require("../assests/xdExport/navArrow.png").default}
                  class="float-right"
                  alt="arrow"
                />
              </a>
            </div>
            <div class="nav-footer bg-white">
              <p>
                <img src={require("../assests/img/phone.svg").default} alt="" />{" "}
                +91 9924246267
              </p>
              <p>
                <img src={require("../assests/img/Website.svg").default} alt="" />{" "}
                www.youthcamping.in
              </p>
              <p>
                <img src={require("../assests/img/location.svg").default} alt="" />{" "}
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

      <section class="container top-section">
        <h3 class="section-header text-warning">
          Kasol Sarpass Bagpacking Trek
        </h3>
        <div class="row">
          <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12  mt-4">
            <div class="row">
              <div class="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-2  mt-4">
                <img
                  src={require("../assests/xdExport/starPoint.png").default}
                  alt=""
                />
              </div>
              <div class="col-xl-11 col-lg-10 col-md-10 col-sm-10 col-10 mt-4 px-0">
                <p>
                  {" "}
                  Hoi An tours are ideal for travellers looking to experience
                  the local culture{" "}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-2  mt-4">
                <img
                  src={require("../assests/xdExport/starPoint.png").default}
                  alt=""
                />
              </div>
              <div class="col-xl-11 col-lg-10 col-md-10 col-sm-10 col-10 px-0 mt-4">
                <p>
                  {" "}
                  Hoi An tours are ideal for travellers looking to experience
                  the local culture{" "}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-2  mt-4">
                <img
                  src={require("../assests/xdExport/starPoint.png").default}
                  alt=""
                />
              </div>
              <div class="col-xl-11 col-lg-10 col-md-10 col-sm-10 col-10 px-0 mt-4">
                <p>
                  {" "}
                  Hoi An tours are ideal for travellers looking to experience
                  the local culture..{" "}
                  <a href="#" class="text-warning">
                    More
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section class="container">
        <p class="section-header">Packages</p>
        <img
          src={require("../assests/xdExport/yellowLine.png").default}
          class="mb-4"
          alt=""
        />
        {/* <!-- <img src={require("../assests/img/slash.svg").default} alt="" /> --> */}
        <div class="scroll">
          <div class="row ">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <a href="/page3.html">
                <div class="card w-16">
                  <img
                    src={require("../assests/xdExport/page2card.png").default}
                    class="card-img-top "
                    alt=" "
                  />
                  <div class="card-body ">
                    <p class="card-text ">Ahemdabad</p>
                    <p class="card-caption ">Join us from Ahemdabad </p>
                  </div>
                  <div class="card-link ">
                    <p>
                      ₹12,500
                      <i class="bx bx-calendar"></i>7D/8N
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <a href="/page3.html">
                <div class="card w-16">
                  <img
                    src={require("../assests/xdExport/page2card.png").default}
                    class="card-img-top "
                    alt=" "
                  />
                  <div class="card-body ">
                    <p class="card-text ">Delhi</p>
                    <p class="card-caption ">Join us from Delhi </p>
                  </div>
                  <div class="card-link ">
                    <p>
                      ₹7,350
                      <i class="bx bx-calendar"></i>4D/5N
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <a href="/page3.html">
                <div class="card w-16">
                  <img
                    src={require("../assests/xdExport/page2card.png").default}
                    class="card-img-top "
                    alt=" "
                  />
                  <div class="card-body ">
                    <p class="card-text ">Kasol</p>
                    <p class="card-caption ">Join us from Kasol </p>
                  </div>
                  <div class="card-link ">
                    <p>
                      ₹5,350
                      <i class="bx bx-calendar"></i>2D/1N
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid container-height bg-light my-4 py-2">
        <div class="container">
          <p class="section-header">Dates</p>
          <img
            src={require("../assests/xdExport/yellowLine.png").default}
            class="mb-4"
            alt=""
          />
          {/* <!-- <img src={require("../assests/img/slash.svg).default}" alt="" /> --> */}
          <div class="list ">
            <ul>
              <li onclick="changeLink()" class="active">
                April
              </li>
              <li onclick="changeLink()">May</li>
              <li onclick="changeLink()">June</li>
              <li onclick="changeLink()">July</li>
            </ul>
          </div>
          <div class="date">
            <div class="active">12</div>
            <div>15</div>
            <div>18</div>
            <div>20</div>
          </div>
        </div>
      </section>

      <section class="container">
        <div class=" accordion">
          <h3 class="section-header">Schedule </h3>
          <img
            src={require("../assests/xdExport/yellowLine.png").default}
            class="mb-4"
            alt=""
          />
          {/* <!-- <img src={require("../assests/img/slash.svg").default} alt="" srcset="" /> --> */}
        </div>
        <br />
        <p>
          <input
            type="checkbox"
            name="collapse1"
            id="collapseCheckBox"
            hidden
          />
          <img
            src={require("../assests/img/down.png").default}
            class="collapse-arrow"
            id="downArrow1"
            alt=""
          />
          <a
            class="text-dark d-block coll"
            onclick="collapseImg(collapseCheckBox,downArrow1)"
            id="day1"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Day 1 : Departure from A’bad
          </a>
        </p>
        <div class="collapse dashed-border" id="collapseExample">
          <div class="inner-content">
            {/* <!-- <img src={require("../assests/img/compressed-collapse.jpg").default} class="img-fluid" alt="" /><br /><br /> --> */}
            <img
              src={require("../assests/xdExport/collapseImg.png").default}
              class="img-fluid"
              alt=""
            />
            <br />
            <br />
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>
                  Travelling Ahmadabad to Delhi by Train. Travelling Ahmadabad
                  to Delhi by Train. Travelling Ahmadabad to Delhi by Train.
                </p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
          </div>
        </div>

        <p>
          <input
            type="checkbox"
            name="collapse2"
            id="collapseCheckBox2"
            hidden
          />
          <img
            src={require("../assests/img/down.png").default}
            class="collapse-arrow"
            id="downArrow2"
            alt=""
          />
          <a
            class="text-dark d-block coll"
            onclick="collapseImg(collapseCheckBox2,downArrow2)"
            id="day2"
            data-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Day 2 : Departure from A’bad
          </a>
        </p>
        <div class="collapse dashed-border" id="collapseExample2">
          <div class="inner-content">
            {/* <!-- <img src={require("../assests/img/compressed-collapse.jpg").default} class="img-fluid" alt="" /><br /><br /> --> */}
            <img
              src={require("../assests/xdExport/collapseImg.png").default}
              class="img-fluid"
              alt=""
            />
            <br />
            <br />
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>
                  Travelling Ahmadabad to Delhi by Train. Travelling Ahmadabad
                  to Delhi by Train. Travelling Ahmadabad to Delhi by Train.
                </p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
          </div>
        </div>

        <p>
          <input
            type="checkbox"
            name="collapse3"
            id="collapseCheckBox3"
            hidden
          />
          <img
            src={require("../assests/img/down.png").default}
            class="collapse-arrow"
            id="downArrow3"
            alt=""
          />
          <a
            class="text-dark d-block coll"
            id="day3"
            onclick="collapseImg(collapseCheckBox3,downArrow3)"
            data-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Day 3 : Departure from A’bad
          </a>
        </p>
        <div class="collapse dashed-border" id="collapseExample3">
          <div class="inner-content">
            {/* <!-- <img src={require("../assests/img/compressed-collapse.jpg").default} class="img-fluid" alt="" /><br /><br /> --> */}
            <img
              src={require("../assests/xdExport/collapseImg.png").default}
              class="img-fluid"
              alt=""
            />
            <br />
            <br />
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>
                  Travelling Ahmadabad to Delhi by Train. Travelling Ahmadabad
                  to Delhi by Train. Travelling Ahmadabad to Delhi by Train.
                </p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section class="container-fluid bg-light">
        <div class="container">
          <p>
            <input
              type="checkbox"
              name="collapse4"
              id="collapseCheckBox4"
              hidden
            />
            <img
              src={require("../assests/img/black-down-icon.svg").default}
              id="DownIcon"
              class="collapse-arrow"
              alt=""
            />
            <a
              class="text-dark d-block coll"
              onclick="changeCollapseIcon(collapseCheckBox4,DownIcon)"
              id="collapse-list1"
              data-toggle="collapse"
              href="#collapse-list"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Inclusion
            </a>
          </p>
          <div class="collapse" id="collapse-list">
            <div class="inner-content">
              {/* <!-- <i class='bx bx-check-circle' style='color:#1ab821'></i>
              <i class="bx bx-x-circle" style="color:#c91616"></i> --> */}
              <img
                src={require("../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Trekking Bag</p>
            </div>
            <div class="inner-content">
              {/* <!-- <i class='bx bx-check-circle' style='color:#1ab821'></i> */}
              {/* <i class="bx bx-x-circle" style="color:#c91616"></i> --> */}
              <img
                src={require("../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Shoes</p>
            </div>
            <div class="inner-content">
              {/* <!-- <i class='bx bx-check-circle' style='color:#1ab821'></i>
              <i class="bx bx-x-circle" style="color:#c91616"></i> --> */}
              <img
                src={require("../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Rucksack</p>
            </div>
          </div>

          <p>
            <input
              type="checkbox"
              name="collapse5"
              id="collapseCheckBox5"
              hidden
            />
            <img
              src={require("../assests/img/black-down-icon.svg").default}
              id="DownIcon2"
              class="collapse-arrow"
              alt=""
            />
            <a
              class="text-dark d-block coll"
              onclick="changeCollapseIcon(collapseCheckBox5,DownIcon2)"
              id="collapse-list2"
              data-toggle="collapse"
              href="#collapse-list1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Exclusive
            </a>
          </p>
          <div class="collapse" id="collapse-list1">
            <div class="inner-content">
              <img
                src={require("../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Trekking Bag</p>
            </div>
            <div class="inner-content">
              <img
                src={require("../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Shoes</p>
            </div>
            <div class="inner-content">
              <img
                src={require("../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Rucksack</p>
            </div>
          </div>
          <p>
            <input
              type="checkbox"
              name="collapse6"
              id="collapseCheckBox6"
              hidden
            />
            <img
              src={require("../assests/img/black-down-icon.svg").default}
              id="DownIcon3"
              class="collapse-arrow"
              alt=""
            />
            <a
              class="text-dark d-block coll "
              id="collapse-list3"
              onclick="changeCollapseIcon(collapseCheckBox6,DownIcon3)"
              data-toggle="collapse"
              href="#collapse-list2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Cancellation Policy
            </a>
          </p>
          <div class="collapse" id="collapse-list2">
            <div class="inner-content">
              <img
                src={require("../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Trekking Bag</p>
            </div>
            <div class="inner-content">
              <img
                src={require("../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Shoes</p>
            </div>
            <div class="inner-content">
              <img
                src={require("../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Rucksack</p>
            </div>
          </div>
        </div>

        <br />
      </section>

      <section class="container">
        <p class="section-header">FAQs</p>
        <img
          src={require("../assests/xdExport/yellowLine.png").default}
          class="mb-4"
          alt=""
        />
        {/* <!-- <img src={require("../assests/img/slash.svg").default} alt="" /> --> */}

        <p class="toggler mt-4">
          <a
            class="text-dark d-block coll py-4"
            id="toggle1"
            data-toggle="collapse"
            href="#toggle-list"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            What kind of Pre-trek things we need to take care in mind?
            {/* <!-- <img src={require("../assests/img/plus.svg").default} class="expand-symbol" id="down-arrow" alt="" /> --> */}
          </a>
        </p>
        <div class="collapse" id="toggle-list">
          <div class="inner-content pt-4 grey-font">
            <span>
              You only need to be fit and fine to carry the luggage, and Hemal
              Patel will only carry the luggage of Mansi Dave.
            </span>
          </div>
        </div>

        <p class="toggler">
          <a
            class="text-dark d-block coll py-4"
            id="toggle2"
            data-toggle="collapse"
            href="#toggle-list1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            What kind of Pre-trek things we need to take care in mind?
            {/* <!-- <img src={require("../assests/img/plus.svg").default} class="expand-symbol" id="down-arrow" alt="" /> --> */}
          </a>
        </p>
        <div class="collapse" id="toggle-list1">
          <div class="inner-content pt-4 grey-font">
            <span>
              You only need to be fit and fine to carry the luggage, and Hemal
              Patel will only carry the luggage of Mansi Dave.
            </span>
          </div>
        </div>

        <p class="toggler">
          <a
            class="text-dark d-block coll py-4"
            id="toggle3"
            data-toggle="collapse"
            href="#toggle-list2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            What kind of Pre-trek things we need to take care in mind?
            {/* <!-- <img src={require("../assests/img/plus.svg").default} class="expand-symbol" id="down-arrow" alt="" /> --> */}
          </a>
        </p>
        <div class="collapse" id="toggle-list2">
          <div class="inner-content pt-4 grey-font">
            <span>
              You only need to be fit and fine to carry the luggage, and Hemal
              Patel will only carry the luggage of Mansi Dave.
            </span>
          </div>
        </div>
      </section>

      <section class="container">
        <p class="section-header last-section">Other Trips</p>
        <img
          src={require("../assests/xdExport/yellowLine.png").default}
          class="mb-4"
          alt=""
        />
        {/* <!-- <img src={require("../assests/img/slash.svg").default} alt="" srcset="" /> --> */}
        <div class="horizontal-scrollable">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manalicard1.png").default}
                class="card"
                alt="kasol"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard2.png").default}
                class=" card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard3.png").default}
                class="card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard4.png").default}
                class="card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manalicard1.png").default}
                class="card"
                alt="kasol"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard2.png").default}
                class=" card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard3.png").default}
                class="card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard4.png").default}
                class="card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- <footer class="container text-center footer-block">
        <hr />
        <p class="text-dark">© Copyright Youthcamping® LLC 2021. Youthcamping® are registered trademarks of Youthcamping.</p>
    </footer> --> */}
      <footer class="container-fluid footer-block bg-white">
        <div class="container wrap">
          <div class="text-center py-2">
            <p class=" grey-font d-inline">
              &copy; 2021 Youthcamping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default page2;
