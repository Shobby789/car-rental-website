import "../styles/CarList.css";
import { cars, carType } from "../data/cars";
import { useNavigate } from "react-router-dom";

export default function CarList() {
  const navigate = useNavigate();
  return (
    <>
      <div className="cars-list">
        <h1>First Class Car Rental & Limousine Services</h1>
        <h5>
          We offer professional car rental & limousine services in our range of
          high-end vehicles
        </h5>

        <div className="car-list-container">
          {cars.map((car) => {
            return (
              <div className="car-card" id={car.id} key={car.id}>
                <img src={car.image} alt="" className="card-image" />
                <div className="overlay">{car.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="find-car-list">
        <h1>Find Car by Type</h1>
        <h5>
          We offer professional car rental & limousine services in our range of
          high-end vehicles
        </h5>

        <div className="card-type-container">
          {carType.map((car) => {
            return (
              <div
                className="car-card"
                id={car.id}
                key={car.id}
                onClick={() => navigate(`/${car.name}`)}
              >
                <img src={car.image} alt="" className="card-image" />
                <div className="overlay">{car.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
