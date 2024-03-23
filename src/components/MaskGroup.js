import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MaskGroup.css";

const MaskGroup = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/6day");
  }, [navigate]);

  return (
    <div className="mask-group2">
      <img className="path-15-icon2" alt="" src="/path-15.svg" />
      <button
        className="view-this-trip-button-wrapper"
        onClick={onGroupButtonClick}
      >
        <div className="view-this-trip-button">
          <div className="view-this-trip2">VIEW THIS TRIP</div>
        </div>
      </button>
      <div className="div2">$1,300</div>
      <div className="per-person2">
        <span>PER</span>
        <span className="span2">{` `}</span>
        <span>PERSON</span>
      </div>
      <div className="day-materuni-container">
        <p className="day-materuni">{`7 - DAY MATERUNI, `}</p>
        <p className="tarangire-serengeti">{`TARANGIRE, SERENGETI `}</p>
        <p className="lake-manyara">{`& LAKE MANYARA `}</p>
      </div>
    </div>
  );
};

export default MaskGroup;
