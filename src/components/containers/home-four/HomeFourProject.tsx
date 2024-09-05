import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/projects/one.png";
import two from "public/images/projects/two.png";
import three from "public/images/projects/three.png";
import four from "public/images/projects/four.png";
import five from "public/images/projects/five.png";
import six from "public/images/projects/six.png";
import seven from "public/images/projects/seven.png";
import eight from "public/images/projects/eight.png";

const HomeFourProject = () => {
  return (
    <section className="section projects-s pt-0 fade-wrapper">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={five} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Vivamus vehicula ligula augue, id porttitor
                  </Link>
                </h4>
                <p>
                  Helping people in their journey self-improvement through
                  incrementalchanges from behavioural changes and attitudes
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={four} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">Kaizen Psychology</Link>
                </h4>
                <p>
                  Helping people in their journey self-improvement through
                  incrementalchanges from behavioural changes and attitudes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper align-items-end">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={one} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    varius suscipit lectus. Suspendisse
                  </Link>
                </h4>
                <p>
                  Helping people in their journey self-improvement through
                  incrementalchanges from behavioural changes and attitudes
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={eight} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Quisque sit amet felis non mi conse ullamcorper
                  </Link>
                </h4>
                <p>
                  Helping people in their journey self-improvement through
                  incrementalchanges from behavioural changes and attitudes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={six} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Contrary to popular belief, Lorem Ipsum is not
                  </Link>
                </h4>
                <p>
                  Helping people in their journey self-improvement through
                  incrementalchanges from behavioural changes and attitudes
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={two} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Internet tend to repeat predefined
                  </Link>
                </h4>
                <p>
                  Helping people in their journey self-improvement through
                  incrementalchanges from behavioural changes and attitudes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper align-items-end ">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={three} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    available, but the majority have
                  </Link>
                </h4>
                <p>
                  Helping people in their journey self-improvement through
                  incrementalchanges from behavioural changes and attitudes
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={seven} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    The generated Lorem Ipsum is therefore always
                  </Link>
                </h4>
                <p>
                  Helping people in their journey self-improvement through
                  incrementalchanges from behavioural changes and attitudes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <Link href="our-projects" className="btn btn--secondary">
                Load More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFourProject;
