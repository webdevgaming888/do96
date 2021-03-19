import React from "react";
import { withNamespaces } from "react-i18next";
import Slider from "react-slick";
import "./Banner.scss";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function SampleNextArrow(props) {
  const { onClick } = props;
  return <IoIosArrowForward className="banner-next" onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <IoIosArrowBack className="banner-prev" onClick={onClick} />;
}

const Banner = ({ banner, t }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {banner.map((img, i) => {
        return (
          <div key={img.id} className="banner">
            {img.title && (
              <div className="banner-content">
                <h1>{t(img.title)}</h1>
                <p>{t(img.content)}</p>
                <Link to={`${process.env.PUBLIC_URL}/promotion`}>
                  {t("seemore")}
                </Link>
              </div>
            )}
            <img src={img.src} alt="banner" className="banner-img" />
          </div>
        );
      })}
    </Slider>
  );
};
export default withNamespaces()(Banner);
