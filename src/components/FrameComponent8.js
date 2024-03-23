import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent8.css";

const FrameComponent8 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <div className="day-inner20">
      <header className="frame-header">
        <div className="back-parent2" onClick={onGroupContainerClick}>
          <img
            className="back-icon4"
            loading="lazy"
            alt=""
            src="/back@2x.png"
          />
          <h2 className="back4">Back</h2>
        </div>
        <div className="frame-wrapper4">
          <div className="day-serengeti-camping-tour-parent">
            <h1 className="day-serengeti-camping-container1">
              <p className="day-lake-manyara">{`2 - Day Lake Manyara & `}</p>
              <p className="ngorongoro-camping-tour">NgoroNgoro Camping Tour</p>
            </h1>
            <div className="embark-on-an-container3">
              <p className="explore-the-wonders">
                Explore the wonders of Northern Tanzania with a safari that
                takes you to the iconic Ngorongoro Crater. This world-renowned
                destination offers a captivating wildlife experience, featuring
                the opportunity to interact with the Maasai tribe and witness
                the Big Five against a stunning backdrop.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent8;
