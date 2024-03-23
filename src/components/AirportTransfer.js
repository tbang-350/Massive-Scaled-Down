import { useMemo } from "react";
import "./AirportTransfer.css";

const AirportTransfer = ({ propPadding }) => {
  const airportTransferStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="airport-transfer1" style={airportTransferStyle}>
      <img className="airport-transfer-child" alt="" src="/group-13.svg" />
      <div className="wildlife-expedition">
        <b className="all-meals-included-container1">
          <p className="all-meals-included1">{`All Meals Included (Breakfast, `}</p>
          <p className="lunch-dinner1">{`Lunch & Dinner) Complimentary `}</p>
          <p className="mineral-water2">
            <span className="mineral-water3">Mineral water</span>.
          </p>
        </b>
      </div>
    </div>
  );
};

export default AirportTransfer;
