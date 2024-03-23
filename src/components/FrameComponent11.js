import JourneyToNationalParkPanel from "./JourneyToNationalParkPanel";
import FrameComponent12 from "./FrameComponent12";
import AirportTransfer from "./AirportTransfer";
import "./FrameComponent11.css";

const FrameComponent11 = () => {
  return (
    <section className="container-wrapper1">
      <div className="container3">
        <div className="frame-parent53">
          <div className="frame-child64" />
          <JourneyToNationalParkPanel />
          <div className="frame-parent54">
            <div className="included-wrapper1">
              <h3 className="included3">INCLUDED</h3>
            </div>
            <div className="begin-your-expedition-panel-parent">
              <div className="begin-your-expedition-panel">
                <div className="frame-parent55">
                  <img
                    className="frame-child65"
                    loading="lazy"
                    alt=""
                    src="/group-13.svg"
                  />
                  <div className="wildlife-encounters-panel">
                    <b className="accommodation3">Accommodation</b>
                  </div>
                </div>
                <FrameComponent12
                  groundTransportation="Ground Transportation "
                  inRobust4x4SafariJeep="In  robust 4x4 Safari Jeep"
                />
                <FrameComponent12
                  groundTransportation="Knowledgeable and Fluent"
                  inRobust4x4SafariJeep="English-speaking guide."
                  propPadding="0rem var(--padding-8xs) 0rem 0rem"
                  propGap="25px"
                  propAlignSelf="unset"
                  propTextTransform="capitalize"
                />
                <FrameComponent12
                  groundTransportation="Professional, English-speaking "
                  inRobust4x4SafariJeep="safari cook."
                  propPadding="0rem var(--padding-9xs) 0rem 0rem"
                  propGap="25px"
                  propAlignSelf="unset"
                  propTextTransform="capitalize"
                />
              </div>
              <div className="day-tour-info">
                <AirportTransfer />
                <div className="arusha-to-ngorongoro">
                  <img
                    className="arusha-to-ngorongoro-child"
                    alt=""
                    src="/group-13.svg"
                  />
                  <div className="third-day-at-ngorongoro">
                    <b className="round-trip-airport-transfer3">
                      Round-trip Airport transfer
                    </b>
                  </div>
                </div>
                <FrameComponent12
                  groundTransportation="Full coverage of National park"
                  inRobust4x4SafariJeep="fees."
                  propPadding="0rem 0rem 0rem 0rem"
                  propGap="35px"
                  propAlignSelf="unset"
                  propTextTransform="capitalize"
                />
                <FrameComponent12
                  groundTransportation="Camping equipment (tents, "
                  inRobust4x4SafariJeep="sleeping mats,chairs, tables etc.)"
                  propPadding="0rem 0rem 0rem 0rem"
                  propGap="39px"
                  propAlignSelf="stretch"
                  propTextTransform="capitalize"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
