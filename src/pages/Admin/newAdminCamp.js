import React from "react";

import { Link } from "react-router-dom";

function newAdminCamp() {
  return (
    <div class="bg-light-gray">
      <div class="container-fluid px-0">
        <header>
          <div class="bg-white header-height">
            <Link to="/index" class="navbar-brand">
              <img
                src={require("../../assests/xdExport/blackLogo.png").default}
                class="black-logo-img"
                alt="logo"
              />
            </Link>
          </div>
        </header>
        <section class="container-fluid wrap mt-70 px-0">
          <div class="row offset-1">
            <div
              class="float-left col-xl-2 col-lg-2 col-md-2 col-sm-4 col-12 mb-12"
              style={{ "background-color": "rgb(241, 235, 235)" }}
            >
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-4 ">
                  <h4 class="margin-left">Menu</h4>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminDashboard" class="text-dark">
                    <h6 class="margin-left">Participant List</h6>
                  </Link>
                </div>
              </div>
              <div class="row active-dashboard">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminCampDetails" class="text-dark">
                    <h6 class="margin-left">Camp Details</h6>
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminBlog" class="text-dark">
                    <h6 class="margin-left">Blog</h6>
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminHomepage" class="text-dark">
                    <h6 class="margin-left">Homepage</h6>
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminContactus" class="text-dark">
                    <h6 class="margin-left">Contact Us</h6>
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 py-2">
                  <Link to="/AdminAboutUs" class="text-dark">
                    <h6 class="margin-left">About Us</h6>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 bg-white pt-4">
              <h4 class="mb-1">Add New Camp</h4>
              <p class="grey-font">You can add new camps form here</p>
              <hr />
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                  <h5 class="mt-4">Camp Details</h5>
                  <p class="grey-font">Basic Details</p>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="title" id="camptitle">
                    Camp Title*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="camptitle"
                    id="campTitle"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Manali"
                  />
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mb-4">
                  <label for="campPhoto">Upload Camp Photo*</label>
                  <br />
                  <div id="upload-id" class="py-2 px-2 mt-2 profile-input">
                    <Link to="#" onclick="uploadfile(uploadCampPhotoFile)">
                      <i class="bx bx-upload text-warning"> Upload </i>
                    </Link>
                  </div>
                  <input
                    type="file"
                    name="campPhoto"
                    id="uploadCampPhotoFile"
                    hidden
                    class="py-2 px-2 my-2 "
                  />
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 mb-4">
                  <label for="camploc" id="camplocation">
                    Location*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="camploc"
                    id="campLocation"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Manali"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="camphigh" id="camphighlights">
                    Camp Highlights*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="camphigh"
                    id="camphighlights"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Manali"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="campBrochure">Upload Brochure*</label>
                  <br />
                  <div id="upload-id" class="py-2 px-2 mt-2 profile-input">
                    <Link to="#" onclick="uploadfile(uploadCampBrochureFile)">
                      <i class="bx bx-upload text-warning"> Upload </i>
                      <p class="d-inline text-dark">
                        (Max size should not exceed 2MB)
                      </p>
                    </Link>
                  </div>
                  <input
                    type="file"
                    name="campBrochure"
                    id="uploadCampBrochureFile"
                    hidden
                    class="py-2 px-2 my-2 "
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="campprice" id="campPrice">
                    Price*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="campprice"
                    id="campPrice"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="INR 24000"
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                  <label for="campduration" id="campDuration">
                    Duration*
                  </label>
                  <br />
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                      <input
                        type="number"
                        name="campduration"
                        id="campDay"
                        class="py-2 px-2 my-2 profile-input"
                        placeholder="Enter No. of days"
                      />
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                      <input
                        type="number"
                        name="campduration"
                        id="campNights"
                        class="py-2 px-2 my-2 profile-input"
                        placeholder="Enter No. of nights"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <h5 class="mb-1">Dates*</h5>
                  {/* <!-- <label class="mb-1">Main Home Quotes</label> --> */}
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-4">
                  <Link to="#" class="text-warning">
                    ADD
                  </Link>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4">
                  <label for="campStart" id="camp-start-date">
                    Start Date*
                  </label>
                  <br />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4">
                  <label for="campEnd" id="camp-end-date">
                    End Date*
                  </label>
                  <br />
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5">
                  <input
                    type="date"
                    name="campStart"
                    id="campStartDate"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Start Date"
                  />
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 mb-1">
                  <input
                    type="date"
                    name="campEnd"
                    id="campEndDate"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="End Date"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
                  <i class="bx bx-trash mt-4 ml-2  cursor-pointer"></i>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5">
                  {/* <!-- <label for="campStart2" id="camp-start-date2">Start Date*</label><br /> --> */}
                  <input
                    type="date"
                    name="campStart2"
                    id="campStartDate2"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Start Date"
                  />
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 mb-1">
                  {/* <!-- <label for="campEnd" id="camp-end-date">End Date*</label><br /> --> */}
                  <input
                    type="date"
                    name="campEnd2"
                    id="campEndDate2"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="End Date"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
                  <i class="bx bx-trash mt-3 ml-2  cursor-pointer"></i>
                </div>
              </div>
              <hr />

              <div class="row mt-4">
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <h5 class="mb-1">Basic Details</h5>
                  <p class="grey-font">Basic Details</p>
                </div>

                <div class="col-xl-4 col-lg-3 col-md-3 col-sm-12 col-12 mb-1">
                  <label for="difficult" id="difficultyLevel">
                    Difficulty*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="difficult"
                    id="Difficulty"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="High"
                  />
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-1">
                  <label for="distance" id="distance">
                    Distance*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="distance"
                    id="Distance"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="15 km"
                  />
                </div>
                <div class="col-xl-4 col-lg-3 col-md-3 col-sm-12 col-12 mb-1">
                  <label for="age" id="age">
                    Age Group*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="age"
                    id="PersonAge"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="15-20 years"
                  />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <h5 class="mb-1">Package Details*</h5>
                  <p class="grey-font">Package Information</p>
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mb-4">
                  <Link to="#" class="text-warning">
                    ADD
                  </Link>
                </div>
                {/* <!-- First package --> */}
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-4">
                  <label for="package" id="package-photo">
                    Packages*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="package"
                    id="package"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Ahmedabad"
                  />
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-4">
                  <label for="subpackage" id="sub-package">
                    Sub Packages*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="subpackage"
                    id="subPackage"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Non AC Sleeper"
                  />
                </div>

                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mb-4">
                  <label for="package-upload-photo" id="package-upload-photo">
                    Package Photo*
                  </label>
                  <br />
                  <div id="upload-id" class="py-2 px-2 mt-2 profile-input">
                    <Link to="#" onclick="uploadfile(packageUploadPhoto)">
                      <i class="bx bx-upload text-warning"> Upload </i>
                      {/* <!-- <p class="d-inline text-dark ">(Max size should not exceed 2MB)</p> --> */}
                    </Link>
                  </div>
                  <input
                    type="file"
                    name="package-upload-photo"
                    id="packageUploadPhoto"
                    hidden
                    class="py-2 px-2 my-2"
                  />
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-4">
                  <label for="package-price" id="package-price">
                    Packages Price*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="package-price"
                    id="PackagePrice"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="INR 12898"
                  />
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-4">
                  <label for="package-days" id="package-days">
                    Days*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="package-days"
                    id="packageDays"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="10D/9N"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mt-4">
                  <i class="bx bx-trash mt-4 pt-3ml-2 cursor-pointer"></i>
                </div>

                {/* <!-- Second package --> */}
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-4">
                  <label for="package2" id="package-photo2">
                    Packages*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="package2"
                    id="package2"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Ahmedabad"
                  />
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-4">
                  <label for="subpackage2" id="sub-package2">
                    Sub Packages*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="subpackage2"
                    id="subPackage2"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Non AC Sleeper"
                  />
                </div>

                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mb-4">
                  <label for="package-upload-photo2" id="package-upload-photo2">
                    Package Photo*
                  </label>
                  <br />
                  <div id="upload-id" class="py-2 px-2 mt-2 profile-input">
                    <Link to="#" onclick="uploadfile(packageUploadPhoto2)">
                      <i class="bx bx-upload text-warning"> Upload </i>
                      {/* <!-- <p class="d-inline text-dark ">(Max size should not exceed 2MB)</p> --> */}
                    </Link>
                  </div>
                  <input
                    type="file"
                    name="package-upload-photo2"
                    id="packageUploadPhoto2"
                    hidden
                    class="py-2 px-2 my-2"
                  />
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-4">
                  <label for="package-price2" id="package-price2">
                    Packages Price*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="package-price2"
                    id="PackagePrice2"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="INR 12898"
                  />
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6 mb-4">
                  <label for="package-days2" id="package-days2">
                    Days*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="package-days2"
                    id="packageDays2"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="10D/9N"
                  />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mt-4">
                  <i class="bx bx-trash mt-4 pt-3ml-2 cursor-pointer"></i>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <h5 class="mb-1">Schedule Details</h5>
                  <p class="grey-font">Package Information</p>
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 ">
                  <Link to="#" class="text-warning">
                    ADD
                  </Link>
                </div>
                <div class="col-xl-4 col-lg-3 col-md-3 col-sm-12 col-12 mb-1">
                  <label for="schedule-day1" id="schedule-day1">
                    Day 1*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="schedule-day1"
                    id="scheduleDay1"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="title"
                  />
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-1">
                  <label for="schedule-dsc" id="schedule-dsc">
                    Desciption*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="schedule-dsc"
                    id="scheduleDescription"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter text"
                  />
                </div>
                <div class="col-xl-4 col-lg-3 col-md-3 col-sm-12 col-12 mb-1">
                  <label for="upload-schedule-photo" id="upload-schedule-photo">
                    Upload Photos*
                  </label>
                  <br />
                  {/* <!-- <input type="text" name="upload-schedule-photo" id="PersonAge" class="py-2 px-2 my-2 profile-input" placeholder="15-20 years"> --> */}
                  <div id="upload-id" class="py-2 px-2 mt-2 profile-input">
                    <Link to="#" onclick="uploadfile(ScheduleUploadPhoto)">
                      <i class="bx bx-upload text-warning"> Upload </i>
                      {/* <!-- <p class="d-inline text-dark ">(Max size should not exceed 2MB)</p> --> */}
                    </Link>
                  </div>
                  <input
                    type="file"
                    name="package-upload-photo"
                    id="ScheduleUploadPhoto"
                    hidden
                    class="py-2 px-2 my-2"
                  />
                </div>
                {/* <!-- -----------------------------Day 2-------------------------- --> */}
                <div class="col-xl-4 col-lg-3 col-md-3 col-sm-12 col-12 mb-1">
                  <label for="schedule-day2" id="schedule-day2">
                    Day 2*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="schedule-day2"
                    id="scheduleDay2"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="title"
                  />
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-1">
                  <label for="schedule-dsc2" id="schedule-dsc2">
                    Desciption*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="schedule-dsc2"
                    id="scheduleDescription2"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter text"
                  />
                </div>
                <div class="col-xl-4 col-lg-3 col-md-3 col-sm-12 col-12 mb-1">
                  <label
                    for="upload-schedule-photo2"
                    id="upload-schedule-photo2"
                  >
                    Upload Photos*
                  </label>
                  <br />
                  {/* <!-- <input type="text" name="upload-schedule-photo" id="PersonAge" class="py-2 px-2 my-2 profile-input" placeholder="15-20 years"> --> */}
                  <div id="upload-id" class="py-2 px-2 mt-2 profile-input">
                    <Link to="#" onclick="uploadfile(ScheduleUploadPhoto2)">
                      <i class="bx bx-upload text-warning"> Upload </i>
                      {/* <!-- <p class="d-inline text-dark ">(Max size should not exceed 2MB)</p> --> */}
                    </Link>
                  </div>
                  <input
                    type="file"
                    name="package-upload-photo2"
                    id="ScheduleUploadPhoto2"
                    hidden
                    class="py-2 px-2 my-2"
                  />
                </div>
                {/* <!-- -----------------------------Day 3-------------------------- --> */}
                <div class="col-xl-4 col-lg-3 col-md-3 col-sm-12 col-12 mb-1">
                  <label for="schedule-day3" id="schedule-day3">
                    Day 3*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="schedule-day3"
                    id="scheduleDay3"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="title"
                  />
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mb-1">
                  <label for="schedule-dsc3" id="schedule-dsc3">
                    Desciption*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="schedule-dsc3"
                    id="scheduleDescription3"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter text"
                  />
                </div>
                <div class="col-xl-4 col-lg-3 col-md-3 col-sm-12 col-12 mb-1">
                  <label
                    for="upload-schedule-photo3"
                    id="upload-schedule-photo3"
                  >
                    Upload Photos*
                  </label>
                  <br />
                  {/* <!-- <input type="text" name="upload-schedule-photo" id="PersonAge" class="py-2 px-2 my-2 profile-input" placeholder="15-20 years" /> --> */}
                  <div id="upload-id" class="py-2 px-2 mt-2 profile-input">
                    <Link to="#" onclick="uploadfile(ScheduleUploadPhoto3)">
                      <i class="bx bx-upload text-warning"> Upload </i>
                      {/* <!-- <p class="d-inline text-dark ">(Max size should not exceed 2MB)</p> --> */}
                    </Link>
                  </div>
                  <input
                    type="file"
                    name="package-upload-photo3"
                    id="ScheduleUploadPhoto3"
                    hidden
                    class="py-2 px-2 my-2"
                  />
                </div>
              </div>
              <hr />
              <div class="row mt-4">
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <h5 class="mb-1">Other Details</h5>
                  <p class="grey-font">Don’t be lazy to keep it blank</p>
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2">
                  <Link to="#" class="text-warning">
                    ADD
                  </Link>
                </div>
                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <label for="admin-inclusion" id="admin-inclusion">
                    Inclusion*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="admin-inclusion"
                    id="admininclusion"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Sunglasses"
                  />
                  <br />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mt-4">
                  <Link to="#" class="text-warning mt-4">
                    ADD
                  </Link>
                  <br />
                  <i class="bx bx-trash mt-2 ml-2  cursor-pointer"></i>
                </div>

                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <label for="admin-exclusion" id="admin-exclusion">
                    Exclusion*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="admin-exclusion"
                    id="Adminexclusion"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Text"
                  />
                  <br />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mt-4">
                  <Link to="#" class="text-warning mt-4">
                    ADD
                  </Link>
                  <br />
                  <i class="bx bx-trash mt-2 ml-2  cursor-pointer"></i>
                </div>

                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10">
                  <label for="admin-cancelpolicy" id="admin-cancelpolicy">
                    Cancellation Policy*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="admin-cancelpolicy"
                    id="Admincancelpolicy"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Text"
                  />
                  <br />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mt-4">
                  <Link to="#" class="text-warning mt-4">
                    ADD
                  </Link>
                  <br />
                  <i class="bx bx-trash mt-2 ml-2  cursor-pointer"></i>
                </div>

                <div class="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 mb-4">
                  <label for="admin-thingstoCarry" id="admin-thingstoCarry">
                    Things to Carry*
                  </label>
                  <br />
                  <input
                    type="text"
                    name="admin-thingstoCarry"
                    id="AdminThingstoCarry"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Text"
                  />
                  <br />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mt-4">
                  <Link to="#" class="text-warning mt-4">
                    ADD
                  </Link>
                  <br />
                  <i class="bx bx-trash mt-2 ml-2  cursor-pointer"></i>
                </div>
              </div>
              <label for="admin-faq" id="admin-faq">
                FAQs*
              </label>
              <br />
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10">
                  <input
                    type="text"
                    name="admin-faq"
                    id="AdminFaq"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Can I join solo ?"
                  />
                  <br />
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-10 col-10 ">
                  <input
                    type="text"
                    name="admin-faq"
                    id="AdminfaqAns"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Yes"
                  />
                  <br />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mt-2">
                  <i class="bx bx-trash mt-2 ml-2  cursor-pointer"></i>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-10 col-10">
                  <input
                    type="text"
                    name="admin-faqQue"
                    id="AdminFaqQue"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Question"
                  />
                  <br />
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-10 col-10 ">
                  <input
                    type="text"
                    name="admin-faqAns"
                    id="AdminfaqAns"
                    class="py-2 px-2 my-2 profile-input"
                    placeholder="Enter Answer"
                  />
                  <br />
                </div>
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 mt-2">
                  <Link to="#" class="text-warning mt-4">
                    ADD
                  </Link>
                  <br />
                </div>
              </div>
              <hr />
              <div class="mt-4 mb-4 payment pt-4 pb-2 px-2 ">
                <button
                  class="btn btn-warning text-white mr-3 mb-3 "
                  id="pay-btn "
                >
                  Add Camp
                </button>
                <button class="btn text-warning btn-light btn2 mb-3 ">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer class="container-fluid footer-block bg-white ">
        <div class="container wrap ">
          <div class="text-center py-2 ">
            <p class=" grey-font d-inline ">
              &copy; 2021 Youthcamping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default newAdminCamp;
