import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <section className="mask-group-17-group">
      <img className="mask-group-171" alt="" src="/mask-group-17-1@2x.png" />
      <div className="rectangle-parent19">
        <div className="frame-child37" />
        <h3 className="your-gateway-to1">WHAT ADVENTURES AWAIT?</h3>
        <div className="discover-more-with-isles-sav-wrapper">
          <div className="discover-more-with-container1">
            <p className="picture-this-elephants">
              Picture this: elephants casually munching on acacia trees right
              outside your tent,the rumble of gentle waves in the distance –
              just another day that makes you say Hakuna Matata.
            </p>
            <p className="our-safaris-arent">{`Our safaris aren't your average sightseeing tours; they're up-close encounters with iconic wildlife and breathtaking  andmarks! Get ready for game drives that take you through Serengeti National Park, the Ngorongoro Crater, and other world-famous wildlife reserves. Fancy tracking chimpanzees? We've got you covered in Gombe Stream National Park. How about a walking safari in Tarangire National Park? Join us on our 7 day tour of the Park. `}</p>
            <p className="for-those-seeking">
              For those seeking a more relaxed getaway, explore our beach
              packages to the enchanting islands of Zanzibar and Pemba.Dive into
              crystal-clear waters, snorkel amidst vibrant coral reefs, and soak
              up the sun on pristine beaches. Discover the rich culture of these
              islands as you unwind in paradise. Whether you're craving
              thrilling safaris or serene beach retreats, our diverse offerings
              ensure an unforgettable experience.
            </p>
          </div>
        </div>
      </div>
      <div className="rectangle-parent20">
        <div className="frame-child38" />
        <h1 className="request-a-travel">Request a Travel Quote</h1>
        <div className="frame-wrapper3">
          <button className="group-button" onClick={onGroupButtonClick}>
            <div className="frame-child39" />
            <div className="travel-quote">Travel quote</div>
          </button>
        </div>
      </div>
      <img
        className="component-4-1"
        loading="lazy"
        alt=""
        src="/component-4--1@2x.png"
      />
    </section>
  );
};

export default FrameComponent;
