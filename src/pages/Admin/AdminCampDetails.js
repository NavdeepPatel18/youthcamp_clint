import React from "react";
import { Link } from "react-router-dom";

function AdminCampDetails() {
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
            <div class="float-left col-xl-2 col-lg-11 col-md-11 col-sm-11 col-12 mb-12 bg-left-pane">
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-4 ">
                  <h4 class="margin-left">Menu</h4>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminDashboard" class="text-dark">
                    <h6 class="margin-left">Participant List</h6>
                  </Link>
                </div>
              </div>
              <div class="row active-dashboard">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminCampDetails" class="text-dark">
                    <h6 class="margin-left">Camp Details</h6>
                  </Link>
                </div>
              </div>
              <div class="row ">
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
            <div class="col-xl-9 col-lg-11 col-md-11 col-sm-11 col-12 bg-white pt-4">
              <div class="row  ">
                <div class="col-xl-10 col-lg-10 col-md-8 col-sm-8 col-8 mb-4">
                  <div class="">
                    <h4 class="float-left">Dashboard</h4>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-4 ">
                  <div class="text-center">
                    <Link to="/NewAdminCamp" class="text-warning">
                      Add new Camps
                    </Link>
                  </div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="horizontal-scrollable">
                  <div class="row ml-4">
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                      <img
                        src={require("../../assests/img/kasol.jpg").default}
                        class="w-13 w-sm-14"
                        alt="kasol"
                      />
                      <div class="dropdown dropleft ">
                        <img
                          src={
                            require("../../assests/xdExport/three-dot.png")
                              .default
                          }
                          class="three-dot dropdown-toggle small-icon"
                          id="dropDownbtn1"
                          type="button"
                          data-toggle="dropdown"
                          alt=""
                        />
                        <ul class="dropdown-menu mt-4">
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="fas fa-eye-slash"></i> Unhide
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="fas fa-pen"></i> edit
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="far fa-trash-alt"></i> cancel
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div class="row">
                        <div class="col-xl-9 col-lg-9 col-md-7 col-sm-7 col-7">
                          <p class="desc ml-0">
                            Kasol Bagpacking <br /> Trek
                          </p>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mt-1 ml-2">
                          {/* <!-- <img src={require("../../assests/xdExport/emptyStar.png").default} class="small-icon" alt="" /> --> */}
                          <label onclick="changeStar(star1,starImg1)">
                            <input
                              type="checkbox"
                              name="terms-condition"
                              id="star1"
                              hidden
                            />
                            <img
                              src={
                                require("../../assests/xdExport/emptyStar.png")
                                  .default
                              }
                              id="starImg1"
                              class="small-icon"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-9 col-lg-9 col-md-7 col-sm-7 col-7 mb-4 ">
                          <p class="pricing ml-0">₹12,551/-</p>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mt-2 ml-2 ">
                          <i class="bx bx-trash"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                      <img
                        src={require("../../assests/img/manali.jpg").default}
                        class="w-13 w-sm-14"
                        alt="manali"
                      />
                      <div class="dropdown dropleft ">
                        <img
                          src={
                            require("../../assests/xdExport/three-dot.png")
                              .default
                          }
                          class="three-dot dropdown-toggle small-icon"
                          id="dropDownbtn2"
                          type="button"
                          data-toggle="dropdown"
                          alt=""
                        />
                        <ul class="dropdown-menu mt-4">
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="fas fa-eye-slash"></i> Unhide
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="fas fa-pen"></i> edit
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="far fa-trash-alt"></i> cancel
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div class="row">
                        <div class="col-xl-9 col-lg-9 col-md-7 col-sm-7 col-7">
                          <p class="desc ml-0">
                            Kasol Bagpacking <br /> Trek
                          </p>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mt-1 ml-2">
                          {/* <!-- <img src={require("../../assests/xdExport/emptyStar.png").default} class="small-icon" alt="" /> --> */}
                          <label onclick="changeStar(star2,starImg2)">
                            <input
                              type="checkbox"
                              name="terms-condition"
                              id="star2"
                              hidden
                            />
                            <img
                              src={
                                require("../../assests/xdExport/emptyStar.png")
                                  .default
                              }
                              id="starImg2"
                              class="small-icon"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-9 col-lg-9 col-md-7 col-sm-7 col-7 mb-4 ">
                          <p class="pricing ml-0">₹12,551/-</p>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mt-2 ml-2">
                          <i class="bx bx-trash"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                      <img
                        src={require("../../assests/img/mountain.jpg").default}
                        class="w-13 w-sm-14"
                        alt="manali"
                      />
                      <div class="dropdown dropleft ">
                        <img
                          src={
                            require("../../assests/xdExport/three-dot.png")
                              .default
                          }
                          class="three-dot dropdown-toggle small-icon"
                          id="dropDownbtn3"
                          type="button"
                          data-toggle="dropdown"
                          alt=""
                        />
                        <ul class="dropdown-menu mt-4">
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="fas fa-eye-slash"></i> Unhide
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="fas fa-pen"></i> edit
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="far fa-trash-alt"></i> cancel
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div class="row">
                        <div class="col-xl-9 col-lg-9 col-md-7 col-sm-7 col-7">
                          <p class="desc ml-0">
                            Kasol Bagpacking <br /> Trek
                          </p>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mt-1 ml-2">
                          {/* <!-- <img src={require("../../assests/xdExport/fillStar.png").default} class="small-icon" alt="" /> --> */}
                          <label onclick="changeStar(star3,starImg3)">
                            <input
                              type="checkbox"
                              name="terms-condition"
                              id="star3"
                              hidden
                            />
                            <img
                              src={
                                require("../../assests/xdExport/emptyStar.png")
                                  .default
                              }
                              id="starImg3"
                              class="small-icon"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-9 col-lg-9 col-md-7 col-sm-7 col-7 mb-4 ">
                          <p class="pricing ml-0">₹12,551/-</p>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mt-2 ml-2">
                          <i class="bx bx-trash"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                      <img
                        src={
                          require("../../assests/img/snowMountain.jpg").default
                        }
                        class="w-13 w-sm-14"
                        alt="manali"
                      />
                      <div class="dropdown dropleft ">
                        <img
                          src={
                            require("../../assests/xdExport/three-dot.png")
                              .default
                          }
                          class="three-dot dropdown-toggle small-icon"
                          id="dropDownbtn4"
                          type="button"
                          data-toggle="dropdown"
                          alt=""
                        />
                        <ul class="dropdown-menu mt-4">
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="fas fa-eye-slash"></i> Unhide
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="fas fa-pen"></i> edit
                            </Link>
                          </li>
                          <li class="py-1">
                            <Link to="#" class="ml-2">
                              <i class="far fa-trash-alt"></i> cancel
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div class="row">
                        <div class="col-xl-9 col-lg-9 col-md-7 col-sm-7 col-7">
                          <p class="desc ml-0">
                            Kasol Bagpacking <br /> Trek
                          </p>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mt-1 ml-2">
                          {/* <!-- <img src={require("../../assests/xdExport/emptyStar.png").default} class="small-icon" alt="" /> --> */}
                          <label onclick="changeStar(star4,starImg4)">
                            <input
                              type="checkbox"
                              name="terms-condition"
                              id="star4"
                              hidden
                            />
                            <img
                              src={
                                require("../../assests/xdExport/emptyStar.png")
                                  .default
                              }
                              id="starImg4"
                              class="small-icon"
                              alt=""
                            />
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-9 col-lg-9 col-md-7 col-sm-7 col-7 mb-4 ">
                          <p class="pricing ml-0">₹12,551/-</p>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mt-2 ml-2">
                          <i class="bx bx-trash"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
    </div>
  );
}

export default AdminCampDetails;
