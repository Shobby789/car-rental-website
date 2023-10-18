import "../styles/CarDetailsCard.css";
import { AiOutlineStar } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { PiBagLight } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";

export default function CarDetailsCard({
  carImg,
  carName,
  carRate,
  seats,
  gear,
  luggage,
}) {
  return (
    <div className="CarDetailsCard">
      <img src={carImg} alt="" className="card-details-image" />
      <div className="car-details-text">
        <h3>{carName}</h3>
        <h3 className="price">
          ${carRate} <span>Per Day</span>
        </h3>
        <p className="rating">
          <span className="rating-icon">
            <AiOutlineStar />
          </span>
          <span className="rating-icon">
            <AiOutlineStar />
          </span>
          <span className="rating-icon">
            <AiOutlineStar />
          </span>
          <span className="rating-icon">
            <AiOutlineStar />
          </span>
          <span className="rating-icon">
            <AiOutlineStar />
          </span>
          <span className="reviews">4 reviews</span>
        </p>
        <p className="info-icons">
          <span className="info-icon">
            <MdPersonOutline />
          </span>
          <span className="info-icon">
            <PiBagLight />
          </span>
          <span className="info-icon">
            <VscSettings />
          </span>
        </p>
        <p className="info">
          <span>{seats}</span>
          <span>{luggage}</span>
          <span>{gear}</span>
        </p>
      </div>
    </div>
  );
}
