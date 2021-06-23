import React from "react";

import { Link } from "react-router-dom";

function adminHomePage() {
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
              <div class="row active-dashboard">
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
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 bg-white pt-4">
              <h4 class="mb-1">Add Homepage</h4>
              <p class="grey-font">You can add details here</p>
              <hr />
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                  <h5 class="mt-4">Latest Updates*</h5>
                  <p class="grey-font">Basic Details</p>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="title" id="homwpagetitle">
                    Title*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="title"
                    id="homepageTitle"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Manali"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="homepagePhoto">Upload Photo*</label>
                  <br />
                  <div id="upload-id" class="py-2 px-2 mt-2">
                    <Link to="#" onclick="uploadfile(uploadhomepagePhotoFile)">
                      <i class="bx bx-upload text-warning"> Upload </i>
                    </Link>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    name="homepagePhoto"
                    id="uploadhomepagePhotoFile"
                    hidden
                    class="py-2 px-2 my-2 profile-input"
                  />
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                  <label for="dsc" id="dsc">
                    Desciption*
                  </label>
                  <br />
                  <textarea
                    name="desciption"
                    id="desciption"
                    class="w-100 py-4 px-4"
                    rows="3"
                    placeholder="Add Some Text Here"
                  ></textarea>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                  <label for="hometitlePhoto">Upload Home Title Photo*</label>
                  <br />
                  <div id="upload-id" class="py-2 px-2 mt-2">
                    <Link to="#" onclick="uploadfile(uploadhometitlePhotoFile)">
                      <i class="bx bx-upload text-warning">Upload </i>
                    </Link>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    name="hometitlePhoto"
                    id="uploadhometitlePhotoFile"
                    hidden
                    class="py-2 px-2 my-2 profile-input"
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <h5 class="mb-1">Main Home Quotes</h5>
                  {/* <!-- <label class="mb-1">Main Home Quotes</label> --> */}
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-4">
                  <Link to="#" class="text-warning">
                    ADD
                  </Link>
                </div>

                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-1">
                  <input
                    type="text"
                    name="quote1"
                    id="homeQuote"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Join us for New"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
                  <i class="bx bx-trash mt-3 ml-2  cursor-pointer"></i>
                </div>

                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-1">
                  <input
                    type="text"
                    name="quote2"
                    id="homeQuote2"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Adventure"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
                  <i class="bx bx-trash mt-3 ml-2  cursor-pointer"></i>
                </div>

                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-1">
                  <input
                    type="text"
                    name="quote3"
                    id="homeQuote3"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Quotes"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
                  <i class="bx bx-trash mt-3 ml-2  cursor-pointer"></i>
                </div>

                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-1">
                  <input
                    type="text"
                    name="quote4"
                    id="homeQuote4"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Quotes"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
                  <i class="bx bx-trash mt-3 ml-2  cursor-pointer"></i>
                </div>
              </div>
              <hr />
              <div class="row mt-4">
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <h5 class="mb-1">Travel Quotes</h5>
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-1">
                  <Link to="#" class="text-warning">
                    ADD
                  </Link>
                </div>
                <div class="col-xl-5 col-lg-6 col-md-6 col-sm-10 col-10 mb-1">
                  <input
                    type="text"
                    name="Travelquote1"
                    id="TravelQuote1"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Quote"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10 mb-1">
                  <div id="upload-id" class="py-2 px-2 mt-2">
                    <Link to="#" onclick="uploadfile(uploadTravelQuoteFile)">
                      <i class="bx bx-upload" style={{ color: "#ffc107" }}>
                        Upload{" "}
                      </i>
                    </Link>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    name="Travelquote1"
                    id="uploadTravelQuoteFile"
                    hidden
                    class="py-2 px-2 my-2 profile-input"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-1">
                  <i class="bx bx-trash mt-3 ml-2  cursor-pointer"></i>
                </div>
                <div class="col-xl-5 col-lg-6 col-md-6 col-sm-10 col-10 mb-1">
                  <input
                    type="text"
                    name="Travelquote2"
                    id="TravelQuote2"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Quote"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10 mb-1">
                  <div id="upload-id" class="py-2 px-2 mt-2">
                    <Link to="#" onclick="uploadfile(uploadTravelQuote2File)">
                      <i class="bx bx-upload" style={{ color: "#ffc107" }}>
                        Upload{" "}
                      </i>
                    </Link>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    name="Travelquote2"
                    id="uploadTravelQuote2File"
                    hidden
                    class="py-2 px-2 my-2 profile-input"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-1">
                  <i class="bx bx-trash mt-3 ml-2 cursor-pointer"></i>
                </div>
              </div>
              <hr />
              <div class="row mt-4">
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <h5 class="mb-1">Youtube Video</h5>
                </div>
                {/* <!-- <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-1">
                            <Link to="#" class="text-warning">ADD</Link>
                        </div> --> */}
                <div class="col-xl-5 col-lg-6 col-md-6 col-sm-10 col-10 mb-1">
                  <input
                    type="text"
                    name="YTvideo"
                    id="Ytvideo"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter URl"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10 mb-1">
                  <div id="upload-id" class="py-2 px-2 mt-2">
                    <Link to="#" onclick="uploadfile(uploadYTvideoFile)">
                      <i class="bx bx-upload" style={{ color: "#ffc107" }}>
                        {" "}
                        Upload{" "}
                      </i>
                    </Link>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    name="YTvideo"
                    id="uploadYTvideoFile"
                    hidden
                    class="py-2 px-2 my-2 profile-input"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-1">
                  <i class="bx bx-trash mt-3 ml-2  cursor-pointer"></i>
                </div>
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-1">
                  <input
                    type="text"
                    name="YTvideo"
                    id="videodsc"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Desciption"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-1">
                  <i class="bx bx-trash mt-3 ml-2  cursor-pointer"></i>
                </div>
              </div>
              <hr />
              <div class="row mt-4">
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <h5 class="mb-1">Travel Stories</h5>
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-1">
                  <Link to="#" class="text-warning">
                    ADD
                  </Link>
                </div>
                <div class="col-xl-5 col-lg-6 col-md-6 col-sm-10 col-10 mb-1">
                  <input
                    type="text"
                    name="Travelstory1"
                    id="Travelstory"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Review"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10 mb-1">
                  <div id="upload-id" class="py-2 px-2 mt-2">
                    <Link to="#" onclick="uploadfile(uploadTravelStory1File)">
                      <i class="bx bx-upload" style={{ color: "#ffc107" }}>
                        Upload{" "}
                      </i>
                    </Link>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    name="Travelstory1"
                    id="uploadTravelStory1File"
                    hidden
                    class="py-2 px-2 my-2 profile-input"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-1">
                  <i class="bx bx-trash mt-3 ml-2  cursor-pointer"></i>
                </div>

                <div class="col-xl-5 col-lg-6 col-md-6 col-sm-10 col-10 mb-1">
                  <input
                    type="text"
                    name="Travelstory2"
                    id="TravelStory2"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Review"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10 mb-1">
                  <div id="upload-id" class="py-2 px-2 mt-2">
                    <Link to="#" onclick="uploadfile(uploadTravelStory2File)">
                      <i class="bx bx-upload" style={{ color: "#ffc107" }}>
                        Upload{" "}
                      </i>
                    </Link>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    name="Travelstory2"
                    id="uploadTravelStory2File"
                    hidden
                    class="py-2 px-2 my-2 profile-input"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-1">
                  <i class="bx bx-trash mt-3 ml-2 cursor-pointer"></i>
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

export default adminHomePage;
