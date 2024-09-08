import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const HomeTwoAward = () => {
  return (
    <section className="section award" id="education">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image src={awardthumb} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                Education
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Academic  <span>Journey</span>
              </h2>
              <div className="paragraph">
                <p>
                  My academic journey has been focused on continuous growth, expanding my skills and adaptability. 
                  This path has strengthened my problem-solving abilities and prepared me to tackle new challenges 
                  with confidence.
                </p>
              </div>
              <div className="award__content-meta">
                <div className="single">
                  <h4>2015</h4>
                  <h4>ISCAE <br /> Morocco</h4>
                  <p>Master’s degree in Marketing/Communication</p>
                </div>
                <div className="single">
                  <h4>2014</h4>
                  <h4>Exchange semester</h4>
                  <p>Nanjing Audit University – China</p>
                </div>
              </div>
              <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Download My Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default HomeTwoAward;
