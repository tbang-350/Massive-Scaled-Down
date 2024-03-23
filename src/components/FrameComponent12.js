import { useMemo } from "react";
import "./FrameComponent12.css";

const FrameComponent12 = ({
  groundTransportation,
  inRobust4x4SafariJeep,
  propPadding,
  propGap,
  propAlignSelf,
  propTextTransform,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propGap, propAlignSelf]);

  const groundTransportationInContainer1Style = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  return (
    <div className="frame-parent52" style={frameDiv2Style}>
      <img
        className="frame-child63"
        loading="lazy"
        alt=""
        src="/group-14.svg"
      />
      <div className="ground-transportation-in-rob-container">
        <b
          className="ground-transportation-in-container1"
          style={groundTransportationInContainer1Style}
        >
          <p className="ground-transportation1">{groundTransportation}</p>
          <p className="in-robust1">{inRobust4x4SafariJeep}</p>
        </b>
      </div>
    </div>
  );
};

export default FrameComponent12;
