import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onActionButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <section className="navbarcontainer-wrapper">
      <header className="navbarcontainer">
        <img
          className="layer-2-icon"
          loading="lazy"
          alt=""
          src="/layer-2.svg"
        />
        <div className="frame-parent13">
          <div className="contacts-wrapper" onClick={onFrameContainerClick}>
            <div className="contacts">Contacts</div>
          </div>
          <div className="about-wrapper">
            <div className="about">About</div>
          </div>
          <button className="actionbutton" onClick={onActionButtonClick}>
            <div className="customize-your-trip">Customize Your Trip</div>
          </button>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent1;
