import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MaskGroup1.css";

const MaskGroup1 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/6day");
  }, [navigate]);

  return (
    <div className="mask-group1">
      <div className="day-lake-manyara-container">
        <p className="day-lake-manyara1">2 - DAY LAKE MANYARA</p>
        <p className="ngorongoro-camping">{`& NGORONGORO CAMPING`}</p>
        <p className="tour">TOUR</p>
      </div>
      <img className="path-15-icon1" alt="" src="/path-15.svg" />
      <button className="mask-group-child" onClick={onGroupButtonClick}>
        <div className="view-this-trip-container">
          <div className="view-this-trip1">VIEW THIS TRIP</div>
        </div>
      </button>
      <div className="div1">$400</div>
      <div className="per-person1">
        <span>PER</span>
        <span className="span1">{` `}</span>
        <span>PERSON</span>
      </div>
    </div>
  );
};

export default MaskGroup1;
