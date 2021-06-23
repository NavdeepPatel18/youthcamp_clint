import React from "react";
import { Link } from "react-router-dom";


import Header from "../../components/header";
import Footer from "../../components/footer";

function Error404() {
  return (
    <>
      <div class="container-fluid px-0">
        <Header />
        <div class="mt-4 mb-4 payment bg-white pt-4 pb-2 px-4">
          <button
            class="btn btn-warning mr-3 mb-3 text-white"
            id="pay-btn"
            data-toggle="modal"
            data-target="#thankyouModal"
          >
            404
          </button>
          <button class="btn text-waning btn-light btn2 mb-3">Cancel</button>
        </div>

        <div
          class="modal fade"
          id="thankyouModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="thankyouModalTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body text-center">
                <img
                  src={require("../../assests/xdExport/404.png").default}
                  class="small-img"
                  alt=""
                />
                <p>
                  Oops something happened. Please try again later or contact
                  Youthcamping Team
                  <Link to="tel:+919924246267" class="text-warning mt-4">
                    +91 9924246267
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error404;
