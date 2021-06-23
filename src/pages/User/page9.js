import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function page9() {
  return (
    <div class="bg-light-gray">
      <div class="container-fluid px-0">
        <Header />
        <section class="container">
          <h2 class="section-header">Popular Trips</h2>
          <img
            src={require("../../assests/xdExport/yellowLine.png").default}
            class="mb-4"
            alt=""
          />
          <div class="horizontal-scrollable">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <img
                  src={
                    require("../../assests/xdExport/manalicard1.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard2.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard3.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard4.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manalicard1.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard2.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard3.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard4.png").default
                  }
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
        <section class="container">
          {/* <!-- <img src={require("../../assests/img/slash.svg").default} alt="" srcset="" /> --> */}
          <div class="horizontal-scrollable">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <img
                  src={
                    require("../../assests/xdExport/manalicard1.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard2.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard3.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard4.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manalicard1.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard2.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard3.png").default
                  }
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
                  src={
                    require("../../assests/xdExport/manaliCard4.png").default
                  }
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
        <Footer />
      </div>
    </div>
  );
}

export default page9;
