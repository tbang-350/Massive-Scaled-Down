import JourneyToNationalParkPanel from "./JourneyToNationalParkPanel";
import FrameComponent12 from "./FrameComponent12";
import AirportTransfer from "./AirportTransfer";
import "./FrameComponent15.css";

const FrameComponent15 = () => {
  return (
    <section className="day-inner22">
      <div className="path-20-group">
        <img className="path-20-icon6" alt="" src="/path-20.svg" />
        <div className="container4">
          <div className="frame-parent58">
            <div className="frame-child67" />
            <JourneyToNationalParkPanel />
            <div className="frame-parent59">
              <div className="included-wrapper2">
                <h3 className="included4">INCLUDED</h3>
              </div>
              <div className="frame-parent60">
                <div className="frame-parent61">
                  <div className="frame-parent62">
                    <img
                      className="frame-child68"
                      loading="lazy"
                      alt=""
                      src="/group-13.svg"
                    />
                    <div className="accommodation-wrapper1">
                      <b className="accommodation4">Accommodation</b>
                    </div>
                  </div>
                  <FrameComponent12
                    groundTransportation="Ground Transportation "
                    inRobust4x4SafariJeep="In  robust 4x4 Safari Jeep"
                    propPadding="0rem var(--padding-9xs) 0rem 0rem"
                    propGap="25px"
                    propAlignSelf="unset"
                    propTextTransform="unset"
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
                <div className="wildlife-tour-map">
                  <AirportTransfer propPadding="0rem 0rem 0rem 0rem" />
                  <div className="arusha-to-serengeti1">
                    <img
                      className="arusha-to-serengeti-child"
                      alt=""
                      src="/group-13.svg"
                    />
                    <div className="round-trip-airport-transfer-container">
                      <b className="round-trip-airport-transfer4">
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
      </div>
    </section>
  );
};

export default FrameComponent15;
