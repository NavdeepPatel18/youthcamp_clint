import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function page3() {
  return (
    <div>
      <Header />
      <section class="container top-section">
        <h3 class="section-header text-warning">
          Kasol Sarpass Bagpacking Trek
        </h3>
        <div class="row ">
          <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <p class="big-para">
              Hoi An tours are ideal for travellers looking to experience the
              local culture and history of the UNESCO-listed coastal town.
              Between the 15th and 19th century, Hoi An was a prominent
              Vietnamese trading port for silk, porcelain, pepper, cinnamon, and
              medicinal plants due to its proximity
            </p>
          </div>
        </div>
        {/* <!-- <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12"> --> */}
        {/* <!-- </div> --> */}
      </section>
      <br />
      <br />

      <section class="container">
        <p class="section-header">Packages</p>
        <img src={require("../../assests/img/slash.svg").default} alt="" />
        <div class="scroll">
          <div class="row ">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <div class="card" style={{ width: "16rem" }}>
                {/* <!-- <img src={require("../../assests/img/icyMountian.jpg").default} class="card-img-top " alt=" " /> --> */}
                <img
                  src={require("../../assests/xdExport/page2card.png").default}
                  class="card-img-top "
                  alt=" "
                />
                <div class="card-body ">
                  <p class="card-text ">Ahemdabad</p>
                  <p class="card-caption ">Join us from Ahemdabad </p>
                </div>
                <div class="card-link ">
                  <p>
                    ₹12,500
                    <i class="bx bx-calendar"></i>7D/8N
                  </p>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <div class="card " style={{ width: "16rem" }}>
                {/* <!-- <img src={require("../../assests/img/icyMountian.jpg").default} class="card-img-top " alt=" " /> --> */}
                <img
                  src={require("../../assests/xdExport/page2card.png").default}
                  class="card-img-top "
                  alt=" "
                />
                <div class="card-body ">
                  <p class="card-text ">Delhi</p>
                  <p class="card-caption ">Join us from Delhi </p>
                </div>
                <div class="card-link ">
                  <p>
                    ₹7,350
                    <i class="bx bx-calendar"></i>4D/5N
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <div class="card " style={{ width: "16rem" }}>
                {/* <!-- <img src={require("../../assests/img/icyMountian.jpg").default} class="card-img-top " alt=" " /> --> */}
                <img
                  src={require("../../assests/xdExport/page2card.png").default}
                  class="card-img-top "
                  alt=" "
                />
                <div class="card-body ">
                  <p class="card-text ">Kasol</p>
                  <p class="card-caption ">Join us from Kasol </p>
                </div>
                <div class="card-link ">
                  <p>
                    ₹5,350
                    <i class="bx bx-calendar"></i>2D/1N
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid mt-4 py-4">
        <div class="container wrap">
          {/* <!-- <div class="inquiry-section"> --> */}
          <div class="row">
            <div class="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12">
              <h4> ₹12,500 / person</h4>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-2">
              <button type="button" class="btn btn-outline-warning">
                Send Enquiry
              </button>
              <button
                type="button"
                class="btn btn-warning text-white"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Book
              </button>
              {/* <!-- <Link to="#" class="btn btn-warning text-white d-block" data-toggle="modal" data-target="#exampleModal">Book</Link> --> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page3;
