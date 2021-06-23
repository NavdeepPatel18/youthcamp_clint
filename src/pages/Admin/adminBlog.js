import React from "react";

import { Link } from "react-router-dom";

function adminBlog() {
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
              <div class="row active-dashboard">
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
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 bg-white pt-4">
              <div class="row">
                <div class="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-8">
                  <h4 class="mb-1">Blog</h4>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                  <Link to="adminAddNewBlog" class="text-warning">
                    Add New Blog
                  </Link>
                </div>
              </div>
              <hr />
              <div class="row rounded mx-2 mb-2 active-card-border">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mb-4 pt-3 text-center">
                  <img
                    src={require("../../assests/xdExport/sunset.png").default}
                    class="blog-list-img rounded"
                    alt=""
                  />
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 mb-4">
                  <div class="row ml-2 mt-3">
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-8 col-8">
                      <h4 class="mb-1">Incredible Manali</h4>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                      <p class="float-right">
                        <Link to="#" class="text-warning text-decoration-none">
                          Edit{" "}
                        </Link>
                        <span class="text-warning">|</span>
                        <Link to="#" class="text-warning text-decoration-none">
                          {" "}
                          Remove
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div class="row ml-2">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                      <p class="grey-font">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s,
                        <Link to="#" class="text-dark">
                          {" "}
                          Read more{" "}
                        </Link>{" "}
                      </p>
                      {/* <!-- <span id="dots">...</span><span id="more"> <Link to="#" onclick="readMore()" class="grey-font"> Read more </Link>  --> */}
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                      <p class="text-warning mb-0">By Pavitra Saparia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row border mx-2 mb-2">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mb-4 pt-3 text-center">
                  <img
                    src={require("../../assests/xdExport/sunset.png").default}
                    class="blog-list-img rounded"
                    alt=""
                  />
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 mb-4">
                  <div class="row ml-2 mt-3">
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-8 col-8">
                      <h4 class="mb-1">Incredible Manali</h4>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                      <p class="float-right">
                        <Link to="#" class="text-warning text-decoration-none">
                          Edit{" "}
                        </Link>
                        <span class="text-warning">|</span>
                        <Link to="#" class="text-warning text-decoration-none">
                          {" "}
                          Remove
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div class="row ml-2">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                      <p class="grey-font">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s,
                        <Link to="#" class="text-dark">
                          {" "}
                          Read more{" "}
                        </Link>{" "}
                      </p>
                      {/* <!-- <span id="dots">...</span><span id="more"> <Link to="#" onclick="readMore()" class="grey-font"> Read more </Link>  --> */}
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                      <p class="text-warning mb-0">By Pavitra Saparia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row border mx-2 mb-2">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mb-4 pt-3 ">
                  <img
                    src={require("../../assests/xdExport/sunset.png").default}
                    class="blog-list-img rounded"
                    alt=""
                  />
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 mb-4">
                  <div class="row ml-2 mt-3">
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-8 col-8">
                      <h4 class="mb-1">Incredible Manali</h4>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4 ">
                      <p class="float-right">
                        <Link to="#" class="text-warning text-decoration-none">
                          Edit{" "}
                        </Link>
                        <span class="text-warning">|</span>
                        <Link to="#" class="text-warning text-decoration-none">
                          {" "}
                          Remove
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div class="row ml-2">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                      <p class="grey-font">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s,
                        <Link to="#" class="text-dark">
                          {" "}
                          Read more{" "}
                        </Link>{" "}
                      </p>
                      {/* <!-- <span id="dots">...</span><span id="more"> <Link to="#" onclick="readMore()" class="grey-font"> Read more </Link>  --> */}
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                      <p class="text-warning mb-0">By Pavitra Saparia</p>
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

export default adminBlog;
