import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import "./Day3.css";

const Day = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/packagespage");
  }, [navigate]);

  return (
    <div className="day3">
      <img className="path-21-icon" alt="" src="/path-20.svg" />
      <section className="day-inner3">
        <div className="arusha-to-serengeti-travel-parent">
          <div className="arusha-to-serengeti-travel">
            <div className="back-group" onClick={onGroupContainerClick}>
              <img
                className="back-icon1"
                loading="lazy"
                alt=""
                src="/back@2x.png"
              />
              <h2 className="back1">Back</h2>
            </div>
            <div className="day-serengeti-camping-tour-container">
              <h1 className="day-serengeti-camping1">6-Day Camp Safari</h1>
            </div>
          </div>
          <div className="embark-on-an-exclusive-private-wrapper">
            <div className="embark-on-an-container1">
              <p className="experience-the-best">
                Experience the best of Tanzania's nature reserves on this
                meticulously crafted 6-day camping safari.Book your journey now
                for an unparalleled wildlife adventure! From the expansive
                plains of the Serengeti National Park to the wonders of the
                NgorongoroConservation Area, your journey will also take you
                through the Tarangire and Lake Manyara National Parks, immersing
                you in diverse landscapes and abundant wildlife.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent11 />
      <div className="return-to-arusha">
        <div className="itinerary-group">
          <h1 className="itinerary1">ITINERARY</h1>
          <div className="day-1-arusha-to-serengeti-na-wrapper">
            <h3 className="day-13">Day 1: Arusha to Tarangire National Park</h3>
          </div>
          <div className="day-2-serengeti-national-par-wrapper">
            <h3 className="day-22">
              Day 2: Tarangire National Park to Lake Manyara National Park
            </h3>
          </div>
          <div className="day-3-ngorongoro-crater-parent">
            <h3 className="day-34">
              Day 3: Lake Manyara to Serengeti National Park
            </h3>
            <h3 className="day-35">Day 4: Serengeti National Park</h3>
            <h3 className="day-36">
              Day 5: Serengeti National Park to Ngorongoro Conservation Area
            </h3>
            <h3 className="day-37">
              Day 6: Ngorongoro Conservation Area to Arusha
            </h3>
          </div>
        </div>
      </div>
      <div className="day-1-arusha-to-serengeti-na-container">
        <h1 className="day-14">Day 1: Arusha to Tarangire National Park</h1>
      </div>
      <section className="day-inner4">
        <img
          className="frame-child10"
          loading="lazy"
          alt=""
          src="/group-1111@2x.png"
        />
      </section>
      <section className="day-inner5">
        <div className="day-in-serengeti-national-park-parent">
          <div className="day-in-serengeti-national-park">
            <div className="rectangle-parent6">
              <div className="frame-child11" />
              <div className="start-your-adventure1">
                Begin your safari with a morning journey to the Tarangire
                National Park, a vast wilderness spanning 2,600km². Marvel at
                the diverse landscape, including savannah, seasonal swamps, and
                iconic baobab trees. Encounter a variety of wildlife, with
                Tarangire being renowned for its awe-inspiring elephant herds.
                Spend the night in comfortable tents within the park, surrounded
                by the enchanting wilderness.
              </div>
            </div>
          </div>
          <h1 className="day-2-container">
            <p className="day-2-tarangire">
              Day 2: Tarangire National Park to Lake Manyara
            </p>
            <p className="national-park"> National Park</p>
          </h1>
        </div>
      </section>
      <section className="day-inner6">
        <img
          className="frame-child12"
          loading="lazy"
          alt=""
          src="/group-109@2x.png"
        />
      </section>
      <section className="day-inner7">
        <div className="frame-parent3">
          <div className="frame-wrapper2">
            <div className="rectangle-parent7">
              <div className="frame-child13" />
              <div className="prepare-for-a3">
                After breakfast, head to Lake Manyara National Park, known for
                its impressive birdlife and enchanting primate-inhabited
                forests. Explore the park's grassy plains and encounter a
                tapestry of wildlife. In the afternoon, set up camp in the
                culturally diverse village of Mto wa Mbu near Lake Manyara,
                offering opportunities to relax by the pool or enjoy a
                refreshing drink at the bar
              </div>
            </div>
          </div>
          <h1 className="day-38">
            Day 3: Lake Manyara to Serengeti National Park
          </h1>
        </div>
      </section>
      <section className="day-inner8">
        <img
          className="frame-child14"
          loading="lazy"
          alt=""
          src="/group-109@2x.png"
        />
      </section>
      <section className="day-inner9">
        <div className="frame-parent4">
          <div className="rectangle-parent8">
            <div className="frame-child15" />
            <div className="set-off-on3">
              Travel through the Ngorongoro Conservation Area, pausing to marvel
              at the Ngorongoro Crater. Reach the renowned Serengeti National
              Park, where "endless plains" come to life. Witness the vast
              grassland savannah, iconic kopjes, and the incredible wildebeest
              migration. Spend the night in the central Serengeti, surrounded by
              the harmonious sounds of the African bush.
            </div>
          </div>
          <div className="day-3-ngorongoro-crater-container">
            <h1 className="day-39">Day 4: Serengeti National Park</h1>
          </div>
        </div>
      </section>
      <section className="day-inner10">
        <img
          className="frame-child16"
          loading="lazy"
          alt=""
          src="/group-109@2x.png"
        />
      </section>
      <section className="day-inner11">
        <div className="frame-parent5">
          <div className="rectangle-parent9">
            <div className="frame-child17" />
            <div className="set-off-on4">
              Dedicate the entire day to an exhilarating game drive in the heart
              of the Serengeti. Follow the movements of migrating herds and spot
              iconic wildlife, including wildebeests, zebras, lions, leopards,
              and cheetahs. Conclude the day at a campsite in the Seronera area,
              ensuring you stay close to the action.
            </div>
          </div>
          <h1 className="day-3-container1">
            <p className="day-5-serengeti">{`Day 5: Serengeti National Park to Ngorongoro `}</p>
            <p className="conservation-area">Conservation Area</p>
          </h1>
        </div>
      </section>
      <section className="day-inner12">
        <img
          className="frame-child18"
          loading="lazy"
          alt=""
          src="/group-109@2x.png"
        />
      </section>
      <section className="day-inner13">
        <div className="frame-parent6">
          <div className="rectangle-parent10">
            <div className="frame-child19" />
            <div className="set-off-on5">
              Embark on another thrilling game drive in the Serengeti,
              encountering the revered Big Five. After a scenic picnic lunch,
              head to the magnificent Ngorongoro Crater, where you'll spend the
              night at a campsite on the crater's rim, enjoying splendid views.
            </div>
          </div>
          <div className="day-3-ngorongoro-crater-frame">
            <h1 className="day-3-container2">
              <p className="day-6-ngorongoro">{`Day 6: Ngorongoro Conservation Area `}</p>
              <p className="to-arusha">to Arusha</p>
            </h1>
          </div>
        </div>
      </section>
      <FrameComponent10 setOffOnAFullDayWildlifeE="Embark on another thrilling game drive in the Serengeti, encountering the revered Big Five. After a scenic picnic lunch, head to the magnificent Ngorongoro Crater, where you'll spend the night at a campsite on the crater's rim, enjoying splendid views." />
    </div>
  );
};

export default Day;
