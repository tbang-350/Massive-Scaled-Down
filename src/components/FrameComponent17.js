import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import JourneyToNationalParkPanel from "./JourneyToNationalParkPanel";
import FrameComponent12 from "./FrameComponent12";
import AirportTransfer from "./AirportTransfer";
import "./FrameComponent17.css";

const FrameComponent17 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <section className="safariblue-inner1">
      <div className="exclusive-safari-parent">
        <div className="exclusive-safari">
          <div className="back-parent4" onClick={onGroupContainerClick}>
            <img
              className="back-icon6"
              loading="lazy"
              alt=""
              src="/back@2x.png"
            />
            <h2 className="back6">Back</h2>
          </div>
          <div className="embark-button">
            <h1 className="day-serengeti-camping2">Safari Blue</h1>
          </div>
          <div className="gratuities-tips2">
            <div className="embark-on-an-container4">
              <p className="take-it-easy">
                Take it easy in this blue paradise on a Full day excursion
                Explore the stunning coastal attractions of Zanzibar with Safari
                Blue, a renowned full-day boat trip that immerses you in the
                natural beauty of the Indian Ocean. From snorkeling and dolphin
                watching to relaxing on pristine sandbanks, this excursion
                offers a memorable experience for adventure seekers.
              </p>
            </div>
          </div>
        </div>
        <div className="container-wrapper2">
          <div className="container5">
            <div className="international-flights">
              <div className="included-label" />
              <JourneyToNationalParkPanel />
              <div className="ngorongoro-crater">
                <div className="full-day-expedition1">
                  <h3 className="included5">INCLUDED</h3>
                </div>
                <div className="frame-parent67">
                  <div className="frame-parent68">
                    <div className="frame-parent69">
                      <img
                        className="frame-child72"
                        loading="lazy"
                        alt=""
                        src="/group-13.svg"
                      />
                      <div className="accommodation-wrapper2">
                        <b className="accommodation5">Accommodation</b>
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
                  <div className="frame-parent70">
                    <AirportTransfer propPadding="unset" />
                    <div className="itinerary-summary1">
                      <img
                        className="itinerary-summary-child"
                        loading="lazy"
                        alt=""
                        src="/group-13.svg"
                      />
                      <div className="round-trip-airport-transfer-frame">
                        <b className="round-trip-airport-transfer5">
                          Round-trip Airport transfer
                        </b>
                      </div>
                    </div>
                    <FrameComponent12
                      groundTransportation="Full coverage of National park"
                      inRobust4x4SafariJeep="fees."
                      propPadding="unset"
                      propGap="35px"
                      propAlignSelf="unset"
                      propTextTransform="capitalize"
                    />
                    <FrameComponent12
                      groundTransportation="Camping equipment (tents, "
                      inRobust4x4SafariJeep="sleeping mats,chairs, tables etc.)"
                      propPadding="unset"
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
      </div>
    </section>
  );
};

export default FrameComponent17;
