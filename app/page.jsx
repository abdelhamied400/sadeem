import React from "react";

import Header from "@/components/home-page/home-6/Header";
import Hero from "@/components/home-page/home-6/Hero";
import ScreenHolder from "@/components/home-page/home-6/ScreenHolder";
import Link from "next/link";
import ProductTabs from "@/components/home-page/home-6/ProductTabs";
import TagList from "@/components/home-page/home-6/TagList";
import Features from "@/components/home-page/home-6/Features";
import Testimonial from "@/components/home-page/home-6/Testimonial";
import CircleBgShape from "@/components/home-page/home-6/CircleBgShape";
import Partners from "@/components/home-page/home-6/Partners";
import Subscribe from "@/components/home-page/home-6/Subscribe";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";

export const metadata = {
  title: "Sadeem",
};
const Home = () => {
  return (
    <>
      {/* <!-- 
      =============================================
        Theme Default Menu
        ============================================== 	
      --> */}
      <Header />

      {/* /* 
        =============================================
        Theme Hero Banner
        ==============================================  */}
      <Hero />

      {/* 
        =============================================
        Feature Section Three
        ============================================== 
        */}
      <div className="fancy-feature-three pt-300 lg-pt-200 md-pt-170 sm-pt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div
                className="block-style-two pe-xxl-5 md-mb-50"
                data-aos="fade-right"
              >
                <div className="title-style-three">
                  <div className="sc-title text-uppercase">
                    Integrates your tools
                  </div>
                  <h2 className="main-title fw-500">
                    a powerful solution that facilitates{" "}
                    <span className="d-inline-block position-relative">
                      communication
                      <span
                        className="mark-bg"
                        style={{ backgroundColor: "#D6F9EF" }}
                      />
                    </span>
                  </h2>
                </div>
                {/* /.title-style-three */}
                <p className="text-lg mt-25 mb-60 lg-mb-40">
                  Software development kits to integrate communication features
                  into applications, websites and business systems seamlessly.
                </p>
                <Link
                  href="/pages-menu/about-us-v1"
                  className="btn-four fw-500"
                >
                  Learn More
                </Link>
              </div>
              {/* /.block-style-two */}
            </div>
            {/* End .col-lg-5 */}

            <div
              className="col-xl-6 col-lg-7 col-md-6 ms-auto"
              data-aos="fade-left"
            >
              <ScreenHolder />
            </div>
            {/* End .col-xl-6 */}
          </div>
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Feature Section Four
        ============================================== 
        */}
      <div className="fancy-feature-four pt-250 lg-pt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-md-8 m-auto text-center"
              data-aos="fade-up"
            >
              <div className="title-style-three">
                <h2 className="main-title fw-500">
                  Artificial{" "}
                  <span className="d-inline-block position-relative">
                    Intelligence
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#F7E4FF" }}
                    />
                  </span>{" "}
                  &amp; Automation
                </h2>
              </div>
              {/* /.title-style-three */}
              <p className="text-lg mt-40 mb-100 lg-mt-20 lg-mb-50">
                deliver enhanced customer experiences through intelligent
                chatbots, automated workflows, and adaptive communication.
              </p>
            </div>
          </div>
          {/* End .row */}

          <ProductTabs />

          {/* /.tab-content */}
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Feature Section Six
        ============================================== 
        */}
      <div className="fancy-feature-six position-relative mt-225 lg-mt-100 xs-mt-80">
        <div className="container">
          <div className="row gx-xxl-5 align-items-center">
            <div className="col-lg-4 col-md-6 mt-40" data-aos="fade-up">
              <div className="title-style-three mb-65 lg-mb-40">
                <h2 className="main-title fw-500">
                  Let’s <br />
                  <span className="d-inline-block position-relative">
                    Discover
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#E1EDFF" }}
                    />
                  </span>
                  our all products
                </h2>
              </div>
              {/* /.title-style-three */}
              <div
                role="button"
                className="btn-five tran3s fw-500 fs-17 text-decoration-underline"
              >
                Click here for more info <i className="bi bi-chevron-right" />
              </div>
            </div>
            <Features />
          </div>
        </div>
        {/* End .container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_36.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three rounded-circle" />
      </div>
      {/* /.fancy-feature-six */}

      {/* 
        =============================================
        Feature Section Five
        ============================================== 
        */}
      <div className="fancy-feature-five pt-300 lg-pt-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 order-md-last ms-auto">
              <div
                className="block-style-two pe-xxl-5 sm-mb-50"
                data-aos="fade-left"
              >
                <div className="title-style-three">
                  <div className="sc-title text-uppercase">
                    Over
                    <span
                      className="text-decoration-underline"
                      style={{ color: "#7bcc9f" }}
                    >
                      150,000+ client
                    </span>
                  </div>
                  <h2 className="main-title fw-500">
                    Sadeem is an intelligent
                    <span className="d-inline-block position-relative">
                      omni-channel
                      <span
                        className="mark-bg"
                        style={{ backgroundColor: "#D8FFE8" }}
                      />
                    </span>
                    communication platform.
                  </h2>
                </div>
                <p className="text-lg mt-40 mb-75 lg-mt-30 lg-mb-50">
                  enables enterprises to engage with their customers via the
                  appropriate context and channel.
                </p>
                <Link
                  href="/pages-menu/about-us-v1"
                  className="btn-four fw-500"
                >
                  Try free now
                </Link>
              </div>
            </div>

            <div className="col-md-6 order-md-first" data-data-aos="fade-right">
              <div className="tags-wrapper position-relative">
                <img
                  src="/images/shape/shape_35.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
                />
                <div className="h3 m0 fw-normal tx-dark">100+</div>
                <p className="text-lg opacity-50 pb-25 lg-pb-10">
                  Tool to help your business
                </p>
                <TagList
                  tags={[
                    {
                      color: "rgba(255, 130, 130, 0.13)",
                      text: "1Voice",
                    },
                    { color: "rgba(73, 230, 213, 0.13)", text: "SMS" },
                    { color: "rgba(73, 179, 230, 0.13)", text: "Analytics " },
                    { color: "rgba(251, 208, 80, 0.15)", text: "API" },
                    {
                      color: "rgba(213, 126, 255, 0.15)",
                      text: "customer management",
                    },
                    {
                      color: "rgba(189, 231, 122, 0.15)",
                      text: "chat",
                    },
                    { color: "rgba(255, 152, 152, 0.15)", text: "video" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
        =====================================================
        Feedback Section Two
        =====================================================
        */}
      <div
        className="feedback-section-two position-relative mt-170 pt-150 pb-150 lg-mt-100 lg-pt-100 lg-pb-100 sm-pt-10 sm-pb-10"
        data-data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 col-md-8 col-sm-10 m-auto">
              <div className="title-style-three text-center mb-70 lg-mb-40">
                <div
                  className="icon d-flex align-items-center justify-content-center rounded-circle"
                  style={{ background: "#7bcc9f" }}
                >
                  <img
                    src="/images/icon/icon_19.svg"
                    alt="icon"
                    className="lazy-img"
                  />
                </div>
                <h2 className="main-title fw-500">
                  Check what’s our
                  <span className="d-inline-block position-relative">
                    client
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#BCF8F1" }}
                    />
                  </span>
                  say about us.
                </h2>
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <Testimonial />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <CircleBgShape />
      </div>

      {/* 
        =============================================
        Partner Section One
        ============================================== 
        */}
      <div className="partner-section-one position-relative mt-225 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <div
                className="title-style-three text-center mb-100 lg-mb-30"
                data-aos="fade-up"
              >
                <div className="sc-title text-uppercase">Our partners</div>
                <h2 className="main-title fw-500">
                  Our trusted partners{" "}
                  <span className="d-inline-block position-relative">
                    support
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#C8FFC6" }}
                    />
                  </span>{" "}
                  us always
                </h2>
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center">
                <Partners />
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_38.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_39.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
        =====================================================
        Pricing Section One
        =====================================================
        */}
      {/* <div className="pricing-section-one position-relative mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div
                className="title-style-three text-center mb-60 lg-mb-40"
                data-aos="fade-up"
              >
                <div className="sc-title text-uppercase">Pricng Plan</div>
                <h2 className="main-title fw-500">
                  No hidden charges!
                  <span className="d-inline-block position-relative">
                    choose
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#FFE1FB" }}
                    />
                  </span>
                  your plan.
                </h2>
              </div>
            </div>
          </div>
          <Pricing />
        </div>

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_40.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_41.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
      </div> */}

      {/*
        =====================================================
        Fancy Short Banner Two
        =====================================================
        */}
      {/* <div
        className="fancy-short-banner-two mt-150 lg-mt-100"
        data-data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper ms-xxl-4 me-xxl-4 position-relative">
            <div className="shapes rounded-circle shape-one" />
            <div className="inner-wrapper m-auto">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start sm-mb-30">
                  <h6 className="mb-5">Need Custome Plan?</h6>
                  <h3 className="fw-normal m0">Send us message for Help.</h3>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <Link href="/contact" className="btn-six fw-500">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/*
        =====================================================
        Fancy Short Banner Three
        =====================================================
        */}
      <div className="fancy-short-banner-three mt-180 mb-200 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-8 col-md-9 m-auto text-center">
              <div
                className="title-style-three text-center"
                data-data-aos="fade-up"
              >
                <h2 className="main-title fw-500">
                  Ready to start
                  <span className="d-inline-block position-relative">
                    free trial?
                    <span
                      className="mark-bg"
                      style={{ backgroundColor: "#C3F0FF" }}
                    />
                  </span>
                  it's just a matter of a single click
                </h2>
              </div>
              {/* /.title-style-three */}
              <p
                className="text-lg tx-dark pt-30 pb-55 lg-pb-30 "
                data-aos="fade-up"
              >
                Try it risk free — we don’t charge cancellation fees.
              </p>
              <div
                className="subscribe-form m-auto"
                data-data-aos="fade-up"
                data-aos-delay="200"
              >
                <Subscribe />
                {/* <p className="m0 pt-20">
                  Already a member?
                  <Link
                    href="/login"
                    className="tx-dark text-decoration-underline"
                  >
                    Sign in.
                  </Link>
                </p> */}
              </div>
              {/* /.subscribe-form */}
            </div>
          </div>
        </div>
      </div>

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-two theme-basic-footer">
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
            {/* /.inner-wrapper */}
          </div>
          <div className="shapes shape-one rounded-circle" />
          <div className="shapes shape-two rounded-circle" />
          <img
            src="/images/shape/shape_42.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <img
            src="/images/shape/shape_43.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
        </div>
        {/* /.top-footer */}
        <CopyrightFooter2 />
      </div>
      {/* /.footer-style-two */}
    </>
  );
};

export default Home;
