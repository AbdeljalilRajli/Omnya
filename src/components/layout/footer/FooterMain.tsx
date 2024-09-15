import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import logoLight from "public/images/logo-light.png";

const FooterFour = () => {
  const currentYear = new Date().getFullYear();

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-four-light") {
    logoSrc = logoLight;
  }

  if (router.pathname === "/index-five-light") {
    logoSrc = logoLight;
  }

  return (
    <footer className="section footer-four pb-0" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-four__content">
              <div className="intro text-center">
                <h2 className="light-title text-uppercase title-anim">
                  Excited for new challenges 💚 and eager to contribute my skills to a great team!
                </h2>
              </div>
              <div className="row justify-content-center cta-t section__content-cta">
                <div className="col-12 col-md-8">
                  <h3>
                    <Link href="mailto:omnya.bhmd@gmail.com">
                      Let&apos;s Talk
                      <i className="fa-regular fa-comment-dots"></i>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center copy-t gaper section__content-cta">
          <div className="col-12 col-lg-6">
            <ul className="justify-content-center justify-content-lg-start">
              <li>
                <Link href="https://www.linkedin.com/in/omnya-bouhamed/" target="_blank">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://x.com/OmnyaBhmd" target="_blank">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/omy_bou?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <div className="text-center text-lg-end">
              <Link href="mailto:omnya.bhmd@gmail.com" className="text-capitalize">
                omnya.bhmd@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-three__copyright mt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__copyright">
                <div className="row align-items-center gaper">
                  <div className="col-12 col-lg-8">
                    <div className="footer__copyright-text text-center text-lg-start">
                      <p>
                        Copyright &copy;{" "}
                        <span id="copyYear">{currentYear}</span> Omnya by{" "}
                        <Link
                          href="https://www.3abdeljalil.com"
                          target="_blank"
                        >
                          3abdeljalil{" "}
                        </Link>
                        . All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="text-center text-lg-end">
                      <Link href="/" className="logo">
                        <Image src={logoSrc} alt="Image" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
