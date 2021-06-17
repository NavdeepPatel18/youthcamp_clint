import React from "react";

function aboutUs() {
  return (
    <>
      <div class="container-fluid px-0 ">
        <header>
          <div class="bg-white header-height">
            <a href="/index.html" class="navbar-brand">
              <img
                src={require("../assests/xdExport/blackLogo.png").default}
                class="black-logo-img"
                alt="logo"
              />
            </a>
            <div class="container ">
              <span onclick="openNav()">
                <img
                  src={require("../assests/xdExport/blackHamberger.png").default}
                  class="float-right cursor-pointer"
                  id="black-hamberger-menu"
                  alt=""
                />
              </span>
              <nav class="navbar"></nav>
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
                  <img
                    src={require("../assests/img/camp.svg").default}
                    alt="icon"
                  />{" "}
                  Camp{" "}
                  <img
                    src={require("../assests/xdExport/navArrow.png").default}
                    class="float-right"
                    alt="arrow"
                  />{" "}
                </a>
                <a href="/page8.html">
                  <img
                    src={require("../assests/img/team.svg").default}
                    alt="icon"
                  />{" "}
                  Team
                  <img
                    src={require("../assests/xdExport/navArrow.png").default}
                    class="float-right"
                    alt="arrow"
                  />
                </a>
                <a href="/aboutUs.html" class="active-link">
                  <img
                    src={require("../assests/img/about_us.svg").default}
                    alt="icon"
                  />{" "}
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
                  <img src={require("../assests/img/phone.svg").default} alt="" />{" "}
                  +91 9924246267
                </p>
                <p>
                  <img
                    src={require("../assests/img/Website.svg").default}
                    alt=""
                  />{" "}
                  www.youthcamping.in
                </p>
                <p>
                  <img
                    src={require("../assests/img/location.svg").default}
                    alt=""
                  />{" "}
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
        </header>
        <section class="container mt-4 about-us">
          <img
            src={require("../assests/xdExport/aboutUs.png").default}
            class="my-4"
            alt="about-us"
          />
          <br />
          <img
            src={require("../assests/xdExport/sunset.png").default}
            class="mt-4 w-100"
            alt="sunset"
          />
          <div class="mt-4">
            <p>
              If you think of accessible and inclusive design, things like
              placeholder text color considerations and correct content markups
              spring to mind — and they should. But visual and hearing
              accommodations are just the beginning of creating an inclusive
              web. Often, those with intellectual, developmental, or learning
              disabilities have a less-than ideal web experience because their
              needs fit on a spectrum, and can’t be solved with a universal
              solution.
            </p>
            <br />
            <p>
              For years, the Dan Marino Foundation has a long and distinguished
              mission of empowering individuals with autism and other
              developmental disabilities through life-changing programs and
              services. The foundation uses the Virtual Interactive Training
              Agent (ViTA), a virtual reality system designed to help young
              adults with Autism Spectrum Disorder and other developmental
              disabilities prepare for job interviews. While ViTA served its
              users well, it had one large accessibility problem: You could only
              access it while at the foundation’s South Florida headquarters.
              That meant it limited the young adults it could serve.
            </p>
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
    </>
  );
}

export default aboutUs;
