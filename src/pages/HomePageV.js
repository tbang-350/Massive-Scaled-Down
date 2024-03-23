import { useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import ContactContainer from "../components/ContactContainer";
import "./HomePageV.css";

const HomePageV = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <div className="homepagev2">
      <section className="mask-group-4-parent">
        <img className="mask-group-4" alt="" />
        <img className="mask-group-3" alt="" />
        <img className="mask-group-2" alt="" />
      </section>
      <img className="mask-group-1" alt="" />
      <img className="component-2-1" alt="" src="/component-2--1@2x.png" />
      <FrameComponent1 />
      <div className="homepagev2-inner">
        <div className="karibu-isles-savannah-parent">
          <h1 className="karibu-isles-container">
            <p className="karibu-isles">{`Karibu Isles & Savannah`}</p>
          </h1>
          <div className="rectangle-parent">
            <div className="frame-child" onClick={onRectangleClick} />
            <div className="build-your-safari">Build Your Safari</div>
          </div>
        </div>
      </div>
      <section className="rectangle-group">
        <div className="frame-item" />
        <h3 className="embark-on-a">
          Embark on a Journey Crafted Uniquely for You
        </h3>
      </section>
      <img className="component-3-1" alt="" src="/component-3--1@2x.png" />
      <section className="mask-group-17-parent">
        <img
          className="mask-group-17"
          loading="lazy"
          alt=""
          src="/mask-group-17@2x.png"
        />
        <div className="travel-quote-instance">
          <div className="travel-quote-instance-child" />
          <h3 className="your-gateway-to-container">
            <p className="your-gateway-to">YOUR GATEWAY TO UNFORGETTABLE</p>
            <p className="adventures"> ADVENTURES</p>
          </h3>
          <div className="discover-more-with-container">
            <p className="discover-more-with">{`Discover more with Isles & Savannah, where we redefine travel beyond conventional sightseeing. Immerse yourself in the wild beauty of Tanzania, feel the warmth of its people and experience the thrill of adventure.`}</p>
            <p className="we-are-committed">
              We are committed to providing bespoke tour packages tailored to
              your unique interests and budget, whether you crave a safari of a
              lifetime or a rejuvenating beach vacation.
            </p>
            <p className="our-tailor-made-tour">
              Our tailor-made tour packages ensure an unforgettable journey,
              perfectly aligned with your preferences. Whether you're an avid
              wildlife enthusiast or seeking relaxation on the beach, we have
              the ideal experience for you.
            </p>
          </div>
        </div>
      </section>
      <div className="homepagev2-child" />
      <FrameComponent />
      <ContactContainer />
    </div>
  );
};

export default HomePageV;
