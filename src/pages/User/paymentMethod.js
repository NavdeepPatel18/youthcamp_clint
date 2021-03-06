import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function paymentMethod() {
  return (
    <div class="bg-light-gray">
      <div class="container-fluid px-0">
        <Header />
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
                                <Link
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
                                          require("../../assests/img/downRoundArrow.svg")
                                            .default
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                      Day 1 : LEAVE FROM A'BAD
                                    </div>
                                  </div>
                                </Link>
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
                                <Link
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
                                          require("../../assests/img/downRoundArrow.svg")
                                            .default
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                      Day 2 : REACH PATHANKOT
                                    </div>
                                  </div>
                                </Link>
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
                                <Link
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
                                          require("../../assests/img/downRoundArrow.svg")
                                            .default
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                      Day 3 : LEAVE FOR KASOL
                                    </div>
                                  </div>
                                </Link>
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
                                <Link
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
                                          require("../../assests/img/downRoundArrow.svg")
                                            .default
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                      Day 4 : REACH PATHANKOT
                                    </div>
                                  </div>
                                </Link>
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
                                <Link
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
                                          require("../../assests/img/downRoundArrow.svg")
                                            .default
                                        }
                                        alt=""
                                      />
                                    </div>
                                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                                      Day 5 : LEAVE FOR KASOL
                                    </div>
                                  </div>
                                </Link>
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
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pl-4">
                    <h3 class="py-4">Select Payment Method</h3>
                    <div class="accordion " id="payMeth">
                      <div class="card">
                        <div class="card-header bg-white" id="upi">
                          <h2 class="mb-0">
                            <label for="upiMethod">
                              <input
                                type="radio"
                                onclick="enableBtn()"
                                checked="checked"
                                name="payMethod"
                                id="upiMethod"
                                class="big-radio"
                                type="button"
                                data-toggle="collapse"
                                data-target="#upiCollapse"
                                aria-expanded="true"
                                aria-controls="upiCollapse"
                              />
                              <span class="ml-4 font-size-small font-weight-600">
                                UPI
                              </span>
                            </label>
                          </h2>
                        </div>

                        <div
                          id="upiCollapse"
                          class="collapse show"
                          aria-labelledby="upi"
                          data-parent="#payMeth"
                        >
                          <div class="card-body font-weight-600">
                            {/* <!-- content --> */}
                            <p>
                              Step 1 : Scan this QR code and complete Payment
                            </p>
                            <br />
                            <img
                              src={
                                require("../../assests/xdExport/upi.png")
                                  .default
                              }
                              alt="qrcode"
                            />
                            <p class="big-font ml-4">
                              {" "}
                              OR{" "}
                              <Link to="#" class="text-warning ml-4">
                                {" "}
                                Download{" "}
                              </Link>{" "}
                              QR code
                            </p>
                            <p class="mt-4">
                              Step 2 : Please upload your Payment Receipt on
                              your dashboard. Kindly contact Youthcamping Team
                              for further queries
                            </p>
                            <p class="mt-4">
                              Step 3 : Hola, You have successfully paid. Buckle
                              up for new adventure!
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-header bg-white" id="payonline">
                          <h2 class="mb-0">
                            <label for="online-pay">
                              <input
                                type="radio"
                                onclick="enableBtn()"
                                name="payMethod"
                                id="online-pay"
                                class="big-radio collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#onlinePayCollapse"
                                aria-expanded="true"
                                aria-controls="onlinePayCollapse"
                              />
                              <span class="ml-4 font-size-small font-weight-600">
                                Pay Online
                              </span>
                            </label>
                          </h2>
                        </div>

                        <div
                          id="onlinePayCollapse"
                          class="collapse"
                          aria-labelledby="payonline"
                          data-parent="#payMeth"
                        >
                          <div class="card-body font-weight-600">
                            {/* <!-- content --> */}
                            <h2>Razor Pay</h2>
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-header bg-white" id="cash-pay">
                          <h2 class="mb-0">
                            <label for="cashPay">
                              <input
                                type="radio"
                                onclick="enableBtn()"
                                name="payMethod"
                                id="cashPay"
                                class="big-radio collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#cashPayCollapse"
                                aria-expanded="true"
                                aria-controls="cashPayCollapse"
                              />
                              <span class="ml-4 font-size-small font-weight-600 ">
                                Cash Payment
                              </span>
                            </label>
                          </h2>
                        </div>

                        <div
                          id="cashPayCollapse"
                          class="collapse"
                          aria-labelledby="cash-pay"
                          data-parent="#payMeth"
                        >
                          <div class="card-body">
                            {/* <!-- content --> */}
                            <p class="bg-light-gray px-2 py-4 w-100 rounded">
                              Please pay cash at Office, and check your
                              dashboard for the Payment Receipt
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-header bg-white" id="bank-pay">
                          <h2 class="mb-0">
                            <label for="BankPay">
                              <input
                                type="radio"
                                onclick="enableBtn()"
                                name="payMethod"
                                id="BankPay"
                                class="big-radio collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#BankPayCollapse"
                                aria-expanded="true"
                                aria-controls="BankPayCollapse"
                              />
                              <span class="ml-4 font-size-small font-weight-600">
                                Bank Transfer
                              </span>
                            </label>
                          </h2>
                        </div>

                        <div
                          id="BankPayCollapse"
                          class="collapse"
                          aria-labelledby="bank-pay"
                          data-parent="#payMeth"
                        >
                          <div class="card-body">
                            {/* <!-- content --> */}
                            <p>
                              Step 1 : Scan this QR code and complete Payment
                            </p>
                            <div class="row bg-light-gray px-4 py-4 rounded">
                              <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                                <p class="grey-font">Bank Name</p>
                                <p>ICICI Bank</p>
                              </div>
                              <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                                <p class="grey-font">A/c Name</p>
                                <p>Youthcamping</p>
                              </div>
                              <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                                <p class="grey-font">A/c Number</p>
                                <p>755905500148</p>
                              </div>
                              <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                                <p class="grey-font">Branch Name</p>
                                <p>IOC Chandkheda</p>
                              </div>
                              <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                                <p class="grey-font">IFSC Code</p>
                                <p>ICIC0000001</p>
                              </div>
                            </div>
                            <p class="mt-4">
                              Step 2 : Please upload your Payment Receipt on
                              your dashboard. Kindly contact Youthcamping Team
                              for further queries
                            </p>
                            <p class="mt-4">
                              Step 3 : Hola, You have successfully paid. Buckle
                              up for new adventure!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 mb-4 payment bg-white pt-4 pb-2 px-4">
                      <button
                        class="btn btn-warning mr-3 mb-3 text-white"
                        disabled
                        id="pay-btn"
                      >
                        Pay Now
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
      <Footer />
    </div>
  );
}

export default paymentMethod;
