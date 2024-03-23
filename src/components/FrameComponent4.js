import { useMemo } from "react";
import "./FrameComponent4.css";

const FrameComponent4 = ({
  groundTransportation,
  inRobust4x4SafariJeep,
  propPadding,
  propGap,
  propAlignSelf,
  propTextTransform,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propGap, propAlignSelf]);

  const groundTransportationInContainerStyle = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  return (
    <div className="frame-parent19" style={frameDivStyle}>
      <img
        className="frame-child46"
        loading="lazy"
        alt=""
        src="/group-14.svg"
      />
      <div className="ground-transportation-in-rob-wrapper">
        <b
          className="ground-transportation-in-container"
          style={groundTransportationInContainerStyle}
        >
          <p className="ground-transportation">{groundTransportation}</p>
          <p className="in-robust">{inRobust4x4SafariJeep}</p>
        </b>
      </div>
    </div>
  );
};

export default FrameComponent4;
