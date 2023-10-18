import React, { useEffect } from "react";
import Hero from "../components/Hero";
import CarList from "../components/CarList";
import HomeContactSection from "../components/HomeContactSection";

export default function Home() {
  const fetchCarsData = async () => {
    const url = "https://car-data.p.rapidapi.com/cars?limit=10&page=0";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4baf87a271msh53b8f75b8c3bb8ep1dbb49jsnddffa55d6b58",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOtherCars = async () => {
    const url = "https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4baf87a271msh53b8f75b8c3bb8ep1dbb49jsnddffa55d6b58",
        "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOtherCars();
  }, []);
  return (
    <div>
      <Hero />
      <CarList />
      <HomeContactSection />
    </div>
  );
}
