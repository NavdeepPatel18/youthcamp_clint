import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function page8() {
  return (
    <div class="bg-light-gray">
      <div class="container-fluid px-0">
        <Header />
        <section class="container-fluid">
          <div class="container top-section">
            <h3>Our TEAM</h3>
            <img
              src={require("../../assests/xdExport/yellowLine.png").default}
              class="mb-4"
              alt=""
            />
            <div class="row mt-4">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                <img
                  src={require("../../assests/img/user.jpg").default}
                  width="500px"
                  height="800px"
                  class="img-fluid"
                  alt="user"
                />
                <h5>Hemal Patel</h5>
                <p>Founder and Travelpreneur</p>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                <img
                  src={require("../../assests/img/user.jpg").default}
                  width="500px"
                  height="800px"
                  class="img-fluid"
                  alt="user"
                />
                <h5>Hemal Patel</h5>
                <p>Founder and Travelpreneur</p>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                <img
                  src={require("../../assests/img/user.jpg").default}
                  width="500px"
                  height="800px"
                  class="img-fluid"
                  alt="user"
                />
                <h5>Hemal Patel</h5>
                <p>Founder and Travelpreneur</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default page8;
