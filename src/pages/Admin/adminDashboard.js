import React from "react";

import { Link } from "react-router-dom";

function adminDashboard() {
  return (
    <div class="bg-light-gray">
      <div class="container-fluid px-0">
        <header>
          <div class="bg-white header-height">
            <Link to="/index" class="navbar-brand">
              <img
                src={require("../../assests/xdExport/blackLogo.png").default}
                class="black-logo-img"
                alt="logo"
              />
            </Link>
          </div>
        </header>
        <section class="container-fluid wrap mt-70">
          <div class="row offset-1">
            <div class="float-left col-xl-2 col-lg-2 col-md-10 col-sm-10 col-12 mb-12 bg-left-pane">
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-4 ">
                  <h4 class="margin-left">Menu</h4>
                </div>
              </div>
              <div class="row active-dashboard">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminDashboard" class="text-dark">
                    <h6 class="margin-left">Participant List</h6>
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminCampDetails" class="text-dark">
                    <h6 class="margin-left">Camp Details</h6>
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminBlog" class="text-dark">
                    <h6 class="margin-left">Blog</h6>
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminHomepage" class="text-dark">
                    <h6 class="margin-left">Homepage</h6>
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminContactus" class="text-dark">
                    <h6 class="margin-left">Contact Us</h6>
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminAboutUs" class="text-dark">
                    <h6 class="margin-left">About Us</h6>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-10 col-sm-10 col-12 bg-white pt-4">
              <div class="row">
                <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 mb-4">
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-4">
                      <h4 class="float-left mt-2">Date Filter</h4>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-4">
                      <input
                        type="date"
                        name="From-date"
                        id="fromDateFilter"
                        class="mx-3 py-2 px-2 mb-2"
                      />
                    </div>
                    <div class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-12 mb-4">
                      <span class="mx-4 pt-4">~</span>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-4">
                      <input
                        type="date"
                        name="To-date"
                        id="toDateFilter"
                        class="ml-3 py-2 px-2 mb-2"
                      />
                    </div>
                  </div>
                </div>
                <div class=" col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 mb-4 ">
                  <form class="float-right form-inline mx-4 text-center">
                    <button class="btn btn-outline-light mr-4 mb-2">
                      <i class="bx bx-download text-warning"></i>&nbsp;Download
                    </button>
                    <button class="btn btn-outline-light mb-2 px-3">
                      <i class="bx bx-plus text-warning"></i>&nbsp;Add new
                    </button>
                  </form>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xl-9 col-lg-9 col-md-7 col-sm-12 col-12 mb-4">
                  <input
                    class="form-control mr-sm-2 w-75 d-inline"
                    type="search"
                    placeholder="Search Participants"
                    id="searchInput"
                    aria-label="Search"
                  />
                  {/* <!-- <p class="text-warning d-inline ml-2">Filter</p> --> */}
                  <Link
                    to="#"
                    type="button"
                    id="filter"
                    type="button"
                    class="text-warning d-inline ml-2"
                    data-toggle="collapse"
                    data-target="#bigCollapse"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Filter
                  </Link>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12 mb-4 ">
                  {/* {/* <!-- <label class="mr-2 cursor-pointer" for="Paymentstatus" onclick="changeRadio(allResults,imgAll)"><input type="radio" checked="checked" name="Paymentstatus" id="allResults" class="mr-1" hidden /> <img src={require("../../assests/img/emptyCircle.svg").default} id="imgAll" alt="" /> All</label>
                            <label class="mr-2 cursor-pointer" for="Paymentstatus" onclick="changeRadio(pending,imgPending)"><input type="radio" name="Paymentstatus" id="pending" class="mr-1" hidden /> <img src={require("../../assests/img/emptyCircle.svg").default} id="imgPending" alt="" />Pending</label>
                            <label class="mr-2 cursor-pointer" for="Paymentstatus" onclick="changeRadio(paid,imgPaid)"><input type="radio" name="Paymentstatus" id="paid" class="mr-1" hidden /><img src={require("../../assests/img/emptyCircle.svg").default} alt="" id="imgPaid"> Paid</label> --> */}
                  {/* <!-- <select name="paymentLoc" id="payLoc" class="float-right bg-white border-gray py-2 px-2 mr-4">
                                <option value="pending"><label for="terms-condition"><input type="checkbox" name="terms-condition" id="yellowTickDropdown" hidden /><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /></label>Pending</option>
                                <option value="online-paid">Online Paid</option>
                                <option value="paid-at-office">Paid at Office</option>
                                <option value="refund-paid">Refund Paid</option>
                                <option value="deposit-paid">Deposit Paid</option>
                                <option value="cancelled">Cancelled</option>
                            </select> --> */}
                  <div class="dropdown show">
                    <Link
                      class="btn btn-white border-gray dropdown-toggle float-right mr-4"
                      to="#"
                      role="button"
                      id="dropdownFilter"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Paid at Office
                    </Link>

                    <div class="dropdown-menu" aria-labelledby="dropdownFilter">
                      <label
                        onclick="changeCheckbox(pendingRadio,pendingImg)"
                        for="terms-condition"
                        class="dropdown-item"
                      >
                        <input
                          type="checkbox"
                          name="terms-condition"
                          id="pendingRadio"
                          hidden
                        />
                        <img
                          src={
                            require("../../assests/xdExport/emptyRadiobtn.png")
                              .default
                          }
                          id="pendingImg"
                          class="small-yellowTickImg"
                          alt=""
                        />{" "}
                        Pending{" "}
                      </label>
                      <label
                        onclick="changeCheckbox(OnlinePaidRadio,OnlinePaidImg)"
                        for="terms-condition"
                        class="dropdown-item"
                      >
                        <input
                          type="checkbox"
                          name="terms-condition"
                          id="OnlinePaidRadio"
                          hidden
                        />
                        <img
                          src={
                            require("../../assests/xdExport/emptyRadiobtn.png")
                              .default
                          }
                          id="OnlinePaidImg"
                          class="small-yellowTickImg"
                          alt=""
                        />{" "}
                        Online Paid{" "}
                      </label>
                      <label
                        onclick="changeCheckbox(PaidOfficeRadio,PaidOfficeImg)"
                        for="terms-condition"
                        class="dropdown-item"
                      >
                        <input
                          type="checkbox"
                          name="terms-condition"
                          id="PaidOfficeRadio"
                          hidden
                        />
                        <img
                          src={
                            require("../../assests/xdExport/emptyRadiobtn.png")
                              .default
                          }
                          id="PaidOfficeImg"
                          class="small-yellowTickImg"
                          alt=""
                        />{" "}
                        Paid at Office{" "}
                      </label>
                      <label
                        onclick="changeCheckbox(RefundRadio,RefundImg)"
                        for="terms-condition"
                        class="dropdown-item"
                      >
                        <input
                          type="checkbox"
                          name="terms-condition"
                          id="RefundRadio"
                          hidden
                        />
                        <img
                          src={
                            require("../../assests/xdExport/emptyRadiobtn.png")
                              .default
                          }
                          id="RefundImg"
                          class="small-yellowTickImg"
                          alt=""
                        />{" "}
                        Refund Paid{" "}
                      </label>
                      <label
                        onclick="changeCheckbox(DepositRadio,DepositImg)"
                        for="terms-condition"
                        class="dropdown-item"
                      >
                        <input
                          type="checkbox"
                          name="terms-condition"
                          id="DepositRadio"
                          hidden
                        />
                        <img
                          src={
                            require("../../assests/xdExport/emptyRadiobtn.png")
                              .default
                          }
                          id="DepositImg"
                          class="small-yellowTickImg"
                          alt=""
                        />{" "}
                        Deposit Paid{" "}
                      </label>
                      <label
                        onclick="changeCheckbox(CancelledRadio,cancelledImg)"
                        for="terms-condition"
                        class="dropdown-item"
                      >
                        <input
                          type="checkbox"
                          name="terms-condition"
                          id="CancelledRadio"
                          hidden
                        />
                        <img
                          src={
                            require("../../assests/xdExport/emptyRadiobtn.png")
                              .default
                          }
                          id="cancelledImg"
                          class="small-yellowTickImg"
                          alt=""
                        />{" "}
                        Cancelled{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div class="collapse" id="bigCollapse">
                  <div class="card card-body border-0">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 border">
                        <div class="row pt-4 ">
                          <div class="col-sm-12">
                            <h6>Camp Name</h6>
                          </div>
                          <hr class="py-2 w-100" />
                          <div class="col-sm-12 mb-4">
                            <label
                              onclick="changeCheckbox(Campname1,manaliImg)"
                              for=""
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="Campname1"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="manaliImg"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              Manali Snow Trekking Camp{" "}
                            </label>
                            {/* <!-- <label onclick="changeCheckbox(pendingRadio,pendingImg)" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Manali Snow Trekking Camp </Link> --> */}
                          </div>
                          <div class="col-sm-12 mb-4">
                            <label
                              onclick="changeCheckbox(Campname2,kasolImg)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="Campname2"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="kasolImg"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              Kasol{" "}
                            </label>
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Kasol </Link> --> */}
                          </div>
                          <div class="col-sm-12 mb-4">
                            <label
                              onclick="changeCheckbox(Campname3,poloForestImg)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="Campname3"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="poloForestImg"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              Polo Forest{" "}
                            </label>
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Polo Forest </Link> --> */}
                          </div>
                          <div class="col-sm-12 mb-4">
                            <label
                              onclick="changeCheckbox(Campname4,bhriguImg)"
                              for="terms-condition"
                              class="dropdown-item"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="Campname4"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="bhriguImg"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              Bhrigu Camp{" "}
                            </label>
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Bhrigu Camp </Link> --> */}
                          </div>
                          <div class="col-sm-12 mb-4">
                            <label
                              onclick="changeCheckbox(Campname5,hamptaImg)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="Campname4"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="hamptaImg"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              Hampta Pass and Chandratal Lake <br /> Trekking
                              expedition{" "}
                            </label>
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Hampta Pass and Chandratal Lake <br /> Trekking expedition</Link> --> */}
                          </div>
                          <div class="col-sm-12 mb-4">
                            <label
                              onclick="changeCheckbox(Campname6,lehImg)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="Campname6"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="lehImg"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              Leh ladakh{" "}
                            </label>
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Leh ladakh </Link> --> */}
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 border">
                        <div class="row pt-4 ">
                          <div class="col-sm-12">
                            <h6>Camp Date</h6>
                          </div>
                          <hr class="py-2 w-100" />
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> 7 March, 2021 </Link> --> */}
                            <label
                              onclick="changeCheckbox(day1,dayImg1)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="day1"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="dayImg1"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              7 March, 2021{" "}
                            </label>
                          </div>
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> 7 March, 2021 </Link> --> */}
                            <label
                              onclick="changeCheckbox(day2,dayImg2)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="day2"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="dayImg2"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              7 March, 2021{" "}
                            </label>
                          </div>
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> 7 March, 2021 </Link> --> */}
                            <label
                              onclick="changeCheckbox(day3,dayImg3)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="day3"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="dayImg3"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              7 March, 2021{" "}
                            </label>
                          </div>
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> 7 March, 2021 </Link> --> */}
                            <label
                              onclick="changeCheckbox(day4,dayImg4)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="day4"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="dayImg4"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              7 March, 2021{" "}
                            </label>
                          </div>
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> 7 March, 2021 </Link> --> */}
                            <label
                              onclick="changeCheckbox(day5,dayImg5)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="day5"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="dayImg5"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              7 March, 2021{" "}
                            </label>
                          </div>
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> 7 March, 2021 </Link> --> */}
                            <label
                              onclick="changeCheckbox(day6,dayImg6)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="day6"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="dayImg6"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              7 March, 2021{" "}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 border">
                        <div class="row pt-4 ">
                          <div class="col-sm-12">
                            <h6>Payment Status</h6>
                          </div>
                          <hr class="py-2 w-100" />
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Pending </Link> --> */}
                            <label
                              onclick="changeCheckbox(pay1,payImg1)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="pay1"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="payImg1"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              Pending{" "}
                            </label>
                          </div>
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Online Paid </Link> --> */}
                            <label
                              onclick="changeCheckbox(pay2,payImg2)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="pay2"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="payImg2"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              PendOnline Paiding{" "}
                            </label>
                          </div>
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Paid at Office </Link> --> */}
                            <label
                              onclick="changeCheckbox(pay3,payImg3)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="pay3"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="payImg3"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              Paid at Office{" "}
                            </label>
                          </div>
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Refund Paid </Link> --> */}
                            <label
                              onclick="changeCheckbox(pay4,payImg4)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="pay4"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="payImg4"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              Refund Paid{" "}
                            </label>
                          </div>
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Deposit Paid </Link> --> */}
                            <label
                              onclick="changeCheckbox(pay5,payImg5)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="pay5"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="payImg5"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              Deposit Paid{" "}
                            </label>
                          </div>
                          <div class="col-sm-12 mb-4">
                            {/* <!-- <Link to="#" class="text-dark text-decoration-none"><img src={require("../../assests/xdExport/emptyRadiobtn.png").default} class="small-yellowTickImg" alt="" /> Cancelled </Link> --> */}
                            <label
                              onclick="changeCheckbox(pay6,payImg6)"
                              for="terms-condition"
                            >
                              <input
                                type="checkbox"
                                name="terms-condition"
                                id="pay6"
                                hidden
                              />
                              <img
                                src={
                                  require("../../assests/xdExport/emptyRadiobtn.png")
                                    .default
                                }
                                id="payImg6"
                                class="small-yellowTickImg"
                                alt=""
                              />{" "}
                              Cancelled{" "}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <table
                class="table table-hover bg-white table-responsive-sm "
                id="mytable"
              >
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Camp</th>
                    <th scope="col">Payment Status</th>
                    <th scope="col">Price</th>
                    <th scope="col">Registration Dt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>
                      <img
                        src={
                          require("../../assests/xdExport/TablePlusSymbol.png")
                            .default
                        }
                        alt=""
                      />
                    </td>
                    <td>
                      <p class="mb-0">Sunny Vaghadia</p>
                      <p class="font-weight-600"> 7560078788</p>
                    </td>
                    <td>
                      <p class="mb-0">Manali Kasol Camp </p>
                      <p class="font-weight-600">5 April 2021 </p>
                      {/* <!-- <div class="row">
                                        <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <span>Manali Kasol Camp </span>
                                        </div>
                                        <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <span>Mar 3, 2021</span>
                                        </div>
                                    </div> --> */}
                    </td>
                    <td>
                      <p class="paid text-center">Paid</p>
                    </td>
                    <td>INR 2900</td>
                    <td>
                      <p class="mb-0">3 March 2021</p>
                      <p class="font-weight-600">3:00 PM</p>
                    </td>
                    <td>
                      <div class="dropdown dropleft">
                        {/* <!-- <button class="btn dropdown-toggle" id="dropDownbtn1" type="button" data-toggle="dropdown" hidden /></button> --> */}
                        <img
                          src={
                            require("../../assests/img/smallMenu.svg").default
                          }
                          class="dropdown-toggle"
                          id="dropDownbtn1"
                          type="button"
                          data-toggle="dropdown"
                          alt=""
                        />
                        <ul class="dropdown-menu">
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              {" "}
                              edit
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              {" "}
                              cancel
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>
                      <img
                        src={
                          require("../../assests/xdExport/TablePlusSymbol.png")
                            .default
                        }
                        alt=""
                      />
                    </td>
                    <td>
                      <p class="mb-0"> Anand Rohit</p>
                      <p class="font-weight-600"> 7560078788</p>
                    </td>

                    <td>
                      <p class="mb-0">Manali Kasol Camp </p>
                      <p class="font-weight-600"> May 5, 2021 </p>
                    </td>
                    {/* <!-- <td><img src={require("../../assests/img/pending.png").default} alt="pending"></td> --> */}
                    <td>
                      <p class="pending text-center">Pending</p>
                    </td>
                    <td>
                      <p>INR 2900</p>
                    </td>
                    <td>
                      <p class="mb-0">3 March 2021</p>
                      <p class="font-weight-600">3:00 PM</p>
                    </td>
                    <td>
                      <div class="dropdown dropleft">
                        {/* <!-- <button class="btn dropdown-toggle" id="dropDownbtn1" type="button" data-toggle="dropdown" hidden /></button> --> */}
                        <img
                          src={
                            require("../../assests/img/smallMenu.svg").default
                          }
                          class="dropdown-toggle"
                          id="dropDownbtn2"
                          type="button"
                          data-toggle="dropdown"
                          alt=""
                        />
                        <ul class="dropdown-menu">
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              {" "}
                              edit
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              {" "}
                              cancel
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr
                    data-toggle="collapse"
                    data-target="#demo1"
                    class="accordion-toggle"
                  >
                    <td>03</td>
                    <td>
                      <img
                        src={
                          require("../../assests/xdExport/TablePlusSymbol.png")
                            .default
                        }
                        alt=""
                      />
                    </td>
                    <td>
                      <p>Umang Patel (3)</p>
                      <p class="font-weight-600"> 7560078788</p>
                    </td>
                    <td>
                      <p class="mb-0">Manali Kasol Camp </p>
                      <p class="font-weight-600"> May 6, 2021 </p>
                    </td>

                    <td>
                      <p class="deposit-paid text-center">Deposit Paid</p>
                    </td>
                    <td>
                      <p>INR 2900</p>
                    </td>
                    <td>
                      <p class="mb-0">3 March 2021</p>
                      <p class="font-weight-600">3:00 PM</p>
                    </td>
                    <td>
                      <div class="dropdown dropleft">
                        {/* <!-- <button class="btn dropdown-toggle" id="dropDownbtn1" type="button" data-toggle="dropdown" hidden /></button> --> */}
                        <img
                          src={
                            require("../../assests/img/smallMenu.svg").default
                          }
                          class="dropdown-toggle"
                          id="dropDownbtn3"
                          type="button"
                          data-toggle="dropdown"
                          alt=""
                        />
                        <ul class="dropdown-menu">
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              {" "}
                              edit{" "}
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              {" "}
                              cancel{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="12" class="hiddenRow">
                      <div class="accordian-body collapse" id="demo1">
                        <table
                          class="table table-hover bg-white table-responsive-sm"
                          id="mytable2"
                        >
                          <tbody>
                            <tr
                              data-toggle="collapse"
                              class="accordion-toggle bg-light-gray"
                              data-target="#demo1"
                            >
                              <td></td>
                              <td></td>
                              <td class="float-right">
                                <p>Umang Patel</p>
                                <br />
                                <p class="font-weight-600"> 7560078788</p>
                              </td>
                              <td>
                                <p class="mb-0 float-right">
                                  Manali Kasol Camp{" "}
                                </p>
                                <br />
                                <p class="font-weight-600 float-right">
                                  {" "}
                                  May 6, 2021{" "}
                                </p>
                              </td>
                              {/* <!-- <td><img src={require("../../assests/img/depositPaid.png").default} alt="pending"></td> --> */}
                              <td class="pr-4">
                                <p class="deposit-paid float-right mr-4">
                                  Deposit Paid
                                </p>
                              </td>
                              <td>
                                <p class="float-right mr-2">INR 2900</p>
                              </td>
                              <td>
                                <p class="mb-0 ">3 March 2021</p>
                                <br />
                                <p class="font-weight-600">6:00 PM</p>
                              </td>
                              <td>
                                <div class="dropdown dropleft">
                                  {/* <!-- <button class="btn dropdown-toggle" id="dropDownbtn1" type="button" data-toggle="dropdown" hidden /></button> --> */}
                                  <img
                                    src={
                                      require("../../assests/img/smallMenu.svg")
                                        .default
                                    }
                                    class="dropdown-toggle"
                                    id="dropDownbtn3"
                                    type="button"
                                    data-toggle="dropdown"
                                    alt=""
                                  />
                                  <ul class="dropdown-menu">
                                    <li class="py-1">
                                      <Link to="#" class="ml-2">
                                        {" "}
                                        edit
                                      </Link>
                                    </li>
                                    <li class="py-1">
                                      <Link to="#" class="ml-2">
                                        {" "}
                                        cancel
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-toggle="collapse"
                              class="accordion-toggle bg-light-gray"
                              data-target="#demo1"
                            >
                              <td></td>
                              <td></td>
                              <td class="float-right">
                                <p>Umang Patel</p>
                                <br />
                                <p class="font-weight-600"> 7560078788</p>
                              </td>
                              <td>
                                <p class="mb-0 float-right">
                                  Manali Kasol Camp{" "}
                                </p>
                                <br />
                                <p class="font-weight-600 float-right">
                                  {" "}
                                  May 6, 2021{" "}
                                </p>
                              </td>
                              {/* <!-- <td><img src={require("../../assests/img/depositPaid.png").default} alt="pending"></td> --> */}
                              <td class="pr-4">
                                <p class="deposit-paid float-right mr-4">
                                  Deposit Paid
                                </p>
                              </td>
                              <td>
                                <p class="float-right mr-2">INR 2900</p>
                              </td>
                              <td>
                                <p class="mb-0 ">3 March 2021</p>
                                <br />
                                <p class="font-weight-600">6:00 PM</p>
                              </td>
                              <td>
                                <div class="dropdown dropleft">
                                  {/* <!-- <button class="btn dropdown-toggle" id="dropDownbtn1" type="button" data-toggle="dropdown" hidden /></button> --> */}
                                  <img
                                    src={
                                      require("../../assests/img/smallMenu.svg")
                                        .default
                                    }
                                    class="dropdown-toggle"
                                    id="dropDownbtn3"
                                    type="button"
                                    data-toggle="dropdown"
                                    alt=""
                                  />
                                  <ul class="dropdown-menu">
                                    <li class="py-1">
                                      <Link to="#" class="ml-2">
                                        {" "}
                                        edit
                                      </Link>
                                    </li>
                                    <li class="py-1">
                                      <Link to="#" class="ml-2">
                                        {" "}
                                        cancel
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>
                      <img
                        src={
                          require("../../assests/xdExport/TablePlusSymbol.png")
                            .default
                        }
                        alt=""
                      />
                    </td>
                    <td>
                      <p class="mb-0">Neelam Vaghadia</p>
                      <p class="font-weight-600"> 7560078788</p>
                    </td>
                    <td>
                      <p class="mb-0">Manali Kasol Camp </p>
                      <p class="font-weight-600">5 April 2021 </p>
                      {/* <!-- <div class="row">
                                        <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <span>Manali Kasol Camp </span>
                                        </div>
                                        <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <span>Mar 3, 2021</span>
                                        </div>
                                    </div> --> */}
                    </td>
                    <td>
                      <p class="refund-paid text-center">Refund Paid</p>
                    </td>
                    <td>INR 2900</td>
                    <td>
                      <p class="mb-0">3 March 2021</p>
                      <p class="font-weight-600">3:00 PM</p>
                    </td>
                    <td>
                      <div class="dropdown dropleft">
                        {/* <!-- <button class="btn dropdown-toggle" id="dropDownbtn1" type="button" data-toggle="dropdown" hidden /></button> --> */}
                        <img
                          src={
                            require("../../assests/img/smallMenu.svg").default
                          }
                          class="dropdown-toggle"
                          id="dropDownbtn1"
                          type="button"
                          data-toggle="dropdown"
                          alt=""
                        />
                        <ul class="dropdown-menu">
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              {" "}
                              edit
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              {" "}
                              cancel
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <div class="row">
                <div class="col-xl-8 col-lg-7 col-md-7 col-sm-12 col-12">
                  <p class="gray-font d-inline">Showing 1-20 items of 45</p>
                  <select
                    name="filter"
                    id="filternum"
                    class="py-2 bg-white border-gray ml-2 px-1 my-3"
                  >
                    <option value="1-20">
                      <p> 20 Results </p>
                    </option>
                    <option value="1-30">
                      <p> 30 Results </p>
                    </option>
                    <option value="1-50">
                      <p> 50 Results </p>
                    </option>
                  </select>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-5 col-sm-12 col-12 mb-4 text-gray pt-3 float-right">
                  {/* <!-- <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li>First</li>
                                    <li class="page-item">
                                        <Link class="page-link" to="#"><i class='bx bx-chevron-left' style='color:#bebeb7'  ></i></Link>
                                    </li>
                                    <li class="page-item"><Link class="page-link" to="#">1</Link></li>
                                    <li class="page-item"><Link class="page-link" to="#">2</Link></li>
                                    <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                                    <li class="page-item">
                                        <Link class="page-link" to="#"><i class='bx bx-chevron-right' style='color:#bebeb7' ></i></Link>
                                    </li>
                                    <li>Last</li>
                                </ul>
                            </nav> --> */}
                  <ul class="admin-pagination mt-2">
                    <div class="">
                      <li>First</li>
                      <li onclick="changePage()">
                        <Link to="#">
                          <i class="bx bx-chevron-left grey-font"></i>
                        </Link>
                      </li>
                      <li
                        onclick="changePage()"
                        class="active-card-border rounded"
                      >
                        <Link
                          to="#"
                          onclick="changePage()"
                          class="text-warning"
                        >
                          1
                        </Link>
                      </li>
                      <li onclick="changePage()">
                        <Link to="#" class="text-dark">
                          2
                        </Link>
                      </li>
                      <li onclick="changePage()">
                        <Link to="#" class="text-dark">
                          3
                        </Link>
                      </li>
                      <li onclick="changePage()">
                        <Link to="#" class="text-dark">
                          <i class="bx bx-chevron-right grey-font"></i>
                        </Link>
                      </li>
                      <li>last</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="container-fluid footer-block bg-white ">
          <div class="container wrap ">
            <div class="text-center py-2 ">
              <p class=" grey-font d-inline ">
                &copy; 2021 Youthcamping. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default adminDashboard;
