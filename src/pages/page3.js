import React from "react";

function page3() {
  return (
    <div>
      <header class="container-fluid bg-white">
        {/* <!-- <img src={require("../assests/img/videoBackground.jpg").default} class="img-fluid header-img" alt="" /> --> */}
        <img
          src={require("../assests/xdExport/page2Bg.png").default}
          class="img-fluid header-img"
          alt=""
        />
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
                    class="btn btn-warning text-white d-block"
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

        {/* <!-- Otp modal --> */}
        {/* <!-- <div class="modal fade" id="otpModal1" tabindex="-1" role="dialog" aria-labelledby="otpModal1" aria-hidden="true">
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
              <a href="/page2.html">
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
        <div class="row ">
          <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <p class="big-para">
              Hoi An tours are ideal for travellers looking to experience the
              local culture and history of the UNESCO-listed coastal town.
              Between the 15th and 19th century, Hoi An was a prominent
              Vietnamese trading port for silk, porcelain, pepper, cinnamon, and
              medicinal plants due to its proximity
            </p>
          </div>
        </div>
        {/* <!-- <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12"> --> */}
        {/* <!-- </div> --> */}
      </section>
      <br />
      <br />

      <section class="container">
        <p class="section-header">Packages</p>
        <img src={require("../assests/img/slash.svg").default} alt="" />
        <div class="scroll">
          <div class="row ">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <div class="card" style={{"width":"16rem"}}>
                {/* <!-- <img src={require("../assests/img/icyMountian.jpg").default} class="card-img-top " alt=" " /> --> */}
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
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <div class="card " style={{"width":"16rem"}}>
                {/* <!-- <img src={require("../assests/img/icyMountian.jpg").default} class="card-img-top " alt=" " /> --> */}
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
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <div class="card " style={{"width":"16rem"}}>
                {/* <!-- <img src={require("../assests/img/icyMountian.jpg").default} class="card-img-top " alt=" " /> --> */}
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
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid mt-4 py-4">
        <div class="container wrap">
          {/* <!-- <div class="inquiry-section"> --> */}
          <div class="row">
            <div class="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12">
              <h4> ₹12,500 / person</h4>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-2">
              <button type="button" class="btn btn-outline-warning">
                Send Enquiry
              </button>
              <button
                type="button"
                class="btn btn-warning text-white"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Book
              </button>
              {/* <!-- <a href="#" class="btn btn-warning text-white d-block" data-toggle="modal" data-target="#exampleModal">Book</a> --> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page3;
