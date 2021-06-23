import React from "react";

import { Link } from "react-router-dom";

function adminAboutUs() {
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
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminContactus" class="text-dark">
                    <h6 class="margin-left">Contact Us</h6>
                  </Link>
                </div>
              </div>
              <div class="row active-dashboard">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminAboutUs" class="text-dark">
                    <h6 class="margin-left">About Us</h6>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 bg-white pt-4">
              <h4 class="mb-1">About Us</h4>
              <p class="grey-font">You can add details here</p>
              <hr />
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="about-us" id="about-us">
                    About Us Title*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="about-us"
                    id="aboutUs"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Manali"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="uploadAboutUs">Upload Photo*</label>
                  <br />
                  <div id="upload-id" class="py-2 px-2 mt-2">
                    <Link to="#" onclick="uploadfile(uploadAboutusFile)">
                      <i class="bx bx-upload" style={{ color: "#ffc107" }}>
                        {" "}
                        Upload{" "}
                      </i>
                    </Link>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    name="uploadAboutUs"
                    id="uploadAboutusFile"
                    hidden
                    class="py-2 px-2 my-2 profile-input"
                  />
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                  <label for="dsc" id="aboutUs-desc">
                    Desciption*
                  </label>
                  <br />
                  <textarea
                    name="desciption"
                    id="AboutUsdesciption"
                    class="w-100 py-4 px-4"
                    rows="10"
                    placeholder="Add Some Text Here"
                  ></textarea>
                </div>
              </div>
              <div class="mt-4 mb-4 payment pt-4 pb-2 px-2">
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

export default adminAboutUs;
