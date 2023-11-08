import { useParams } from "react-router-dom";
import { carsByType } from "../data/cars";
import CarDetailsCard from "./CarDetailsCard";

export default function CarTypeList() {
  const params = useParams();
  const carTypes = carsByType.filter((car) => {
    if (params.type === car.type) {
      return car;
    }
  });

  console.log("carTypes >> ", params.type);
  console.log("testCars arr >> ", carTypes);

  return (
    <div className="cars-showcase">
      <div className="list-row">
        {carTypes.length > 0 ? (
          <>
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
          </>
        ) : (
          <h3>No Cars of this Type</h3>
        )}
      </div>
    </div>
  );
}
