import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import one from "public/images/teams/one.png";

gsap.registerPlugin(ScrollTrigger);
const TeamDetailsMain = () => {
  useEffect(() => {
    const percentElements = document.querySelectorAll("[data-percent]");

    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute("data-percent") || "0%";
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll(".skill-bar-single");
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        const axBarTimeline = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          {
            width: 0,
          },
          {
            width: target,
          }
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: "0%",
            snap: {
              textContent: 5,
            },
          },
          "<"
        );
      }
    });
  }, []);

  return (
    <section className="section pb-0 team-det fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="team-det__thumb fade-top">
              <Image src={one} alt="Image" />
              <div className="social-alt">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="share us on facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link
                  href="https://www.twitter.com/"
                  target="_blank"
                  aria-label="share us on twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link
                  href="https://www.pinterest.com/"
                  target="_blank"
                  aria-label="share us on pinterest"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-8">
            <div className="team-det__content fade-top">
              <div className="intro">
                <div className="intro-left">
                  <h4>Sana p. Lesh</h4>
                  <p>Senior engineer</p>
                </div>
                <div className="intro-right">
                  <Link href="contact-us" className="btn btn--primary">
                    Hire Me
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="content">
                <h5>About Me</h5>
                <p>
                  Proin ultricies ultricies est vitae cursus. Nulla sit amet
                  suscipit tortor. Maecenas dui erat, ornare eget tristique
                  vitae, rutrum pretium justo. Phasellus vitae consequat nisi,
                  quis luctus nisl. Praesent faucibus sem id massa semper
                  ornare. Nam eu magna at mi pellentesque mattis. Morbi at
                  condimentum velit. Phasellus aliquet, leo auctor volutpat
                  ultrices, metus dolor dictum enim, sed convallis lacus urna
                  nec erat.
                </p>
              </div>
              <div className="skill-wrap">
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Wireframe</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Visual Design</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="90%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Wireframe</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Visual Design</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="90%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="team-det__info fade-top">
              <h4>Education background</h4>
              <div className="group">
                <h5>
                  Bachelor&apos;s degree,
                  <span>2010</span>
                </h5>
                <p>
                  Proin ultricies ultricies est vitae cursus. Nulla sit amet
                  suscipit tortor. Maecenas dui erat, ornare eget tristique
                  vitae, rutrum pretium justo. Phasellus vitae consequat nisi,
                  quis luctus nisl. Praesent faucibus sem id massa semper
                  ornare. Nam eu magna at mi pellentesque mattis. Morbi at
                  condimentum velit. Phasellus aliquet, leo auctor volutpat
                  ultrices, metus dolor dictum enim, sed convallis lacus urna
                  nec erat.
                </p>
              </div>
              <div className="group">
                <h5>
                  Master&apos;s degree in design,
                  <span>2015</span>
                </h5>
                <p>
                  Proin ultricies ultricies est vitae cursus. Nulla sit amet
                  suscipit tortor. Maecenas dui erat, ornare eget tristique
                  vitae, rutrum pretium justo. Phasellus vitae consequat nisi,
                  quis luctus nisl. Praesent faucibus sem id massa semper
                  ornare. Nam eu magna at mi pellentesque mattis. Morbi at
                  condimentum velit. Phasellus aliquet, leo auctor volutpat
                  ultrices, metus dolor dictum enim, sed convallis lacus urna
                  nec erat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsMain;
