import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import "./Day1.css";

const Day1 = () => {
  return (
    <div className="day1">
      <img className="path-20-icon1" alt="" src="/path-20.svg" />
      <FrameComponent8 />
      <FrameComponent7 />
      <div className="adventure-days">
        <h1 className="day-1">{`DAY 1 : Lake Manyara National Park  `}</h1>
      </div>
      <FrameComponent6 />
      <main className="frame-group">
        <img className="group-icon" alt="" src="/group-109@2x.png" />
        <section className="frame-wrapper">
          <div className="rectangle-parent1">
            <div className="frame-child1" />
            <div className="prepare-for-a1">
              After breakfast, embark on a full-day game drive in the Ngorongoro
              Crater, equipped with picnic lunch boxes. Witness the incredible
              annual migration of wildebeest, zebras, and gazelles in this
              world's largest caldera. Discover the area's wildlife
              significance, including threatened species, and its role in human
              evolution, with early hominid footprints datingback 3.6 million
              years. In the afternoon, return to Arusha, concluding your
              unforgettable safari filled with breathtaking wildlife and
              geological marvels.
            </div>
          </div>
        </section>
      </main>
      <img className="path-24-icon" alt="" src="/path-24.svg" />
    </div>
  );
};

export default Day1;
