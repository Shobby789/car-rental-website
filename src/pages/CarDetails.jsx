import React from "react";
import { useParams } from "react-router-dom";

export default function CarDetails() {
  const params = useParams();
  return (
    <div>
      <h2>Car Details {params.id}</h2>
    </div>
  );
}
