import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function page15() {
  return (
    <div class="bg-light-gray">
      <div class="container-fluid px-0">
        <Header />
        <section class="container blog blog-page">
          <div class="ml-3">
            <h2>Latest Travel Blog </h2>
            <img
              src={require("../../assests/xdExport/yellowLine.png").default}
              class="mb-4"
              alt=""
            />
          </div>
          <div class="row">
            {/* <!-- <div class="scroll"> --> */}
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin">
              <div class="card w-16">
                {/* <!-- <img src={require("../../assests/img/soulfull.jpg").default} class="card-img-top " alt=" " /> --> */}
                <img
                  src={require("../../assests/xdExport/travelCard.png").default}
                  class="card-img-top "
                  alt=" "
                />
                <div class="card-body ">
                  <p class="card-text ">Soulfull experience at manali</p>
                  <p class="card-caption ">By Pavitra Saparia</p>
                </div>
                <div class="card-link ">
                  <Link to="# ">
                    Read More
                    <img
                      src={require("../../assests/img/arrow.svg").default}
                      class="card-arrow "
                      alt="arrow "
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <div class="card w-16">
                {/* <!-- <img src={require("../../assests/img/soulfull.jpg").default} class="card-img-top " alt=" " /> --> */}
                <img
                  src={require("../../assests/xdExport/travelCard.png").default}
                  class="card-img-top "
                  alt=" "
                />
                <div class="card-body ">
                  <p class="card-text ">Soulfull experience at manali</p>
                  <p class="card-caption ">By Pavitra Saparia</p>
                </div>
                <div class="card-link ">
                  <Link to="# ">
                    Read More
                    <img
                      src={require("../../assests/img/arrow.svg").default}
                      class="card-arrow "
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <div class="card w-16">
                {/* <!-- <img src={require("../../assests/img/soulfull.jpg").default} class="card-img-top " alt=" " /> --> */}
                <img
                  src={require("../../assests/xdExport/travelCard.png").default}
                  class="card-img-top "
                  alt=" "
                />
                <div class="card-body ">
                  <p class="card-text ">Soulfull experience at manali</p>
                  <p class="card-caption ">By Pavitra Saparia</p>
                </div>
                <div class="card-link ">
                  <Link to="# ">
                    Read More
                    <img
                      src={require("../../assests/img/arrow.svg").default}
                      class="card-arrow "
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <div class="card w-16">
                {/* <!-- <img src={require("../../assests/img/soulfull.jpg").default} class="card-img-top " alt=" " /> --> */}
                <img
                  src={require("../../assests/xdExport/travelCard.png").default}
                  class="card-img-top "
                  alt=" "
                />
                <div class="card-body ">
                  <p class="card-text ">Soulfull experience at manali</p>
                  <p class="card-caption ">By Pavitra Saparia</p>
                </div>
                <div class="card-link ">
                  <Link to="# ">
                    Read More
                    <img
                      src={require("../../assests/img/arrow.svg").default}
                      class="card-arrow "
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <div class="card w-16">
                {/* <!-- <img src={require("../../assests/img/soulfull.jpg").default} class="card-img-top " alt=" " /> --> */}
                <img
                  src={require("../../assests/xdExport/travelCard.png").default}
                  class="card-img-top "
                  alt=" "
                />
                <div class="card-body ">
                  <p class="card-text ">Soulfull experience at manali</p>
                  <p class="card-caption ">By Pavitra Saparia</p>
                </div>
                <div class="card-link ">
                  <Link to="# ">
                    Read More
                    <img
                      src={require("../../assests/img/arrow.svg").default}
                      class="card-arrow "
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <div class="card w-16">
                {/* <!-- <img src={require("../../assests/img/soulfull.jpg").default} class="card-img-top " alt=" " /> --> */}
                <img
                  src={require("../../assests/xdExport/travelCard.png").default}
                  class="card-img-top "
                  alt=" "
                />
                <div class="card-body ">
                  <p class="card-text ">Soulfull experience at manali</p>
                  <p class="card-caption ">By Pavitra Saparia</p>
                </div>
                <div class="card-link ">
                  <Link to="# ">
                    Read More
                    <img
                      src={require("../../assests/img/arrow.svg").default}
                      class="card-arrow "
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- </div> --> */}
          </div>
          <br />
          <br />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default page15;
