import Link from "next/link";

const FeatureData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_13.svg",
    title: "Voice & Video",
    description:
      "Allow voice calls between applications and devices that use SIP and WebRTC.",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_14.svg",
    title: "IVR & Media",
    description:
      "Interactive Call Control Answer, initiate, split and hang-up local or remote call participants.",
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_15.svg",
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards provide visibility into key metrics such as call volumes, durations, and customer sentiment.",
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_16.svg",
    title: "Call recordings & transcription",
    description:
      "Record phone calls between parties and calls originated from external voice provider with SIPRec.",
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_17.svg",
    title: "Developer Tools & Customization",
    description:
      "Robust SDKs and APIs across various programming languages allow seamless integration of communication features into applications.",
  },
];

const Features = () => {
  return (
    <>
      {FeatureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6 mt-40"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <div className="card-style-three">
            <div className="icon d-flex align-items-end">
              <img src={feature.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h4 className="mt-25 mb-20">{feature.title}</h4>
            <p className="mb-50">{feature.description}</p>
            <img
              src="/images/icon/icon_18.svg"
              alt="icon"
              className="lazy-img"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
