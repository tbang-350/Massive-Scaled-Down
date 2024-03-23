import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent18.css";

const FrameComponent18 = () => {
  const navigate = useNavigate();

  const onLayer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/3day");
  }, [navigate]);

  return (
    <div className="what-adventures-await-parent">
      <div className="what-adventures-await">OUR pACKAGES INCLUDE :</div>
      <div className="frame-parent73">
        <header className="layer-2-parent">
          <img
            className="layer-2-icon1"
            loading="lazy"
            alt=""
            src="/layer-2.svg"
            onClick={onLayer2Click}
          />
          <div className="contacts-parent">
            <div className="contacts1">Contacts</div>
            <div className="about1">About</div>
            <button
              className="customize-your-trip-wrapper"
              onClick={onFrameButtonClick}
            >
              <div className="customize-your-trip1">Customize Your Trip</div>
            </button>
          </div>
        </header>
        <div className="frame-wrapper8">
          <div className="mask-group-parent">
            <img
              className="mask-group-icon"
              loading="lazy"
              alt=""
              src="/mask-group.svg"
            />
            <div className="day-serengeti-camping-tour-group">
              <div className="day-serengeti-camping-container3">
                <p className="day-serengeti1">{`3 - DAY SERENGETI `}</p>
                <p className="camping-tour1">CAMPING TOUR</p>
              </div>
              <div className="frame-wrapper9">
                <div className="parent">
                  <div className="div3">$1,050</div>
                  <div className="per-person-container">
                    <div className="per-person3">PER PERSON</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="package-container">
              <button
                className="package-container-inner"
                onClick={onGroupButtonClick}
              >
                <div className="view-this-trip-frame">
                  <div className="view-this-trip3">VIEW THIS TRIP</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent18;
