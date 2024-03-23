import BackgroundBox from "../components/BackgroundBox";
import FrameComponent2 from "../components/FrameComponent2";
import "./Day.css";

const Day = () => {
  return (
    <div className="day">
      <img className="path-20-icon" alt="" src="/path-20.svg" />
      <BackgroundBox />
      <FrameComponent2 />
      <section className="day-inner">
        <div className="frame-parent">
          <div className="rectangle-container">
            <div className="frame-inner" />
            <div className="prepare-for-a">
              Prepare for a full-day wildlife exploration in the iconic
              Serengeti. As Tanzania’s ancient and UNESCO World Heritage Site,
              the Serengeti offers year-round wildlife encounters, with the
              annual wildebeest migration being a highlight. Spend the night at
              Serengeti National Park’s full-service campsites, fully immersed
              in the extraordinary landscape.
            </div>
          </div>
          <div className="day-3-ngorongoro-crater-wrapper">
            <h1 className="day-3">DAY 3 : NGORONGORO CRATER</h1>
          </div>
        </div>
      </section>
      <section className="additional-features">
        <img
          className="additional-features-child"
          loading="lazy"
          alt=""
          src="/group-118@2x.png"
        />
      </section>
      <section className="full-day-wildlife-tour">
        <div className="group-div">
          <div className="rectangle-div" />
          <div className="set-off-on">
            Set off on a full-day wildlife expedition in the awe-inspiring
            Ngorongoro Crater, a UNESCO World Heritage site. Experience the
            harmonious coexistence of humans and wild animals in this natural
            wonder. In the late afternoon, journey back to Arusha, concluding
            your remarkable safari adventure filled with extraordinary
            encounters and the unique beauty of the Ngorongoro Crater.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Day;
