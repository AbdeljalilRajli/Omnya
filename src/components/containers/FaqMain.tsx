import React, { useState } from "react";
import Image from "next/image";
import thumb from "public/images/faq-thumb.png";

const FaqMain = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section faq fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="faq__thumb fade-left">
              <Image src={thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion" id="accordion">
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 0 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingOne">
                  <button
                    className={
                      (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    I&apos;m a total beginner. Can I still follow along?
                  </button>
                </h5>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse${
                    imgTab === 0 ? " show " : ""
                  }`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      We have facility to produce advance work various
                      industrial applications based on specially developed
                      technol-ogy. We are also ready to developement by
                      according to users changing needs. Infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 1 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingTwo">
                  <button
                    className={
                      (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Will you be updating the program?
                  </button>
                </h5>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse${
                    imgTab === 1 ? " show " : ""
                  }`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      We have facility to produce advance work various
                      industrial applications based on specially developed
                      technol-ogy. We are also ready to developement by
                      according to users changing needs. Infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 2 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingThree">
                  <button
                    className={
                      (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Can I get an invoice for my purchase?
                  </button>
                </h5>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse${
                    imgTab === 2 ? " show " : ""
                  }`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      We have facility to produce advance work various
                      industrial applications based on specially developed
                      technol-ogy. We are also ready to developement by
                      according to users changing needs. Infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 3 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingFour">
                  <button
                    className={
                      (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What is global search engine optimization?
                  </button>
                </h5>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse${
                    imgTab === 3 ? " show " : ""
                  }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      We have facility to produce advance work various
                      industrial applications based on specially developed
                      technol-ogy. We are also ready to developement by
                      according to users changing needs. Infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqMain;
