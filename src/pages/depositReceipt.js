import React from "react";

function depositReceipt() {
  return (
    <>
      <div class="fluid-container">
        <div class="container bg-light-gray px-4 py-4">
          <div class="row">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
              <img
                src={
                  require("../assests/xdExport/transparentBlackLogo.png").default
                }
                alt=""
              />
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-4">
              <span class="float-right grey-font">Youthcamping</span>
              <br />
              <span class="float-right grey-font">
                G 225 Sumel business park 6, Dudheshwar,{" "}
              </span>
              <span class="float-right grey-font">
                Ahmedabad, Gujarat 380004
              </span>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 mt-4">
              <h2>Payment Receipt</h2>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-4">
              <span class="float-right">Youthcampingmedia@gmail.com</span>
              <br />
              <span class="float-right">+91 9924246267</span>
            </div>
          </div>
          <br />
          <br />
          <div class="row mt-4">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 mt-4">
              <p class="mb-1">Payer</p>
              <span class="grey-font">JOHN SMITH</span>

              <p class="mb-1 mt-3">Camp Name</p>
              <span class="grey-font">Manali Trekking Expedition</span>

              <p class="mb-1 mt-3">Camp Date</p>
              <span class="grey-font">08 March - 14 March 2021</span>

              <p class="mb-1 mt-3">Duration</p>
              <span class="grey-font">6D/5N</span>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-4">
              <div class="float-right mt-4">
                <span class="float-right mt-4">Order ID</span> <br />
                <span class="grey-font float-right">001/2018n</span> <br />
                <span class="float-right mt-4">Invoice date</span> <br />
                <span class="grey-font float-right">January 1, 2018</span>{" "}
                <br />
                <span class="float-right mt-4">Payment mode</span> <br />
                <span class="grey-font float-right">Cash Payment</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="container bg-white mt-4">
          {/* <!-- <table>
                <thead>
                    <th class="text-light-blue">Name of Participants</th>
                    <th class="text-light-blue">Mobile Number</th>
                    <th class="text-light-blue">Package</th>
                    <th class="text-light-blue float-right">Amount</th>
                </thead>
                <tbody>
                    <tr>
                        <td class="mt-4">John Smith</td>
                        <td>+91 9987672831</td>
                        <td>Ahmedabad 3AC Train</td>
                        <td class="float-right">INR 14,000</td>
                    </tr>
                </tbody>
            </table> --> */}
          <div class="row mt-4 px-4">
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-4">
              <p class="text-light-blue font-weight-600">
                Name of Participants
              </p>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-4">
              <p class="text-light-blue text-center font-weight-600">
                Mobile Number
              </p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mt-4">
              <p class="text-light-blue text-center font-weight-600">Package</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-2 col-sm-3 col-3 mt-4">
              <p class="text-light-blue text-center font-weight-600">
                Total Price
              </p>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-2 col-2 mt-4">
              <p class="text-light-blue float-right font-weight-600">Deposit</p>
            </div>
          </div>
          <div class="row mt-4 pt-4">
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-4">
              <p class="ml-4">John Smith</p>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-4">
              <p class="text-center">+91 9987672831</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mt-4">
              <p class=" text-center">Ahmedabad 3AC Train</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mt-4">
              <p class="text-center">INR 14000</p>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-4">
              <p class=" float-right">INR 7000</p>
            </div>
          </div>
          <hr class="my-2" />
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-4">
              <p class="ml-4">Rachel Greene</p>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-4">
              <p class=" text-center">+91 9987672831</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mt-4">
              <p class="ml-4 text-center">Ahmedabad Non-AC Train</p>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mt-4">
              <p class="text-center">INR 12000</p>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-4">
              <p class=" float-right">INR 6000</p>
            </div>
          </div>
          <hr class="my-2" />
          <div class="row mb-4 ">
            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 mt-4">
              {/* <!-- First half part is not used --> */}
            </div>
            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 mt-4">
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                  <p class="text-light-blue font-weight-600">SUBTOTAL</p>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                  <p class="float-right">INR 13,000</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                  <p class="text-light-blue font-weight-600">GST</p>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                  <p class="float-right">INR 260</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                  <p class="text-dark font-weight-600">Total</p>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                  <p class="float-right text-warning font-weight-bold font-size-20">
                    INR 13,260
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-45 ">
            <p class="mt-4">NOTES</p>
            <p class="grey-font">
              Please keep this Payment Receipt safe, you may be asked to show
              before joining camp. In case of any queries, kindly reach out to
              us at <span class="font-weight-bold"> +91 9924246267 </span>
            </p>
            <p class="mt-4 mb-1 grey-font">
              Thank You{" "}
              <img
                src={require("../assests/xdExport/heart2x.png").default}
                alt="heart-icon"
              />
            </p>
            <p class="grey-font">Team Youthcamping!</p>
          </div>
          <hr class="my-4 h-4" />
          <div class="row mb-4 pb-4">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 grey-font">
              <span>Youthcamping</span> <br />
              <span> G 225 Sumel business park 6, Dudheshwar, </span>
              <br />
              <span> Ahmedabad, Gujarat 380004</span>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
              <p class="mb-1 float-right">Youthcampingmedia@gmail.com</p>
              <p class="float-right">+91 9924246267</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default depositReceipt;
