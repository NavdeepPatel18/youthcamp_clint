import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function page16() {
  return (
    <div class="bg-light-gray">
      <div class="container-fluid px-0">
        <Header />
        <section class="container my-4">
          <div class="my-4">
            <h2>Blog Post</h2>
            <img
              src={require("../../assests/xdExport/yellowLine.png").default}
              class="mb-4"
              alt=""
            />
          </div>
          <div class="row" style={{ "flex-wrap": "wrap" }}>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              {/* <!-- <img src={require("../../assests/img/mountain.jpg").default} class="img-fluid" alt="" /> --> */}
              <img
                src={require("../../assests/xdExport/blog.png").default}
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="bg-white p-4">
                <h6 class="text-warning">Blog</h6>
                <h3>An Ode to Manali and queen of hills Mussorie</h3>
                {/* <!-- <img src={require("../../assests/img/user1.png").default} alt="" class="circle-img personal-blog-page" /> --> */}
                <img
                  src={require("../../assests/xdExport/user3.png").default}
                  alt=""
                  class=" personal-blog-page"
                />
              </div>
              <br />
              <p class="my-4">
                By Monika Thorve <br />{" "}
                <span style={{ color: "gray" }}> 23 October 2021 </span>{" "}
              </p>
            </div>
          </div>
          <p class="my-4">
            If you think of accessible and inclusive design, things like
            placeholder text color considerations and correct content markups
            spring to mind — and they should. But visual and hearing
            accommodations are just the beginning of creating an inclusive web.
            Often, those with intellectual, developmental, or learning
            disabilities have a less-than ideal web experience because their
            needs fit on a spectrum, and can’t be solved with a universal
            solution. For years, the Dan Marino Foundation has a long and
            distinguished mission of empowering individuals with autism and
            other developmental disabilities through life-changing programs and
            services. The foundation uses the Virtual Interactive Training Agent
            (ViTA), a virtual reality system designed to help young adults with
            Autism Spectrum Disorder and other developmental disabilities
            prepare for job interviews. While ViTA served its users well, it had
            one large accessibility problem: You could only access it while at
            the foundation’s South Florida headquarters. That meant it limited
            the young adults it could serve.
          </p>
        </section>
        <section class="container my-4 wrap">
          <div class="row">
            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
              {/* <!-- <img src={require("../../assests/img/snow.jpg").default} class="img-fluid" alt="" /> --> */}
              <img
                src={
                  require("../../assests/xdExport/blogLastphoto.png").default
                }
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
              <p class="my-4">
                If you think of accessible and inclusive design, things like
                placeholder text color considerations and correct content
                markups spring to mind — and they should. But visual and hearing
                accommodations are just the beginning of creating an inclusive
                web. Often, those with intellectual, developmental, or learning
                disabilities have a less-than ideal web experience because their
                needs fit on a spectrum, and can’t be solved with a universal
                solution. <br /> <br /> If you think of accessible and inclusive
                design, things like placeholder text color considerations and
                correct content markups spring to mind — and they should. But
                visual and hearing accommodations are just the beginning of
                creating an inclusive web. Often, those with intellectual,
                developmental, or learning disabilities have a less-than ideal
                web experience because their needs fit on a spectrum, and can’t
                be solved with a universal solution.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default page16;
