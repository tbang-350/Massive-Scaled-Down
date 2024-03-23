import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent9 from "../components/FrameComponent9";
import "./Day2.css";

const Day2 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <div className="day2">
      <img className="path-20-icon2" alt="" src="/path-20.svg" />
      <div className="v-e-c-t-o-r-path">
        <div className="frame-container">
          <div className="frame-div">
            <div className="back-parent" onClick={onGroupContainerClick}>
              <img
                className="back-icon"
                loading="lazy"
                alt=""
                src="/back@2x.png"
              />
              <h2 className="back">Back</h2>
            </div>
            <div className="day-serengeti-camping-tour-wrapper">
              <h1 className="day-serengeti-camping">4-Day Lodge Safari</h1>
            </div>
          </div>
          <div className="exclusive-container">
            <div className="embark-on-an-container">
              <p className="immerse-yourself-in">
                Immerse yourself in the wonders of Tanzania's “northern circuit”
                with this compact 4-day Lodge Safari , exploring Lake Manyara
                National Park, the Ngorongoro Crater, and Serengeti National
                Park. Ideal for those with limited time, this safari promises a
                diverse range of landscapes and abundant wildlife.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent9 />
      <div className="three-day-adventure">
        <div className="itinerary-parent">
          <h1 className="itinerary">ITINERARY</h1>
          <h3 className="day-11">Day 1: Arusha to Lake Manyara</h3>
          <h3 className="day-2">
            Day 2: Lake Manyara to Serengeti National Park
          </h3>
          <h3 className="day-31">
            Day 3: Serengeti National Park to Ngorongoro Conservation Area
          </h3>
          <h3 className="day-32">
            Day 4: Ngorongoro Conservation Area to Arusha
          </h3>
        </div>
      </div>
      <section className="day-one-parent">
        <div className="day-one">
          <h1 className="day-12">Day 1: Arusha to Lake Manyara</h1>
        </div>
        <img
          className="frame-child2"
          loading="lazy"
          alt=""
          src="/group-110@2x.png"
        />
      </section>
      <section className="day-two">
        <div className="frame-parent1">
          <div className="frame-wrapper1">
            <div className="rectangle-parent2">
              <div className="frame-child3" />
              <div className="start-your-adventure">
                Start your adventure with a morning briefing, then journey to
                Lake Manyara National Park. Marvel at the alkaline Lake Manyara
                adorned with vibrant flamingos and encounter diverse wildlife,
                including monkeys, giraffes, and elephants. Look out for the
                elusive Manyara lions in trees. In the late afternoon, head to
                the Kirurumu Manyara Lodge for overnight accommodation.
              </div>
            </div>
          </div>
          <h1 className="day-21">
            Day 2: Lake Manyara to Serengeti National Park
          </h1>
        </div>
      </section>
      <section className="day-child">
        <img
          className="frame-child4"
          loading="lazy"
          alt=""
          src="/group-109@2x.png"
        />
      </section>
      <section className="frame-section">
        <div className="frame-parent2">
          <div className="rectangle-parent3">
            <div className="frame-child5" />
            <div className="prepare-for-a2">
              After breakfast, traverse the lush crater highlands, passing the
              Ngorongoro Crater en route to Serengeti National Park. Experience
              the park's varied habitats and landscapes, from plains and
              savannahs to dense bush and wetlands. Witness the unique rock
              formations called Kopjes, often serving as prime hunting grounds
              for predators. Depending on the season, witness the spectacular
              animal migration. Overnight at Kati Kati Tented Camp.
            </div>
          </div>
          <div className="crater-days">
            <h1 className="day-3-container">
              <p className="day-3-serengeti">{`Day 3: Serengeti National Park to `}</p>
              <p className="ngorongoro-conservation-area">
                Ngorongoro Conservation Area
              </p>
            </h1>
          </div>
        </div>
      </section>
      <section className="day-inner1">
        <img
          className="frame-child6"
          loading="lazy"
          alt=""
          src="/group-109@2x.png"
        />
      </section>
      <section className="full-day-expedition-wrapper">
        <div className="full-day-expedition">
          <div className="full-day-expedition-inner">
            <div className="rectangle-parent4">
              <div className="frame-child7" />
              <div className="set-off-on1">
                Early morning game drives in Serengeti offer encounters with
                wildebeests, zebras, and predators like lions, leopards, and
                cheetahs. After a picnic lunch, journey to the majestic
                Ngorongoro Crater for breathtaking views from the rim.
                Accommodate at Ang’ata Ngorongoro Camp on the crater's rim.
              </div>
            </div>
          </div>
          <h1 className="day-33">
            Day 4: Ngorongoro Conservation Area to Arusha
          </h1>
        </div>
      </section>
      <section className="day-inner2">
        <img
          className="frame-child8"
          loading="lazy"
          alt=""
          src="/group-109@2x.png"
        />
      </section>
      <section className="full-day-exploration">
        <div className="rectangle-parent5">
          <div className="frame-child9" />
          <div className="set-off-on2">
            Commence the day with an early breakfast before descending into the
            Ngorongoro Crater for an unforgettable wildlife observation. Spot
            the Big Five and a variety of other animals amidst stunning savannah
            terrain. Conclude the morning with a picnic lunch before departing
            for Arusha in the early afternoon, arriving in the evening to wrap
            up an extraordinary safari experience.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Day2;
