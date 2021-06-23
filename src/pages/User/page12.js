import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function page12() {
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
          <div class="row bg-white py-4 ">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
              <div class="float-left">
                <h4 class="">Registered Camps</h4>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
              <form class="form-inline mx-4 float-right">
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

            <table class="table table-hover bg-white table-responsive-sm">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Trip Date</th>
                  <th scope="col">Payment</th>
                  <th scope="col">Receipt</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Manali Kasol Bagpacking Camp</td>
                  <td>INR 8900</td>
                  <td>Mar 3, 2021</td>
                  <td>
                    <img
                      src={
                        require("../../assests/img/status_success.png").default
                      }
                      alt=""
                    />
                  </td>
                  <td>
                    <Link to="#" class="text-warning">
                      Download | Upload{" "}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Leh Bike Trip</td>
                  <td>INR 8900</td>
                  <td>May 5, 2021</td>
                  <td>
                    <img
                      src={require("../../assests/img/pending.png").default}
                      alt="pending"
                    />
                  </td>
                  <td>
                    <Link to="#" class="text-warning">
                      {" "}
                      Download | Upload
                    </Link>
                  </td>
                  <td>
                    <button class="btn bg-warning text-white w-75 mr-4">
                      Pay
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Manali Kasol Bagpacking Camp</td>
                  <td>INR 8900</td>
                  <td>Mar 3, 2020</td>
                  <td>
                    <img
                      src={require("../../assests/img/depositPaid.png").default}
                      alt="pending"
                    />
                  </td>
                  <td>
                    <Link to="#" class="text-warning">
                      {" "}
                      Download | Upload
                    </Link>
                  </td>
                  <td>
                    <button class="btn bg-warning text-white w-75 mr-4">
                      Pay
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Leh Bike Trip</td>
                  <td>INR 8900</td>
                  <td>May 5, 2021</td>
                  <td>
                    <img
                      src={require("../../assests/img/Cancelled.png").default}
                      alt="pending"
                    />
                  </td>
                  <td>
                    <Link to="#" class="text-warning">
                      {" "}
                      Download | Upload
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default page12;
