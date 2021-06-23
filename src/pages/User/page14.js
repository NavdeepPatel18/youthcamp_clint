import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function page14() {
  return (
    <div class="bg-light-gray">
      <div class="container-fluid px-0">
        <Header />
        <section class="container top-section ">
          <div class="row py-4">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 bg-light">
              <div class="left-pane text-center">
                <img
                  src={require("../../assests/img/edit.svg").default}
                  id="edit-symbol"
                  alt=""
                />
                <img
                  src={require("../../assests/img/user1.png").default}
                  class="circle-img"
                  alt=""
                />
                <p>
                  Ross Geller <br /> +91 9898998989
                </p>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12 bg-white">
              <div class="row">
                <div class="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-9 my-2">
                  <h4>My Profile</h4>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-3 my-2">
                  <Link to="#">
                    <span class="text-warning mr-3">Save</span>
                  </Link>
                  <Link to="#">
                    <span class="text-warning ">Edit</span>
                  </Link>
                </div>
              </div>
              <hr />
              <form action="">
                <label for="name">Name*</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="py-2 px-2 my-2 profile-input"
                  placeholder="Misha Malhotra"
                />
                <label for="mobile">Mobile*</label>
                <br />
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  class="py-2 px-2 my-2 profile-input"
                  placeholder="+91 9998948898"
                />

                <label for="email">Email*</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="emailId"
                  class="py-2 px-2 my-2 profile-input"
                  placeholder="Misha Malhotra"
                />

                <label for="select-id">Select ID proof*</label>
                <br />
                <input
                  type="text"
                  name="select-id"
                  id="select-id"
                  class="py-2 px-2 my-2 profile-input"
                  placeholder="Addhar Card"
                />
                <label for="upload-id">Upload ID proof*</label>
                <br />
                <div id="upload-id" class="py-2 px-2 my-4">
                  <Link to="#" onclick="openFile()">
                    <i class="bx bx-upload" style={{ color: "#ffc107" }}>
                      Upload{" "}
                    </i>
                    <p class="d-inline text-dark">
                      (Max size should not exceed 2MB)
                    </p>
                  </Link>
                </div>
                <input
                  type="file"
                  name="upload-id"
                  id="upload-file-id"
                  hidden
                  class="py-2 px-2 my-2 profile-input"
                />
              </form>
            </div>
            <div class="text-center align-center"></div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default page14;
