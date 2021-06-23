import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";

function aboutUs() {
  return (
    <>
      <div class="container-fluid px-0 ">
        <Header />
        <section class="container mt-4 about-us">
          <img
            src={require("../../assests/xdExport/aboutUs.png").default}
            class="my-4"
            alt="about-us"
          />
          <br />
          <img
            src={require("../../assests/xdExport/sunset.png").default}
            class="mt-4 w-100"
            alt="sunset"
          />
          <div class="mt-4">
            <p>
              If you think of accessible and inclusive design, things like
              placeholder text color considerations and correct content markups
              spring to mind — and they should. But visual and hearing
              accommodations are just the beginning of creating an inclusive
              web. Often, those with intellectual, developmental, or learning
              disabilities have a less-than ideal web experience because their
              needs fit on a spectrum, and can’t be solved with a universal
              solution.
            </p>
            <br />
            <p>
              For years, the Dan Marino Foundation has a long and distinguished
              mission of empowering individuals with autism and other
              developmental disabilities through life-changing programs and
              services. The foundation uses the Virtual Interactive Training
              Agent (ViTA), a virtual reality system designed to help young
              adults with Autism Spectrum Disorder and other developmental
              disabilities prepare for job interviews. While ViTA served its
              users well, it had one large accessibility problem: You could only
              access it while at the foundation’s South Florida headquarters.
              That meant it limited the young adults it could serve.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default aboutUs;
