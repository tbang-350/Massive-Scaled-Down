import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent16.css";

const FrameComponent16 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <div className="frame-parent57">
      <div className="frame-wrapper5">
        <div className="back-parent3" onClick={onGroupContainerClick}>
          <img
            className="back-icon5"
            loading="lazy"
            alt=""
            src="/back@2x.png"
          />
          <h2 className="back5">Back</h2>
        </div>
      </div>
      <div className="day-serengeti-camping-tour-wrapper1">
        <h1 className="day-serengeti-camping-container2">
          <p className="day-materuni-tarangire">{`7-Day Materuni, Tarangire, `}</p>
          <p className="serengeti-lake">{`Serengeti & Lake Manyara`}</p>
        </h1>
      </div>
      <div className="embark-on-an-exclusive-private-container">
        <div className="embark-on-an1">
          Experience the best of Africa's wilderness on this captivating 7-day
          safari adventure. Your journey begins with a visit to the rejuvenating
          Kikuletwa Hot Springs and the picturesque Materuni Waterfalls.
          Following this, a 6-day safari adventure awaits you in a pop-up roof
          4x4 safari vehicle, traversing the breathtaking landscapes of
          Tarangire, Serengeti, Ngorongoro, and Lake Manyara.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent16;
