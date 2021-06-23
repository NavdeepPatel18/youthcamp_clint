import React from "react";

import { Link } from "react-router-dom";

function adminEditPage() {
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
            <div class="float-left col-xl-2 col-lg-2 col-md-2 col-sm-4 col-12 mb-12 bg-left-pane">
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
            <div class="col-xl-10 col-lg-10 col-md-8 col-sm-12 col-12 pl-0">
              <div class="container">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 bg-white">
                    <div class="mb-4">
                      <h3 class="bg-white py-4">
                        Participant Registration Form
                      </h3>
                      <hr />
                      <h3 class="bg-white pt-4">
                        Kasol Sarpass Bagpacking Trek
                      </h3>
                      <p class="grey-font">Himachal Pradesh Summer Camp</p>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-6 my-2">
                        <h4>Participant Information</h4>
                        <p class="grey-font">Basic details</p>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 my-2">
                        <div class="row">
                          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-2">
                            <span class="text-dark float-right mt-1 mr-4">
                              Payment Status
                            </span>
                          </div>
                          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-2 ">
                            <div class="dropdown show">
                              <Link
                                class="btn btn-white border-gray dropdown-toggle float-right mb-4 mr-4"
                                to="#"
                                role="button"
                                id="dropdownFilter"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Paid at Office
                              </Link>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownFilter"
                              >
                                <div class="row">
                                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  ">
                                    <Link to="#" class="dropdown-item">
                                      Pending
                                    </Link>
                                    <hr class="my-1" />
                                  </div>

                                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <Link to="#" class="dropdown-item">
                                      Online Paid
                                    </Link>
                                    <hr class="my-1" />
                                  </div>
                                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <Link to="#" class="dropdown-item">
                                      Paid at Office
                                    </Link>
                                    <hr class="my-1" />
                                  </div>
                                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <Link to="#" class="dropdown-item">
                                      Refund Paid
                                    </Link>
                                    <hr class="my-1" />
                                  </div>
                                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                    <Link to="#" class="dropdown-item">
                                      Cancelled
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form action="">
                      <div id="participant-block">
                        <div id="participant">
                          <label for="name" id="name">
                            Name*
                          </label>
                          <br />
                          <input
                            type="text"
                            name="name"
                            id="name"
                            class="py-2 px-2 my-2 profile-input"
                            placeholder="Misha Malhotra"
                          />
                          <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              <label for="mobile">Mobile*</label>
                              <br />
                              <input
                                type="tel"
                                name="mobile"
                                id="mobile"
                                class="py-2 px-2 my-2 profile-input"
                                placeholder="+91 9998948898"
                              />
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              <label for="mobile">Mobile*</label>
                              <br />
                              <input
                                type="email"
                                name="email"
                                id="email"
                                class="py-2 px-2 my-2 profile-input"
                                placeholder="youthcampingmedia@gmail.com"
                              />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              <label for="select-id">Select ID proof*</label>
                              <br />
                              {/* <!-- <input type="text" name="select-id" id="select-id" class="py-2 px-2 my-2 profile-input" placeholder="Addhar Card"> --> */}
                              <select
                                name="select-id"
                                id="select-id"
                                class="mt-2 input-block"
                              >
                                <option value="adhar-card">Adhar Card</option>
                                <option value="Licence">Licence</option>
                                <option value="pan-card">Pan Card</option>
                                {/* <!-- <option value="adhar-card"></option> --> */}
                              </select>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              <label for="upload-id">Upload ID proof*</label>
                              <br />
                              <div id="upload-id" class="py-2 px-2 mt-2">
                                <Link to="#" onclick="openFile()">
                                  <i class="bx bx-upload text-warning">
                                    Upload{" "}
                                  </i>
                                  {/* <!-- <p class="d-inline text-dark">(Max size should not exceed 2MB)</p> --> */}
                                </Link>
                              </div>
                              <input
                                type="file"
                                name="upload-id"
                                id="upload-file-id"
                                hidden
                                class="py-2 px-2 my-2 profile-input"
                              />
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              <label for="dob">Date of Birth*</label>
                              <br />
                              <input
                                type="date"
                                name="dob"
                                id="dob"
                                class="input-block"
                              />
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              <label for="upload-id">Gender*</label>
                              <br />
                              <select
                                name="gender"
                                id="gender"
                                class="input-block"
                              >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                {/* <!-- <option value="adhar-card"></option> --> */}
                              </select>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                      <div>
                        <div>
                          {/* <!-- <div class="row">
                                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-9 my-2"> --> */}
                          <h4 class="mt-4">Health Information</h4>
                          <p class="grey-font">For safety purpose</p>
                          {/* <!-- </div> --> */}
                        </div>
                        <div class="row mt-4">
                          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <label for="health">
                              Do you have any Medical Comorbidities?
                            </label>
                            <br />
                            <input
                              type="text"
                              name="health"
                              id="trek"
                              class="py-2 px-2 my-2 profile-input"
                              placeholder="Please mention it, if yes"
                            />
                          </div>
                          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <label for="health">Your Blood Group*</label>
                            <br />
                            <select
                              name="blood-grp"
                              id="blood-grp"
                              class="py-2 px-2 my-2 input-block"
                            >
                              <option value="A+">A+</option>
                              <option value="A-">A-</option>
                              <option value="B+">B+</option>
                              <option value="B-">B-</option>
                              <option value="O+">O+</option>
                              <option value="O-">O-</option>
                              <option value="AB+">AB+</option>
                              <option value="AB-">AB-</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div id="trek">
                        <div>
                          {/* <!-- <div class="row">
                                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-9 my-2"> --> */}
                          <h4 class="mt-4">Trip Details</h4>
                          <p class="grey-font">You can edit it from here</p>
                          {/* <!-- </div> --> */}
                        </div>
                        <label for="trek">Trip*</label>
                        <br />
                        <input
                          type="text"
                          name="trip"
                          id="trip"
                          class="py-2 px-2 my-2 profile-input"
                          placeholder="Kasol Sarpass Bagpacking Trek"
                        />
                        <div class="row mt-4">
                          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <label for="package">Select Package*</label>
                            <br />
                            <select
                              name="package"
                              id="package"
                              class="input-block"
                            >
                              <option value="delhi-kasol">
                                Delhi to Kasol
                              </option>
                              <option value="ahmedabad-manali">
                                Ahmedabad to Manali
                              </option>
                              <option value="mumbai-leh">Mumbai to Leh</option>
                              {/* <!-- <option value="adhar-card"></option> --> */}
                            </select>
                          </div>
                          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <label for="date">Selected Mode of Travel*</label>
                            <br />
                            <select
                              name="package"
                              id="package"
                              class="input-block"
                            >
                              <option value="3-AC-Train">
                                3 AC Train (INR 12800)
                              </option>
                              <option value="3-AC-Train">
                                3 AC Train (INR 12800)
                              </option>
                              <option value="3-AC-Train">
                                3 AC Train (INR 12800)
                              </option>
                            </select>
                          </div>
                          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <label for="date">Select Date*</label>
                            <br />
                            <div class="row">
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <input
                                  type="date"
                                  name="fromdate"
                                  id="fromdate"
                                  placeholder="From"
                                  class="input-block"
                                />
                              </div>
                              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 mt-2">
                                <span>To</span>
                              </div>
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <input
                                  type="date"
                                  name="todate"
                                  id="todate"
                                  placeholder="To"
                                  class="input-block"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <hr />
                    {/* <!-- <label for="terms-condition"><input type="checkbox" name="terms-condition" id="yellowTick" hidden><img src={require("../../assests/img/emptyCircle.svg").default} id="yellowTickImg" alt="" /></label>
                    <h5
                      class="d-inline cursor-pointer"
                      onclick="acceptCondition()"
                    >
                      I agree to the{" "}
                      <Link to="#" class="text-warning">
                        {" "}
                        Terms and Conditions{" "}
                      </Link>{" "}
                      provided by Youthcamping
                    </h5>{" "}
                    --> */}
                    <div class="mt-4 mb-4 payment">
                      <button class="btn btn-warning text-white mr-3 mb-3 text-white">
                        Edit
                      </button>
                      <button class="btn text-warning btn-light btn2 mb-3">
                        Cancel
                      </button>
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

export default adminEditPage;
