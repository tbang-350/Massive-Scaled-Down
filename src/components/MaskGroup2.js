import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MaskGroup2.css";

const MaskGroup2 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/6day");
  }, [navigate]);

  return (
    <div className="mask-group">
      <div className="day-camp-safari">
        <p className="day-camp">6 - DAY CAMP</p>
        <p className="safari">SAFARI</p>
      </div>
      <img className="path-15-icon" loading="lazy" alt="" src="/path-15.svg" />
      <button className="mask-group-inner" onClick={onGroupButtonClick}>
        <div className="view-this-trip-wrapper">
          <div className="view-this-trip">VIEW THIS TRIP</div>
        </div>
      </button>
      <div className="div">$1,690</div>
      <div className="per-person">
        <span>PER</span>
        <span className="span">{` `}</span>
        <span>PERSON</span>
      </div>
    </div>
  );
};

export default MaskGroup2;
