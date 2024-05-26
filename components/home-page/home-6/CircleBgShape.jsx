const CircleBgShape = () => {
  const images = [];

  return (
    <div className="circle-bg shapes">
      <img
        src="/images/shape/shape_37.svg"
        alt="media"
        className="lazy-img main-img m-auto"
      />
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt="media"
          className={`lazy-img shapes rounded-circle ${img.className}`}
          style={{ width: `${img.width}px`, height: `${img.height}px` }}
        />
      ))}
    </div>
  );
};

export default CircleBgShape;
