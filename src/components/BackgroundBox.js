import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import "./BackgroundBox.css";

const BackgroundBox = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <section className="background-box">
      <div className="background-box-inner">
        <div className="frame-parent21">
          <div className="back-parent1" onClick={onGroupContainerClick}>
            <img
              className="back-icon3"
              loading="lazy"
              alt=""
              src="/back@2x.png"
            />
            <h2 className="back3">Back</h2>
          </div>
          <div className="day-serengeti-camping-tour-frame">
            <h1 className="day-serengeti-camping-container">
              <p className="day-serengeti">{`3 - DAY SERENGETI `}</p>
              <p className="camping-tour">CAMPING TOUR</p>
            </h1>
          </div>
        </div>
      </div>
      <div className="background-box-child">
        <div className="frame-parent22">
          <div className="embark-on-an-exclusive-private-parent">
            <div className="embark-on-an-container2">
              <p className="embark-on-an">
                Embark on an exclusive private safari adventure starting and
                ending in Arusha, with flexible departure times. Enjoy a
                seamless, fully serviced journey suitable for all ages. Special
                discounts are available for children (0-12) and larger families
                in triple or quad rooms.
              </p>
            </div>
            <div className="container-wrapper">
              <div className="container">
                <div className="frame-parent23">
                  <div className="frame-child48" />
                  <FrameComponent5 />
                  <div className="frame-parent24">
                    <div className="included-wrapper">
                      <h3 className="included">INCLUDED</h3>
                    </div>
                    <div className="frame-parent25">
                      <div className="frame-parent26">
                        <div className="frame-parent27">
                          <img
                            className="frame-child49"
                            loading="lazy"
                            alt=""
                            src="/group-13.svg"
                          />
                          <div className="accommodation-wrapper">
                            <b className="accommodation">Accommodation</b>
                          </div>
                        </div>
                        <FrameComponent4
                          groundTransportation="Ground Transportation "
                          inRobust4x4SafariJeep="In  robust 4x4 Safari Jeep"
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
                      <div className="frame-parent28">
                        <FrameComponent3 />
                        <div className="frame-parent29">
                          <img
                            className="frame-child50"
                            loading="lazy"
                            alt=""
                            src="/group-13.svg"
                          />
                          <div className="airport-transfer">
                            <b className="round-trip-airport-transfer">
                              Round-trip Airport transfer
                            </b>
                          </div>
                        </div>
                        <FrameComponent4
                          groundTransportation="Full coverage of National park"
                          inRobust4x4SafariJeep="fees."
                          propPadding="unset"
                          propGap="35px"
                          propAlignSelf="unset"
                          propTextTransform="capitalize"
                        />
                        <FrameComponent4
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
          <div className="itinerary-summary">
            <h1 className="itinerary2">ITINERARY</h1>
            <div className="day-15">
              Day 1: Arusha to Serengeti National Park
            </div>
            <div className="day-24">Day 2: Serengeti National Park</div>
            <div className="day-314">Day 3: Ngorongoro Crater</div>
          </div>
          <div className="day-1-arusha-to-serengeti-na-frame">
            <h1 className="day-16">{`DAY 1 : Arusha to Serengeti National Park `}</h1>
          </div>
        </div>
      </div>
      <img
        className="background-box-item"
        loading="lazy"
        alt=""
        src="/group-111@2x.png"
      />
    </section>
  );
};

export default BackgroundBox;
