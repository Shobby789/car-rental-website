import { carsForBooking } from "../data/cars";
import "../styles/CarsShowcase.css";
import CarDetailsCard from "./CarDetailsCard";

export default function CarsShowcase() {
  return (
    <div className="cars-showcase">
      <div className="list-row">
        {carsForBooking?.map((car) => {
          return (
            <CarDetailsCard
              key={car.id}
              id={car.id}
              carName={car.name}
              carImg={car.image}
              seats={car.seats}
              gear={car.gearType}
              luggage={car.luggage}
              carRate={car.ratePerDay}
            />
          );
        })}
      </div>
    </div>
  );
}
