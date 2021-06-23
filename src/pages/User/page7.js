import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function page7() {
  return (
    <div class="bg-light-gray">
      <div class="container-fluid px-0">
        <Header />
        <section class="wrap mt-4">
          <div class="row ">
            <div class="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
              <aside class="container-fliud" id="accordionExample">
                <div class="row text-center">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 bg-white">
                    <div class="row">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="pt-4">DETAILED Travel Itinerary</h6>
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
            <div class="col-xl-10 col-lg-10 col-md-8 col-sm-12 col-12 ">
              <div class="container">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 bg-white">
                    <div>
                      <h3 class="bg-white pt-4">
                        Kasol Sarpass Bagpacking Trek
                      </h3>
                      <p class="grey-font">Himachal Pradesh Summer Camp</p>
                      <hr />
                    </div>
                    <div class="row">
                      <div class="col-xl-10 col-lg-10 col-md-8 col-sm-7 col-7 my-2">
                        <h4>Participant Information</h4>
                        <p class="grey-font">Basic details</p>
                      </div>
                      <div
                        class="col-xl-2 col-lg-2 col-md-4 col-sm-5 col-5 my-2 cursor-pointer"
                        onclick="addParticipant()"
                      >
                        <p class="text-warning ">
                          <img
                            src={require("../../assests/img/add.svg").default}
                            alt=""
                          />{" "}
                          ADD PARTICIPANT
                        </p>
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
                          <label for="mobile">Mobile*</label>
                          <br />
                          <input
                            type="tel"
                            name="mobile"
                            id="mobile"
                            class="py-2 px-2 my-2 profile-input"
                            placeholder="+91 9998948898"
                          />
                          <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              <label for="select-id">Select ID proof*</label>
                              <br />
                              {/* <!-- <input type="text" name="select-id" id="select-id" class="py-2 px-2 my-2 profile-input" placeholder="Addhar Card" /> --> */}
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
                                  <p class="d-inline text-dark">
                                    (Max size should not exceed 2MB)
                                  </p>
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
                          <h4 class="mt-4">Trek Details</h4>
                          <p class="grey-font">You can edit it from here</p>
                          {/* <!-- </div> --> */}
                        </div>
                        <label for="trek">Trek*</label>
                        <br />
                        <input
                          type="text"
                          name="trek"
                          id="trek"
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
                    {/* <!-- <input type="radio" name="terms-condition" id="terms-condition" /> --> */}
                    {/* <!-- <div class="row">
                                    <div class="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-2 text-center">
                                    </div>
                                    <div class="col-xl-11 col-lg-10 col-md-10 col-sm-10 col-10 ">
                                    </div>
                                </div> --> */}
                    {/* <!-- <img src={require("../../assests/img/emptyCircle.svg").default} id="yellowTick" alt="" /> --> */}
                    <label for="terms-condition">
                      <input
                        type="checkbox"
                        name="terms-condition"
                        id="yellowTick"
                        hidden
                      />
                      <img
                        src={
                          require("../../assests/img/emptyCircle.svg").default
                        }
                        id="yellowTickImg"
                        alt=""
                      />
                    </label>

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
                    </h5>

                    <div class="mt-4 mb-4 payment">
                      <button class="btn btn-warning mr-3 mb-3 text-white">
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

export default page7;
