import { useMemo } from "react";
import "./FrameComponent10.css";

const FrameComponent10 = ({
  setOffOnAFullDayWildlifeE,
  propGap,
  propPadding,
  propHeight,
  propWidth,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const setOffOnStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <section className="frame-parent56" style={frameSectionStyle}>
      <img
        className="frame-child66"
        loading="lazy"
        alt=""
        src="/group-109@2x.png"
      />
      <div className="second-parent">
        <div className="symbol-instance-parent" style={groupDivStyle}>
          <div className="symbol-instance" />
          <div className="set-off-on11" style={setOffOnStyle}>
            {setOffOnAFullDayWildlifeE}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent10;
