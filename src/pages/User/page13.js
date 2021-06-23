import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function page13() {
  return (
    <div class="bg-light-gray">
      <div class="container-fluid px-0">
        <Header />
        <section class="container top-section">
          <div class="mb-4 mt-4">
            <h2>User Dashboard</h2>
            <img
              src={require("../../assests/xdExport/yellowLine.png").default}
              class="mb-4"
              alt=""
            />
          </div>
          <div class="row  bg-white py-4">
            <div class="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="justify-content-between mb-4">
                <h4 class="d-inline">Registered Camps</h4>
              </div>
            </div>
            <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
            <div class="text-center align-center">
              <img
                src={require("../../assests/img/empty.svg").default}
                alt=""
              />
              <p> No Records Found</p>
              <p>
                {" "}
                Feel free to call on
                <Link class="text-warning" href="tel:+919924246267">
                  +91 9924246267
                </Link>{" "}
                for any issues
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default page13;
