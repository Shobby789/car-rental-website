import { useParams } from "react-router-dom";
import { carsByType } from "../data/cars";
import CarDetailsCard from "./CarDetailsCard";

export default function CarTypeList() {
  const params = useParams();
  const carTypes = carsByType.map((car) => {
    if (car.type == params.name) {
      return car;
    }
  });
  console.log("carTypes >> ", carTypes);
  return (
    <div className="cars-showcase">
      <div className="list-row">
        {carTypes?.map((car) => {
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
