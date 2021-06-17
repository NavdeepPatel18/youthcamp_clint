import React from "react";

function fullPayment() {
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
              {/* <!--Navigation after Login-->
                    <!-- <div class="nav-header bg-warning row">
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                        <div class="col-sm-4">
                            <a href="/page14.html"><img src={require("../assests/img/user2.png" class="circle-img" alt=""></a>
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
                {/* <!-- <a href="/page13.html"><img src={require("../assests/img/homw.svg").default} alt="" /> Dashboard</a> --> */}
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
        <section class="wrap mt-4">
          <div class="row ">
            <div class="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12 ">
              <aside class="container-fliud" id="accordionExample">
                <div class="row text-center">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 bg-white">
                    <div class="row">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <p class="pt-4 float-left ml-4 mb-0">Short Itinerary</p>
                      </div>
                    </div>
                    <div class="row py-3">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="accordion">
                          <div class="card border-0 ">
                            <div class="" id="headingOne">
                              <h2 class="mb-0">
                                <a
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <div class="row">
                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                                      <img
                                        src={
                                          require("../assests/img/downRoundArrow.svg")
                                            .default
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                      Day 1 : LEAVE FROM A'BAD
                                    </div>
                                  </div>
                                </a>
                              </h2>
                            </div>

                            <div
                              id="collapseOne"
                              class="collapse"
                              aria-labelledby="headingOne"
                              data-parent="#accordionExample"
                            >
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      {" "}
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="accordion" id="accordionExample2">
                          <div class="card border-0 ">
                            <div class="" id="headingTwo">
                              <h2 class="mb-0">
                                <a
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  <div class="row">
                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                                      <img
                                        src={
                                          require("../assests/img/downRoundArrow.svg")
                                            .default
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                      Day 2 : REACH PATHANKOT
                                    </div>
                                  </div>
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapseTwo"
                              class="collapse"
                              aria-labelledby="headingTwo"
                              data-parent="#accordionExample"
                            >
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      {" "}
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="accordion" id="accordionExample3">
                          <div class="card border-0 ">
                            <div class="" id="headingThree">
                              <h2 class="mb-0">
                                <a
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  <div class="row">
                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                                      <img
                                        src={
                                          require("../assests/img/downRoundArrow.svg")
                                            .default
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                      Day 3 : LEAVE FOR KASOL
                                    </div>
                                  </div>
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapseThree"
                              class="collapse"
                              aria-labelledby="headingThree"
                              data-parent="#accordionExample"
                            >
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      {" "}
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="accordion" id="accordionExample4">
                          <div class="card border-0">
                            <div class="" id="headingFour">
                              <h2 class="mb-0">
                                <a
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseFour"
                                  aria-expanded="false"
                                  aria-controls="collapseFour"
                                >
                                  <div class="row">
                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                                      <img
                                        src={
                                          require("../assests/img/downRoundArrow.svg")
                                            .default
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                      Day 4 : REACH PATHANKOT
                                    </div>
                                  </div>
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapseFour"
                              class="collapse"
                              aria-labelledby="headingFour"
                              data-parent="#accordionExample"
                            >
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      {" "}
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="accordion" id="accordionExample5">
                          <div class="card border-0">
                            <div class="" id="headingFive">
                              <h2 class="mb-0">
                                <a
                                  class="btn btn-link collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseFive"
                                  aria-expanded="false"
                                  aria-controls="collapseFive"
                                >
                                  <div class="row">
                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                                      <img
                                        src={
                                          require("../assests/img/downRoundArrow.svg")
                                            .default
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                      Day 5 : LEAVE FOR KASOL
                                    </div>
                                  </div>
                                </a>
                              </h2>
                            </div>
                            <div
                              id="collapseFive"
                              class="collapse"
                              aria-labelledby="headingFive"
                              data-parent="#accordionExample"
                            >
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      {" "}
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3">
                                    <i class="bx bx-right-arrow-alt"></i>
                                  </div>
                                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-7 col-7">
                                    <small>
                                      <p>
                                        Travelling Ahmadabad to Delhi by Train.
                                      </p>
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div class="col-xl-10 col-lg-10 col-md-8 col-sm-12 col-12">
              <div class="container">
                <div class="row">
                  <h3 class="py-4">Checkout</h3>
                  <hr />
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 bg-white pl-4">
                    <div class="row py-3">
                      <div class="col-xl-10 col-lg-10 col-md-8 col-sm-7 col-7 my-2">
                        <h4 class="font-weight-600">
                          Manali Trekking Expedition
                        </h4>
                      </div>
                      <div
                        class="col-xl-2 col-lg-2 col-md-4 col-sm-5 col-5 my-2 cursor-pointer"
                        onclick="addParticipant()"
                      >
                        <p class="grey-font mb-0">Order #120</p>
                      </div>
                    </div>
                    <hr />
                    <form action="">
                      <label
                        for="fullpayment"
                        class="big-font mr-4 font-weight-600"
                        id="fullpayment"
                      >
                        <input
                          checked="checked"
                          type="radio"
                          name="payment"
                          id="fullpay"
                          class="big-radio mr-4"
                        />
                        Full Payment
                      </label>
                      <label
                        for="deposit"
                        class="big-font mr-4 font-weight-600"
                      >
                        <input
                          type="radio"
                          name="payment"
                          id="deposit"
                          class="big-radio mr-4"
                        />
                        Deposit
                      </label>
                      <hr />
                      <div class="row mt-2">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3">
                          <p>Travel Date</p>
                          <p class="grey-font font-weight-600">03 March 2021</p>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                          <p>Booking Date</p>
                          <p class="grey-font font-weight-600">
                            02 February 2021
                          </p>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                          <p>Selected Package</p>
                          <p class="grey-font font-weight-600">
                            Ahmedabad 3-AC Train
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div class="row mt-2">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                          <p>Name</p>
                          <p class="font-weight-600 mb-1">Misha Patel</p>
                          <p class="font-weight-600 mb-1">Yesha Patel</p>
                          <p class="font-weight-600 mb-1">Mitra Patel</p>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                          <p>Age</p>
                          <p class="font-weight-600 mb-1">23 Years</p>
                          <p class="font-weight-600 mb-1">24 Years</p>
                          <p class="font-weight-600 mb-1">22 Years</p>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                          <p>Gender</p>
                          <p class="font-weight-600 mb-1">Female</p>
                          <p class="font-weight-600 mb-1">Female</p>
                          <p class="font-weight-600 mb-1">Female</p>
                        </div>
                      </div>
                      <hr />
                      <h5 class="font-weight-600 mb-4">Price Breakdown</h5>
                      <div class="row mt-2">
                        <div class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-7">
                          <p class="mb-1">Adult</p>
                          <p class="mb-1">Booking fees and tax</p>
                        </div>
                        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-5 float-right">
                          <p class="font-weight-600 mb-1">INR 8900 X 3</p>
                          <p class="font-weight-600 mb-1">INR 629 X 3</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row mt-2 d-flex justify-content-around">
                        <div class="col-xl-5 col-lg-4 col-md-4 col-sm-4 col-4">
                          <p>Total Price</p>
                          <p class="font-weight-600 mb-1">INR 26700</p>
                        </div>
                        <div class="col-xl-5 col-lg-4 col-md-4 col-sm-4 col-4">
                          <p>Total Tax</p>
                          <p class="font-weight-600 mb-1 ">INR 1887</p>
                        </div>
                        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4">
                          <p>Subtotal</p>
                          <p class="font-weight-600 mb-1 text-warning ">
                            INR 28587
                          </p>
                        </div>
                      </div>
                    </form>
                    <hr />
                    <div class="mt-4 mb-4 payment">
                      <button class="btn btn-warning mr-3 mb-3">
                        Book Now
                      </button>
                      <button class="btn text-waning btn-light btn2 mb-3">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
    </div>
  );
}

export default fullPayment;
