import "../styles/HomeContactSection.css";
import { BiCar } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export default function HomeContactSection() {
  return (
    <>
      <div className="HomeContactSection">
        <h2>Our Fleet, Your Fleet</h2>
        <h6>
          We know the difference is in the details and that’s why our car rental
          services, in the tourism and business industry, stand out for their
          quality and good taste, to offer you an unique experience
        </h6>
        <p>Call Now (54)-344-4533-4</p>
        <button className="call-btn">Request a Quote</button>
      </div>
      <div className="why-choose-us">
        <h1>Why Choose Us</h1>
        <h6>Explore our first class limousine & car rental services</h6>
        <div className="choose-us-container">
          <div className="choose-us-child">
            <BiCar className="icon" />
            <h3>Variety of Car Brands</h3>
            <p>
              Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
          <div className="choose-us-child">
            <BsEmojiSmile className="icon" />
            <h3>Best Rate Guarantee</h3>
            <p>
              Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
          <div className="choose-us-child">
            <AiOutlineHeart className="icon" />
            <h3>Awesome Customer Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
