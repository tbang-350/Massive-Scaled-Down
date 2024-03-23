import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({ propPadding }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="frame-parent20" style={frameDiv1Style}>
      <img
        className="frame-child47"
        loading="lazy"
        alt=""
        src="/group-13.svg"
      />
      <div className="all-meals-included-breakfast-wrapper">
        <b className="all-meals-included-container">
          <p className="all-meals-included">{`All Meals Included (Breakfast, `}</p>
          <p className="lunch-dinner">{`Lunch & Dinner) Complimentary `}</p>
          <p className="mineral-water">
            <span className="mineral-water1">Mineral water</span>.
          </p>
        </b>
      </div>
    </div>
  );
};

export default FrameComponent3;
