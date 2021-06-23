import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function page2() {
  return (
    <div>
      <Header />
      <section class="container top-section">
        <h3 class="section-header text-warning">
          Kasol Sarpass Bagpacking Trek
        </h3>
        <div class="row">
          <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12  mt-4">
            <div class="row">
              <div class="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-2  mt-4">
                <img
                  src={require("../../assests/xdExport/starPoint.png").default}
                  alt=""
                />
              </div>
              <div class="col-xl-11 col-lg-10 col-md-10 col-sm-10 col-10 mt-4 px-0">
                <p>
                  {" "}
                  Hoi An tours are ideal for travellers looking to experience
                  the local culture{" "}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-2  mt-4">
                <img
                  src={require("../../assests/xdExport/starPoint.png").default}
                  alt=""
                />
              </div>
              <div class="col-xl-11 col-lg-10 col-md-10 col-sm-10 col-10 px-0 mt-4">
                <p>
                  {" "}
                  Hoi An tours are ideal for travellers looking to experience
                  the local culture{" "}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-2  mt-4">
                <img
                  src={require("../../assests/xdExport/starPoint.png").default}
                  alt=""
                />
              </div>
              <div class="col-xl-11 col-lg-10 col-md-10 col-sm-10 col-10 px-0 mt-4">
                <p>
                  {" "}
                  Hoi An tours are ideal for travellers looking to experience
                  the local culture..{" "}
                  <Link to="#" class="text-warning">
                    More
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section class="container">
        <p class="section-header">Packages</p>
        <img
          src={require("../../assests/xdExport/yellowLine.png").default}
          class="mb-4"
          alt=""
        />
        {/* <!-- <img src={require("../../assests/img/slash.svg").default} alt="" /> --> */}
        <div class="scroll">
          <div class="row ">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <Link to="/page3">
                <div class="card w-16">
                  <img
                    src={
                      require("../../assests/xdExport/page2card.png").default
                    }
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
              </Link>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <Link to="/page3">
                <div class="card w-16">
                  <img
                    src={
                      require("../../assests/xdExport/page2card.png").default
                    }
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
              </Link>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 margin ">
              <Link to="/page3">
                <div class="card w-16">
                  <img
                    src={
                      require("../../assests/xdExport/page2card.png").default
                    }
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="container-fluid container-height bg-light my-4 py-2">
        <div class="container">
          <p class="section-header">Dates</p>
          <img
            src={require("../../assests/xdExport/yellowLine.png").default}
            class="mb-4"
            alt=""
          />
          {/* <!-- <img src={require("../../assests/img/slash.svg).default}" alt="" /> --> */}
          <div class="list ">
            <ul>
              <li onclick="changeLink()" class="active">
                April
              </li>
              <li onclick="changeLink()">May</li>
              <li onclick="changeLink()">June</li>
              <li onclick="changeLink()">July</li>
            </ul>
          </div>
          <div class="date">
            <div class="active">12</div>
            <div>15</div>
            <div>18</div>
            <div>20</div>
          </div>
        </div>
      </section>

      <section class="container">
        <div class=" accordion">
          <h3 class="section-header">Schedule </h3>
          <img
            src={require("../../assests/xdExport/yellowLine.png").default}
            class="mb-4"
            alt=""
          />
          {/* <!-- <img src={require("../../assests/img/slash.svg").default} alt="" srcset="" /> --> */}
        </div>
        <br />
        <p>
          <input
            type="checkbox"
            name="collapse1"
            id="collapseCheckBox"
            hidden
          />
          <img
            src={require("../../assests/img/down.png").default}
            class="collapse-arrow"
            id="downArrow1"
            alt=""
          />
          <Link
            class="text-dark d-block coll"
            onclick="collapseImg(collapseCheckBox,downArrow1)"
            id="day1"
            data-toggle="collapse"
            to="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Day 1 : Departure from A’bad
          </Link>
        </p>
        <div class="collapse dashed-border" id="collapseExample">
          <div class="inner-content">
            {/* <!-- <img src={require("../../assests/img/compressed-collapse.jpg").default} class="img-fluid" alt="" /><br /><br /> --> */}
            <img
              src={require("../../assests/xdExport/collapseImg.png").default}
              class="img-fluid"
              alt=""
            />
            <br />
            <br />
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>
                  Travelling Ahmadabad to Delhi by Train. Travelling Ahmadabad
                  to Delhi by Train. Travelling Ahmadabad to Delhi by Train.
                </p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
          </div>
        </div>

        <p>
          <input
            type="checkbox"
            name="collapse2"
            id="collapseCheckBox2"
            hidden
          />
          <img
            src={require("../../assests/img/down.png").default}
            class="collapse-arrow"
            id="downArrow2"
            alt=""
          />
          <Link
            class="text-dark d-block coll"
            onclick="collapseImg(collapseCheckBox2,downArrow2)"
            id="day2"
            data-toggle="collapse"
            to="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Day 2 : Departure from A’bad
          </Link>
        </p>
        <div class="collapse dashed-border" id="collapseExample2">
          <div class="inner-content">
            {/* <!-- <img src={require("../../assests/img/compressed-collapse.jpg").default} class="img-fluid" alt="" /><br /><br /> --> */}
            <img
              src={require("../../assests/xdExport/collapseImg.png").default}
              class="img-fluid"
              alt=""
            />
            <br />
            <br />
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>
                  Travelling Ahmadabad to Delhi by Train. Travelling Ahmadabad
                  to Delhi by Train. Travelling Ahmadabad to Delhi by Train.
                </p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
          </div>
        </div>

        <p>
          <input
            type="checkbox"
            name="collapse3"
            id="collapseCheckBox3"
            hidden
          />
          <img
            src={require("../../assests/img/down.png").default}
            class="collapse-arrow"
            id="downArrow3"
            alt=""
          />
          <Link
            class="text-dark d-block coll"
            id="day3"
            onclick="collapseImg(collapseCheckBox3,downArrow3)"
            data-toggle="collapse"
            to="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Day 3 : Departure from A’bad
          </Link>
        </p>
        <div class="collapse dashed-border" id="collapseExample3">
          <div class="inner-content">
            {/* <!-- <img src={require("../../assests/img/compressed-collapse.jpg").default} class="img-fluid" alt="" /><br /><br /> --> */}
            <img
              src={require("../../assests/xdExport/collapseImg.png").default}
              class="img-fluid"
              alt=""
            />
            <br />
            <br />
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>
                  Travelling Ahmadabad to Delhi by Train. Travelling Ahmadabad
                  to Delhi by Train. Travelling Ahmadabad to Delhi by Train.
                </p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                <p>Travelling Ahmadabad to Delhi by Train.</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section class="container-fluid bg-light">
        <div class="container">
          <p>
            <input
              type="checkbox"
              name="collapse4"
              id="collapseCheckBox4"
              hidden
            />
            <img
              src={require("../../assests/img/black-down-icon.svg").default}
              id="DownIcon"
              class="collapse-arrow"
              alt=""
            />
            <Link
              class="text-dark d-block coll"
              onclick="changeCollapseIcon(collapseCheckBox4,DownIcon)"
              id="collapse-list1"
              data-toggle="collapse"
              to="#collapse-list"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Inclusion
            </Link>
          </p>
          <div class="collapse" id="collapse-list">
            <div class="inner-content">
              {/* <!-- <i class='bx bx-check-circle' style='color:#1ab821'></i>
              <i class="bx bx-x-circle" style="color:#c91616"></i> --> */}
              <img
                src={require("../../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Trekking Bag</p>
            </div>
            <div class="inner-content">
              {/* <!-- <i class='bx bx-check-circle' style='color:#1ab821'></i> */}
              {/* <i class="bx bx-x-circle" style="color:#c91616"></i> --> */}
              <img
                src={require("../../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Shoes</p>
            </div>
            <div class="inner-content">
              {/* <!-- <i class='bx bx-check-circle' style='color:#1ab821'></i>
              <i class="bx bx-x-circle" style="color:#c91616"></i> --> */}
              <img
                src={require("../../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Rucksack</p>
            </div>
          </div>

          <p>
            <input
              type="checkbox"
              name="collapse5"
              id="collapseCheckBox5"
              hidden
            />
            <img
              src={require("../../assests/img/black-down-icon.svg").default}
              id="DownIcon2"
              class="collapse-arrow"
              alt=""
            />
            <Link
              class="text-dark d-block coll"
              onclick="changeCollapseIcon(collapseCheckBox5,DownIcon2)"
              id="collapse-list2"
              data-toggle="collapse"
              to="#collapse-list1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Exclusive
            </Link>
          </p>
          <div class="collapse" id="collapse-list1">
            <div class="inner-content">
              <img
                src={require("../../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Trekking Bag</p>
            </div>
            <div class="inner-content">
              <img
                src={require("../../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Shoes</p>
            </div>
            <div class="inner-content">
              <img
                src={require("../../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Rucksack</p>
            </div>
          </div>
          <p>
            <input
              type="checkbox"
              name="collapse6"
              id="collapseCheckBox6"
              hidden
            />
            <img
              src={require("../../assests/img/black-down-icon.svg").default}
              id="DownIcon3"
              class="collapse-arrow"
              alt=""
            />
            <Link
              class="text-dark d-block coll "
              id="collapse-list3"
              onclick="changeCollapseIcon(collapseCheckBox6,DownIcon3)"
              data-toggle="collapse"
              to="#collapse-list2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Cancellation Policy
            </Link>
          </p>
          <div class="collapse" id="collapse-list2">
            <div class="inner-content">
              <img
                src={require("../../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Trekking Bag</p>
            </div>
            <div class="inner-content">
              <img
                src={require("../../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Shoes</p>
            </div>
            <div class="inner-content">
              <img
                src={require("../../assests/xdExport/yellowCheck.png").default}
                class="mr-1"
                alt=""
              />
              <img
                src={require("../../assests/xdExport/blackCross.png").default}
                class="ml-1"
                alt=""
              />
              <p>Rucksack</p>
            </div>
          </div>
        </div>

        <br />
      </section>

      <section class="container">
        <p class="section-header">FAQs</p>
        <img
          src={require("../../assests/xdExport/yellowLine.png").default}
          class="mb-4"
          alt=""
        />
        {/* <!-- <img src={require("../../assests/img/slash.svg").default} alt="" /> --> */}

        <p class="toggler mt-4">
          <Link
            class="text-dark d-block coll py-4"
            id="toggle1"
            data-toggle="collapse"
            to="#toggle-list"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            What kind of Pre-trek things we need to take care in mind?
            {/* <!-- <img src={require("../../assests/img/plus.svg").default} class="expand-symbol" id="down-arrow" alt="" /> --> */}
          </Link>
        </p>
        <div class="collapse" id="toggle-list">
          <div class="inner-content pt-4 grey-font">
            <span>
              You only need to be fit and fine to carry the luggage, and Hemal
              Patel will only carry the luggage of Mansi Dave.
            </span>
          </div>
        </div>

        <p class="toggler">
          <Link
            class="text-dark d-block coll py-4"
            id="toggle2"
            data-toggle="collapse"
            to="#toggle-list1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            What kind of Pre-trek things we need to take care in mind?
            {/* <!-- <img src={require("../../assests/img/plus.svg").default} class="expand-symbol" id="down-arrow" alt="" /> --> */}
          </Link>
        </p>
        <div class="collapse" id="toggle-list1">
          <div class="inner-content pt-4 grey-font">
            <span>
              You only need to be fit and fine to carry the luggage, and Hemal
              Patel will only carry the luggage of Mansi Dave.
            </span>
          </div>
        </div>

        <p class="toggler">
          <Link
            class="text-dark d-block coll py-4"
            id="toggle3"
            data-toggle="collapse"
            to="#toggle-list2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            What kind of Pre-trek things we need to take care in mind?
            {/* <!-- <img src={require("../../assests/img/plus.svg").default} class="expand-symbol" id="down-arrow" alt="" /> --> */}
          </Link>
        </p>
        <div class="collapse" id="toggle-list2">
          <div class="inner-content pt-4 grey-font">
            <span>
              You only need to be fit and fine to carry the luggage, and Hemal
              Patel will only carry the luggage of Mansi Dave.
            </span>
          </div>
        </div>
      </section>

      <section class="container">
        <p class="section-header last-section">Other Trips</p>
        <img
          src={require("../../assests/xdExport/yellowLine.png").default}
          class="mb-4"
          alt=""
        />
        {/* <!-- <img src={require("../../assests/img/slash.svg").default} alt="" srcset="" /> --> */}
        <div class="horizontal-scrollable">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <img
                src={require("../../assests/xdExport/manalicard1.png").default}
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
                src={require("../../assests/xdExport/manaliCard2.png").default}
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
                src={require("../../assests/xdExport/manaliCard3.png").default}
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
                src={require("../../assests/xdExport/manaliCard4.png").default}
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
                src={require("../../assests/xdExport/manalicard1.png").default}
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
                src={require("../../assests/xdExport/manaliCard2.png").default}
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
                src={require("../../assests/xdExport/manaliCard3.png").default}
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
                src={require("../../assests/xdExport/manaliCard4.png").default}
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
  );
}

export default page2;
