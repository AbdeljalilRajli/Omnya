
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dotlarge from "public/images/agency/dot-large.png";
import one from "public/images/service/one.png";

const HomeThreeServices = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section service-f fade-wrapper " id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary g-ind">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      Experience
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">Professional Experience and Key Achievements</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-services"
                      className="btn btn--primary text-capitalize"
                    >
                      Dowloand My Resume
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    March 2022 – March 2024
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Senior Marketing Project Manager - Iboost Morocco</h4>
                  <div className="p-single">
                    <p>
                    Skilled in project management and operational monitoring, with a focus on effective client resource 
                    management and strategic leadership to drive successful outcomes and optimize processes.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Create and present digital strategies for various clients of the agency across different sectors
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Analyze User Experience and propose User Interface plans for websites
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Create digital brand platforms and websites with different purposes (ecommerce, educational …)
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Make digital activations
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Analyze KPIs, make monthly reporting and monitor performance
                    </li>
                  </ul>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    March 2018 – January 2022
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Social Media Project Manager – LoveStories, Morocco</h4>
                  <div className="p-single">
                    <p>
                      Experienced in agency management and strategy, with a strong background in project management 
                      and operational follow-up for the agency's clients, ensuring seamless execution and client satisfaction.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Create and implement of the social media management unit within the agency
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Support in the creation of work processes and digital methodologies for the agency
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Analyze and audit social media of the agency’s clients across different sectors and adapt
                      strategies to each type of client.
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Propose social media strategies for different social media supports of the agency’s clients
                    </li>
                  </ul>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                  Sept. 2016 – Dec. 2017
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Community Manager – New Publicity, Morocco</h4>
                  <div className="p-single">
                    <p>
                      worked with many press such as MFM Radio, Challenge Magazine, VH Magazine, Lalla Fatima Magazine
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Create and propose social media strategies for the different medias of the group (Radio & magazines)
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Benchmark and analyze the market and best practices
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Create Digital Brand Platforms for each media, ERP campaigns media campaigns
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Make surveys with the final customer to understand their wants and make strategies that goes along with the wants of the public.
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Create reporting analyzing KPIs, reporting performance
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Orient editors, and graphic designers on new trends on the web.
                    </li>
                  </ul>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                  Oct 2015 – Jul 2016
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Community Manager – City Club, Morocco</h4>
                  <div className="p-single">
                    <p>
                      Experienced in managing strategy for City Club Morocco, overseeing project execution, 
                      and providing operational support to ensure successful outcomes and seamless client experiences.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Create the different social media supports for City Club
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Benchmark and proposition of best practices and new activations
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Propose a social media strategy and digital orientation
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Realize editorial calendars with promotions, new openings…
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Organize digital events for new openings
                    </li>
                  </ul>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={dotlarge} alt="Image" className="dot-img" />
    </section>
  );
};

export default HomeThreeServices;

