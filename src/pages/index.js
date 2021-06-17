import React from "react";

import arrow from "../assests/img/arrow.svg";
import quotations from "../assests/img/quotations.svg";
import footerImg from "../assests/xdExport/footerImg.png";

function index() {
  return (
    <>
      <header class="container-fluid px-0">
        <img
          src={require("../assests/xdExport/indexBg.png").default}
          class="img-fluid header-img"
          alt=""
        />

        <div class="container">
          <nav class="navbar">
            <a href="/index.html" class="navbar-brand text-white">
              <img
                src={require("../assests/img/logo.png").default}
                id="white-logo"
                alt="logo"
              />
            </a>
            <span onclick="openNav()">
              <img
                src={require("../assests/img/hamberger.svg").default}
                id="hamberger-menu"
                alt=""
              />
            </span>
          </nav>
          <div class="index-content container d-block">
            <p class="text-white text-center small-font mb-0">
              A PLACE FOR ALL NOMADS
            </p>
            <h2 class="text-white text-center mt-2">Join us for new</h2>
            <h1 class="text-white text-center">Adventures</h1>
          </div>
        </div>
        <div id="mySidenav" class="sidenav bg-warning">
          <div class="bg-white">
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
              <a href="/page9.html">
                <img src={require("../assests/img/camp.svg").default} alt="icon" /> Camp{" "}
                <img
                  src={require("../assests/xdExport/navArrow.png").default}
                  class="float-right"
                  alt="arrow"
                />{" "}
              </a>
              <a href="/page8.html">
                <img src={require("../assests/img/team.svg").default} alt="icon" /> Team
                <img
                  src={require("../assests/xdExport/navArrow.png").default}
                  class="float-right"
                  alt="arrow"
                />
              </a>
              <a href="/aboutUs.html">
                <img src={require("../assests/img/about_us.svg").default} alt="icon" />{" "}
                About us{" "}
                <img
                  src={require("../assests/xdExport/navArrow.png").default}
                  class="float-right"
                  alt="arrow"
                />
              </a>
              <a href="/page2.html">
                <img
                  src={require("../assests/xdExport/documentIcon.png").default}
                  alt="icon"
                />{" "}
                Travel Stories{" "}
                <img
                  src={require("../assests/xdExport/navArrow.png").default}
                  class="float-right"
                  alt="arrow"
                />
              </a>
            </div>
            <div class="nav-footer bg-white">
              <p>
                <img src={require("../assests/img/phone.svg").default} alt="" /> +91
                9924246267
              </p>
              <p>
                <img src={require("../assests/img/Website.svg").default} alt="" />{" "}
                www.youthcamping.in
              </p>
              <p>
                <img src={require("../assests/img/location.svg").default} alt="" />{" "}
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

        <img
          src={require("../assests/img/downArrow.svg").default}
          class="arrow"
          alt="downarrow"
        />
      </header>

      <section class="container">
        <h1>Popular Trips</h1>
        <p class="para">Check off on your bucket list </p>
        <img
          src={require("../assests/xdExport/yellowLine.png").default}
          class="mb-4"
          alt="underline"
        />
        <div class="horizontal-scrollable">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manalicard1.png").default}
                class="card"
                alt="kasol"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard2.png").default}
                class=" card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard3.png").default}
                class="card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard4.png").default}
                class="card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manalicard1.png").default}
                class="card"
                alt="kasol"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard2.png").default}
                class=" card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard3.png").default}
                class="card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../assests/xdExport/manaliCard4.png").default}
                class="card"
                alt="manali"
              />
              <p class="desc">
                Kasol Bagpacking <br /> Trek
              </p>
              <p class="pricing">₹12,551/-</p>
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid ">
        <div class="videoBackground img-fluid">
          <div class="container video ">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <h1>Watch out latest Video</h1>
                <img
                  src={require("../assests/xdExport/yellowLine.png").default}
                  class="mb-4"
                  alt="underline"
                />
                <p>
                  Experience handcrafted Camp and explore the nature like Never
                  before. Experience handcrafted Camp and explore the nature
                  like Never before.
                </p>
                <img src={require("../assests/img/slash.svg").default} alt="" />
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="videoSection">video</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid ">
        <div class="container travel">
          <h1>Travel like never before </h1>
          <img
            src={require("../assests/xdExport/yellowLine.png").default}
            class="mb-4"
            alt="underline"
          />
        </div>
        <br />
        <div class="wrap ">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12 col-12">
              <img
                src={require("../assests/xdExport/templeImg.png").default}
                class="img-fluid"
                id="templeImg"
                alt="temple"
              />
            </div>

            <div class="col-xl-6 col-md-6 col-sm-12 col-12">
              <img
                src={require("../assests/xdExport/quoteImg.png").default}
                class="quote-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid">
        <div class="visitor flex-box img-fluid">
          <h2>Travellers Stories</h2>
        </div>
        <div class="container ">
          <img
            src={require("../assests/img/circleImgUser1.png").default}
            onclick="showHideReview(user1Review)"
            class="user"
            id="user1"
            alt="user1"
          />
          <img
            src={require("../assests/img/circleImgUser2.png").default}
            onclick="showHideReview(user2Review)"
            class="user"
            id="user2"
            alt="user2"
          />
          <img
            src={require("../assests/img/circleImgUser1.png").default}
            onclick="showHideReview(user3Review)"
            class="user"
            id="user3"
            alt="user3"
          />
          <img
            src={require("../assests/img/circleImgUser2.png").default}
            onclick="showHideReview(user4Review)"
            class="user"
            id="user4"
            alt="user4"
          />
          <img
            src={require("../assests/img/circleImgUser1.png").default}
            onclick="showHideReview(user5Review)"
            class="user"
            id="user5"
            alt="user5"
          />
        </div>
      </section>

      <section class="container blog mt-4">
        <h1>Latest Travel Blog </h1>
        <img
          src={require("../assests/xdExport/yellowLine.png").default}
          class="mb-4"
          alt="underline"
        />

        <div class="row scroll">
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
            <div class="card w-16">
              <img
                src={require("../assests/xdExport/travelCard.png").default}
                class="card-img-top "
                alt=" "
              />
              <div class="card-body ">
                <p class="card-text ">Soulfull experience at manali</p>
                <p class="card-caption ">By Pavitra Saparia</p>
              </div>
              <div class="card-link ">
                <a href="# ">
                  Read More
                  <img src={arrow} class="card-arrow " alt="arrow " />
                </a>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
            <div class="card w-16">
              <img
                src={require("../assests/xdExport/travelCard.png").default}
                class="card-img-top "
                alt=" "
              />
              <div class="card-body ">
                <p class="card-text ">Soulfull experience at manali</p>
                <p class="card-caption ">By Pavitra Saparia</p>
              </div>
              <div class="card-link ">
                <a href="# ">
                  Read More
                  <img src={arrow} class="card-arrow " alt="arrow " />
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
            <div class="card w-16">
              <img
                src={require("../assests/xdExport/travelCard.png").default}
                class="card-img-top "
                alt=" "
              />
              <div class="card-body ">
                <p class="card-text ">Soulfull experience at manali</p>
                <p class="card-caption ">By Pavitra Saparia</p>
              </div>
              <div class="card-link ">
                <a href="# ">
                  Read More
                  <img src={arrow} class="card-arrow " alt="arrow " />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>

      <section class="container-fluid ">
        <div class="bg-img ">
          <div class="container division ">
            <h1>Travel Affairs</h1>
            <img
              src={require("../assests/xdExport/yellowLine.png").default}
              class="mb-4"
              alt="underline"
            />
          </div>
          <div class="container content-div ">
            <h5>Subscribe to our newsletter</h5>
            <input type="email " placeholder="Email Address " />
            <br />
            <button class="btn bg-warning text-white ">Subscribe</button>
          </div>
        </div>
      </section>

      <section class="container ">
        <div class="index-footer-block">
          <img src={quotations} alt=" " />
          <br />
          <br />
          <p class="font-50px">
            Let’s talk Travel, we love talking about Travel 24x7{" "}
            <span class="text-warning "> say hi </span>
          </p>
        </div>
      </section>

      <footer class="container-fluid px-0 footer-block bg-white">
        <div class="container-fluid">
          <img src={footerImg} class="img-fluid" alt=" " />
          <div class="bg-black">
            <div class="container wrap">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 text-white mt-4 pb-4">
                  <h3 class="font-weight-600">Navigation</h3>
                  <ul class="mt-4">
                    <li>
                      <a href="#">Camp</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 text-white mb-4 mt-4">
                  <h3 class="font-weight-600 mb-4">Contact Us</h3>
                  <div class="mt-4">
                    <p class="text-white mb-1">
                      <i class="bx bx-phone text-white"></i> +91 9924246267
                    </p>
                    <p class="mb-1">
                      <i class="bx bx-planet text-white"></i>{" "}
                      www.youthcamping.in
                    </p>
                    <p class="mb-1">
                      <i class="bx bx-location-plus text-white"></i> G225, Sumel
                      Business Park Dudheshwar Ahmedabad
                    </p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 text-white ">
                  <img
                    src={require("../assests/xdExport/whiteLogo.png").default}
                    class="footer-img"
                    alt=""
                  />
                  <br />
                  <a href="#">
                    <i class="bx bxl-instagram text-white big-icon-img ml-4 mt-3"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-whatsapp text-white big-icon-img"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i class="bx bxl-facebook-square text-white big-icon-img"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container wrap">
          <div class="text-center py-2">
            <p class=" grey-font d-inline">
              &copy; 2021 Youthcamping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default index;
