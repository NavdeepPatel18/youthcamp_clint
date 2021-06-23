import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";


function paymentMod() {
  return (
    <div class="bg-light-gray">
      <div class="container-fluid px-0">
        <Header />
        <div class="mt-4 mb-4 payment bg-white pt-4 pb-2 px-4">
          <button
            class="btn btn-warning mr-3 mb-3 text-white"
            id="pay-btn"
            data-toggle="modal"
            data-target="#thankyouModal"
          >
            Pay Now
          </button>
          <button class="btn text-waning btn-light btn2 mb-3">Cancel</button>
        </div>
        {/* <!-- Button trigger modal -->
        <!-- Modal --> */}
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
                  src={require("../../assests/xdExport/OnlinePayment.png").default}
                  alt=""
                />
                <img
                  src={require("../../assests/xdExport/gift.png").default}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default paymentMod;
