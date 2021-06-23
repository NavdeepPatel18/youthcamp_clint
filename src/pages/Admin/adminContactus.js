import React from "react";

import { Link } from "react-router-dom";

function adminContactUs() {
  return (
    <div style={{ "background-color": "#ebe5e5" }}>
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
            <div
              class="float-left col-xl-2 col-lg-2 col-md-2 col-sm-4 col-12 mb-12"
              style={{ "background-color": "rgb(241, 235, 235)" }}
            >
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
              <div class="row active-dashboard">
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
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 bg-white pt-4">
              <h4 class="mb-1">Contact Details</h4>
              <p class="grey-font">Connecting Travellers</p>
              <hr />
              <h5 class="mt-4">Basic Contact Details</h5>
              <p class="grey-font">Basic Details</p>
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="contactemail" id="contactemail">
                    Email*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="contactemail"
                    id="contactEmail"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Youthcamping@travller.com"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="contactnumber" id="contactnumber">
                    Contact Number*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="contactnumber"
                    id="contactNumber"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="+91678993997"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="insta" id="insta">
                    Instagram*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="insta"
                    id="Instagram"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="@youthcampingindia"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="fb" id="fb">
                    Facebook URL*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="fb"
                    id="Fb"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Youthcamping10.facebook.com"
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 mt-2">
                  <h5>Team Members</h5>
                  <p class="grey-font">Add your squad</p>
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 mt-2">
                  <Link to="#" class="text-warning">
                    ADD
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mb-4">
                  <label for="mem1" id="mem1">
                    Member 1*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="mem1"
                    id="member1"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Hemal Patel"
                  />
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-4">
                  <label for="desg" id="desg">
                    Designation*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="desg"
                    id="designation"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Founder"
                  />
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-4 ">
                  {/* <!-- <label for="teamPhoto">Upload Photo*</label><br />
                            <div id="team-Photo" class="py-2 px-2 mt-2">
                                <Link to="#" onclick="uploadfile(teamPhotoFile)" class="">
                                    <i class='bx bx-upload' style='color:#ffc107'>Upload </i>
                                </Link>
                            </div>
                            <input type="file" accept="image/*" name="teamPhoto" id="teamPhotoFile" hidden class="py-2 px-2 my-2 profile-input"> --> */}
                  <label for="team-Photo">Upload Photo*</label>
                  <br />
                  <div id="upload-id" class="py-2 px-2 mt-2">
                    <Link to="#" onclick="uploadfile(teamPhoto)">
                      <i class="bx bx-upload" style={{ color: "#ffc107" }}>
                        {" "}
                        Upload{" "}
                      </i>
                    </Link>
                  </div>
                  <input
                    type="file"
                    name="team-Photo"
                    id="teamPhoto"
                    hidden
                    class="py-2 px-2 my-2 profile-input"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 mt-2">
                  <i class="bx bx-trash mt-4 pt-3 cursor-pointer"></i>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mb-4">
                  <label for="mem1" id="mem1">
                    Member 2*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="mem1"
                    id="member1"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Darsheel"
                  />
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-4">
                  <label for="desg" id="desg">
                    Designation*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="desg"
                    id="designation"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Chief Managing Officer"
                  />
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-4 ">
                  {/* <!-- <label for="teamPhoto">Upload Photo*</label><br />
                            <div id="team-Photo" class="py-2 px-2 mt-2">
                                <Link to="#" onclick="uploadfile(teamPhotoFile)" class="">
                                    <i class='bx bx-upload' style='color:#ffc107'>Upload </i>
                                </Link>
                            </div>
                            <input type="file" accept="image/*" name="teamPhoto" id="teamPhotoFile" hidden class="py-2 px-2 my-2 profile-input"> --> */}
                  <label for="team-Photo">Upload Photo*</label>
                  <br />
                  <div id="upload-id" class="py-2 px-2 mt-2">
                    <Link to="#" onclick="uploadfile(teamPhoto)">
                      <i class="bx bx-upload" style={{ color: "#ffc107" }}>
                        {" "}
                        Upload{" "}
                      </i>
                    </Link>
                  </div>
                  <input
                    type="file"
                    name="team-Photo"
                    id="teamPhoto"
                    hidden
                    class="py-2 px-2 my-2 profile-input"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 mt-2">
                  <i class="bx bx-trash mt-4 pt-3 cursor-pointer"></i>
                </div>
                <div class="mt-4 mb-4 payment pt-4 pb-2 px-2 ml-2">
                  <button
                    class="btn btn-warning text-white mr-3 mb-3"
                    id="pay-btn"
                  >
                    Save
                  </button>
                  <button class="btn text-warning btn-light btn2 mb-3">
                    Cancel
                  </button>
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

export default adminContactUs;
