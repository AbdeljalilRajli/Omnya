import React from "react";
import Image from "next/image";
import one from "public/images/mission/one.png";
import two from "public/images/mission/two.png";

const OurMission = () => {
  return (
    <section className="section mission-s fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-5 col-xxl-5">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      mission & vission
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">our mission & value</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                  <div className="text-center text-lg-start">
                    <p>
                      Assembling the team of talented people to enhance your
                      experience of IT solutions at xpovio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Quality is Number One</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  We define quality as solutions that surpass customer needs on
                  time and within budget.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={one} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={two} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>we Create Customer Value</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  We define quality as solutions that surpass customer needs on
                  time and within budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
