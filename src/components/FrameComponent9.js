import FrameComponent5 from "./FrameComponent5";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import "./FrameComponent9.css";

const FrameComponent9 = () => {
  return (
    <section className="container-frame">
      <div className="container2">
        <div className="frame-parent40">
          <div className="frame-child57" />
          <FrameComponent5 />
          <div className="frame-parent41">
            <div className="included-frame">
              <h3 className="included2">INCLUDED</h3>
            </div>
            <div className="frame-parent42">
              <div className="frame-parent43">
                <div className="frame-parent44">
                  <img
                    className="frame-child58"
                    loading="lazy"
                    alt=""
                    src="/group-13.svg"
                  />
                  <div className="accommodation-frame">
                    <b className="accommodation2">Accommodation</b>
                  </div>
                </div>
                <FrameComponent4
                  groundTransportation="Ground Transportation "
                  inRobust4x4SafariJeep="In  robust 4x4 Safari Jeep"
                  propPadding="0rem var(--padding-9xs) 0rem 0rem"
                  propGap="25px"
                  propAlignSelf="unset"
                  propTextTransform="unset"
                />
                <FrameComponent4
                  groundTransportation="Knowledgeable and Fluent"
                  inRobust4x4SafariJeep="English-speaking guide."
                  propPadding="0rem var(--padding-8xs) 0rem 0rem"
                  propGap="25px"
                  propAlignSelf="unset"
                  propTextTransform="capitalize"
                />
                <FrameComponent4
                  groundTransportation="Professional, English-speaking "
                  inRobust4x4SafariJeep="safari cook."
                  propPadding="0rem var(--padding-9xs) 0rem 0rem"
                  propGap="25px"
                  propAlignSelf="unset"
                  propTextTransform="capitalize"
                />
              </div>
              <div className="frame-parent45">
                <FrameComponent3 propPadding="0rem 0rem 0rem 0rem" />
                <div className="itinerary-overview">
                  <img
                    className="itinerary-overview-child"
                    alt=""
                    src="/group-13.svg"
                  />
                  <div className="round-trip-airport-transfer-wrapper">
                    <b className="round-trip-airport-transfer2">
                      Round-trip Airport transfer
                    </b>
                  </div>
                </div>
                <FrameComponent4
                  groundTransportation="Full coverage of National park"
                  inRobust4x4SafariJeep="fees."
                  propPadding="0rem 0rem 0rem 0rem"
                  propGap="35px"
                  propAlignSelf="unset"
                  propTextTransform="capitalize"
                />
                <FrameComponent4
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

export default FrameComponent9;
