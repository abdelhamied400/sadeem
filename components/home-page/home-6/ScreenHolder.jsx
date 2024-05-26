const logos = [
  {
    src: "/assets/logo.png",
    width: "193px",
    height: "193px",
    className: "p-2",
  },
  {
    src: "/assets/Tools/2.jpg",
    width: "125px",
    height: "125px",
    className: "shapes logo-one",
  },
  {
    src: "/assets/Tools/3.png",
    width: "105px",
    height: "105px",
    className: "shapes logo-two",
  },
  {
    src: "/assets/Tools/4.png",
    width: "80px",
    height: "80px",
    className: "shapes logo-three",
  },
  {
    src: "/assets/Tools/5.jpg",
    width: "80px",
    height: "80px",
    className: "shapes logo-four p-2",
  },
  {
    src: "/assets/Tools/6.jpg",
    width: "105px",
    height: "105px",
    className: "shapes logo-five",
  },
];

const ScreenHolder = () => {
  return (
    <div className="screen-holder-one d-flex align-items-center justify-content-center">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`round-bg d-flex align-items-center justify-content-center ${logo.className}`}
          style={{ width: logo.width, height: logo.height }}
        >
          <img
            src={logo.src}
            alt={`logo ${index}`}
            className="lazy-img rounded-circle"
          />
        </div>
      ))}
      <img
        src="/assets/Tools/1.png"
        alt="shape"
        width="105px"
        className="shapes shape-one p-2"
      />
    </div>
  );
};

export default ScreenHolder;
